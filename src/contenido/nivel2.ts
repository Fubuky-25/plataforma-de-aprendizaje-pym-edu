import type { Nivel } from '../tipos'
import { leccion as m1 } from './n2-m1-flujo-de-caja'
import { leccion as m2 } from './n2-m2-control-de-costos'
import { leccion as m3 } from './n2-m3-herramientas-digitales'
import { leccion as m4 } from './n2-m4-formalizar'
import { leccion as m5 } from './n2-m5-iva-y-f29'
import { leccion as m6 } from './n2-m6-financiamiento'

export const nivel2: Nivel = {
  id: 'nivel2',
  titulo: 'Nivel 2',
  subtitulo: 'Gestión del emprendimiento',
  descripcion:
    'El salto de ordenar tu plata a manejar la del negocio. Flujo de caja, costos, herramientas digitales, formalización, IVA y financiamiento: lo que hay que saber para que un emprendimiento deje de depender de la memoria del dueño.',
  lecciones: [m1, m2, m3, m4, m5, m6],
}
