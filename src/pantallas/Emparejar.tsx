import { useEffect, useRef, useState } from 'react'
import type { PantallaEmparejar } from '../tipos'
import { Encabezado } from './Encabezado'

interface Props {
  pantalla: PantallaEmparejar
  respuesta: unknown
  alResolver: () => void
  alGuardar: (valor: unknown) => void
}

function desordenar<T>(lista: T[]): T[] {
  const copia = [...lista]
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copia[i], copia[j]] = [copia[j], copia[i]]
  }
  return copia
}

export function Emparejar({ pantalla, respuesta, alResolver, alGuardar }: Props) {
  const yaResuelta = respuesta === true
  const [izquierdas] = useState(() => desordenar(pantalla.pares))
  const [derechas] = useState(() => desordenar(pantalla.pares))
  const [elegida, setElegida] = useState<string | null>(null)
  const [unidas, setUnidas] = useState<string[]>(
    yaResuelta ? pantalla.pares.map((p) => p.id) : [],
  )
  const [errada, setErrada] = useState<string | null>(null)
  const [mensaje, setMensaje] = useState('')
  const temporizador = useRef<number | undefined>(undefined)

  const completa = unidas.length === pantalla.pares.length

  useEffect(() => {
    if (!completa) return
    alGuardar(true)
    alResolver()
  }, [completa, alGuardar, alResolver])

  useEffect(() => () => window.clearTimeout(temporizador.current), [])

  function elegirIzquierda(id: string) {
    if (unidas.includes(id)) return
    setElegida((actual) => (actual === id ? null : id))
    setMensaje('')
  }

  function elegirDerecha(id: string) {
    if (unidas.includes(id)) return
    if (!elegida) {
      setMensaje(`Primero elige algo de "${pantalla.izquierdaTitulo}".`)
      return
    }
    if (elegida === id) {
      setUnidas((actuales) => [...actuales, id])
      setElegida(null)
      setMensaje('Bien. Esas dos van juntas.')
      return
    }
    setErrada(id)
    setMensaje('Esa no era. Prueba con otra.')
    window.clearTimeout(temporizador.current)
    temporizador.current = window.setTimeout(() => setErrada(null), 420)
  }

  function claseFicha(id: string, esElegida?: boolean) {
    if (unidas.includes(id)) return 'ficha ficha--unida'
    if (errada === id) return 'ficha ficha--errada'
    if (esElegida) return 'ficha ficha--elegida'
    return 'ficha'
  }

  return (
    <>
      <Encabezado etiqueta={pantalla.etiqueta} icono="drag_indicator" titulo={pantalla.titulo} />
      <p className="instruccion">{pantalla.instruccion}</p>

      <div className="emparejar">
        <div className="emparejar__columna">
          <p className="emparejar__rotulo">{pantalla.izquierdaTitulo}</p>
          {izquierdas.map((par) => (
            <button
              type="button"
              key={par.id}
              className={claseFicha(par.id, elegida === par.id)}
              aria-pressed={elegida === par.id}
              disabled={unidas.includes(par.id)}
              onClick={() => elegirIzquierda(par.id)}
            >
              {unidas.includes(par.id) && (
                <span className="icono" aria-hidden="true">
                  check_circle
                </span>
              )}
              <span>{par.izquierda}</span>
            </button>
          ))}
        </div>

        <div className="emparejar__columna">
          <p className="emparejar__rotulo">{pantalla.derechaTitulo}</p>
          {derechas.map((par) => (
            <button
              type="button"
              key={par.id}
              className={claseFicha(par.id)}
              disabled={unidas.includes(par.id)}
              onClick={() => elegirDerecha(par.id)}
            >
              {unidas.includes(par.id) && (
                <span className="icono" aria-hidden="true">
                  check_circle
                </span>
              )}
              <span>{par.derecha}</span>
            </button>
          ))}
        </div>
      </div>

      <p
        className={completa ? 'emparejar__estado emparejar__estado--logrado' : 'emparejar__estado'}
        role="status"
      >
        {completa && (
          <span className="icono" aria-hidden="true">
            task_alt
          </span>
        )}
        {completa ? 'Listo. Quedaron todos emparejados.' : mensaje}
      </p>
    </>
  )
}
