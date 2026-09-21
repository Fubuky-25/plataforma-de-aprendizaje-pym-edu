import type { PantallaContenido } from '../tipos'
import { Encabezado } from './Encabezado'

export function Contenido({ pantalla }: { pantalla: PantallaContenido }) {
  return (
    <>
      <Encabezado
        etiqueta={pantalla.etiqueta}
        icono="menu_book"
        titulo={pantalla.titulo}
        bajada={pantalla.bajada}
      />

      <div className="cuerpo">
        {pantalla.parrafos.map((parrafo, i) => (
          <p key={i}>{parrafo}</p>
        ))}

        {pantalla.puntos && (
          <div className="contenido__puntos">
            {pantalla.puntos.map((punto) => (
              <p className="contenido__punto" key={punto}>
                <span className="icono" aria-hidden="true">
                  chevron_right
                </span>
                <span>{punto}</span>
              </p>
            ))}
          </div>
        )}
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
