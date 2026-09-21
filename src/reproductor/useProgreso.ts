import { useCallback, useEffect, useState } from 'react'
import type { Progreso } from '../tipos'

const VACIO: Progreso = { indiceActual: 0, resueltas: [], respuestas: {} }

const clave = (leccionId: string) => `pymedu:progreso:${leccionId}`

function leer(leccionId: string, totalPantallas: number): Progreso {
  try {
    const bruto = localStorage.getItem(clave(leccionId))
    if (!bruto) return VACIO
    const dato = JSON.parse(bruto) as Partial<Progreso>
    return {
      indiceActual: Math.min(Math.max(dato.indiceActual ?? 0, 0), totalPantallas - 1),
      resueltas: Array.isArray(dato.resueltas) ? dato.resueltas : [],
      respuestas:
        dato.respuestas && typeof dato.respuestas === 'object' ? dato.respuestas : {},
    }
  } catch {
    // Navegación privada o almacenamiento bloqueado: la lección funciona igual,
    // solo que no se recuerda al volver.
    return VACIO
  }
}

export interface ResumenLeccion {
  iniciada: boolean
  completada: boolean
  indiceActual: number
  porcentaje: number
}

/**
 * Estado de una lección sin montar el reproductor.
 * Lo usa la lista de módulos para mostrar en qué va cada uno.
 */
export function leerResumen(leccionId: string, totalPantallas: number): ResumenLeccion {
  const p = leer(leccionId, totalPantallas)
  const vistas = p.indiceActual + 1
  return {
    iniciada: p.indiceActual > 0 || p.resueltas.length > 0,
    completada: p.indiceActual >= totalPantallas - 1,
    indiceActual: p.indiceActual,
    porcentaje: Math.round((vistas / totalPantallas) * 100),
  }
}

/**
 * Guarda el avance de la lección en el navegador.
 * No hay cuentas de usuario todavía: el progreso vive en este dispositivo.
 */
export function useProgreso(leccionId: string, totalPantallas: number) {
  const [progreso, setProgreso] = useState<Progreso>(() => leer(leccionId, totalPantallas))

  useEffect(() => {
    try {
      localStorage.setItem(clave(leccionId), JSON.stringify(progreso))
    } catch {
      /* sin almacenamiento disponible */
    }
  }, [leccionId, progreso])

  const irA = useCallback((indice: number) => {
    setProgreso((p) => (p.indiceActual === indice ? p : { ...p, indiceActual: indice }))
  }, [])

  const marcarResuelta = useCallback((pantallaId: string) => {
    setProgreso((p) =>
      p.resueltas.includes(pantallaId)
        ? p
        : { ...p, resueltas: [...p.resueltas, pantallaId] },
    )
  }, [])

  const guardarRespuesta = useCallback((pantallaId: string, valor: unknown) => {
    setProgreso((p) => ({ ...p, respuestas: { ...p.respuestas, [pantallaId]: valor } }))
  }, [])

  const reiniciar = useCallback(() => setProgreso(VACIO), [])

  return { progreso, irA, marcarResuelta, guardarRespuesta, reiniciar }
}
