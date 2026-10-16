import { useState } from 'react'
import type { PantallaCaso } from '../tipos'
import { Encabezado } from './Encabezado'

interface Props {
  pantalla: PantallaCaso
  respuesta: unknown
  alResolver: () => void
  alGuardar: (valor: unknown) => void
}

function leerMarcadas(respuesta: unknown): string[] {
  return Array.isArray(respuesta) ? (respuesta as string[]) : []
}

export function Caso({ pantalla, respuesta, alResolver, alGuardar }: Props) {
  const guardadas = leerMarcadas(respuesta)
  const [marcadas, setMarcadas] = useState<string[]>(guardadas)
  const [enviada, setEnviada] = useState(guardadas.length > 0)

  const completa = marcadas.length === pantalla.elegir

  function alternar(id: string) {
    if (enviada) return
    setMarcadas((actuales) => {
      if (actuales.includes(id)) return actuales.filter((x) => x !== id)
      if (actuales.length >= pantalla.elegir) return actuales
      return [...actuales, id]
    })
  }

  function responder() {
    setEnviada(true)
    alGuardar(marcadas)
    // La actividad se da por hecha al responder, acierte o no: la explicación
    // es el aprendizaje, y bloquear a quien se equivocó solo lo hace abandonar.
    alResolver()
  }

  function intentarDeNuevo() {
    setMarcadas([])
    setEnviada(false)
    // Se guarda el reinicio, no solo se limpia en pantalla: si no, al salir y
    // volver reaparecería la respuesta anterior.
    alGuardar([])
  }

  return (
    <>
      <Encabezado etiqueta={pantalla.etiqueta} icono="storefront" titulo={pantalla.titulo} />

      <div className="caso__escenario">
        {pantalla.escenario.map((parrafo, i) => (
          <p key={i}>{parrafo}</p>
        ))}
      </div>

      <div className="pregunta">
        <h2 className="pregunta__texto">{pantalla.pregunta}</h2>
        <p className="pregunta__ayuda">
          {pantalla.elegir === 1
            ? 'Marca una opción.'
            : `Marca ${pantalla.elegir} opciones. Llevas ${marcadas.length}.`}
        </p>
      </div>

      <div className="opciones">
        {pantalla.opciones.map((opcion) => {
          const marcada = marcadas.includes(opcion.id)
          let estado = ''
          let veredicto = ''

          if (enviada) {
            if (marcada && opcion.correcta) {
              estado = ' opcion--acierto'
              veredicto = 'Correcta'
            } else if (marcada && !opcion.correcta) {
              estado = ' opcion--fallo'
              veredicto = 'No era esta'
            } else if (!marcada && opcion.correcta) {
              estado = ' opcion--perdida'
              veredicto = 'Esta también'
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
              onClick={() => alternar(opcion.id)}
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
            disabled={!completa}
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
            <p className="explicacion__texto">{pantalla.explicacion}</p>
          </div>
          <div className="acciones">
            <button type="button" className="boton boton--secundario" onClick={intentarDeNuevo}>
              <span className="icono" aria-hidden="true">
                refresh
              </span>
              Responder de nuevo
            </button>
          </div>
        </>
      )}
    </>
  )
}
