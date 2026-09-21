/**
 * Publica el sitio en GitHub Pages.
 *
 *   npm run publicar
 *
 * Compila con la ruta base del repositorio y sube el resultado a la rama
 * `gh-pages`, que GitHub Pages sirve como sitio. La rama solo contiene el
 * sitio compilado y se reemplaza entera en cada publicación.
 *
 * No usa GitHub Actions porque eso exige un permiso extra (`workflow`) en la
 * sesión de GitHub. Ver docs/04-handoff.md para pasar a publicación automática.
 */
import { execSync } from 'node:child_process'
import { existsSync, rmSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

const correr = (cmd, opciones = {}) => execSync(cmd, { stdio: 'inherit', ...opciones })
const leer = (cmd) => execSync(cmd).toString().trim()

const remoto = leer('git remote get-url origin')
const repo = remoto.replace(/\.git$/, '').split('/').pop()
const commit = leer('git rev-parse --short HEAD')
const nombre = leer('git config user.name')
const correo = leer('git config user.email')

if (leer('git status --porcelain')) {
  console.warn('Aviso: hay cambios sin guardar en git. Se publica lo que está en disco.\n')
}

console.log(`Compilando para /${repo}/ ...`)
correr('npm run build', { env: { ...process.env, BASE_PATH: `/${repo}/` } })

const dist = 'dist'
// Sin este archivo, GitHub Pages procesa el sitio con Jekyll y puede omitir archivos.
writeFileSync(join(dist, '.nojekyll'), '')
if (existsSync(join(dist, '.git'))) rmSync(join(dist, '.git'), { recursive: true, force: true })

// Si hay sesión de GitHub CLI se usa para autenticar solo este push, sin tocar
// la configuración global de git. Si no, git pide credenciales como siempre.
let credencial = ''
try {
  execSync('gh auth status', { stdio: 'ignore' })
  credencial = '-c credential.helper= -c "credential.helper=!gh auth git-credential"'
} catch {
  /* sin gh: se usa el administrador de credenciales habitual */
}

console.log('Subiendo a la rama gh-pages ...')
const identidad = `-c user.name="${nombre}" -c user.email="${correo}"`
correr('git init -q -b gh-pages', { cwd: dist })
correr('git add -A', { cwd: dist })
correr(`git ${identidad} commit -q -m "Publicar ${commit}"`, { cwd: dist })
correr(`git ${credencial} push -f -q "${remoto}" gh-pages`, { cwd: dist })
rmSync(join(dist, '.git'), { recursive: true, force: true })

const usuario = remoto.split('/').slice(-2, -1)[0].toLowerCase()
console.log(`\nListo. En uno o dos minutos queda en https://${usuario}.github.io/${repo}/`)
