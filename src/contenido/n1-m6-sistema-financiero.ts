import type { Leccion } from '../tipos'

/**
 * Nivel 1, Módulo 1.6 — Sistema financiero chileno.
 * Adaptado de `contenido para los cursos/Pym_Edu_nivel1.pdf`.
 *
 * ESTE ES EL MÓDULO QUE MÁS NECESITA REVISIÓN ANTES DE PUBLICAR:
 *
 * 1. El material fue escrito en 2025 y contiene afirmaciones sobre el futuro
 *    que hoy ya pasaron: la licencia de un neobanco "esperada antes del cierre
 *    de 2025", las finanzas abiertas "a partir de 2026" y el registro de deuda
 *    consolidada "en preparación para 2025". No se puede verificar desde aquí
 *    qué ocurrió realmente, así que están redactadas como lo que estaba previsto
 *    en su momento, no como hechos actuales.
 * 2. Las cifras, como la tasa de política monetaria, llevan su fecha.
 * 3. Los derechos del consumidor financiero se describen en términos generales
 *    y se remite a verificar las condiciones. Un plazo mal citado en un curso
 *    puede costarle un derecho a alguien.
 */
export const leccion: Leccion = {
  id: 'n1-m6',
  nivel: 'Nivel 1 · Fundamentos',
  curso: 'Fundamentos de educación financiera',
  modulo: 'Módulo 1.6',
  area: 'Finanzas',
  titulo: 'El sistema financiero chileno',
  actualizada: 'septiembre de 2026',
  fuentes: [
    'Banco Central de Chile, tasa de política monetaria de octubre de 2025.',
    'Comisión para el Mercado Financiero (CMF).',
    'Servicio Nacional del Consumidor (SERNAC).',
    'Ley FinTech, 2023.',
  ],
  pantallas: [
    {
      id: 'p1',
      tipo: 'portada',
      etiqueta: 'Nivel 1 · Módulo 1.6',
      titulo: 'El sistema financiero chileno',
      bajada:
        'Detrás de cada crédito, cada boleta y cada reclamo hay una institución responsable. Saber cuál te ahorra vueltas.',
      duracionMin: 14,
      objetivos: [
        'Saber qué hace cada institución del sistema financiero',
        'Identificar a quién acudir según el problema que tengas',
        'Conocer tus derechos y deberes como consumidor financiero',
        'Entender qué está cambiando y qué implica para ti',
      ],
    },

    {
      id: 'p2',
      tipo: 'contenido',
      etiqueta: 'Lo esencial',
      titulo: 'Por qué conviene saber quién es quién',
      parrafos: [
        'Cuando algo sale mal con un producto financiero, la mayoría de la gente reclama donde le queda más cerca o donde la atienden primero. Eso suele significar semanas perdidas antes de llegar a la institución que sí puede resolver.',
        'El sistema chileno reparte el trabajo entre unas pocas instituciones con funciones bastante distintas: una emite la moneda y cuida su valor, otra fiscaliza a los bancos, otra defiende al consumidor y otra administra los impuestos.',
        'También importa por una razón previa al problema: antes de contratar un crédito o abrir una cuenta conviene saber si la entidad está fiscalizada. Si no lo está, las protecciones que crees tener probablemente no aplican.',
      ],
      nota: 'La pregunta útil antes de firmar cualquier cosa es una sola: ¿esta entidad está fiscalizada, y por quién? Si la respuesta no aparece rápido, esa ya es una respuesta.',
    },

    {
      id: 'p3',
      tipo: 'tarjetas',
      etiqueta: 'Quién es quién',
      titulo: 'Las instituciones que te afectan',
      instruccion: 'Toca cada una para ver qué hace y cuándo te importa.',
      tarjetas: [
        {
          id: 't1',
          titulo: 'Banco Central de Chile',
          definicion:
            'Organismo autónomo que emite el peso, vela por la estabilidad de los precios y por que el sistema de pagos funcione. Define la tasa de política monetaria, que es el punto de partida del costo de todos los créditos del país: a octubre de 2025 estaba en 4,75 %. También calcula el valor diario de la UF.',
        },
        {
          id: 't2',
          titulo: 'CMF',
          definicion:
            'Comisión para el Mercado Financiero. Regula y supervisa bancos, cooperativas, aseguradoras y emisores de valores. Si quieres saber si una entidad que te ofrece un crédito está fiscalizada, aquí se verifica. Publica además los informes de endeudamiento que citamos en los módulos anteriores.',
        },
        {
          id: 't3',
          titulo: 'SERNAC',
          definicion:
            'Servicio Nacional del Consumidor. Defiende tus derechos frente a proveedores, incluidos los financieros. Recibe reclamos cuando la entidad no responde o responde mal, y puede sancionar prácticas abusivas. Es el que te interesa cuando el problema es un cobro indebido o información poco clara.',
        },
        {
          id: 't4',
          titulo: 'SII',
          definicion:
            'Servicio de Impuestos Internos. Administra los tributos y fiscaliza que se cumplan las obligaciones tributarias. Es el que opera la boleta y la factura electrónica, así que aparece apenas empiezas a vender algo de manera formal.',
        },
        {
          id: 't5',
          titulo: 'Fintech y bancos digitales',
          definicion:
            'Empresas que ofrecen servicios financieros sin sucursales: cuentas digitales, tarjetas prepago, plataformas de inversión y créditos en línea. La Ley FinTech de 2023 creó un marco para regularlas. Antes de usar una, vale la misma pregunta de siempre: ¿está registrada y fiscalizada?',
        },
      ],
      fuente:
        'La tasa de política monetaria de 4,75 % corresponde a octubre de 2025 y cambia varias veces al año. Consulta la vigente en bcentral.cl.',
    },

    {
      id: 'p4',
      tipo: 'emparejar',
      etiqueta: 'Practica',
      titulo: '¿A quién le corresponde?',
      instruccion: 'Toca una situación y después la institución que corresponde.',
      izquierdaTitulo: 'Situación',
      derechaTitulo: 'Institución',
      pares: [
        {
          id: 'e1',
          izquierda: 'Te cobraron un seguro que nunca contrataste y el banco no responde',
          derecha: 'SERNAC',
        },
        {
          id: 'e2',
          izquierda: 'Quieres verificar si la financiera que te ofrece un crédito está fiscalizada',
          derecha: 'CMF',
        },
        {
          id: 'e3',
          izquierda: 'Necesitas emitir una boleta por un servicio que prestaste',
          derecha: 'SII',
        },
        {
          id: 'e4',
          izquierda: 'Quieres entender por qué subieron las tasas de todos los créditos',
          derecha: 'Banco Central',
        },
      ],
      bloquea: true,
    },

    {
      id: 'p5',
      tipo: 'contenido',
      etiqueta: 'Tus derechos',
      titulo: 'Lo que puedes exigir y lo que te toca cumplir',
      parrafos: [
        'Ser consumidor financiero te da derechos concretos, no solo buenas intenciones. La mayoría de la gente no los usa simplemente porque no sabe que existen.',
      ],
      puntos: [
        'Derecho a información clara: puedes exigir que te informen el CAE, las comisiones, los plazos y todas las condiciones antes de firmar. Si algo no se entiende, pedir que lo expliquen es parte del derecho.',
        'Derecho a retracto: la ley contempla la posibilidad de arrepentirse de ciertos créditos de consumo dentro de un plazo acotado, siempre que no hayas usado el dinero. El material de este curso menciona diez días; las condiciones exactas dependen del producto, así que verifícalas con la entidad o con el SERNAC antes de contar con ellas.',
        'Derecho a reclamo: ante un cobro injustificado o un mal servicio puedes reclamar primero a la entidad y después al SERNAC, guardando siempre el número de la gestión.',
        'Deber de pago puntual: cumplir las fechas evita intereses, mora y registro negativo.',
        'Deber de informar: si cambian tus datos o si te vas a atrasar en un pago, avisar a tiempo abre opciones que después desaparecen.',
      ],
      nota: 'El deber de informar es el más subestimado. Una llamada antes de atrasarte suele abrir una renegociación; la misma llamada tres meses después ya se hace con cobranza en el medio.',
    },

    {
      id: 'p6',
      tipo: 'caso',
      etiqueta: 'Caso',
      titulo: 'Camila se arrepintió',
      escenario: [
        'Camila firmó el martes un crédito de consumo de $2.000.000 para cambiar el auto. Estamos a jueves, la plata ya está en su cuenta pero no la ha tocado.',
        'Revisando el contrato con calma descubre que el CAE es bastante más alto de lo que le habían dicho verbalmente en la sucursal, y que el crédito incluye dos seguros que ella no recuerda haber aceptado.',
      ],
      pregunta: '¿Qué le conviene hacer a Camila?',
      elegir: 2,
      opciones: [
        {
          id: 'o1',
          texto:
            'Consultar cuanto antes si puede ejercer el derecho a retracto, ya que no ha usado el dinero',
          correcta: true,
        },
        {
          id: 'o2',
          texto:
            'Reclamar por escrito a la entidad por los seguros y por la diferencia con lo que le informaron, y guardar el número de la gestión',
          correcta: true,
        },
        {
          id: 'o3',
          texto: 'Gastar la plata rápido, porque una vez usada el banco ya no puede cobrarle seguros',
          correcta: false,
        },
        {
          id: 'o4',
          texto: 'Esperar al primer estado de cuenta para ver si los cobros aparecen de verdad',
          correcta: false,
        },
        {
          id: 'o5',
          texto: 'Dejar de pagar las cuotas hasta que el banco le explique el CAE',
          correcta: false,
        },
      ],
      explicacion:
        'Camila está justo en la ventana donde el retracto puede aplicar: firmó hace dos días y no ha usado el dinero. Esa condición es clave y desaparece apenas gasta la plata, así que lo primero es consultar el plazo y los requisitos exactos. En paralelo, el reclamo por escrito deja constancia de la diferencia entre lo que le informaron y lo que dice el contrato, que es lo que después permite acudir al SERNAC. Las otras tres opciones empeoran su posición: gastar el dinero cierra la puerta del retracto, esperar consume el plazo, y dejar de pagar la pone en mora, que es un problema nuevo que no resuelve el original.',
      bloquea: true,
    },

    {
      id: 'p7',
      tipo: 'contenido',
      etiqueta: 'Lo que viene',
      titulo: 'Qué está cambiando',
      bajada: 'Tres transformaciones que estaban en marcha cuando se escribió este material.',
      parrafos: [
        'El sistema financiero chileno lleva varios años modernizándose, y los cambios apuntan en una misma dirección: más competencia y más información disponible para comparar.',
      ],
      puntos: [
        'Finanzas abiertas. La Ley FinTech de 2023 estableció un sistema para que, con tu autorización, tus datos financieros puedan compartirse entre instituciones. La idea es que puedas comparar y cambiarte de proveedor más fácil, sin partir de cero cada vez.',
        'Registro de deuda consolidada. Un registro que reúne los saldos de crédito de cada persona en un solo lugar, para que las entidades evalúen el riesgo con información completa. Para quien está al día puede significar mejores condiciones; para quien no, evaluaciones más estrictas.',
        'Digitalización. Los pagos electrónicos, las cuentas digitales y las plataformas de inversión accesibles se expandieron fuerte y siguen creciendo. Más acceso, pero también más responsabilidad sobre tus propias claves y datos.',
      ],
      nota: 'Compartir tus datos financieros siempre es una decisión tuya y siempre requiere tu autorización. Antes de autorizar, pregúntate qué te dan a cambio y por cuánto tiempo.',
      fuente:
        'Estos tres procesos estaban en implementación cuando se redactó el material, en 2025. Antes de usar esta pantalla con usuarios reales hay que verificar en qué estado están hoy.',
    },

    {
      id: 'p8',
      tipo: 'quiz',
      etiqueta: 'Evaluación',
      titulo: 'Comprueba lo que entendiste',
      instruccion: 'Tres preguntas. Después de cada una vas a ver por qué.',
      bloquea: true,
      preguntas: [
        {
          id: 'q1',
          texto: '¿Qué organismo vela por la estabilidad de precios y emite el peso chileno?',
          opciones: [
            { id: 'a', texto: 'SERNAC', correcta: false },
            { id: 'b', texto: 'Banco Central', correcta: true },
            { id: 'c', texto: 'CMF', correcta: false },
            { id: 'd', texto: 'BancoEstado', correcta: false },
          ],
          explicacion:
            'El Banco Central emite la moneda y cuida su valor. Ojo con la última alternativa: BancoEstado es un banco comercial de propiedad del Estado, no el banco central del país. Son cosas distintas y se confunden seguido.',
        },
        {
          id: 'q2',
          texto: '¿Cuál es el objetivo del Registro de Deuda Consolidada?',
          opciones: [
            { id: 'a', texto: 'Publicar la deuda de las personas para sancionarlas', correcta: false },
            {
              id: 'b',
              texto: 'Unificar la información de créditos y mejorar la evaluación de riesgo',
              correcta: true,
            },
            { id: 'c', texto: 'Eliminar todos los créditos de consumo', correcta: false },
            { id: 'd', texto: 'Aplicar un impuesto al endeudamiento', correcta: false },
          ],
          explicacion:
            'Reúne en un solo lugar los saldos de crédito de cada persona para que las entidades evalúen con información completa. No es un castigo ni una lista pública: es información para decidir mejor a quién y en qué condiciones prestar. Para quien está al día, tener el historial completo a la vista puede jugar a favor.',
        },
        {
          id: 'q3',
          texto: 'La Ley FinTech de 2023 establece que:',
          opciones: [
            { id: 'a', texto: 'El Banco Central subirá la tasa de interés cada año', correcta: false },
            { id: 'b', texto: 'Solo los bancos pueden ofrecer servicios de pago', correcta: false },
            {
              id: 'c',
              texto:
                'Existirá un sistema de finanzas abiertas que permitirá compartir datos con consentimiento del cliente',
              correcta: true,
            },
            { id: 'd', texto: 'Se prohíben las fintech en Chile', correcta: false },
          ],
          explicacion:
            'La ley va en la dirección contraria a prohibir: crea un marco para que las fintech operen reguladas y establece el sistema de finanzas abiertas. La palabra clave es consentimiento: los datos se comparten porque tú lo autorizas, no de forma automática.',
        },
      ],
    },

    {
      id: 'p9',
      tipo: 'cierre',
      etiqueta: 'Cierre del nivel',
      titulo: 'Lo que te llevas',
      resumen: [
        'Cada problema tiene su institución: el Banco Central cuida el valor de la moneda, la CMF fiscaliza a las entidades, el SERNAC defiende al consumidor y el SII administra los impuestos.',
        'Antes de firmar, la pregunta es si la entidad está fiscalizada. Si no lo está, las protecciones que crees tener probablemente no aplican.',
        'Tienes derecho a información clara, a reclamar y, en ciertos créditos, a retractarte dentro de un plazo si no has usado el dinero.',
        'Avisar antes de atrasarte abre opciones que después desaparecen. Es el deber que más se subestima y el que más sirve.',
      ],
      pasoSemana:
        'Elige un producto financiero que ya tengas, una tarjeta o una cuenta, y busca tres datos en su contrato: quién lo fiscaliza, cuál es el CAE y qué seguros vienen asociados. Si alguno de los tres no aparece o no se entiende, esa es tu primera consulta a la entidad. Con esto cierras el Nivel 1: ya tienes con qué mirar tu propia situación con números en vez de con sensaciones.',
    },
  ],
}
