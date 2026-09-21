import type { Leccion } from '../tipos'

/**
 * Nivel 1, Módulo 1.5 — Evitar el sobreendeudamiento.
 * Adaptado de `contenido para los cursos/Pym_Edu_nivel1.pdf`.
 *
 * MATIZ LEGAL: el material original afirmaba que la Ley de Insolvencia y
 * Reemprendimiento permite renegociar "sin perder tus bienes". Eso no es
 * exacto como afirmación general y depende de cada caso, así que aquí se
 * describe la existencia del procedimiento y se remite a asesorarse. Antes de
 * publicar, esta pantalla necesita revisión de alguien competente en la materia.
 */
export const leccion: Leccion = {
  id: 'n1-m5',
  nivel: 'Nivel 1 · Fundamentos',
  curso: 'Fundamentos de educación financiera',
  modulo: 'Módulo 1.5',
  area: 'Finanzas',
  titulo: 'Evitar el sobreendeudamiento',
  actualizada: 'septiembre de 2026',
  fuentes: [
    'Comisión para el Mercado Financiero (CMF), informe de endeudamiento con datos a junio de 2024.',
    'Superintendencia de Insolvencia y Reemprendimiento, procedimientos de renegociación.',
  ],
  pantallas: [
    {
      id: 'p1',
      tipo: 'portada',
      etiqueta: 'Nivel 1 · Módulo 1.5',
      titulo: 'Evitar el sobreendeudamiento',
      bajada:
        'Casi nadie se endeuda de más por una decisión grande. Se llega por muchas decisiones chicas que nadie sumó.',
      duracionMin: 13,
      objetivos: [
        'Reconocer las señales de alerta antes de que sea tarde',
        'Calcular tu carga financiera y saber leerla',
        'Conocer las salidas que existen si ya estás complicado',
        'Distinguir una deuda que ayuda de una que ahoga',
      ],
    },

    {
      id: 'p2',
      tipo: 'contenido',
      etiqueta: 'Lo esencial',
      titulo: '¿Qué es estar sobreendeudado?',
      parrafos: [
        'Una persona está sobreendeudada cuando sus ingresos no alcanzan para cubrir al mismo tiempo el pago de sus deudas y sus gastos básicos. No es una cuestión de cuánto debes en total: es la relación entre lo que debes pagar cada mes y lo que recibes cada mes.',
        'El indicador que se usa en Chile es la carga financiera: qué porcentaje de tu ingreso mensual se va en pagar cuotas. Es un número simple de calcular y dice bastante más que el monto total de la deuda.',
        'A junio de 2024, el 16,5 % de los deudores en Chile presentaba carga financiera alta, y la mediana de la deuda de las personas era de $1,9 millones.',
      ],
      nota: 'Deber plata no es el problema. Un crédito hipotecario de veinte años puede ser una buena decisión y una deuda de consumo de seis meses puede ser una mala. Lo que define es si puedes pagarla sin dejar de vivir.',
      fuente:
        'Informe de endeudamiento de la CMF con datos a junio de 2024. Revisa el informe vigente en cmfchile.cl.',
    },

    {
      id: 'p3',
      tipo: 'tarjetas',
      etiqueta: 'Reconócelo',
      titulo: 'Cuatro señales de alerta',
      instruccion: 'Toca cada señal para ver qué está indicando en realidad.',
      tarjetas: [
        {
          id: 't1',
          titulo: 'Pagas el mínimo de la tarjeta casi siempre',
          definicion:
            'Cuando el mínimo deja de ser la excepción y pasa a ser la norma, significa que tu ingreso ya no alcanza a cubrir lo que gastaste el mes anterior. La deuda deja de bajar y el interés se acumula sobre un saldo que se mueve muy poco.',
        },
        {
          id: 't2',
          titulo: 'Pides un crédito para pagar otro crédito',
          definicion:
            'Esta es la señal más clara de todas. Refinanciar con un plan y una tasa mejor es una estrategia válida; pedir prestado para cubrir la cuota del mes es otra cosa. La diferencia está en si baja el costo total o solo se corre la fecha.',
        },
        {
          id: 't3',
          titulo: 'Más del 30 % de tu ingreso se va en cuotas',
          definicion:
            'Por encima de ese nivel pierdes la capacidad de absorber cualquier imprevisto. Una muela, una multa o un mes con menos ventas te obligan a endeudarte de nuevo, y ahí empieza la espiral.',
        },
        {
          id: 't4',
          titulo: 'Tienes cuotas atrasadas o te llaman de cobranza',
          definicion:
            'Es la señal más tardía: cuando llega, el problema ya lleva meses. Conviene actuar antes, pero si ya estás aquí, lo peor que puedes hacer es no contestar. Las condiciones para renegociar son mejores antes de caer en mora que después.',
        },
      ],
    },

    {
      id: 'p4',
      tipo: 'simulador',
      etiqueta: 'Pruébalo',
      titulo: 'Tu carga financiera',
      instruccion:
        'Suma todas tus cuotas mensuales de deuda y ponlas aquí junto a tu ingreso del mes.',
      calculo: 'cargaFinanciera',
      etiquetas: {
        ingreso: '¿Cuánto recibes al mes?',
        cuotas: '¿Cuánto pagas al mes en cuotas de deudas?',
      },
      inicial: { ingreso: 700000, cuotas: 196000 },
      lectura: 'De tu ingreso se va en deudas',
      nota: 'Incluye todo: tarjetas, créditos de consumo, casas comerciales, el auto, el pie de algo en cuotas. Lo que queda fuera del cálculo es justamente lo que suele desordenar el mes.',
      fuente:
        'Los tramos del semáforo siguen la recomendación habitual: hasta 25 % es manejable, sobre 30 % conviene renegociar.',
    },

    {
      id: 'p5',
      tipo: 'contenido',
      etiqueta: 'Qué hacer',
      titulo: 'Las salidas que existen',
      parrafos: [
        'Si el número te salió alto, hay salidas y ninguna requiere esperar a que mejore solo. Ordenadas de la más simple a la más seria:',
      ],
      puntos: [
        'Reducir gastos y subir el abono. Es lo primero y lo más rápido: cada peso por sobre la cuota mínima baja el capital y acorta el plazo.',
        'Renegociar con la entidad. Puedes pedir extender el plazo, bajar la tasa o consolidar varias deudas en una. Baja la cuota mensual, aunque casi siempre sube el costo total: es aire ahora a cambio de pagar más después.',
        'Consolidar. Juntar varias deudas caras en un solo crédito más barato. Funciona si de verdad la tasa nueva es menor y si no vuelves a usar los cupos que quedaron libres.',
        'Procedimiento formal de renegociación. En Chile existe un procedimiento ante la Superintendencia de Insolvencia y Reemprendimiento para personas que no pueden pagar. Sus condiciones, requisitos y consecuencias dependen de cada caso, así que hay que informarse antes de iniciarlo.',
        'Para un negocio, el factoring. Permite convertir facturas por cobrar en liquidez inmediata, a cambio de un descuento. Sirve cuando el problema es que el cliente paga a sesenta días, no cuando el negocio no es rentable.',
      ],
      nota: 'Ninguna de estas salidas funciona si el gasto que generó la deuda sigue igual. Renegociar sin cambiar el hábito solo compra tiempo para llegar al mismo lugar con más intereses.',
    },

    {
      id: 'p6',
      tipo: 'emparejar',
      etiqueta: 'Practica',
      titulo: '¿Qué herramienta corresponde?',
      instruccion: 'Toca una situación y después la herramienta que le corresponde.',
      izquierdaTitulo: 'Situación',
      derechaTitulo: 'Herramienta',
      pares: [
        {
          id: 'e1',
          izquierda: 'Tienes cuatro deudas caras y te pierdes con las fechas',
          derecha: 'Consolidar en un solo crédito',
        },
        {
          id: 'e2',
          izquierda: 'La cuota es muy alta para tu ingreso de este año',
          derecha: 'Renegociar plazo y tasa',
        },
        {
          id: 'e3',
          izquierda: 'Tu negocio vendió bien, pero el cliente paga a 60 días',
          derecha: 'Factoring',
        },
        {
          id: 'e4',
          izquierda: 'Quieres saber si estás complicado antes de que se note',
          derecha: 'Calcular tu carga financiera',
        },
      ],
      bloquea: true,
    },

    {
      id: 'p7',
      tipo: 'caso',
      etiqueta: 'Caso',
      titulo: 'El almacén de Patricia',
      escenario: [
        'Patricia tiene un almacén de barrio. Gana alrededor de $900.000 al mes entre el negocio y una pensión. Paga $150.000 en un crédito de consumo, $120.000 en la tarjeta de una casa comercial y $90.000 en la tarjeta del banco, donde hace meses abona solo el mínimo.',
        'Este mes se le echó a perder el refrigerador de las bebidas. Repararlo cuesta $300.000 y sin él pierde buena parte de sus ventas de verano.',
        'Su banco le ofrece un crédito rápido para cubrirlo.',
      ],
      pregunta: '¿Qué debería hacer Patricia antes de aceptar ese crédito?',
      elegir: 2,
      opciones: [
        {
          id: 'o1',
          texto: 'Calcular su carga financiera actual y ver cuánto le quedaría con una cuota más',
          correcta: true,
        },
        {
          id: 'o2',
          texto:
            'Pedir renegociar o consolidar las deudas que ya tiene, sobre todo la tarjeta del mínimo',
          correcta: true,
        },
        {
          id: 'o3',
          texto: 'Sacar un avance en efectivo de la tarjeta del banco, que es más rápido',
          correcta: false,
        },
        {
          id: 'o4',
          texto: 'Aceptar el crédito de inmediato, porque sin refrigerador pierde ventas',
          correcta: false,
        },
        {
          id: 'o5',
          texto: 'Dejar de pagar la casa comercial este mes para juntar la reparación',
          correcta: false,
        },
      ],
      explicacion:
        'Patricia ya paga $360.000 de $900.000: un 40 % de carga financiera, bastante por encima de lo recomendable. Sumar una cuota más sin mirar ese número es lo que convierte un problema puntual en uno permanente. Y la tarjeta en la que abona el mínimo es justamente la deuda más cara que tiene: renegociarla libera más espacio que cualquier crédito nuevo. El avance en efectivo es la opción más cara de todas. Y dejar de pagar sin avisar no aplaza el problema: agrega mora, intereses y cobranza. Ojo con el matiz: la urgencia de Patricia es real y el refrigerador probablemente hay que arreglarlo. Lo que está en discusión no es si repararlo, sino con qué plata.',
      bloquea: true,
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
          texto: 'Si tu carga financiera supera el 30 % de tu ingreso, se recomienda:',
          opciones: [
            { id: 'a', texto: 'Incrementar el uso de tu tarjeta', correcta: false },
            { id: 'b', texto: 'Buscar financiamiento informal', correcta: false },
            { id: 'c', texto: 'Renegociar tus deudas o disminuir gastos', correcta: true },
            { id: 'd', texto: 'Pedir más tarjetas', correcta: false },
          ],
          explicacion:
            'Sobre el 30 % ya no queda margen para imprevistos, así que la salida es bajar la cuota mensual o el gasto, no agregar deuda. El financiamiento informal merece mención aparte: suele tener tasas muy superiores a las del sistema regulado y no ofrece las protecciones que sí existen con una entidad fiscalizada.',
        },
        {
          id: 'q2',
          texto:
            '¿Cuál era la mediana de la deuda de las personas en Chile según el informe de la CMF con datos a junio de 2024?',
          opciones: [
            { id: 'a', texto: '$900.000', correcta: false },
            { id: 'b', texto: '$1,9 millones', correcta: true },
            { id: 'c', texto: '$5 millones', correcta: false },
            { id: 'd', texto: '$10 millones', correcta: false },
          ],
          explicacion:
            'La mediana era de $1,9 millones: la mitad de los deudores debía menos y la mitad más. Sirve como referencia, pero recuerda que lo que define si una deuda es manejable no es el monto total sino la cuota mensual comparada con tu ingreso.',
        },
        {
          id: 'q3',
          texto: '¿Qué alternativa permite obtener liquidez inmediata vendiendo facturas pendientes?',
          opciones: [
            { id: 'a', texto: 'Crédito hipotecario', correcta: false },
            { id: 'b', texto: 'Leasing', correcta: false },
            { id: 'c', texto: 'Factoring', correcta: true },
            { id: 'd', texto: 'Invertir en acciones', correcta: false },
          ],
          explicacion:
            'El factoring adelanta el cobro de facturas ya emitidas a cambio de un descuento. No es deuda nueva en sentido estricto: es cobrar antes lo que ya te deben. El leasing es distinto, sirve para usar un bien pagando un arriendo con opción de compra, y el hipotecario financia una propiedad.',
        },
      ],
    },

    {
      id: 'p9',
      tipo: 'cierre',
      etiqueta: 'Cierre',
      titulo: 'Lo que te llevas',
      resumen: [
        'Lo que define el sobreendeudamiento no es cuánto debes, sino cuánto de tu ingreso se va en cuotas cada mes.',
        'Hasta 25 % de carga financiera es manejable; sobre 30 % conviene actuar antes de que aparezca el imprevisto que siempre aparece.',
        'Pedir un crédito para pagar otro es la señal más clara, y la diferencia con refinanciar está en si baja el costo total o solo se corre la fecha.',
        'Las salidas existen y funcionan mejor antes de caer en mora. Ninguna sirve si el gasto que generó la deuda sigue igual.',
      ],
      pasoSemana:
        'Haz una lista con todas tus cuotas mensuales, sin dejar ninguna fuera, y divídela por tu ingreso. Si el resultado pasa de 30 %, pide hora en tu banco esta misma semana para renegociar. Las condiciones que te ofrecen mientras estás al día son mucho mejores que las que te van a ofrecer después.',
    },
  ],
}
