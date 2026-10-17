import type { Nivel } from '../tipos'
import { leccion as m1 } from './n3-m1-contabilidad'
import { leccion as m2 } from './n3-m2-punto-de-equilibrio'
import { leccion as m3 } from './n3-m3-van-tir-payback'
import { leccion as m4 } from './n3-m4-fuentes-financiamiento'
import { leccion as m5 } from './n3-m5-inversion-inicial'

/**
 * Falta el módulo 3.6 del material, la certificación final de 15 preguntas.
 * Quedó pendiente a propósito: es un formato distinto de los quiz actuales y
 * hay que definir con el equipo qué significa aprobar y qué se entrega.
 */
export const nivel3: Nivel = {
  id: 'nivel3',
  titulo: 'Nivel 3',
  subtitulo: 'Decisiones avanzadas',
  descripcion:
    'Dejar de reaccionar y empezar a decidir. Contabilidad que sirve para algo, punto de equilibrio, flujo proyectado y las herramientas para evaluar si una inversión vale la pena antes de comprometer la plata.',
  lecciones: [m1, m2, m3, m4, m5],
}
