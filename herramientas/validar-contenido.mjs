/**
 * Revisa los datos de las lecciones antes de publicar.
 *
 *   npm run validar
 *
 * TypeScript ya verifica que cada pantalla tenga los campos correctos. Este
 * script revisa lo que TypeScript no puede ver: que cada pregunta tenga
 * exactamente una alternativa correcta, que un caso tenga tantas correctas como
 * pide marcar, que las comparaciones tengan una celda por criterio, etc.
 */
import { execSync } from 'node:child_process'
import { mkdtempSync, rmSync } from 'node:fs'
import { createRequire } from 'node:module'
import { tmpdir } from 'node:os'
import { join } from 'node:path'

const temporal = mkdtempSync(join(tmpdir(), 'pymedu-validar-'))

try {
  execSync(
    `npx tsc src/contenido/nivel1.ts --outDir "${temporal}" --module commonjs --target es2022 --skipLibCheck`,
    { stdio: 'inherit' },
  )
  const require = createRequire(import.meta.url)
  const { nivel1 } = require(join(temporal, 'contenido', 'nivel1.js'))

  const errores = []
  for (const l of nivel1.lecciones) {
    const ids = l.pantallas.map((p) => p.id)
    if (new Set(ids).size !== ids.length) errores.push(`${l.id}: hay ids de pantalla repetidos`)
    if (l.pantallas[0]?.tipo !== 'portada') errores.push(`${l.id}: no empieza con una portada`)
    if (l.pantallas.at(-1)?.tipo !== 'cierre') errores.push(`${l.id}: no termina con un cierre`)

    for (const p of l.pantallas) {
      const donde = `${l.id}/${p.id} (${p.tipo})`
      if (p.tipo === 'quiz') {
        for (const q of p.preguntas) {
          const correctas = q.opciones.filter((o) => o.correcta).length
          if (correctas !== 1) errores.push(`${donde} ${q.id}: tiene ${correctas} correctas, debe tener 1`)
        }
      }
      if (p.tipo === 'caso') {
        const correctas = p.opciones.filter((o) => o.correcta).length
        if (correctas !== p.elegir)
          errores.push(`${donde}: pide marcar ${p.elegir} pero hay ${correctas} correctas`)
      }
      if (p.tipo === 'emparejar') {
        const izq = p.pares.map((x) => x.izquierda)
        const der = p.pares.map((x) => x.derecha)
        if (new Set(izq).size !== izq.length || new Set(der).size !== der.length)
          errores.push(`${donde}: hay textos repetidos en una columna`)
      }
      if (p.tipo === 'comparacion') {
        for (const col of p.columnas) {
          if (col.celdas.length !== p.criterios.length)
            errores.push(`${donde} "${col.titulo}": ${col.celdas.length} celdas para ${p.criterios.length} criterios`)
        }
      }
    }
    console.log(`${l.modulo}: ${l.pantallas.length} pantallas`)
  }

  if (errores.length) {
    console.error(`\n${errores.length} problema(s):\n- ${errores.join('\n- ')}`)
    process.exitCode = 1
  } else {
    console.log('\nSin problemas en los datos.')
  }
} finally {
  rmSync(temporal, { recursive: true, force: true })
}
