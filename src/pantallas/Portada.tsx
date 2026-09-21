import type { PantallaPortada } from '../tipos'
import { Encabezado } from './Encabezado'

export function Portada({ pantalla }: { pantalla: PantallaPortada }) {
  return (
    <>
      <Encabezado
        etiqueta={pantalla.etiqueta}
        icono="auto_awesome"
        titulo={pantalla.titulo}
        bajada={pantalla.bajada}
        portada
      />

      <p className="portada__meta">
        <span className="icono" aria-hidden="true">
          schedule
        </span>
        Toma unos {pantalla.duracionMin} minutos
      </p>

      <div className="portada__objetivos">
        <p className="emparejar__rotulo">Al terminar vas a poder</p>
        {pantalla.objetivos.map((objetivo) => (
          <p className="portada__objetivo" key={objetivo}>
            <span className="icono" aria-hidden="true">
              check_circle
            </span>
            <span>{objetivo}</span>
          </p>
        ))}
      </div>
    </>
  )
}
