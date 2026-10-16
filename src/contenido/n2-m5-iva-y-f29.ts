import type { Leccion } from '../tipos'

/**
 * Nivel 2, Módulo 2.5 — IVA y Formulario 29.
 * Adaptado de `contenido para los cursos/Pym_Edu_nivel2.pdf`.
 *
 * ESTE ES EL MÓDULO QUE MÁS NECESITA REVISIÓN TRIBUTARIA ANTES DE PUBLICARSE.
 *
 * El material trae plazos, porcentajes de multa e intereses "actualizados a
 * 2025". Son exactamente el tipo de dato que cambia y que, citado mal, le
 * cuesta plata a alguien. Decisiones tomadas aquí:
 *
 * - El mecanismo del IVA (débito menos crédito) es estable y se enseña directo.
 * - Los plazos y las multas se presentan como lo que decía el material en 2025,
 *   con una indicación explícita de verificar en sii.cl. No se afirman como
 *   vigentes.
 * - La tasa de IVA es un campo editable en el simulador, no un número fijo en
 *   el código, para que el ejercicio sobreviva a un cambio de tasa.
 */
export const leccion: Leccion = {
  id: 'n2-m5',
  nivel: 'Nivel 2 · Tu negocio',
  curso: 'Gestión del emprendimiento',
  modulo: 'Módulo 2.5',
  area: 'Tributario',
  titulo: 'IVA y Formulario 29',
  actualizada: 'octubre de 2026',
  fuentes: [
    'Servicio de Impuestos Internos, declaraciones mensuales F29.',
    'Plazos y multas según el material del curso, actualizados a 2025 y pendientes de verificación.',
  ],
  pantallas: [
    {
      id: 'p1',
      tipo: 'portada',
      etiqueta: 'Nivel 2 · Módulo 2.5',
      titulo: 'IVA y Formulario 29',
      bajada:
        'El IVA que cobras no es tuyo. Entender eso, y guardarlo aparte, evita el apuro de fin de mes que complica a tantos negocios.',
      duracionMin: 15,
      objetivos: [
        'Entender qué es el IVA y quién lo paga de verdad',
        'Distinguir el IVA débito del IVA crédito',
        'Calcular cuánto te toca pagar en un mes',
        'Saber qué pasa si declaras fuera de plazo',
      ],
    },

    {
      id: 'p2',
      tipo: 'contenido',
      etiqueta: 'Lo esencial',
      titulo: 'El IVA que cobras no es tuyo',
      parrafos: [
        'El Impuesto al Valor Agregado grava el consumo, y quien lo paga de verdad es el consumidor final. Tu negocio no lo paga: lo recauda. Lo cobras junto con la venta, lo guardas y después lo entregas.',
        'Ahí está el error que más complica a los negocios chicos: ver el total de la venta como ingreso propio. Si vendes algo en $119.000 con IVA incluido, tus ingresos son $100.000 y los otros $19.000 son del fisco, que pasaron por tu cuenta de ida.',
        'Si emites boletas o facturas electrónicas, cada mes tienes que presentar el Formulario 29 declarando el IVA de tus ventas y el de tus compras. Y esto es importante: hay que presentarlo incluso en un mes sin movimiento.',
      ],
      nota: 'Una práctica simple cambia todo: apenas entra una venta, transfiere el IVA a una cuenta aparte. Cuando llegue la fecha de pagar, la plata va a estar, y no vas a tener que elegir entre el SII y un proveedor.',
    },

    {
      id: 'p3',
      tipo: 'tarjetas',
      etiqueta: 'Cuatro palabras',
      titulo: 'Los términos del F29',
      instruccion: 'Toca cada uno para ver qué significa.',
      tarjetas: [
        {
          id: 't1',
          titulo: 'IVA débito',
          definicion:
            'El IVA de tus ventas: lo que cobraste a tus clientes por cuenta del fisco. Se llama débito porque es lo que debes entregar. Mientras más vendes, más alto es.',
        },
        {
          id: 't2',
          titulo: 'IVA crédito',
          definicion:
            'El IVA de tus compras: lo que ya pagaste al comprarle a tus proveedores, con factura. Se descuenta del débito, porque ese impuesto ya fue enterado por otro. Sin factura, no hay crédito.',
        },
        {
          id: 't3',
          titulo: 'Formulario 29',
          definicion:
            'La declaración mensual donde informas el débito, el crédito y otros impuestos. Lo presentas en sii.cl. La resta entre débito y crédito define si pagas y cuánto.',
        },
        {
          id: 't4',
          titulo: 'Remanente',
          definicion:
            'Lo que queda a tu favor cuando el IVA de tus compras supera al de tus ventas. Pasa en meses de mucha compra o poca venta. No se pierde: queda acumulado para descontarlo en los meses siguientes.',
        },
      ],
      nota: 'La resta es toda la mecánica: débito menos crédito. Si el resultado es positivo, pagas. Si es negativo, queda a favor para el mes siguiente.',
    },

    {
      id: 'p4',
      tipo: 'simulador',
      etiqueta: 'Pruébalo',
      titulo: 'Cuánto te toca pagar este mes',
      instruccion:
        'Pon tus ventas y compras del mes sin IVA, es decir, los montos netos. El simulador hace la resta.',
      calculo: 'iva',
      etiquetas: {
        ventas: '¿Cuánto vendiste este mes, sin IVA?',
        compras: '¿Cuánto compraste con factura, sin IVA?',
        tasa: 'Tasa de IVA',
      },
      inicial: { ventas: 3000000, compras: 1200000, tasa: 19 },
      lectura: 'Te toca pagar',
      nota: 'Sube las compras por encima de las ventas y vas a ver aparecer el remanente. Es lo que ocurre cuando inviertes fuerte en un mes: ese IVA no se pierde, se arrastra.',
      fuente:
        'La tasa viene cargada en 19 %, que era la general en Chile al escribirse el material. Es un campo editable: confirma la tasa que corresponde a tu actividad en sii.cl.',
    },

    {
      id: 'p5',
      tipo: 'contenido',
      etiqueta: 'Los plazos',
      titulo: 'Cuándo se declara y qué pasa si te atrasas',
      parrafos: [
        'El F29 se declara todos los meses, por el mes anterior. La fecha exacta depende de cómo emitas tus documentos y de si pagas o no: quienes emiten factura electrónica tienen un plazo más amplio que el general.',
        'Atrasarse cuesta, y cuesta de dos maneras a la vez: una multa calculada sobre el impuesto adeudado, que crece con cada mes de atraso hasta un tope, y además intereses por mora. Son dos cobros distintos que se suman.',
        'Es, de todos los gastos de un negocio, el más evitable: no depende de las ventas ni de los costos, solo de una fecha en el calendario.',
      ],
      puntos: [
        'Según el material del curso, a 2025 el plazo general vencía el día 12 del mes siguiente, y se extendía al día 20 para quienes emiten factura electrónica.',
        'Una declaración sin movimiento también es obligatoria, y el material indicaba el día 28 como plazo.',
        'La multa por declarar fuera de plazo partía en 10 % del impuesto adeudado y aumentaba 2 % por cada mes de atraso, con un tope de 30 %.',
        'A eso se sumaban intereses por mora de 1,5 % mensual.',
      ],
      nota: 'Pon un recordatorio en el teléfono para cinco días antes de tu fecha, todos los meses. Es la medida más barata de este curso completo.',
      fuente:
        'Todas las cifras de esta pantalla vienen del material del curso, actualizado a 2025, y no están verificadas a la fecha de hoy. Los plazos y las sanciones cambian: confirma los vigentes en sii.cl o con tu contador antes de usarlos para decidir.',
    },

    {
      id: 'p6',
      tipo: 'caso',
      etiqueta: 'Caso',
      titulo: 'La boleta que le costó cara a Daniela',
      escenario: [
        'Daniela tiene un local de repostería. Este mes compró un horno industrial en $2.380.000 con IVA incluido, en una tienda que le ofreció "boleta o factura, como prefieras".',
        'Pidió boleta, porque era más rápido y la fila de factura era larga.',
        'Al cierre del mes, su IVA débito por ventas fue de $900.000 y su IVA crédito, de $150.000 por otras compras con factura.',
      ],
      pregunta: '¿Qué le pasó a Daniela y qué debería hacer de aquí en adelante?',
      elegir: 2,
      opciones: [
        {
          id: 'o1',
          texto:
            'Perdió el IVA crédito del horno, unos $380.000 que podría haber descontado si hubiera pedido factura',
          correcta: true,
        },
        {
          id: 'o2',
          texto:
            'Debe pedir factura siempre que compre algo para el negocio, aunque tome más tiempo',
          correcta: true,
        },
        {
          id: 'o3',
          texto: 'No pasa nada: la boleta sirve igual para descontar el IVA',
          correcta: false,
        },
        {
          id: 'o4',
          texto: 'Puede pedir que le devuelvan el IVA del horno declarándolo como remanente',
          correcta: false,
        },
        {
          id: 'o5',
          texto: 'Le conviene no declarar este mes y esperar a tener más crédito acumulado',
          correcta: false,
        },
      ],
      explicacion:
        'El IVA crédito solo se respalda con factura a nombre del negocio. Con boleta, ese impuesto lo pagó Daniela como consumidora final y no hay cómo recuperarlo: de los $2.380.000 del horno, unos $380.000 eran IVA que pudo haber descontado. Este mes va a pagar $750.000 en vez de $370.000. El remanente no la salva, porque solo existe cuando hay crédito respaldado y aquí no lo hay. Y no declarar es la peor idea de todas: agrega multa e intereses a un problema que ya le costó caro. La diferencia entre boleta y factura, en una compra grande, es casi un 19 % del precio.',
      bloquea: true,
    },

    {
      id: 'p7',
      tipo: 'contenido',
      etiqueta: 'Buenas prácticas',
      titulo: 'Cómo no complicarte con el IVA',
      parrafos: [
        'La mayoría de los problemas con el IVA no son de interpretación tributaria: son de orden y de fechas.',
      ],
      puntos: [
        'Separa el IVA apenas entra la venta. Si esperas a fin de mes, la plata ya se gastó en otra cosa.',
        'Pide factura en toda compra del negocio. Una boleta en una compra grande te cuesta cerca del 19 % del precio.',
        'Mantén al día tu registro de compras y ventas, y compáralo con lo que declaras. Las diferencias se detectan antes, no después.',
        'Declara aunque no hayas tenido movimiento. Un mes sin ventas igual exige declaración, y no hacerla genera sanción.',
        'Si vendes bienes o servicios con tratamiento tributario especial, confírmalo con un contador. No todas las actividades funcionan igual.',
      ],
      nota: 'Este módulo explica el mecanismo para que entiendas lo que firmas. No reemplaza a un contador: la obligación de declarar correctamente sigue siendo tuya.',
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
          texto: '¿Qué diferencia hay entre el IVA débito y el IVA crédito?',
          opciones: [
            {
              id: 'a',
              texto: 'El débito es el IVA de tus ventas y el crédito el de tus compras con factura',
              correcta: true,
            },
            { id: 'b', texto: 'El débito se paga al contado y el crédito a plazo', correcta: false },
            { id: 'c', texto: 'El débito lo cobra el banco y el crédito el SII', correcta: false },
            { id: 'd', texto: 'Son dos nombres para el mismo impuesto', correcta: false },
          ],
          explicacion:
            'Débito es lo que cobraste por cuenta del fisco al vender; crédito es lo que ya pagaste al comprar con factura. El F29 los resta: si el débito es mayor, pagas la diferencia. Las palabras confunden porque en el lenguaje bancario significan otra cosa, pero aquí no tienen nada que ver con plazos ni con bancos.',
        },
        {
          id: 'q2',
          texto: 'Si en un mes no tuviste ninguna venta, ¿qué debes hacer con el F29?',
          opciones: [
            { id: 'a', texto: 'Nada: sin ventas no hay declaración', correcta: false },
            {
              id: 'b',
              texto: 'Presentarlo igual, declarando que no hubo movimiento',
              correcta: true,
            },
            { id: 'c', texto: 'Esperar al mes siguiente y declarar los dos juntos', correcta: false },
            { id: 'd', texto: 'Avisar por correo al SII', correcta: false },
          ],
          explicacion:
            'La obligación de declarar no depende de haber vendido. Un mes sin movimiento igual se declara, marcando esa condición, y no hacerlo genera sanción aunque no debas un peso de impuesto. Es de los errores más frecuentes en negocios estacionales, que tienen meses enteros sin ventas y asumen que no hay nada que presentar.',
        },
        {
          id: 'q3',
          texto:
            'Compras un equipo para el negocio y te ofrecen boleta o factura. ¿Qué conviene pedir?',
          opciones: [
            { id: 'a', texto: 'Boleta, porque es más rápida', correcta: false },
            {
              id: 'b',
              texto: 'Factura, porque es lo que respalda el IVA crédito',
              correcta: true,
            },
            { id: 'c', texto: 'Da lo mismo: ambas sirven igual', correcta: false },
            { id: 'd', texto: 'Boleta, porque la factura obliga a pagar más impuestos', correcta: false },
          ],
          explicacion:
            'Solo la factura a nombre del negocio respalda el IVA crédito. Con boleta ese impuesto lo pagaste como consumidor final y no hay forma de recuperarlo. En una compra grande la diferencia es cerca del 19 % del precio, que es mucho más de lo que vale ahorrarse la fila.',
        },
      ],
    },

    {
      id: 'p9',
      tipo: 'cierre',
      etiqueta: 'Cierre',
      titulo: 'Lo que te llevas',
      resumen: [
        'El IVA que cobras no es ingreso tuyo: lo recaudas y lo entregas. Guardarlo aparte desde el día uno evita el apuro de fin de mes.',
        'Débito menos crédito define si pagas. Si el crédito es mayor, queda remanente a favor y no se pierde.',
        'Sin factura no hay crédito. Pedir boleta en una compra del negocio cuesta cerca de un 19 % del precio.',
        'Se declara todos los meses, incluso sin movimiento. La multa por atraso es el gasto más evitable que existe.',
      ],
      pasoSemana:
        'Abre tu calendario y crea un recordatorio mensual que se repita, cinco días antes de tu fecha de declaración. Si todavía no sabes cuál es tu fecha exacta, averígualo en sii.cl hoy mismo: depende de cómo emites tus documentos y no es la misma para todos.',
    },
  ],
}
