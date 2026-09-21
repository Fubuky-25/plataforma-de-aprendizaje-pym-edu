import { useState } from 'react'
import type {
  SimuladorCarga,
  SimuladorInflacion,
  SimuladorMeta,
  SimuladorPagoMinimo,
  SimuladorRegla,
} from '../../tipos'
import { CampoNumero, Linea, Resultado, pesos, porcentaje, soloDecimal, soloDigitos } from './piezas'

/* ---------- Inflación ---------- */

export function CalcInflacion({ pantalla }: { pantalla: SimuladorInflacion }) {
  const [monto, setMonto] = useState(pesos.format(pantalla.inicial.monto))
  const [tasa, setTasa] = useState(String(pantalla.inicial.tasaAnual).replace('.', ','))
  const [meses, setMeses] = useState(String(pantalla.inicial.meses))

  const montoN = soloDigitos(monto)
  const tasaN = soloDecimal(tasa)
  const mesesN = Math.max(1, Math.min(600, soloDigitos(meses) || 1))

  const factor = Math.pow(1 + tasaN / 100, mesesN / 12)
  const valorReal = Math.round(factor > 0 ? montoN / factor : montoN)
  const perdida = montoN - valorReal
  const perdidoPct = montoN > 0 ? (perdida / montoN) * 100 : 0

  return (
    <>
      <div className="campos">
        <CampoNumero
          id="sim-monto"
          etiqueta={pantalla.etiquetas.monto}
          valor={monto}
          alCambiar={(v) => setMonto(pesos.format(soloDigitos(v)))}
          prefijo="$"
        />
        <CampoNumero
          id="sim-tasa"
          etiqueta={pantalla.etiquetas.tasa}
          valor={tasa}
          alCambiar={setTasa}
          sufijo="% al año"
          modo="decimal"
        />
        <CampoNumero
          id="sim-meses"
          etiqueta={pantalla.etiquetas.meses}
          valor={meses}
          alCambiar={(v) => setMeses(v.replace(/\D/g, ''))}
          sufijo="meses"
        />
      </div>

      <Resultado rotulo={pantalla.lectura} cifra={`$${pesos.format(valorReal)}`}>
        <div className="resultado__detalle">
          <Linea valor={`$${pesos.format(montoN)}`}>Lo que tienes hoy</Linea>
          <Linea valor={`$${pesos.format(perdida)} (${porcentaje(perdidoPct)} %)`}>
            Poder de compra que pierde
          </Linea>
          <Linea valor={`${mesesN} ${mesesN === 1 ? 'mes' : 'meses'}`}>Plazo</Linea>
        </div>
      </Resultado>
    </>
  )
}

/* ---------- Regla 50/30/20 ---------- */

export function CalcRegla({ pantalla }: { pantalla: SimuladorRegla }) {
  const [ingreso, setIngreso] = useState(pesos.format(pantalla.inicial.ingreso))
  const n = soloDigitos(ingreso)

  const necesidades = Math.round(n * 0.5)
  const gustos = Math.round(n * 0.3)
  const ahorro = n - necesidades - gustos

  return (
    <>
      <div className="campos">
        <CampoNumero
          id="sim-ingreso"
          etiqueta={pantalla.etiquetas.ingreso}
          valor={ingreso}
          alCambiar={(v) => setIngreso(pesos.format(soloDigitos(v)))}
          prefijo="$"
        />
      </div>

      <Resultado rotulo={pantalla.lectura} cifra={`$${pesos.format(ahorro)}`}>
        <div className="resultado__detalle">
          <Linea valor={`$${pesos.format(necesidades)}`}>
            Necesidades (50 %): arriendo, cuentas, comida, transporte
          </Linea>
          <Linea valor={`$${pesos.format(gustos)}`}>
            Gustos (30 %): salidas, suscripciones, ropa, ocio
          </Linea>
          <Linea valor={`$${pesos.format(ahorro)}`}>Ahorro o pago de deudas (20 %)</Linea>
        </div>
      </Resultado>
    </>
  )
}

/* ---------- Pago mínimo de una tarjeta ---------- */

export function CalcPagoMinimo({ pantalla }: { pantalla: SimuladorPagoMinimo }) {
  const [deuda, setDeuda] = useState(pesos.format(pantalla.inicial.deuda))
  const [tasa, setTasa] = useState(String(pantalla.inicial.tasaMensual).replace('.', ','))
  const [cuota, setCuota] = useState(pesos.format(pantalla.inicial.cuota))

  const deudaN = soloDigitos(deuda)
  const tasaN = soloDecimal(tasa) / 100
  const cuotaN = soloDigitos(cuota)

  const interesPrimerMes = Math.round(deudaN * tasaN)
  // Si la cuota no alcanza a cubrir el interés del mes, la deuda no baja nunca.
  const nuncaTermina = cuotaN <= interesPrimerMes

  let meses = 0
  let totalPagado = 0
  if (!nuncaTermina && deudaN > 0 && cuotaN > 0) {
    let saldo = deudaN
    while (saldo > 0 && meses < 1200) {
      const interes = saldo * tasaN
      const abono = Math.min(cuotaN, saldo + interes)
      saldo = saldo + interes - abono
      totalPagado += abono
      meses++
    }
  }
  const intereses = Math.round(totalPagado - deudaN)
  const anios = Math.floor(meses / 12)
  const restoMeses = meses % 12
  const textoAnios = anios === 1 ? '1 año' : `${anios} años`
  const textoMeses = restoMeses === 1 ? '1 mes' : `${restoMeses} meses`
  const plazo =
    anios === 0 ? textoMeses : restoMeses === 0 ? textoAnios : `${textoAnios} y ${textoMeses}`

  return (
    <>
      <div className="campos">
        <CampoNumero
          id="sim-deuda"
          etiqueta={pantalla.etiquetas.deuda}
          valor={deuda}
          alCambiar={(v) => setDeuda(pesos.format(soloDigitos(v)))}
          prefijo="$"
        />
        <CampoNumero
          id="sim-tasa-mensual"
          etiqueta={pantalla.etiquetas.tasaMensual}
          valor={tasa}
          alCambiar={setTasa}
          sufijo="% al mes"
          modo="decimal"
        />
        <CampoNumero
          id="sim-cuota"
          etiqueta={pantalla.etiquetas.cuota}
          valor={cuota}
          alCambiar={(v) => setCuota(pesos.format(soloDigitos(v)))}
          prefijo="$"
        />
      </div>

      {nuncaTermina ? (
        <Resultado rotulo={pantalla.lectura} cifra="No se termina nunca" tono="mal">
          <div className="resultado__detalle">
            <Linea valor={`$${pesos.format(interesPrimerMes)}`}>Interés del primer mes</Linea>
            <Linea valor={`$${pesos.format(cuotaN)}`}>Lo que pagas al mes</Linea>
          </div>
          <p className="resultado__lectura">
            {`Tu cuota no alcanza a cubrir más que el interés del mes, así que el saldo no baja: estás pagando y sigues debiendo lo mismo o más. Para empezar a pagarla necesitas abonar más de $${pesos.format(interesPrimerMes)} al mes.`}
          </p>
        </Resultado>
      ) : (
        <Resultado
          rotulo={pantalla.lectura}
          cifra={plazo}
          tono={meses > 36 ? 'atencion' : 'bien'}
        >
          <div className="resultado__detalle">
            <Linea valor={`$${pesos.format(deudaN)}`}>Lo que debes hoy</Linea>
            <Linea valor={`$${pesos.format(intereses)}`}>Intereses que vas a pagar</Linea>
            <Linea valor={`$${pesos.format(Math.round(totalPagado))}`}>Total que sale de tu bolsillo</Linea>
          </div>
          <p className="resultado__lectura">
            Sube la cuota unos pesos y mira cómo cambian los meses y los intereses. Esa diferencia
            es lo que está en juego cuando pagas el mínimo.
          </p>
        </Resultado>
      )}
    </>
  )
}

/* ---------- Meta de ahorro ---------- */

export function CalcMeta({ pantalla }: { pantalla: SimuladorMeta }) {
  const [meta, setMeta] = useState(pesos.format(pantalla.inicial.meta))
  const [meses, setMeses] = useState(String(pantalla.inicial.meses))
  const [tasa, setTasa] = useState(String(pantalla.inicial.tasaMensual).replace('.', ','))

  const metaN = soloDigitos(meta)
  const mesesN = Math.max(1, Math.min(600, soloDigitos(meses) || 1))
  const i = soloDecimal(tasa) / 100

  const cuotaSinRendimiento = Math.round(metaN / mesesN)
  const cuotaConRendimiento =
    i > 0 ? Math.round((metaN * i) / (Math.pow(1 + i, mesesN) - 1)) : cuotaSinRendimiento
  const ahorrado = cuotaConRendimiento * mesesN
  const aporteDelInteres = Math.max(0, metaN - ahorrado)

  return (
    <>
      <div className="campos">
        <CampoNumero
          id="sim-meta"
          etiqueta={pantalla.etiquetas.meta}
          valor={meta}
          alCambiar={(v) => setMeta(pesos.format(soloDigitos(v)))}
          prefijo="$"
        />
        <CampoNumero
          id="sim-plazo"
          etiqueta={pantalla.etiquetas.meses}
          valor={meses}
          alCambiar={(v) => setMeses(v.replace(/\D/g, ''))}
          sufijo="meses"
        />
        <CampoNumero
          id="sim-rendimiento"
          etiqueta={pantalla.etiquetas.tasaMensual}
          valor={tasa}
          alCambiar={setTasa}
          sufijo="% al mes"
          modo="decimal"
        />
      </div>

      <Resultado rotulo={pantalla.lectura} cifra={`$${pesos.format(cuotaConRendimiento)}`}>
        <div className="resultado__detalle">
          <Linea valor={`$${pesos.format(cuotaSinRendimiento)}`}>
            Cuota si guardas la plata sin que rinda
          </Linea>
          <Linea valor={`$${pesos.format(cuotaConRendimiento)}`}>
            Cuota si la dejas rindiendo al {porcentaje(soloDecimal(tasa), 2)} % mensual
          </Linea>
          <Linea valor={`$${pesos.format(aporteDelInteres)}`}>Lo que pone el rendimiento por ti</Linea>
        </div>
      </Resultado>
    </>
  )
}

/* ---------- Carga financiera ---------- */

export function CalcCarga({ pantalla }: { pantalla: SimuladorCarga }) {
  const [ingreso, setIngreso] = useState(pesos.format(pantalla.inicial.ingreso))
  const [cuotas, setCuotas] = useState(pesos.format(pantalla.inicial.cuotas))

  const ingresoN = soloDigitos(ingreso)
  const cuotasN = soloDigitos(cuotas)
  const carga = ingresoN > 0 ? (cuotasN / ingresoN) * 100 : 0

  const tono = carga <= 25 ? 'bien' : carga <= 30 ? 'atencion' : 'mal'
  const lectura =
    carga <= 25
      ? 'Estás en un nivel manejable. Mantenlo ahí y revisa el número cada vez que tomes una deuda nueva.'
      : carga <= 30
        ? 'Estás en el límite. Cualquier gasto imprevisto te obliga a endeudarte más. Conviene bajar cuotas antes de que aparezca.'
        : 'Estás por encima de lo recomendable. Es el momento de renegociar plazos o reducir gastos, no de tomar una deuda más.'

  return (
    <>
      <div className="campos">
        <CampoNumero
          id="sim-ingreso-carga"
          etiqueta={pantalla.etiquetas.ingreso}
          valor={ingreso}
          alCambiar={(v) => setIngreso(pesos.format(soloDigitos(v)))}
          prefijo="$"
        />
        <CampoNumero
          id="sim-cuotas"
          etiqueta={pantalla.etiquetas.cuotas}
          valor={cuotas}
          alCambiar={(v) => setCuotas(pesos.format(soloDigitos(v)))}
          prefijo="$"
        />
      </div>

      <Resultado rotulo={pantalla.lectura} cifra={`${porcentaje(carga)} %`} tono={tono}>
        <div className="resultado__detalle">
          <Linea valor={`$${pesos.format(cuotasN)}`}>Cuotas al mes</Linea>
          <Linea valor={`$${pesos.format(ingresoN)}`}>Ingreso al mes</Linea>
          <Linea valor={`$${pesos.format(Math.max(0, ingresoN - cuotasN))}`}>
            Te queda para vivir
          </Linea>
        </div>
        <p className="resultado__lectura">{lectura}</p>
      </Resultado>
    </>
  )
}
