import { useCallback, useEffect, useMemo, useState } from 'react'
import type { Leccion, Pantalla } from '../tipos'
import { VistaPantalla } from '../pantallas/VistaPantalla'
import { useProgreso } from './useProgreso'
import { useTema } from './useTema'

/** Una pantalla frena el avance solo si tiene actividad y está marcada como bloqueante. */
function frena(pantalla: Pantalla): boolean {
  return (
    (pantalla.tipo === 'caso' || pantalla.tipo === 'emparejar' || pantalla.tipo === 'quiz') &&
    pantalla.bloquea
  )
}

interface Props {
  leccion: Leccion
  /** Volver a la lista de módulos del nivel. */
  alSalir: () => void
  /** El módulo que sigue, si queda alguno. Se ofrece al cerrar la lección. */
  siguiente?: { modulo: string; titulo: string; alIr: () => void }
}

export function Reproductor({ leccion, alSalir, siguiente }: Props) {
  const total = leccion.pantallas.length
  const { progreso, irA, marcarResuelta, guardarRespuesta, reiniciar } = useProgreso(
    leccion.id,
    total,
  )
  const { tema, alternar } = useTema()
  const [indiceAbierto, setIndiceAbierto] = useState(false)

  const indice = Math.min(progreso.indiceActual, total - 1)
  const pantalla = leccion.pantallas[indice]

  /** Hasta dónde puede llegar el usuario: se detiene en la primera actividad pendiente. */
  const limite = useMemo(() => {
    const pendiente = leccion.pantallas.findIndex(
      (p) => frena(p) && !progreso.resueltas.includes(p.id),
    )
    return pendiente === -1 ? total - 1 : pendiente
  }, [leccion.pantallas, progreso.resueltas, total])

  const bloqueada =
    indice === limite && frena(pantalla) && !progreso.resueltas.includes(pantalla.id)
  const puedeAvanzar = indice < total - 1 && indice + 1 <= limite
  const puedeRetroceder = indice > 0

  const alResolver = useCallback(() => marcarResuelta(pantalla.id), [marcarResuelta, pantalla.id])
  const alGuardar = useCallback(
    (valor: unknown) => guardarRespuesta(pantalla.id, valor),
    [guardarRespuesta, pantalla.id],
  )

  const avanzar = useCallback(() => {
    if (puedeAvanzar) irA(indice + 1)
  }, [puedeAvanzar, irA, indice])

  const retroceder = useCallback(() => {
    if (puedeRetroceder) irA(indice - 1)
  }, [puedeRetroceder, irA, indice])

  useEffect(() => {
    window.scrollTo({ top: 0 })
    setIndiceAbierto(false)
  }, [indice])

  useEffect(() => {
    function alTeclado(e: KeyboardEvent) {
      const foco = document.activeElement
      if (foco instanceof HTMLInputElement || foco instanceof HTMLTextAreaElement) return
      if (e.key === 'ArrowRight') avanzar()
      if (e.key === 'ArrowLeft') retroceder()
    }
    window.addEventListener('keydown', alTeclado)
    return () => window.removeEventListener('keydown', alTeclado)
  }, [avanzar, retroceder])

  return (
    <div className="app">
      <header className="barra-superior">
        {/* Placeholder del logo hasta tener el archivo de PymEdu. */}
        <button type="button" className="marca marca--boton" onClick={alSalir}>
          <span className="marca__tile" aria-hidden="true">
            <span className="icono">business_center</span>
          </span>
          <span>PymEdu</span>
        </button>

        <div className="avance">
          <div className="avance__linea">
            <span className="avance__curso">
              {leccion.modulo} · {leccion.titulo}
            </span>
            <span className="avance__conteo">
              Pantalla {indice + 1} de {total}
            </span>
          </div>
          <div
            className="avance__riel"
            role="progressbar"
            aria-valuemin={1}
            aria-valuemax={total}
            aria-valuenow={indice + 1}
            aria-label="Avance de la lección"
          >
            <div
              className="avance__relleno"
              style={{ width: `${((indice + 1) / total) * 100}%` }}
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

          <button
            type="button"
            className="boton-texto"
            aria-expanded={indiceAbierto}
            onClick={() => setIndiceAbierto((a) => !a)}
          >
            {indiceAbierto ? 'Cerrar' : 'Contenido'}
          </button>
        </div>
      </header>

      {indiceAbierto && (
        <nav className="indice" aria-label="Contenido de la lección">
          <div className="indice__lista">
            {leccion.pantallas.map((p, i) => (
              <button
                type="button"
                key={p.id}
                className={i === indice ? 'indice__item indice__item--actual' : 'indice__item'}
                disabled={i > limite}
                onClick={() => irA(i)}
              >
                <span className="indice__numero">{i + 1}</span>
                <span>{p.titulo}</span>
                {progreso.resueltas.includes(p.id) && (
                  <span className="icono indice__marca" aria-label="actividad hecha">
                    check_circle
                  </span>
                )}
              </button>
            ))}
          </div>
        </nav>
      )}

      <main className="lienzo">
        <article className="pagina" key={pantalla.id}>
          <VistaPantalla
            pantalla={pantalla}
            respuesta={progreso.respuestas[pantalla.id]}
            actualizada={leccion.actualizada}
            fuentes={leccion.fuentes}
            alResolver={alResolver}
            alGuardar={alGuardar}
            alReiniciar={reiniciar}
          />

          {bloqueada && (
            <p className="aviso-bloqueo" role="status">
              <span className="icono" aria-hidden="true">
                lock
              </span>
              Resuelve esta actividad para seguir
            </p>
          )}

          {pantalla.tipo === 'cierre' && (
            <div className="siguiente-modulo">
              {siguiente ? (
                <>
                  <p className="siguiente-modulo__rotulo">Sigue con {siguiente.modulo}</p>
                  <p className="siguiente-modulo__titulo">{siguiente.titulo}</p>
                  <div className="acciones" style={{ marginTop: 0 }}>
                    <button type="button" className="boton boton--principal" onClick={siguiente.alIr}>
                      Ir al siguiente módulo
                      <span className="icono" aria-hidden="true">
                        arrow_forward
                      </span>
                    </button>
                    <button type="button" className="boton boton--secundario" onClick={alSalir}>
                      Ver todos los módulos
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <p className="siguiente-modulo__rotulo">Fin del nivel</p>
                  <p className="siguiente-modulo__titulo">Este era el último módulo</p>
                  <div className="acciones" style={{ marginTop: 0 }}>
                    <button type="button" className="boton boton--principal" onClick={alSalir}>
                      Volver a los módulos
                    </button>
                  </div>
                </>
              )}
            </div>
          )}
        </article>
      </main>

      <footer className="barra-inferior">
        <button
          type="button"
          className="boton boton--secundario"
          disabled={!puedeRetroceder}
          onClick={retroceder}
        >
          <span className="icono" aria-hidden="true">
            arrow_back
          </span>
          Anterior
        </button>

        <div className="pasos">
          {leccion.pantallas.map((p, i) => (
            <button
              type="button"
              key={p.id}
              className={
                'paso' + (i === indice ? ' paso--actual' : i < indice ? ' paso--visto' : '')
              }
              disabled={i > limite}
              aria-label={`Ir a la pantalla ${i + 1}: ${p.titulo}`}
              aria-current={i === indice}
              onClick={() => irA(i)}
            />
          ))}
        </div>

        <button
          type="button"
          className="boton boton--principal"
          disabled={!puedeAvanzar}
          onClick={avanzar}
        >
          Siguiente
          <span className="icono" aria-hidden="true">
            arrow_forward
          </span>
        </button>
      </footer>
    </div>
  )
}
