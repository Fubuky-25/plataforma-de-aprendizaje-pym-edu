import type { ReactNode } from 'react'

export const pesos = new Intl.NumberFormat('es-CL', { maximumFractionDigits: 0 })

export function soloDigitos(bruto: string): number {
  const d = bruto.replace(/\D/g, '')
  return d ? Number(d) : 0
}

export function soloDecimal(bruto: string): number {
  const limpio = bruto.replace(',', '.').replace(/[^\d.]/g, '')
  const n = Number(limpio)
  return Number.isFinite(n) ? n : 0
}

export function porcentaje(n: number, decimales = 1): string {
  return n.toFixed(decimales).replace('.', ',')
}

interface PropsCampo {
  id: string
  etiqueta: string
  valor: string
  alCambiar: (valor: string) => void
  prefijo?: string
  sufijo?: string
  modo?: 'numeric' | 'decimal'
}

export function CampoNumero({
  id,
  etiqueta,
  valor,
  alCambiar,
  prefijo,
  sufijo,
  modo = 'numeric',
}: PropsCampo) {
  return (
    <div className="campo">
      <label className="campo__etiqueta" htmlFor={id}>
        {etiqueta}
      </label>
      <div className="campo__monto">
        {prefijo && (
          <span className="campo__moneda" aria-hidden="true">
            {prefijo}
          </span>
        )}
        <input
          id={id}
          className="campo__entrada"
          inputMode={modo}
          autoComplete="off"
          value={valor}
          onChange={(e) => alCambiar(e.target.value)}
        />
        {sufijo && (
          <span className="campo__moneda" aria-hidden="true">
            {sufijo}
          </span>
        )}
      </div>
    </div>
  )
}

interface PropsResultado {
  rotulo: string
  cifra: ReactNode
  /** Color del semáforo, cuando el resultado tiene una lectura de riesgo. */
  tono?: 'neutro' | 'bien' | 'atencion' | 'mal'
  children?: ReactNode
}

export function Resultado({ rotulo, cifra, tono = 'neutro', children }: PropsResultado) {
  return (
    <div className={tono === 'neutro' ? 'resultado' : `resultado resultado--${tono}`} role="status">
      <p className="resultado__rotulo">{rotulo}</p>
      <p className="resultado__cifra">{cifra}</p>
      {children}
    </div>
  )
}

export function Linea({ children, valor }: { children: ReactNode; valor: ReactNode }) {
  return (
    <p className="resultado__linea">
      <span>{children}</span>
      <span className="resultado__valor">{valor}</span>
    </p>
  )
}
