import { readFileSync, writeFileSync } from 'node:fs'
import { inflateSync, inflateRawSync } from 'node:zlib'

const src = process.argv[2]
const out = process.argv[3]
const buf = readFileSync(src)

// Reúne los content streams del PDF, descomprimiéndolos cuando vienen en Flate.
const streams = []
let i = 0
while (true) {
  const s = buf.indexOf('stream', i)
  if (s === -1) break
  const dictStart = Math.max(0, s - 400)
  const dict = buf.slice(dictStart, s).toString('latin1')
  let p = s + 6
  if (buf[p] === 0x0d) p++
  if (buf[p] === 0x0a) p++
  const e = buf.indexOf('endstream', p)
  if (e === -1) break
  let data = buf.slice(p, e)
  if (/FlateDecode/.test(dict)) {
    try {
      data = inflateSync(data)
    } catch {
      try {
        data = inflateRawSync(data)
      } catch {
        data = null
      }
    }
  } else if (!/\/Length/.test(dict)) {
    data = null
  }
  if (data) streams.push(data.toString('latin1'))
  i = e + 9
}

// Decodifica los literales de texto de los operadores Tj y TJ.
function unescapePdf(s) {
  return s.replace(/\\([nrtbf()\\]|[0-7]{1,3})/g, (m, g) => {
    const simple = { n: '\n', r: '\r', t: '\t', b: '\b', f: '\f', '(': '(', ')': ')', '\\': '\\' }
    if (simple[g] !== undefined) return simple[g]
    return String.fromCharCode(parseInt(g, 8))
  })
}

function textFromStream(s) {
  const lines = []
  let current = ''
  // Tokens: (texto) Tj  |  [ (a) -250 (b) ] TJ  |  TD/Td/T*/ET = salto
  const re = /\((?:\\.|[^\\()])*\)|<[0-9A-Fa-f\s]+>|\bTJ\b|\bTj\b|\bTd\b|\bTD\b|\bT\*\b|\bET\b|\bBT\b/g
  let m
  let pending = ''
  while ((m = re.exec(s))) {
    const t = m[0]
    if (t.startsWith('(')) {
      pending += unescapePdf(t.slice(1, -1))
    } else if (t.startsWith('<')) {
      const hex = t.slice(1, -1).replace(/\s/g, '')
      let str = ''
      for (let k = 0; k + 3 < hex.length; k += 4) str += String.fromCharCode(parseInt(hex.substr(k, 4), 16))
      pending += str
    } else if (t === 'Tj' || t === 'TJ') {
      current += pending
      pending = ''
    } else if (t === 'Td' || t === 'TD' || t === 'T*' || t === 'ET') {
      if (current.trim()) lines.push(current)
      current = ''
      pending = ''
    }
  }
  if (current.trim()) lines.push(current)
  return lines
}

const all = []
for (const s of streams) {
  if (!/\bTj\b|\bTJ\b/.test(s)) continue
  all.push(...textFromStream(s))
}

const texto = all.join('\n').replace(/\n{3,}/g, '\n\n')
writeFileSync(out, texto, 'utf8')
console.log(`${src} -> ${out}: ${streams.length} streams, ${all.length} líneas, ${texto.length} chars`)
