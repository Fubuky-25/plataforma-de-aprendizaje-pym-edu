import { useState } from 'react'
import type {
  SimuladorCuota,
  SimuladorDiasDeCaja,
  SimuladorGastoAnual,
  SimuladorIva,
} from '../../tipos'
import { CampoNumero, Linea, Resultado, SinDatos, pesos, porcentaje, soloDecimal, soloDigitos } from './piezas'

/* ---------- Días de caja ---------- */

export function CalcDiasDeCaja({ pantalla }: { pantalla: SimuladorDiasDeCaja }) {
  const [saldo, setSaldo] = useState(pesos.format(pantalla.inicial.saldo))
  const [gasto, setGasto] = useState(pesos.format(pantalla.inicial.gastoMensual))

  const saldoN = soloDigitos(saldo)
  const gastoN = soloDigitos(gasto)
  const gastoDiario = gastoN / 30
  const dias = gastoDiario > 0 ? Math.floor(saldoN / gastoDiario) : 0
  const tono = dias >= 60 ? 'bien' : dias >= 30 ? 'atencion' : 'mal'
  const lectura =
    dias >= 60
      ? 'Tienes espacio para que un cliente se atrase sin que el negocio se detenga.'
      : dias >= 30
        ? 'Aguantas un mes. Un cliente que pague tarde ya te complica: conviene acortar plazos de cobro.'
        : 'Estás al día a día. Cualquier atraso te obliga a endeudarte o a postergar un pago.'

  return (
    <>
      <div className="campos">
        <CampoNumero
          id="sim-saldo"
          etiqueta={pantalla.etiquetas.saldo}
          valor={saldo}
          alCambiar={(v) => setSaldo(pesos.format(soloDigitos(v)))}
          prefijo="$"
        />
        <CampoNumero
          id="sim-gasto-mensual"
          etiqueta={pantalla.etiquetas.gastoMensual}
          valor={gasto}
          alCambiar={(v) => setGasto(pesos.format(soloDigitos(v)))}
          prefijo="$"
        />
      </div>

      {gastoN <= 0 ? (
        <SinDatos>Escribe cuánto gastas al mes para saber cuántos días te alcanza la caja.</SinDatos>
      ) : (
        <Resultado
          rotulo={pantalla.lectura}
          cifra={`${dias} ${dias === 1 ? 'día' : 'días'}`}
          tono={tono}
        >
          <div className="resultado__detalle">
            <Linea valor={`$${pesos.format(Math.round(gastoDiario))}`}>Gasto de cada día</Linea>
            <Linea valor={`$${pesos.format(saldoN)}`}>Lo que tienes disponible</Linea>
          </div>
          <p className="resultado__lectura">{lectura}</p>
        </Resultado>
      )}
    </>
  )
}

/* ---------- Un gasto chico, visto a un año ---------- */

export function CalcGastoAnual({ pantalla }: { pantalla: SimuladorGastoAnual }) {
  const [monto, setMonto] = useState(pesos.format(pantalla.inicial.montoMensual))
  const n = soloDigitos(monto)

  return (
    <>
      <div className="campos">
        <CampoNumero
          id="sim-gasto-invisible"
          etiqueta={pantalla.etiquetas.montoMensual}
          valor={monto}
          alCambiar={(v) => setMonto(pesos.format(soloDigitos(v)))}
          prefijo="$"
        />
      </div>

      <Resultado rotulo={pantalla.lectura} cifra={`$${pesos.format(n * 12)}`}>
        <div className="resultado__detalle">
          <Linea valor={`$${pesos.format(n)}`}>Al mes</Linea>
          <Linea valor={`$${pesos.format(n * 12)}`}>En un año</Linea>
          <Linea valor={`$${pesos.format(n * 36)}`}>En tres años</Linea>
        </div>
      </Resultado>
    </>
  )
}

/* ---------- IVA del mes ---------- */

export function CalcIva({ pantalla }: { pantalla: SimuladorIva }) {
  const [ventas, setVentas] = useState(pesos.format(pantalla.inicial.ventas))
  const [compras, setCompras] = useState(pesos.format(pantalla.inicial.compras))
  const [tasa, setTasa] = useState(String(pantalla.inicial.tasa).replace('.', ','))

  const ventasN = soloDigitos(ventas)
  const comprasN = soloDigitos(compras)
  const t = soloDecimal(tasa) / 100

  const debito = Math.round(ventasN * t)
  const credito = Math.round(comprasN * t)
  const saldo = debito - credito
  const aPagar = Math.max(0, saldo)
  const remanente = Math.max(0, -saldo)

  return (
    <>
      <div className="campos">
        <CampoNumero
          id="sim-ventas"
          etiqueta={pantalla.etiquetas.ventas}
          valor={ventas}
          alCambiar={(v) => setVentas(pesos.format(soloDigitos(v)))}
          prefijo="$"
        />
        <CampoNumero
          id="sim-compras"
          etiqueta={pantalla.etiquetas.compras}
          valor={compras}
          alCambiar={(v) => setCompras(pesos.format(soloDigitos(v)))}
          prefijo="$"
        />
        <CampoNumero
          id="sim-tasa-iva"
          etiqueta={pantalla.etiquetas.tasa}
          valor={tasa}
          alCambiar={setTasa}
          sufijo="%"
          modo="decimal"
        />
      </div>

      {ventasN <= 0 && comprasN <= 0 ? (
        <SinDatos>Escribe tus ventas y compras del mes, sin IVA, para ver cuánto te toca pagar.</SinDatos>
      ) : (
        <Resultado
          rotulo={remanente > 0 ? 'Este mes no pagas: te queda a favor' : pantalla.lectura}
          cifra={`$${pesos.format(remanente > 0 ? remanente : aPagar)}`}
        >
          <div className="resultado__detalle">
            <Linea valor={`$${pesos.format(debito)}`}>IVA débito (el de tus ventas)</Linea>
            <Linea valor={`$${pesos.format(credito)}`}>IVA crédito (el de tus compras)</Linea>
            <Linea valor={`$${pesos.format(ventasN + debito)}`}>Lo que cobras con IVA incluido</Linea>
          </div>
          <p className="resultado__lectura">
            {remanente > 0
              ? 'Compraste más de lo que vendiste, así que el IVA de tus compras supera al de tus ventas. Esa diferencia no se pierde: queda como remanente para el mes siguiente.'
              : 'El IVA de tus ventas no es tuyo: lo cobraste por cuenta del fisco. Guardarlo aparte desde el día uno evita el apuro de fin de mes.'}
          </p>
        </Resultado>
      )}
    </>
  )
}

/* ---------- Cuota de un crédito ---------- */

export function CalcCuota({ pantalla }: { pantalla: SimuladorCuota }) {
  const [monto, setMonto] = useState(pesos.format(pantalla.inicial.monto))
  const [tasa, setTasa] = useState(String(pantalla.inicial.tasaAnual).replace('.', ','))
  const [meses, setMeses] = useState(String(pantalla.inicial.meses))

  const montoN = soloDigitos(monto)
  const anual = soloDecimal(tasa)
  const n = Math.max(1, Math.min(600, soloDigitos(meses) || 1))
  const i = anual / 100 / 12

  const cuota =
    i > 0 ? Math.round((montoN * i) / (1 - Math.pow(1 + i, -n))) : Math.round(montoN / n)
  const total = cuota * n
  const intereses = total - montoN

  return (
    <>
      <div className="campos">
        <CampoNumero
          id="sim-monto-credito"
          etiqueta={pantalla.etiquetas.monto}
          valor={monto}
          alCambiar={(v) => setMonto(pesos.format(soloDigitos(v)))}
          prefijo="$"
        />
        <CampoNumero
          id="sim-tasa-anual"
          etiqueta={pantalla.etiquetas.tasaAnual}
          valor={tasa}
          alCambiar={setTasa}
          sufijo="% al año"
          modo="decimal"
        />
        <CampoNumero
          id="sim-plazo-credito"
          etiqueta={pantalla.etiquetas.meses}
          valor={meses}
          alCambiar={(v) => setMeses(v.replace(/\D/g, ''))}
          sufijo="meses"
        />
      </div>

      {montoN <= 0 ? (
        <SinDatos>Escribe cuánto necesitas pedir para ver la cuota.</SinDatos>
      ) : (
        <Resultado rotulo={pantalla.lectura} cifra={`$${pesos.format(cuota)}`}>
          <div className="resultado__detalle">
            <Linea valor={`$${pesos.format(montoN)}`}>Lo que recibes</Linea>
            <Linea valor={`$${pesos.format(total)}`}>Lo que devuelves en total</Linea>
            <Linea valor={`$${pesos.format(intereses)}`}>
              Solo de intereses ({porcentaje(montoN > 0 ? (intereses / montoN) * 100 : 0)} % del monto)
            </Linea>
          </div>
          <p className="resultado__lectura">
            Cambia la tasa y mira la última línea. Esa diferencia es exactamente lo que está en
            juego cuando comparas dos ofertas de financiamiento.
          </p>
        </Resultado>
      )}
    </>
  )
}
