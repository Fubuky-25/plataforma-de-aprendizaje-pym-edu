import type { Leccion, Nivel } from '../tipos'
import { nivel1 } from './nivel1'
import { nivel2 } from './nivel2'
import { nivel3 } from './nivel3'

/** El programa completo, en orden. Agregar un nivel es sumarlo a esta lista. */
export const niveles: Nivel[] = [nivel1, nivel2, nivel3]

/** Duración declarada en la portada de cada lección. */
export function duracionDe(leccion: Leccion): number {
  const portada = leccion.pantallas.find((p) => p.tipo === 'portada')
  return portada && portada.tipo === 'portada' ? portada.duracionMin : 0
}

/** Ubica una lección y su nivel a partir del id de la lección. */
export function ubicarLeccion(leccionId: string | null) {
  if (!leccionId) return null
  for (const nivel of niveles) {
    const indice = nivel.lecciones.findIndex((l) => l.id === leccionId)
    if (indice !== -1) {
      return {
        nivel,
        leccion: nivel.lecciones[indice],
        siguiente: nivel.lecciones[indice + 1] ?? null,
      }
    }
  }
  return null
}
