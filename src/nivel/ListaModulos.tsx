import { useMemo } from 'react'
import type { Nivel } from '../contenido/nivel1'
import { duracionDe } from '../contenido/nivel1'
import { leerResumen } from '../reproductor/useProgreso'
import { useTema } from '../reproductor/useTema'

interface Props {
  nivel: Nivel
  alAbrir: (leccionId: string) => void
}

export function ListaModulos({ nivel, alAbrir }: Props) {
  const { tema, alternar } = useTema()

  // Se lee una vez al montar. Como se vuelve aquí al salir de una lección,
  // el componente se monta de nuevo y el estado queda al día.
  const resumenes = useMemo(
    () => nivel.lecciones.map((l) => leerResumen(l.id, l.pantallas.length)),
    [nivel.lecciones],
  )

  const completados = resumenes.filter((r) => r.completada).length
  const minutos = nivel.lecciones.reduce((suma, l) => suma + duracionDe(l), 0)
  const siguiente = resumenes.findIndex((r) => !r.completada)
  const leccionSugerida = siguiente === -1 ? null : nivel.lecciones[siguiente]
  const algoEmpezado = resumenes.some((r) => r.iniciada || r.completada)

  let textoBoton = 'Empezar el nivel'
  if (leccionSugerida && resumenes[siguiente].iniciada) textoBoton = 'Continuar donde quedaste'
  else if (leccionSugerida && algoEmpezado) textoBoton = `Seguir con el ${leccionSugerida.modulo}`

  return (
    <div className="app">
      <header className="barra-superior">
        <p className="marca">
          <span className="marca__tile" aria-hidden="true">
            <span className="icono">business_center</span>
          </span>
          <span>PymEdu</span>
        </p>

        <div className="avance">
          <div className="avance__linea">
            <span className="avance__curso">{nivel.subtitulo}</span>
            <span className="avance__conteo">
              {completados} de {nivel.lecciones.length} módulos
            </span>
          </div>
          <div
            className="avance__riel"
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={nivel.lecciones.length}
            aria-valuenow={completados}
            aria-label="Avance del nivel"
          >
            <div
              className="avance__relleno"
              style={{ width: `${(completados / nivel.lecciones.length) * 100}%` }}
            />
          </div>
        </div>

        <div className="acciones-barra">
          <button
            type="button"
            className="boton-icono"
            onClick={alternar}
            aria-label={tema === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
          >
            <span className="icono" aria-hidden="true">
              {tema === 'dark' ? 'light_mode' : 'dark_mode'}
            </span>
          </button>
        </div>
      </header>

      <main className="lienzo">
        <div className="pagina">
          <p className="etiqueta">
            <span className="icono" aria-hidden="true">
              school
            </span>
            {nivel.titulo}
          </p>
          <h1 className="titulo titulo--portada">{nivel.subtitulo}</h1>
          <p className="bajada">{nivel.descripcion}</p>

          <p className="portada__meta">
            <span className="icono" aria-hidden="true">
              schedule
            </span>
            {nivel.lecciones.length} módulos · unos {minutos} minutos en total
          </p>

          {leccionSugerida && (
            <div className="acciones">
              <button
                type="button"
                className="boton boton--principal"
                onClick={() => alAbrir(leccionSugerida.id)}
              >
                {textoBoton}
                <span className="icono" aria-hidden="true">
                  arrow_forward
                </span>
              </button>
            </div>
          )}

          <div className="modulos">
            {nivel.lecciones.map((leccion, i) => {
              const r = resumenes[i]
              const estado = r.completada ? 'completado' : r.iniciada ? 'en curso' : 'pendiente'
              return (
                <button
                  type="button"
                  key={leccion.id}
                  className={r.completada ? 'modulo modulo--completado' : 'modulo'}
                  onClick={() => alAbrir(leccion.id)}
                >
                  <span className="modulo__numero" aria-hidden="true">
                    {r.completada ? (
                      <span className="icono icono--lleno">check_circle</span>
                    ) : (
                      i + 1
                    )}
                  </span>

                  <span className="modulo__cuerpo">
                    <span className="modulo__encabezado">
                      <span className="modulo__titulo">{leccion.titulo}</span>
                      <span className={`modulo__estado modulo__estado--${estado.replace(' ', '-')}`}>
                        {estado}
                      </span>
                    </span>
                    <span className="modulo__meta">
                      {leccion.modulo} · {leccion.pantallas.length} pantallas · {duracionDe(leccion)}{' '}
                      min
                    </span>
                    {r.iniciada && !r.completada && (
                      <span className="modulo__riel">
                        <span className="modulo__relleno" style={{ width: `${r.porcentaje}%` }} />
                      </span>
                    )}
                  </span>

                  <span className="icono modulo__flecha" aria-hidden="true">
                    chevron_right
                  </span>
                </button>
              )
            })}
          </div>

          <p className="fuente">
            El contenido proviene del material de PymEdu y aún tiene cifras de 2025 que hay que
            actualizar. Cada dato se muestra con la fecha a la que corresponde.
          </p>
        </div>
      </main>
    </div>
  )
}
