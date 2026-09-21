import type { Pantalla } from '../tipos'
import { Portada } from './Portada'
import { Contenido } from './Contenido'
import { Tarjetas } from './Tarjetas'
import { Comparacion } from './Comparacion'
import { Caso } from './Caso'
import { Emparejar } from './Emparejar'
import { Simulador } from './Simulador'
import { Aplicar } from './Aplicar'
import { Quiz } from './Quiz'
import { Cierre } from './Cierre'

export interface PropsVista {
  pantalla: Pantalla
  respuesta: unknown
  actualizada: string
  fuentes?: string[]
  alResolver: () => void
  alGuardar: (valor: unknown) => void
  alReiniciar: () => void
}

/**
 * Elige qué componente muestra cada pantalla.
 * Para agregar un tipo nuevo: se agrega al tipo `Pantalla` en `tipos.ts`, se crea
 * su componente y se suma un caso aquí. TypeScript avisa si falta alguno.
 */
export function VistaPantalla({
  pantalla,
  respuesta,
  actualizada,
  fuentes,
  alResolver,
  alGuardar,
  alReiniciar,
}: PropsVista) {
  switch (pantalla.tipo) {
    case 'portada':
      return <Portada pantalla={pantalla} />
    case 'contenido':
      return <Contenido pantalla={pantalla} />
    case 'tarjetas':
      return <Tarjetas pantalla={pantalla} alResolver={alResolver} />
    case 'comparacion':
      return <Comparacion pantalla={pantalla} />
    case 'caso':
      return (
        <Caso
          pantalla={pantalla}
          respuesta={respuesta}
          alResolver={alResolver}
          alGuardar={alGuardar}
        />
      )
    case 'emparejar':
      return (
        <Emparejar
          pantalla={pantalla}
          respuesta={respuesta}
          alResolver={alResolver}
          alGuardar={alGuardar}
        />
      )
    case 'simulador':
      return <Simulador pantalla={pantalla} />
    case 'aplicar':
      return (
        <Aplicar
          pantalla={pantalla}
          respuesta={respuesta}
          alResolver={alResolver}
          alGuardar={alGuardar}
        />
      )
    case 'quiz':
      return (
        <Quiz
          pantalla={pantalla}
          respuesta={respuesta}
          alResolver={alResolver}
          alGuardar={alGuardar}
        />
      )
    case 'cierre':
      return (
        <Cierre
          pantalla={pantalla}
          actualizada={actualizada}
          fuentes={fuentes}
          alReiniciar={alReiniciar}
        />
      )
  }
}
