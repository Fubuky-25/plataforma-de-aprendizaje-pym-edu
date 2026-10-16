import { useState } from 'react'
import type { PantallaQuiz } from '../tipos'
import { Encabezado } from './Encabezado'

interface Props {
  pantalla: PantallaQuiz
  respuesta: unknown
  alResolver: () => void
  alGuardar: (valor: unknown) => void
}

function leerRespuestas(respuesta: unknown): Record<string, string> {
  return respuesta && typeof respuesta === 'object' && !Array.isArray(respuesta)
    ? (respuesta as Record<string, string>)
    : {}
}

export function Quiz({ pantalla, respuesta, alResolver, alGuardar }: Props) {
  const guardadas = leerRespuestas(respuesta)
  const completada = pantalla.preguntas.every((p) => guardadas[p.id])

  const [respuestas, setRespuestas] = useState<Record<string, string>>(guardadas)
  const [indice, setIndice] = useState(0)
  const [elegida, setElegida] = useState<string | null>(null)
  const [enviada, setEnviada] = useState(false)
  const [terminado, setTerminado] = useState(completada)

  const pregunta = pantalla.preguntas[indice]
  const total = pantalla.preguntas.length
  const esUltima = indice === total - 1

  const aciertos = pantalla.preguntas.filter((p) => {
    const elegidaId = respuestas[p.id]
    return elegidaId && p.opciones.find((o) => o.id === elegidaId)?.correcta
  }).length

  function responder() {
    if (!elegida) return
    const siguientes = { ...respuestas, [pregunta.id]: elegida }
    setRespuestas(siguientes)
    setEnviada(true)
    alGuardar(siguientes)
  }

  function siguientePregunta() {
    if (esUltima) {
      setTerminado(true)
      // La evaluación se da por hecha al contestarla completa, no al aprobarla.
      alResolver()
      return
    }
    setIndice((i) => i + 1)
    setElegida(null)
    setEnviada(false)
  }

  function reiniciar() {
    setRespuestas({})
    setIndice(0)
    setElegida(null)
    setEnviada(false)
    setTerminado(false)
    // Se guarda el reinicio, no solo se limpia en pantalla: si no, al salir y
    // volver reaparecerían las respuestas anteriores.
    alGuardar({})
  }

  if (terminado) {
    return (
      <>
        <Encabezado etiqueta={pantalla.etiqueta} icono="quiz" titulo={pantalla.titulo} />

        <div className="quiz__resultado">
          <p className="resultado__rotulo">Respuestas correctas</p>
          <p className="quiz__cifra">
            {aciertos} de {total}
          </p>
          <p className="quiz__leyenda">
            {aciertos === total
              ? 'Completo. Puedes seguir con el siguiente módulo.'
              : 'Vuelve a las preguntas que fallaste: la explicación de cada una es parte del contenido.'}
          </p>
        </div>

        <div className="acciones">
          <button type="button" className="boton boton--secundario" onClick={reiniciar}>
            <span className="icono" aria-hidden="true">
              refresh
            </span>
            Responder de nuevo
          </button>
        </div>
      </>
    )
  }

  return (
    <>
      <Encabezado etiqueta={pantalla.etiqueta} icono="quiz" titulo={pantalla.titulo} />
      <p className="instruccion">{pantalla.instruccion}</p>

      <div className="pregunta">
        <p className="pregunta__numero">
          Pregunta {indice + 1} de {total}
        </p>
        <h2 className="pregunta__texto">{pregunta.texto}</h2>
      </div>

      <div className="opciones">
        {pregunta.opciones.map((opcion) => {
          const marcada = elegida === opcion.id
          let estado = ''
          let veredicto = ''

          if (enviada) {
            if (marcada && opcion.correcta) {
              estado = ' opcion--acierto'
              veredicto = 'Correcta'
            } else if (marcada && !opcion.correcta) {
              estado = ' opcion--fallo'
              veredicto = 'No era esta'
            } else if (opcion.correcta) {
              estado = ' opcion--perdida'
              veredicto = 'Esta era'
            }
          } else if (marcada) {
            estado = ' opcion--marcada'
          }

          return (
            <button
              type="button"
              key={opcion.id}
              className={'opcion' + estado}
              aria-pressed={marcada}
              disabled={enviada}
              onClick={() => setElegida(opcion.id)}
            >
              <span className="opcion__casilla" aria-hidden="true">
                <span className="icono" style={{ fontSize: '0.85rem' }}>
                  check
                </span>
              </span>
              <span>{opcion.texto}</span>
              {veredicto && <span className="opcion__veredicto">{veredicto}</span>}
            </button>
          )
        })}
      </div>

      {!enviada && (
        <div className="acciones">
          <button
            type="button"
            className="boton boton--principal"
            disabled={!elegida}
            onClick={responder}
          >
            Responder
          </button>
        </div>
      )}

      {enviada && (
        <>
          <div className="explicacion">
            <p className="explicacion__encabezado">
              <span className="icono" aria-hidden="true">
                info
              </span>
              Por qué
            </p>
            <p className="explicacion__texto">{pregunta.explicacion}</p>
          </div>
          <div className="acciones">
            <button type="button" className="boton boton--principal" onClick={siguientePregunta}>
              {esUltima ? 'Ver resultado' : 'Siguiente pregunta'}
              <span className="icono" aria-hidden="true">
                arrow_forward
              </span>
            </button>
          </div>
        </>
      )}
    </>
  )
}
