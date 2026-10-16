interface Props {
  etiqueta?: string
  icono?: string
  titulo: string
  bajada?: string
  portada?: boolean
}

export function Encabezado({ etiqueta, icono, titulo, bajada, portada }: Props) {
  return (
    <>
      {etiqueta && (
        <p className="etiqueta">
          {icono && (
            <span className="icono" aria-hidden="true">
              {icono}
            </span>
          )}
          {etiqueta}
        </p>
      )}
      {/* `tabIndex` permite moverle el foco al cambiar de pantalla. */}
      <h1 id="titulo-pantalla" tabIndex={-1} className={portada ? 'titulo titulo--portada' : 'titulo'}>
        {titulo}
      </h1>
      {bajada && <p className="bajada">{bajada}</p>}
    </>
  )
}
