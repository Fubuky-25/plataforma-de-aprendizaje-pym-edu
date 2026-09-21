import type { PantallaCierre } from '../tipos'
import { Encabezado } from './Encabezado'

interface Props {
  pantalla: PantallaCierre
  actualizada: string
  fuentes?: string[]
  alReiniciar: () => void
}

export function Cierre({ pantalla, actualizada, fuentes, alReiniciar }: Props) {
  return (
    <>
      <Encabezado etiqueta={pantalla.etiqueta} icono="flag" titulo={pantalla.titulo} />

      <div className="cierre__resumen">
        {pantalla.resumen.map((idea) => (
          <p className="cierre__idea" key={idea}>
            <span className="icono" aria-hidden="true">
              check_circle
            </span>
            <span>{idea}</span>
          </p>
        ))}
      </div>

      <div className="cierre__paso">
        <p className="cierre__paso-rotulo">
          <span className="icono" aria-hidden="true">
            rocket_launch
          </span>
          Tu paso de esta semana
        </p>
        <p>{pantalla.pasoSemana}</p>
      </div>

      <div className="acciones">
        <button type="button" className="boton boton--secundario" onClick={alReiniciar}>
          <span className="icono" aria-hidden="true">
            refresh
          </span>
          Empezar la lección de nuevo
        </button>
      </div>

      <div className="cierre__actualizada">
        <p>Contenido revisado en {actualizada}.</p>
        {fuentes && fuentes.length > 0 && (
          <>
            <p style={{ marginTop: '0.5rem' }}>De dónde salen las cifras:</p>
            {fuentes.map((f) => (
              <p key={f}>· {f}</p>
            ))}
          </>
        )}
      </div>
    </>
  )
}
