import { useState } from 'react'
import type { PantallaAplicar } from '../tipos'
import { Encabezado } from './Encabezado'

interface Props {
  pantalla: PantallaAplicar
  respuesta: unknown
  alResolver: () => void
  alGuardar: (valor: unknown) => void
}

function leerValores(respuesta: unknown): Record<string, string> {
  return respuesta && typeof respuesta === 'object' && !Array.isArray(respuesta)
    ? (respuesta as Record<string, string>)
    : {}
}

/** Miles con punto, como se escriben los pesos en Chile. */
function formatearMonto(bruto: string): string {
  const digitos = bruto.replace(/\D/g, '')
  return digitos ? Number(digitos).toLocaleString('es-CL') : ''
}

export function Aplicar({ pantalla, respuesta, alResolver, alGuardar }: Props) {
  const [valores, setValores] = useState<Record<string, string>>(() => leerValores(respuesta))

  function cambiar(campoId: string, bruto: string, formato: 'texto' | 'monto') {
    const valor = formato === 'monto' ? formatearMonto(bruto) : bruto
    const siguientes = { ...valores, [campoId]: valor }
    setValores(siguientes)
    alGuardar(siguientes)
    if (Object.values(siguientes).some((v) => v.trim() !== '')) alResolver()
  }

  const hayAlgo = Object.values(valores).some((v) => v.trim() !== '')

  return (
    <>
      <Encabezado etiqueta={pantalla.etiqueta} icono="edit_note" titulo={pantalla.titulo} />
      <p className="instruccion">{pantalla.instruccion}</p>

      <div className="campos">
        {pantalla.campos.map((campo) => (
          <div className="campo" key={campo.id}>
            <label className="campo__etiqueta" htmlFor={campo.id}>
              {campo.etiqueta}
            </label>
            {campo.ayuda && (
              <span className="campo__ayuda" id={`${campo.id}-ayuda`}>
                {campo.ayuda}
              </span>
            )}

            {campo.formato === 'monto' ? (
              <div className="campo__monto">
                <span className="campo__moneda" aria-hidden="true">
                  $
                </span>
                <input
                  id={campo.id}
                  className="campo__entrada"
                  inputMode="numeric"
                  autoComplete="off"
                  placeholder="0"
                  aria-describedby={campo.ayuda ? `${campo.id}-ayuda` : undefined}
                  value={valores[campo.id] ?? ''}
                  onChange={(e) => cambiar(campo.id, e.target.value, 'monto')}
                />
              </div>
            ) : (
              <textarea
                id={campo.id}
                className="campo__entrada"
                rows={3}
                aria-describedby={campo.ayuda ? `${campo.id}-ayuda` : undefined}
                value={valores[campo.id] ?? ''}
                onChange={(e) => cambiar(campo.id, e.target.value, 'texto')}
              />
            )}
          </div>
        ))}
      </div>

      {hayAlgo && (
        <p className="guardado">
          <span className="icono" aria-hidden="true">
            cloud_done
          </span>
          Guardado en este dispositivo.
        </p>
      )}
      {pantalla.cierre && (
        <p className="nota">
          <span className="icono" aria-hidden="true">
            lightbulb
          </span>
          <span>{pantalla.cierre}</span>
        </p>
      )}
    </>
  )
}
