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
      <h1 className={portada ? 'titulo titulo--portada' : 'titulo'}>{titulo}</h1>
      {bajada && <p className="bajada">{bajada}</p>}
    </>
  )
}
