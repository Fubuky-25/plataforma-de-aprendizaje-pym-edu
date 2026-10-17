import { useState } from 'react'
import type {
  SimuladorFlujoProyectado,
  SimuladorInversion,
  SimuladorPuntoEquilibrio,
} from '../../tipos'
import {
  CampoNumero,
  Linea,
  Resultado,
  SinDatos,
  pesos,
  porcentaje,
  soloDecimal,
  soloDigitos,
} from './piezas'

/* ---------- Punto de equilibrio ---------- */

export function CalcPuntoEquilibrio({ pantalla }: { pantalla: SimuladorPuntoEquilibrio }) {
  const [fijos, setFijos] = useState(pesos.format(pantalla.inicial.costosFijos))
  const [precio, setPrecio] = useState(pesos.format(pantalla.inicial.precio))
  const [variable, setVariable] = useState(pesos.format(pantalla.inicial.costoVariable))

  const fijosN = soloDigitos(fijos)
  const precioN = soloDigitos(precio)
  const variableN = soloDigitos(variable)
  const margen = precioN - variableN

  const unidades = margen > 0 ? Math.ceil(fijosN / margen) : 0
  const ventas = unidades * precioN
  const porcentajeMargen = precioN > 0 ? (margen / precioN) * 100 : 0

  return (
    <>
      <div className="campos">
        <CampoNumero
          id="sim-fijos"
          etiqueta={pantalla.etiquetas.costosFijos}
          valor={fijos}
          alCambiar={(v) => setFijos(pesos.format(soloDigitos(v)))}
          prefijo="$"
        />
        <CampoNumero
          id="sim-precio"
          etiqueta={pantalla.etiquetas.precio}
          valor={precio}
          alCambiar={(v) => setPrecio(pesos.format(soloDigitos(v)))}
          prefijo="$"
        />
        <CampoNumero
          id="sim-variable"
          etiqueta={pantalla.etiquetas.costoVariable}
          valor={variable}
          alCambiar={(v) => setVariable(pesos.format(soloDigitos(v)))}
          prefijo="$"
        />
      </div>

      {precioN <= 0 || fijosN <= 0 ? (
        <SinDatos>
          Escribe tus costos fijos del mes y el precio de lo que vendes para ver el punto de
          equilibrio.
        </SinDatos>
      ) : margen <= 0 ? (
        <Resultado rotulo={pantalla.lectura} cifra="No existe" tono="mal">
          <p className="resultado__lectura">
            Cada unidad que vendes cuesta igual o más de lo que cobras, así que vender más aumenta
            la pérdida. Antes de pensar en volumen hay que subir el precio o bajar el costo
            variable.
          </p>
        </Resultado>
      ) : (
        <Resultado
          rotulo={pantalla.lectura}
          cifra={`${pesos.format(unidades)} ${pantalla.etiquetas.unidad}`}
        >
          <div className="resultado__detalle">
            <Linea valor={`$${pesos.format(margen)}`}>
              Margen de contribución de cada unidad ({porcentaje(porcentajeMargen)} %)
            </Linea>
            <Linea valor={`$${pesos.format(ventas)}`}>Ventas del mes para no perder</Linea>
            <Linea valor={`${Math.ceil(unidades / 30)} al día`}>
              Repartido en un mes de 30 días
            </Linea>
          </div>
          <p className="resultado__lectura">
            Cada unidad por encima de esa cantidad te deja ${pesos.format(margen)} de utilidad.
            Prueba a subir un poco el precio: vas a ver que el punto de equilibrio baja más rápido
            de lo que esperas.
          </p>
        </Resultado>
      )}
    </>
  )
}

/* ---------- Flujo de caja proyectado ---------- */

export function CalcFlujoProyectado({ pantalla }: { pantalla: SimuladorFlujoProyectado }) {
  const [saldo, setSaldo] = useState(pesos.format(pantalla.inicial.saldoInicial))
  const [ingresos, setIngresos] = useState(pesos.format(pantalla.inicial.ingresos))
  const [egresos, setEgresos] = useState(pesos.format(pantalla.inicial.egresos))
  const [crecimiento, setCrecimiento] = useState(
    String(pantalla.inicial.crecimiento).replace('.', ','),
  )

  const saldoN = soloDigitos(saldo)
  const ingresosN = soloDigitos(ingresos)
  const egresosN = soloDigitos(egresos)
  const g = soloDecimal(crecimiento) / 100

  const meses: { mes: number; entra: number; sale: number; saldo: number }[] = []
  let acumulado = saldoN
  for (let m = 1; m <= 6; m++) {
    const entra = Math.round(ingresosN * Math.pow(1 + g, m - 1))
    acumulado = acumulado + entra - egresosN
    meses.push({ mes: m, entra, sale: egresosN, saldo: acumulado })
  }
  const primerRojo = meses.find((m) => m.saldo < 0)
  const saldoFinal = meses[meses.length - 1].saldo

  return (
    <>
      <div className="campos">
        <CampoNumero
          id="sim-saldo-inicial"
          etiqueta={pantalla.etiquetas.saldoInicial}
          valor={saldo}
          alCambiar={(v) => setSaldo(pesos.format(soloDigitos(v)))}
          prefijo="$"
        />
        <CampoNumero
          id="sim-ingresos-mes"
          etiqueta={pantalla.etiquetas.ingresos}
          valor={ingresos}
          alCambiar={(v) => setIngresos(pesos.format(soloDigitos(v)))}
          prefijo="$"
        />
        <CampoNumero
          id="sim-egresos-mes"
          etiqueta={pantalla.etiquetas.egresos}
          valor={egresos}
          alCambiar={(v) => setEgresos(pesos.format(soloDigitos(v)))}
          prefijo="$"
        />
        <CampoNumero
          id="sim-crecimiento"
          etiqueta={pantalla.etiquetas.crecimiento}
          valor={crecimiento}
          alCambiar={setCrecimiento}
          sufijo="% al mes"
          modo="decimal"
        />
      </div>

      {egresosN <= 0 && ingresosN <= 0 ? (
        <SinDatos>Escribe lo que entra y lo que sale cada mes para ver la proyección.</SinDatos>
      ) : (
        <Resultado
          rotulo={primerRojo ? 'Te quedas sin caja en el mes' : pantalla.lectura}
          cifra={primerRojo ? `${primerRojo.mes}` : `$${pesos.format(saldoFinal)}`}
          tono={primerRojo ? 'mal' : saldoFinal > egresosN ? 'bien' : 'atencion'}
        >
          <div className="resultado__detalle">
            {meses.map((m) => (
              <Linea key={m.mes} valor={`$${pesos.format(m.saldo)}`}>
                Mes {m.mes} · entra ${pesos.format(m.entra)}
              </Linea>
            ))}
          </div>
          <p className="resultado__lectura">
            {primerRojo
              ? 'Ese es el mes donde el saldo se vuelve negativo. Lo valioso es verlo ahora y no ese día: tienes meses para adelantar cobros, estirar pagos o conseguir financiamiento con calma.'
              : 'Baja el crecimiento de ventas a cero y mira qué pasa. Proyectar con el escenario optimista es el error más común, y el único que se paga en efectivo.'}
          </p>
        </Resultado>
      )}
    </>
  )
}

/* ---------- Evaluación de una inversión: VAN, TIR, Payback y ROI ---------- */

function van(inversion: number, flujo: number, anios: number, tasa: number): number {
  let total = -inversion
  for (let a = 1; a <= anios; a++) total += flujo / Math.pow(1 + tasa, a)
  return total
}

/** La TIR es la tasa que hace el VAN igual a cero. Se busca por bisección. */
function tir(inversion: number, flujo: number, anios: number): number | null {
  if (flujo <= 0 || inversion <= 0) return null
  if (flujo * anios <= inversion) return null // nunca se recupera: no hay TIR positiva
  let bajo = 0
  let alto = 10 // 1000 % anual
  for (let i = 0; i < 200; i++) {
    const medio = (bajo + alto) / 2
    if (van(inversion, flujo, anios, medio) > 0) bajo = medio
    else alto = medio
  }
  return ((bajo + alto) / 2) * 100
}

export function CalcInversion({ pantalla }: { pantalla: SimuladorInversion }) {
  const [inversion, setInversion] = useState(pesos.format(pantalla.inicial.inversion))
  const [flujo, setFlujo] = useState(pesos.format(pantalla.inicial.flujoAnual))
  const [anios, setAnios] = useState(String(pantalla.inicial.anios))
  const [tasa, setTasa] = useState(String(pantalla.inicial.tasa).replace('.', ','))

  const inversionN = soloDigitos(inversion)
  const flujoN = soloDigitos(flujo)
  const aniosN = Math.max(1, Math.min(50, soloDigitos(anios) || 1))
  const tasaN = soloDecimal(tasa)

  const valorActual = van(inversionN, flujoN, aniosN, tasaN / 100)
  const tasaInterna = tir(inversionN, flujoN, aniosN)
  const payback = flujoN > 0 ? inversionN / flujoN : 0
  const beneficio = flujoN * aniosN - inversionN
  const roi = inversionN > 0 ? (beneficio / inversionN) * 100 : 0
  const seRecupera = payback > 0 && payback <= aniosN

  const aniosPayback = Math.floor(payback)
  const mesesPayback = Math.round((payback - aniosPayback) * 12)
  const textoPayback = seRecupera
    ? aniosPayback === 0
      ? `${mesesPayback} meses`
      : `${aniosPayback} ${aniosPayback === 1 ? 'año' : 'años'} y ${mesesPayback} meses`
    : 'No se recupera'

  return (
    <>
      <div className="campos">
        <CampoNumero
          id="sim-inversion"
          etiqueta={pantalla.etiquetas.inversion}
          valor={inversion}
          alCambiar={(v) => setInversion(pesos.format(soloDigitos(v)))}
          prefijo="$"
        />
        <CampoNumero
          id="sim-flujo-anual"
          etiqueta={pantalla.etiquetas.flujoAnual}
          valor={flujo}
          alCambiar={(v) => setFlujo(pesos.format(soloDigitos(v)))}
          prefijo="$"
        />
        <CampoNumero
          id="sim-anios"
          etiqueta={pantalla.etiquetas.anios}
          valor={anios}
          alCambiar={(v) => setAnios(v.replace(/\D/g, ''))}
          sufijo="años"
        />
        <CampoNumero
          id="sim-tasa-descuento"
          etiqueta={pantalla.etiquetas.tasa}
          valor={tasa}
          alCambiar={setTasa}
          sufijo="% al año"
          modo="decimal"
        />
      </div>

      {inversionN <= 0 || flujoN <= 0 ? (
        <SinDatos>
          Escribe cuánto tienes que invertir y cuánto esperas que deje al año para evaluarlo.
        </SinDatos>
      ) : (
        <Resultado
          rotulo={pantalla.lectura}
          cifra={`$${pesos.format(Math.round(valorActual))}`}
          tono={valorActual > 0 ? 'bien' : 'mal'}
        >
          <div className="resultado__detalle">
            <Linea valor={tasaInterna === null ? '—' : `${porcentaje(tasaInterna)} %`}>
              TIR: la rentabilidad anual del proyecto
            </Linea>
            <Linea valor={textoPayback}>Payback: cuánto demoras en recuperar lo invertido</Linea>
            <Linea valor={`${porcentaje(roi)} %`}>ROI: lo que ganas sobre lo que pusiste</Linea>
          </div>
          <p className="resultado__lectura">
            {valorActual > 0
              ? `El VAN es positivo: el proyecto rinde más que el ${porcentaje(tasaN)} % que le exiges. Compara la TIR con esa tasa: mientras más alta, más margen tienes si algo sale peor de lo esperado.`
              : `El VAN es negativo: a esta tasa, el proyecto no alcanza a cubrir lo que le exiges. No significa que pierdas plata, significa que te conviene más usarla en otra cosa que rinda ${porcentaje(tasaN)} %.`}
          </p>
        </Resultado>
      )}
    </>
  )
}
