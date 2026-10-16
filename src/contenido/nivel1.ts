import type { Nivel } from '../tipos'
import { leccion as m1 } from './n1-m1-valor-del-dinero'
import { leccion as m2 } from './n1-m2-presupuesto-personal'
import { leccion as m3 } from './n1-m3-credito-y-debito'
import { leccion as m4 } from './n1-m4-ahorro-con-metas'
import { leccion as m5 } from './n1-m5-sobreendeudamiento'
import { leccion as m6 } from './n1-m6-sistema-financiero'

export const nivel1: Nivel = {
  id: 'nivel1',
  titulo: 'Nivel 1',
  subtitulo: 'Fundamentos de educación financiera',
  descripcion:
    'Seis módulos para ordenar tu propia plata antes de ordenar la del negocio. No se asume ningún conocimiento previo: se parte por entender qué le pasa al dinero con el tiempo y se termina sabiendo a quién reclamarle cuando algo sale mal.',
  lecciones: [m1, m2, m3, m4, m5, m6],
}
