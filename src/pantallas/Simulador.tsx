import type { PantallaSimulador } from '../tipos'
import { Encabezado } from './Encabezado'
import {
  CalcCarga,
  CalcInflacion,
  CalcMeta,
  CalcPagoMinimo,
  CalcRegla,
} from './simuladores/Calculadoras'
import {
  CalcCuota,
  CalcDiasDeCaja,
  CalcGastoAnual,
  CalcIva,
} from './simuladores/CalculadorasNegocio'
import {
  CalcFlujoProyectado,
  CalcInversion,
  CalcPuntoEquilibrio,
} from './simuladores/CalculadorasInversion'

/** Elige la calculadora según el cálculo que declare el contenido. */
function Calculadora({ pantalla }: { pantalla: PantallaSimulador }) {
  switch (pantalla.calculo) {
    case 'inflacion':
      return <CalcInflacion pantalla={pantalla} />
    case 'regla503020':
      return <CalcRegla pantalla={pantalla} />
    case 'pagoMinimo':
      return <CalcPagoMinimo pantalla={pantalla} />
    case 'metaAhorro':
      return <CalcMeta pantalla={pantalla} />
    case 'cargaFinanciera':
      return <CalcCarga pantalla={pantalla} />
    case 'diasDeCaja':
      return <CalcDiasDeCaja pantalla={pantalla} />
    case 'gastoAnual':
      return <CalcGastoAnual pantalla={pantalla} />
    case 'iva':
      return <CalcIva pantalla={pantalla} />
    case 'cuotaCredito':
      return <CalcCuota pantalla={pantalla} />
    case 'puntoEquilibrio':
      return <CalcPuntoEquilibrio pantalla={pantalla} />
    case 'flujoProyectado':
      return <CalcFlujoProyectado pantalla={pantalla} />
    case 'inversion':
      return <CalcInversion pantalla={pantalla} />
  }
}

export function Simulador({ pantalla }: { pantalla: PantallaSimulador }) {
  return (
    <>
      <Encabezado etiqueta={pantalla.etiqueta} icono="calculate" titulo={pantalla.titulo} />
      <p className="instruccion">{pantalla.instruccion}</p>

      <Calculadora pantalla={pantalla} />

      {pantalla.nota && (
        <p className="nota">
          <span className="icono" aria-hidden="true">
            lightbulb
          </span>
          <span>{pantalla.nota}</span>
        </p>
      )}
      {pantalla.fuente && <p className="fuente">{pantalla.fuente}</p>}
    </>
  )
}
