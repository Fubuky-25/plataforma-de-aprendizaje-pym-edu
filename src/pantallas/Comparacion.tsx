import type { PantallaComparacion } from '../tipos'
import { Encabezado } from './Encabezado'

export function Comparacion({ pantalla }: { pantalla: PantallaComparacion }) {
  const [a, b] = pantalla.columnas

  return (
    <>
      <Encabezado
        etiqueta={pantalla.etiqueta}
        icono="compare_arrows"
        titulo={pantalla.titulo}
        bajada={pantalla.bajada}
      />

      <div className="comparacion">
        <div className="comparacion__fila comparacion__fila--encabezado">
          <div className="comparacion__celda" />
          {[a, b].map((columna) => (
            <div className="comparacion__celda" key={columna.titulo}>
              <span className="comparacion__titulo">
                {columna.titulo}
                {columna.recomendada && <span className="comparacion__marca">Recomendado</span>}
              </span>
            </div>
          ))}
        </div>

        {pantalla.criterios.map((criterio, i) => (
          <div className="comparacion__fila" key={criterio}>
            <div className="comparacion__celda comparacion__criterio">{criterio}</div>
            {[a, b].map((columna) => (
              <div
                key={columna.titulo}
                data-columna={columna.titulo}
                className={
                  columna.recomendada
                    ? 'comparacion__celda comparacion__celda--destacada'
                    : 'comparacion__celda'
                }
              >
                {columna.celdas[i]}
              </div>
            ))}
          </div>
        ))}
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
