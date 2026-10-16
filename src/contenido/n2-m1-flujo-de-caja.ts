import type { Leccion } from '../tipos'

/**
 * Nivel 2, Módulo 2.1 — Ingresos variables y capital de trabajo.
 * Adaptado de `contenido para los cursos/Pym_Edu_nivel2.pdf`.
 *
 * CIFRAS DE 2025, SIN VERIFICAR A HOY. Los plazos de pago y los indicadores de
 * emprendedores vienen de prensa de 2025 citada en el material. Se muestran con
 * su fecha. Los programas públicos que menciona el original (FOGAPE Chile
 * Apoya, Negocios Digitales 2025) se describen sin sus condiciones exactas:
 * cambian cada año y no se pueden dar por vigentes.
 */
export const leccion: Leccion = {
  id: 'n2-m1',
  nivel: 'Nivel 2 · Tu negocio',
  curso: 'Gestión del emprendimiento',
  modulo: 'Módulo 2.1',
  area: 'Gestión',
  titulo: 'El flujo de caja de tu negocio',
  actualizada: 'octubre de 2026',
  fuentes: [
    'Estudios de prensa económica sobre plazos de pago a pymes chilenas, 2025.',
    'Programas de apoyo a MIPEs vigentes en 2025 (FOGAPE, Sercotec).',
  ],
  pantallas: [
    {
      id: 'p1',
      tipo: 'portada',
      etiqueta: 'Nivel 2 · Módulo 2.1',
      titulo: 'El flujo de caja de tu negocio',
      bajada:
        'Un negocio rentable puede quebrar igual. No por vender poco, sino porque la plata entra después de que hay que pagarla.',
      duracionMin: 14,
      objetivos: [
        'Entender por qué utilidad y caja no son lo mismo',
        'Reconocer el descalce entre lo que pagas y lo que cobras',
        'Calcular cuántos días aguanta tu negocio con lo que tiene',
        'Conocer las salidas cuando falta liquidez, con y sin deuda',
      ],
    },

    {
      id: 'p2',
      tipo: 'contenido',
      etiqueta: 'El problema',
      titulo: 'Vendiste, pero todavía no te pagan',
      parrafos: [
        'Hay una frase que todo contador repite y que cuesta entender hasta que se vive: la utilidad es una opinión, la caja es un hecho. Puedes cerrar un mes excelente en el papel y no tener con qué pagar sueldos.',
        'La razón es simple. Compras los insumos hoy y los pagas hoy. Produces y vendes. Y cobras treinta, sesenta o noventa días después. Entre esos dos momentos tienes que seguir pagando arriendo, sueldos y proveedores con plata que todavía no llega.',
        'No es un problema de mala administración: es la estructura normal del negocio. Lo que distingue a quien sobrevive no es evitar el descalce, es saber cuánto dura y tener con qué cubrirlo.',
      ],
      puntos: [
        'En 2025 se estimaba que a las microempresas chilenas les pagaban en unos 53 días promedio, frente a 38 días de las grandes empresas y 34 del sector público.',
        'El 43,8 % de los emprendedores declaraba cubrir sus gastos con dificultad, y un 9,6 % estaba derechamente en crisis financiera.',
        'El 74 % nunca había recibido capacitación financiera.',
      ],
      nota: 'Mientras más chico el negocio, más tarde le pagan y menos espalda tiene para aguantar. Es exactamente al revés de lo que convendría.',
      fuente:
        'Cifras de estudios de prensa económica de 2025. Úsalas como orden de magnitud, no como el dato de hoy.',
    },

    {
      id: 'p3',
      tipo: 'tarjetas',
      etiqueta: 'Cuatro palabras',
      titulo: 'Las que se confunden entre sí',
      instruccion: 'Toca cada una para ver qué significa.',
      tarjetas: [
        {
          id: 't1',
          titulo: 'Utilidad',
          definicion:
            'Lo que ganaste: ventas menos costos, estén pagadas o no. Es una cuenta contable y puede incluir facturas que todavía no cobras. Un negocio con utilidad alta y caja vacía es completamente posible.',
        },
        {
          id: 't2',
          titulo: 'Flujo de caja',
          definicion:
            'La plata que efectivamente entró y salió en un periodo. No pregunta si una venta está facturada: pregunta si el dinero llegó a la cuenta. Es lo que determina si puedes pagar los sueldos el día 30.',
        },
        {
          id: 't3',
          titulo: 'Ciclo de caja',
          definicion:
            'El tiempo entre que pagas los insumos y cobras la venta que hiciste con ellos. Si pagas al contado y cobras a 60 días, tu ciclo es de 60 días: ese es el periodo que tienes que financiar con plata propia.',
        },
        {
          id: 't4',
          titulo: 'Capital de trabajo',
          definicion:
            'La plata que el negocio necesita tener disponible para funcionar mientras espera cobrar. No es ganancia ni ahorro: es el colchón que hace que el ciclo de caja no te detenga. Cuando falta, hay que pedirlo prestado.',
        },
      ],
      nota: 'Si entiendes la diferencia entre las dos primeras, ya evitaste el error más caro de un negocio chico: celebrar un mes bueno y gastarse una plata que todavía no llega.',
    },

    {
      id: 'p4',
      tipo: 'simulador',
      etiqueta: 'Pruébalo',
      titulo: '¿Cuántos días aguanta tu negocio?',
      instruccion:
        'Pon lo que tienes disponible hoy y lo que gastas en un mes normal. Vas a ver cuánto te alcanza si dejaras de vender mañana.',
      calculo: 'diasDeCaja',
      etiquetas: {
        saldo: '¿Cuánta plata tiene disponible el negocio hoy?',
        gastoMensual: '¿Cuánto gasta el negocio en un mes normal?',
      },
      inicial: { saldo: 1200000, gastoMensual: 1800000 },
      lectura: 'Tu negocio aguanta',
      nota: 'Es la pregunta que hace cualquier banco antes de prestarte, y casi nadie se la hace antes. Saber el número te da margen para negociar en vez de aceptar lo primero que te ofrezcan.',
    },

    {
      id: 'p5',
      tipo: 'contenido',
      etiqueta: 'Qué hacer',
      titulo: 'Cómo ganar días de caja',
      parrafos: [
        'Hay dos maneras de mejorar la caja: que la plata entre antes o que salga después. Casi todas las herramientas son una u otra.',
      ],
      puntos: [
        'Registra todos los días. No a fin de mes: todos los días. Un flujo de caja que se arma de memoria llega tarde para servir de algo.',
        'Pronostica con lo que ya sabes. Tus ventas de los últimos meses y las fechas de vencimiento de tus facturas te dicen bastante sobre las próximas semanas. Ajusta por temporada: enero no se parece a diciembre.',
        'Negocia los dos lados. Pide a tus clientes plazos más cortos o un anticipo, y a tus proveedores plazos más largos. Cada día que ganas en cualquiera de los dos extremos es un día menos que financiar.',
        'Ten un fondo de al menos un mes de gastos. Es lo que convierte un atraso de un cliente en una molestia y no en una emergencia.',
        'Considera el factoring antes que un crédito. Vender una factura por cobrar adelanta plata que ya es tuya, a cambio de una comisión. No es deuda nueva.',
        'Revisa los programas públicos vigentes. Existen líneas con garantía estatal y apoyos a la digitalización, pero sus montos y condiciones cambian cada año: confirma lo que está abierto hoy antes de contar con ello.',
      ],
      nota: 'El orden importa. Primero cobrar mejor, después estirar pagos, después adelantar facturas, y solo al final endeudarse. Cada escalón cuesta más que el anterior.',
    },

    {
      id: 'p6',
      tipo: 'caso',
      etiqueta: 'Caso',
      titulo: 'La imprenta de Hugo',
      escenario: [
        'Hugo tiene una imprenta chica. Este mes cerró el mejor trimestre de su historia: facturó $4.200.000 a tres clientes empresa, todos a 60 días. Está contento.',
        'El problema es que ya pagó $2.800.000 en papel, tinta y el sueldo de su ayudante. Le quedan $350.000 en la cuenta y el día 5 vence el arriendo del local, que son $450.000.',
        'Su banco le ofrece un crédito de consumo a 18 meses. Una empresa de factoring le ofrece adelantarle una de las facturas, de $1.500.000, descontando un 3 % de comisión.',
      ],
      pregunta: '¿Qué le conviene hacer a Hugo?',
      elegir: 2,
      opciones: [
        {
          id: 'o1',
          texto:
            'Vender al factoring una factura, porque adelanta plata que ya es suya y resuelve el mes sin tomar deuda nueva',
          correcta: true,
        },
        {
          id: 'o2',
          texto:
            'Renegociar con sus clientes los plazos de las próximas facturas, para que el problema no se repita el trimestre siguiente',
          correcta: true,
        },
        {
          id: 'o3',
          texto: 'Tomar el crédito de consumo a 18 meses para cubrir el arriendo',
          correcta: false,
        },
        {
          id: 'o4',
          texto: 'Dejar de pagar el arriendo este mes y ponerse al día cuando cobre',
          correcta: false,
        },
        {
          id: 'o5',
          texto: 'Bajar los precios para vender más rápido y recuperar caja',
          correcta: false,
        },
      ],
      explicacion:
        'Hugo no tiene un problema de rentabilidad: tiene $4.200.000 por cobrar y un hoyo de caja de unas semanas. Para eso sirve el factoring, que adelanta una factura concreta y se termina cuando el cliente paga. El 3 % de $1.500.000 son $45.000, bastante menos que 18 meses de intereses por un crédito de consumo, que además quedaría pesando mucho después de resuelto el problema. Renegociar plazos ataca la causa y no el síntoma. Dejar de pagar el arriendo agrega un conflicto con el arrendador. Y bajar precios es lo peor: achica el margen justo cuando el negocio necesita cada peso, y el problema nunca fue que no vendiera.',
      bloquea: true,
    },

    {
      id: 'p7',
      tipo: 'emparejar',
      etiqueta: 'Practica',
      titulo: '¿Qué herramienta corresponde?',
      instruccion: 'Toca una situación y después la herramienta que le corresponde.',
      izquierdaTitulo: 'Situación',
      derechaTitulo: 'Herramienta',
      pares: [
        {
          id: 'e1',
          izquierda: 'Tienes facturas emitidas y necesitas la plata ahora',
          derecha: 'Factoring',
        },
        {
          id: 'e2',
          izquierda: 'Quieres comprar una máquina que vas a usar varios años',
          derecha: 'Crédito de inversión o leasing',
        },
        {
          id: 'e3',
          izquierda: 'Tus gastos son estables pero las ventas varían mucho mes a mes',
          derecha: 'Fondo de emergencia del negocio',
        },
        {
          id: 'e4',
          izquierda: 'No sabes si vas a poder pagar los sueldos en tres semanas',
          derecha: 'Flujo de caja proyectado',
        },
      ],
      bloquea: true,
    },

    {
      id: 'p8',
      tipo: 'aplicar',
      etiqueta: 'Tu negocio',
      titulo: 'Tu descalce real',
      instruccion:
        'Responde con lo que sepas ahora, aunque sea aproximado. Queda guardado en tu navegador.',
      campos: [
        {
          id: 'c1',
          etiqueta: '¿En cuántos días te pagan tus clientes, en promedio?',
          ayuda: 'Si vendes al contado, escribe 0. Si trabajas con empresas, probablemente sean 30 o más.',
          formato: 'texto',
        },
        {
          id: 'c2',
          etiqueta: '¿Cuánto tienes hoy por cobrar?',
          ayuda: 'Suma todas las facturas emitidas que todavía no te pagan.',
          formato: 'monto',
        },
        {
          id: 'c3',
          etiqueta: '¿Cuál es el gasto que no podrías postergar un mes?',
          ayuda: 'Arriendo, sueldos, el proveedor que te corta el suministro. Ese define tu piso.',
          formato: 'texto',
        },
      ],
      cierre:
        'Si lo que tienes por cobrar es mucho mayor que tu caja disponible, no tienes un problema de ventas: tienes un problema de plazos. Eso se arregla negociando o adelantando facturas, no vendiendo más.',
    },

    {
      id: 'p9',
      tipo: 'quiz',
      etiqueta: 'Evaluación',
      titulo: 'Comprueba lo que entendiste',
      instruccion: 'Tres preguntas. Después de cada una vas a ver por qué.',
      bloquea: true,
      preguntas: [
        {
          id: 'q1',
          texto: '¿Por qué el ciclo de caja puede provocar problemas de liquidez?',
          opciones: [
            { id: 'a', texto: 'Porque el negocio vende a pérdida', correcta: false },
            {
              id: 'b',
              texto: 'Porque se paga a los proveedores antes de cobrarle a los clientes',
              correcta: true,
            },
            { id: 'c', texto: 'Porque los impuestos se pagan dos veces al año', correcta: false },
            { id: 'd', texto: 'Porque la inflación reduce el valor de las ventas', correcta: false },
          ],
          explicacion:
            'El ciclo de caja es el tiempo entre pagar los insumos y cobrar la venta. Si pagas al contado y cobras a 60 días, tienes que financiar dos meses de operación con plata propia. Nada de esto tiene que ver con vender a pérdida: un negocio perfectamente rentable puede quedarse sin caja por esta razón, y es la causa más común de que un negocio chico que vende bien igual se ahogue.',
        },
        {
          id: 'q2',
          texto: '¿Cuál de estas mejora tu caja sin tomar deuda nueva?',
          opciones: [
            { id: 'a', texto: 'Pedir un crédito de consumo', correcta: false },
            { id: 'b', texto: 'Usar la línea de crédito de la cuenta corriente', correcta: false },
            {
              id: 'c',
              texto: 'Vender una factura por cobrar mediante factoring',
              correcta: true,
            },
            { id: 'd', texto: 'Sacar un avance en efectivo de la tarjeta', correcta: false },
          ],
          explicacion:
            'El factoring adelanta el cobro de una factura que ya emitiste: estás cobrando antes algo que ya te deben, a cambio de una comisión. Las otras tres son deuda: plata que no es tuya y que vas a devolver con intereses. Acortar plazos de cobro y negociar plazos de pago con proveedores también mejoran la caja sin endeudarte.',
        },
        {
          id: 'q3',
          texto: '¿Qué mide la cantidad de "días de caja" de un negocio?',
          opciones: [
            { id: 'a', texto: 'Cuántos días demora en cobrar sus facturas', correcta: false },
            {
              id: 'b',
              texto: 'Cuánto tiempo puede seguir operando con la plata que tiene disponible',
              correcta: true,
            },
            { id: 'c', texto: 'Cuántos días al mes el negocio es rentable', correcta: false },
            { id: 'd', texto: 'El plazo que da el SII para declarar impuestos', correcta: false },
          ],
          explicacion:
            'Se calcula dividiendo la plata disponible por el gasto de cada día. Responde a una pregunta muy concreta: si mañana dejara de entrar un peso, ¿cuánto aguanto? Por debajo de treinta días, cualquier cliente que se atrase se convierte en una emergencia; sobre sesenta hay margen para negociar en vez de aceptar lo primero que aparezca.',
        },
      ],
    },

    {
      id: 'p10',
      tipo: 'cierre',
      etiqueta: 'Cierre',
      titulo: 'Lo que te llevas',
      resumen: [
        'La utilidad dice si el negocio sirve; la caja dice si sobrevive este mes. Son dos preguntas distintas y hay que mirar las dos.',
        'El descalce entre pagar y cobrar es normal. Lo peligroso no es tenerlo, es no saber cuántos días dura.',
        'Primero cobrar antes, después pagar más tarde, después adelantar facturas. Endeudarse va al final, no al principio.',
        'Un negocio que vende bien y no tiene plata tiene un problema de plazos, no de ventas. Bajar precios lo empeora.',
      ],
      pasoSemana:
        'Anota todo lo que tienes por cobrar con su fecha de pago, y al lado todo lo que tienes que pagar en las próximas cuatro semanas con su fecha. Ponlos en una sola línea de tiempo. El día donde los pagos superan a los cobros es tu problema, y ahora lo ves con semanas de anticipación en vez de el día que llega.',
    },
  ],
}
