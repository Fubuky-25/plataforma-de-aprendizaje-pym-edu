/**
 * Estructura de datos de una lección de PymEdu.
 *
 * Todo el contenido educativo vive en archivos de datos que cumplen estos tipos.
 * El código del reproductor no contiene texto del curso: así el contenido
 * sobrevive a cualquier cambio futuro de tecnología.
 */

/** Los tipos de pantalla que el reproductor sabe mostrar. */
export type TipoPantalla =
  | 'portada'
  | 'contenido'
  | 'tarjetas'
  | 'comparacion'
  | 'caso'
  | 'emparejar'
  | 'simulador'
  | 'aplicar'
  | 'quiz'
  | 'cierre'

interface Base {
  /** Identificador único dentro de la lección. Se usa para guardar el progreso. */
  id: string
  /** Etiqueta corta de contexto que se muestra sobre el título. */
  etiqueta?: string
  titulo: string
}

/** Primera pantalla: qué se va a aprender y cuánto toma. */
export interface PantallaPortada extends Base {
  tipo: 'portada'
  bajada: string
  duracionMin: number
  objetivos: string[]
}

/** Pantalla de lectura: una idea por pantalla. */
export interface PantallaContenido extends Base {
  tipo: 'contenido'
  bajada?: string
  parrafos: string[]
  puntos?: string[]
  nota?: string
  /** Cifras con su fecha de origen. Sin fecha, un dato financiero engaña. */
  fuente?: string
}

/** Rejilla de conceptos que se revelan al hacer clic. */
export interface PantallaTarjetas extends Base {
  tipo: 'tarjetas'
  instruccion: string
  tarjetas: { id: string; titulo: string; definicion: string }[]
  nota?: string
  fuente?: string
}

/** Dos opciones enfrentadas, fila por fila. */
export interface PantallaComparacion extends Base {
  tipo: 'comparacion'
  bajada?: string
  criterios: string[]
  columnas: [ColumnaComparacion, ColumnaComparacion]
  nota?: string
  fuente?: string
}

export interface ColumnaComparacion {
  titulo: string
  /** Una celda por criterio, en el mismo orden que `criterios`. */
  celdas: string[]
  recomendada?: boolean
}

/** Situación real de una PYME seguida de una pregunta de selección. */
export interface PantallaCaso extends Base {
  tipo: 'caso'
  escenario: string[]
  pregunta: string
  /** Cuántas opciones hay que marcar. Si es 1, funciona como selección única. */
  elegir: number
  opciones: Opcion[]
  explicacion: string
  /** Si es true, no se puede avanzar hasta responder. */
  bloquea: boolean
}

export interface Opcion {
  id: string
  texto: string
  correcta: boolean
}

/** Relacionar cada elemento de la izquierda con el de la derecha. */
export interface PantallaEmparejar extends Base {
  tipo: 'emparejar'
  instruccion: string
  izquierdaTitulo: string
  derechaTitulo: string
  pares: { id: string; izquierda: string; derecha: string }[]
  bloquea: boolean
}

/**
 * Calculadora con la que el usuario prueba un concepto con sus propios números.
 * El nombre del cálculo elige la fórmula; los textos siguen viviendo en el
 * contenido. Agregar una calculadora es sumar un caso a esta unión y su
 * componente en `src/pantallas/simuladores/`.
 */
interface SimuladorBase extends Base {
  tipo: 'simulador'
  instruccion: string
  /** Cómo se lee el resultado. Se muestra sobre la cifra. */
  lectura: string
  nota?: string
  fuente?: string
}

export interface SimuladorInflacion extends SimuladorBase {
  calculo: 'inflacion'
  etiquetas: { monto: string; tasa: string; meses: string }
  inicial: { monto: number; tasaAnual: number; meses: number }
}

export interface SimuladorRegla extends SimuladorBase {
  calculo: 'regla503020'
  etiquetas: { ingreso: string }
  inicial: { ingreso: number }
}

export interface SimuladorPagoMinimo extends SimuladorBase {
  calculo: 'pagoMinimo'
  etiquetas: { deuda: string; tasaMensual: string; cuota: string }
  inicial: { deuda: number; tasaMensual: number; cuota: number }
}

export interface SimuladorMeta extends SimuladorBase {
  calculo: 'metaAhorro'
  etiquetas: { meta: string; meses: string; tasaMensual: string }
  inicial: { meta: number; meses: number; tasaMensual: number }
}

export interface SimuladorCarga extends SimuladorBase {
  calculo: 'cargaFinanciera'
  etiquetas: { ingreso: string; cuotas: string }
  inicial: { ingreso: number; cuotas: number }
}

export interface SimuladorDiasDeCaja extends SimuladorBase {
  calculo: 'diasDeCaja'
  etiquetas: { saldo: string; gastoMensual: string }
  inicial: { saldo: number; gastoMensual: number }
}

export interface SimuladorGastoAnual extends SimuladorBase {
  calculo: 'gastoAnual'
  etiquetas: { montoMensual: string }
  inicial: { montoMensual: number }
}

export interface SimuladorIva extends SimuladorBase {
  calculo: 'iva'
  etiquetas: { ventas: string; compras: string; tasa: string }
  inicial: { ventas: number; compras: number; tasa: number }
}

export interface SimuladorCuota extends SimuladorBase {
  calculo: 'cuotaCredito'
  etiquetas: { monto: string; tasaAnual: string; meses: string }
  inicial: { monto: number; tasaAnual: number; meses: number }
}

export type PantallaSimulador =
  | SimuladorInflacion
  | SimuladorRegla
  | SimuladorPagoMinimo
  | SimuladorMeta
  | SimuladorCarga
  | SimuladorDiasDeCaja
  | SimuladorGastoAnual
  | SimuladorIva
  | SimuladorCuota

/** El usuario aplica lo aprendido a su propio negocio. No se corrige. */
export interface PantallaAplicar extends Base {
  tipo: 'aplicar'
  instruccion: string
  campos: { id: string; etiqueta: string; ayuda?: string; formato: 'texto' | 'monto' }[]
  cierre?: string
}

/** Evaluación de varias preguntas seguidas, con explicación en cada una. */
export interface PantallaQuiz extends Base {
  tipo: 'quiz'
  instruccion: string
  preguntas: PreguntaQuiz[]
  bloquea: boolean
}

export interface PreguntaQuiz {
  id: string
  texto: string
  opciones: Opcion[]
  explicacion: string
}

/** Última pantalla: qué quedó y qué hacer esta semana. */
export interface PantallaCierre extends Base {
  tipo: 'cierre'
  resumen: string[]
  pasoSemana: string
}

export type Pantalla =
  | PantallaPortada
  | PantallaContenido
  | PantallaTarjetas
  | PantallaComparacion
  | PantallaCaso
  | PantallaEmparejar
  | PantallaSimulador
  | PantallaAplicar
  | PantallaQuiz
  | PantallaCierre

export interface Leccion {
  id: string
  /** Nivel del programa: "Nivel 1 — Fundamentos de educación financiera". */
  nivel: string
  /** Curso o tema al que pertenece, visible en la barra superior. */
  curso: string
  /** Número de módulo dentro del nivel: "Módulo 1.1". */
  modulo: string
  area: string
  titulo: string
  /** Fecha de la última revisión del contenido, visible para el usuario. */
  actualizada: string
  /** De dónde salen las cifras. Se muestran al cerrar la lección. */
  fuentes?: string[]
  pantallas: Pantalla[]
}

/** Un nivel del programa: un conjunto ordenado de lecciones. */
export interface Nivel {
  id: string
  titulo: string
  subtitulo: string
  descripcion: string
  lecciones: Leccion[]
}

/** Lo que se guarda en el navegador para poder retomar la lección. */
export interface Progreso {
  indiceActual: number
  /** Ids de las pantallas cuya actividad ya fue resuelta. */
  resueltas: string[]
  /** Respuestas guardadas, por id de pantalla. */
  respuestas: Record<string, unknown>
}
