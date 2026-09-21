import { useEffect, useState } from 'react'
import type { PantallaTarjetas } from '../tipos'
import { Encabezado } from './Encabezado'

interface Props {
  pantalla: PantallaTarjetas
  alResolver: () => void
}

export function Tarjetas({ pantalla, alResolver }: Props) {
  const [abierta, setAbierta] = useState<string | null>(null)
  const [vistas, setVistas] = useState<string[]>([])

  useEffect(() => {
    if (vistas.length === pantalla.tarjetas.length) alResolver()
  }, [vistas.length, pantalla.tarjetas.length, alResolver])

  function alternar(id: string) {
    setAbierta((actual) => (actual === id ? null : id))
    setVistas((actuales) => (actuales.includes(id) ? actuales : [...actuales, id]))
  }

  return (
    <>
      <Encabezado etiqueta={pantalla.etiqueta} icono="touch_app" titulo={pantalla.titulo} />
      <p className="instruccion">{pantalla.instruccion}</p>

      <div className="tarjetas">
        {pantalla.tarjetas.map((tarjeta) => {
          const estaAbierta = abierta === tarjeta.id
          return (
            <button
              type="button"
              key={tarjeta.id}
              className={estaAbierta ? 'tarjeta tarjeta--abierta' : 'tarjeta'}
              aria-expanded={estaAbierta}
              onClick={() => alternar(tarjeta.id)}
            >
              <span className="tarjeta__encabezado">
                <span className="tarjeta__titulo">{tarjeta.titulo}</span>
                <span className="icono tarjeta__signo" aria-hidden="true">
                  expand_more
                </span>
              </span>
              {estaAbierta && <span className="tarjeta__definicion">{tarjeta.definicion}</span>}
            </button>
          )
        })}
      </div>

      {pantalla.nota && (
        <p className="nota">
          <span className="icono" aria-hidden="true">
            lightbulb
          </span>
          <span>{pantalla.nota}</span>
        </p>
      )}
      {pantalla.fuente && <p className="fuente">{pantalla.fuente}</p>}
    </>
  )
}
