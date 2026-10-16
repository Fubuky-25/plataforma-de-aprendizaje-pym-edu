import type { Leccion } from '../tipos'

/**
 * Nivel 2, Módulo 2.6 — Deuda saludable y financiamiento.
 * Adaptado de `contenido para los cursos/Pym_Edu_nivel2.pdf`.
 *
 * Las tasas y las condiciones de los programas con garantía estatal son de
 * 2025 y cambian. Se presentan con su fecha y como orden de magnitud, no como
 * la oferta vigente. El nombre del programa estatal se menciona porque es
 * información pública útil, pero sin sus condiciones exactas.
 */
export const leccion: Leccion = {
  id: 'n2-m6',
  nivel: 'Nivel 2 · Tu negocio',
  curso: 'Gestión del emprendimiento',
  modulo: 'Módulo 2.6',
  area: 'Finanzas',
  titulo: 'Deuda saludable y financiamiento',
  actualizada: 'octubre de 2026',
  fuentes: [
    'Tasas de referencia del mercado chileno y condiciones de programas con garantía estatal, 2025.',
  ],
  pantallas: [
    {
      id: 'p1',
      tipo: 'portada',
      etiqueta: 'Nivel 2 · Módulo 2.6',
      titulo: 'Deuda saludable y financiamiento',
      bajada:
        'Endeudarse no es un fracaso ni una virtud. Es una herramienta que sirve para una cosa muy específica y arruina negocios cuando se usa para otra.',
      duracionMin: 14,
      objetivos: [
        'Distinguir una deuda que hace crecer de una que tapa un hoyo',
        'Conocer las cuatro formas de financiamiento más usadas',
        'Calcular la cuota y los intereses antes de firmar',
        'Comparar dos ofertas con el mismo criterio',
      ],
    },

    {
      id: 'p2',
      tipo: 'contenido',
      etiqueta: 'Lo esencial',
      titulo: 'Para qué sirve endeudarse',
      parrafos: [
        'Hay una sola pregunta que separa la deuda buena de la mala, y no tiene que ver con la tasa: ¿esta plata va a generar más de lo que cuesta?',
        'Un crédito para comprar una máquina que aumenta la producción se paga con lo que produce. Un crédito para cubrir el sueldo de este mes no genera nada: solo traslada el problema al mes siguiente, con intereses encima.',
        'Esto no significa que endeudarse para capital de trabajo esté mal. Significa que si el negocio necesita deuda todos los meses para operar, el problema no se arregla con más deuda: hay algo en los márgenes o en los plazos de cobro que hay que resolver antes.',
      ],
      puntos: [
        'Deuda que tiene sentido: comprar un activo productivo, financiar un crecimiento que ya tienes vendido, reemplazar una deuda cara por una barata.',
        'Deuda que hay que mirar con cuidado: cubrir gastos corrientes, pagar otra deuda sin mejorar las condiciones, financiar gastos personales desde el negocio.',
      ],
      nota: 'En 2025 la tasa de política monetaria rondaba el 5 % y los créditos comerciales a empresas superaban el 18 % anual. Con ese costo, una deuda que no produce se vuelve cara muy rápido.',
      fuente:
        'Tasas de referencia de 2025. Las tasas cambian varias veces al año: consulta las vigentes antes de decidir.',
    },

    {
      id: 'p3',
      tipo: 'tarjetas',
      etiqueta: 'Cuatro formas',
      titulo: 'Las opciones que vas a encontrar',
      instruccion: 'Toca cada una para ver para qué sirve y qué te pide a cambio.',
      tarjetas: [
        {
          id: 't1',
          titulo: 'Crédito en cuotas',
          definicion:
            'Un monto que recibes completo y devuelves en cuotas mensuales conocidas. Sirve para inversiones concretas con un retorno esperado. Compara siempre el CAE, que incluye intereses, comisiones y seguros, y no solo la tasa.',
        },
        {
          id: 't2',
          titulo: 'Línea de crédito',
          definicion:
            'Un cupo disponible del que usas solo lo que necesitas y pagas interés únicamente por eso. Es flexible y por lo mismo suele ser más cara. Funciona como colchón para descalces puntuales; usada todos los meses, es una señal de alerta.',
        },
        {
          id: 't3',
          titulo: 'Leasing',
          definicion:
            'Una entidad compra el bien que necesitas y te lo arrienda, con opción de comprarlo al final. Sirve para maquinaria y vehículos sin desembolsar todo de una vez, y el bien queda como garantía de la propia operación.',
        },
        {
          id: 't4',
          titulo: 'Factoring',
          definicion:
            'Vendes una factura por cobrar y recibes la plata ahora, menos una comisión. No es deuda nueva: estás adelantando algo que ya te deben. Es la herramienta para problemas de plazo, no de rentabilidad.',
        },
      ],
      nota: 'Existen además programas con garantía estatal, como FOGAPE, que permiten acceder a condiciones mejores porque el Estado cubre parte del riesgo del banco. Sus tasas, plazos y requisitos cambian cada año.',
    },

    {
      id: 'p4',
      tipo: 'comparacion',
      etiqueta: 'Compara',
      titulo: 'Crédito o factoring',
      bajada:
        'Se usan para cosas distintas, y elegir mal es la causa de muchas deudas que no debieron existir.',
      criterios: [
        'Qué problema resuelve',
        'Es deuda nueva',
        'De qué depende que te lo aprueben',
        'Cuándo termina',
        'Qué pasa si el negocio anda mal',
      ],
      columnas: [
        {
          titulo: 'Crédito en cuotas',
          celdas: [
            'Falta de capital para invertir o crecer',
            'Sí: aparece en tu carga financiera y en tu historial',
            'De tu capacidad de pago y, a veces, de garantías o un aval',
            'Cuando pagas la última cuota, en meses o años',
            'La cuota sigue igual: es tu obligación, vendas o no',
          ],
        },
        {
          titulo: 'Factoring',
          celdas: [
            'Falta de liquidez mientras esperas que te paguen',
            'No: adelantas el cobro de algo que ya te deben',
            'Sobre todo de quién es tu cliente y de si paga',
            'Cuando tu cliente paga la factura',
            'No hay cuota futura: la operación ya se cerró',
          ],
        },
      ],
      nota: 'Un error caro y frecuente: tomar un crédito a tres años para resolver un descalce de dos meses. La deuda sobrevive al problema que vino a solucionar.',
    },

    {
      id: 'p5',
      tipo: 'simulador',
      etiqueta: 'Pruébalo',
      titulo: 'La cuota antes de firmar',
      instruccion:
        'Pon el monto, la tasa anual que te ofrecen y el plazo. Mira la última línea del resultado.',
      calculo: 'cuotaCredito',
      etiquetas: {
        monto: '¿Cuánto necesitas pedir?',
        tasaAnual: '¿Qué tasa anual te ofrecen?',
        meses: '¿En cuántos meses lo pagarías?',
      },
      inicial: { monto: 10000000, tasaAnual: 18, meses: 36 },
      lectura: 'Pagarías cada mes',
      nota: 'Prueba la misma deuda al 18 % y al 10 %, que era la diferencia aproximada entre un crédito comercial y uno con garantía estatal en 2025. La brecha en intereses suele valer más que el tiempo de hacer el trámite.',
      fuente:
        'Las tasas de referencia son de 2025 y se usan solo como ejemplo. Pide siempre el CAE, que incluye comisiones y seguros además de la tasa.',
    },

    {
      id: 'p6',
      tipo: 'contenido',
      etiqueta: 'Antes de firmar',
      titulo: 'Seis cosas que revisar',
      parrafos: [
        'La decisión de endeudarse se toma antes de entrar al banco, no en el mesón. Estas son las que importan.',
      ],
      puntos: [
        'Define el propósito y escríbelo. Si no puedes explicar en una frase qué va a producir esa plata, probablemente no es el momento.',
        'Calcula tu carga financiera total con la cuota nueva incluida. La recomendación habitual es no pasar del 25 % de tus ingresos.',
        'Compara con el CAE, no con la tasa. Es el único número que incluye comisiones y seguros y permite comparar dos ofertas de verdad.',
        'Lee las condiciones: costo de prepago, seguros asociados, cláusulas que permiten exigir el total anticipadamente.',
        'Negocia el plazo y el periodo de gracia. Un par de meses sin pagar al principio puede ser la diferencia entre llegar y no llegar.',
        'Paga a tiempo. Tu historial es lo que determina las condiciones que te van a ofrecer la próxima vez.',
      ],
      nota: 'Pedir el CAE por escrito no es desconfianza, es tu derecho como consumidor financiero, y está en el Nivel 1 de este curso. Si cuesta conseguirlo, eso también es información.',
    },

    {
      id: 'p7',
      tipo: 'caso',
      etiqueta: 'Caso',
      titulo: 'La cocina de Mónica',
      escenario: [
        'Mónica tiene un servicio de almuerzos para oficinas. Vende $5.500.000 al mes con un margen sano, y sus clientes le pagan a 30 días.',
        'Le ofrecieron un contrato nuevo que sumaría $3.000.000 mensuales, pero necesita un horno más grande, que cuesta $6.000.000, y contratar a una persona.',
        'Su banco le ofrece un crédito comercial al 18 % anual a tres años. Una empresa de factoring le ofrece adelantarle sus facturas actuales con 2,5 % de comisión. También supo que existen créditos con garantía estatal a tasas bastante menores.',
      ],
      pregunta: '¿Qué le conviene hacer a Mónica?',
      elegir: 2,
      opciones: [
        {
          id: 'o1',
          texto:
            'Averiguar primero si califica para un crédito con garantía estatal, porque la diferencia de tasa en tres años es grande',
          correcta: true,
        },
        {
          id: 'o2',
          texto:
            'Calcular la cuota y sumarla a su carga financiera actual, para confirmar que el contrato nuevo la cubre con holgura',
          correcta: true,
        },
        {
          id: 'o3',
          texto: 'Financiar el horno con factoring de sus facturas actuales',
          correcta: false,
        },
        {
          id: 'o4',
          texto: 'Tomar el crédito al 18 % de inmediato, antes de que le quiten el contrato',
          correcta: false,
        },
        {
          id: 'o5',
          texto: 'Pedir el crédito a doce meses en vez de tres años, para pagar menos intereses',
          correcta: false,
        },
      ],
      explicacion:
        'Esta es deuda de la buena: el horno produce el contrato que la paga. Lo que falta es hacer los números antes de firmar. En $6.000.000 a tres años, la diferencia entre 18 % y una tasa con garantía estatal se cuenta en cientos de miles de pesos, así que vale la pena averiguarlo. Y la cuota hay que sumarla a lo que ya paga: si el contrato nuevo no la cubre con holgura, el crecimiento la deja peor. El factoring no sirve aquí, porque adelanta plata de facturas puntuales y el horno es una inversión que se usa años: resolvería un mes y dejaría el problema. Tomar el 18 % por apuro es pagar de más por no haber hecho dos llamadas. Y acortar a doce meses baja los intereses totales pero triplica la cuota: la trampa está en que podría ahogar justamente el flujo de caja que el contrato nuevo viene a mejorar.',
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
          texto: '¿Cuál es la diferencia principal entre el factoring y un crédito bancario?',
          opciones: [
            { id: 'a', texto: 'El factoring tiene una tasa más baja siempre', correcta: false },
            {
              id: 'b',
              texto: 'El factoring adelanta el cobro de facturas que ya te deben; el crédito es deuda nueva',
              correcta: true,
            },
            { id: 'c', texto: 'El factoring lo otorga únicamente el Estado', correcta: false },
            { id: 'd', texto: 'El crédito no cobra intereses si lo pagas antes', correcta: false },
          ],
          explicacion:
            'En el factoring estás cobrando antes algo que ya es tuyo, a cambio de una comisión, y la operación se cierra cuando tu cliente paga. El crédito es plata nueva que entra a tu carga financiera y que vas a devolver en cuotas. Por eso resuelven problemas distintos: el factoring sirve para plazos de cobro y el crédito para inversión.',
        },
        {
          id: 'q2',
          texto: '¿Cuál es el tope de carga financiera que se suele recomendar?',
          opciones: [
            { id: 'a', texto: 'Alrededor del 25 % de los ingresos', correcta: true },
            { id: 'b', texto: 'El 50 % de los ingresos', correcta: false },
            { id: 'c', texto: 'No hay tope si el negocio crece', correcta: false },
            { id: 'd', texto: 'El 75 % de los ingresos', correcta: false },
          ],
          explicacion:
            'La referencia habitual es no pasar del 25 %, el mismo criterio que viste en el Nivel 1 para las finanzas personales. Por encima de eso pierdes la capacidad de absorber un imprevisto sin endeudarte otra vez. Ojo con la tercera alternativa: que el negocio crezca no elimina el tope, porque el crecimiento casi nunca es tan parejo como las cuotas.',
        },
        {
          id: 'q3',
          texto: '¿Qué ventaja ofrece un crédito con garantía estatal frente a uno comercial?',
          opciones: [
            { id: 'a', texto: 'Que no hay que devolverlo', correcta: false },
            {
              id: 'b',
              texto: 'Que el Estado cubre parte del riesgo del banco, lo que permite mejores tasas y plazos',
              correcta: true,
            },
            { id: 'c', texto: 'Que lo aprueban sin evaluar al negocio', correcta: false },
            { id: 'd', texto: 'Que se puede usar para gastos personales', correcta: false },
          ],
          explicacion:
            'La garantía estatal reduce el riesgo que asume el banco, y por eso puede ofrecer tasas menores y plazos más largos a empresas que de otro modo no calificarían. Sigue siendo un crédito: se devuelve, se evalúa tu capacidad de pago y tiene un destino definido. Sus condiciones y requisitos cambian cada año, así que hay que revisar lo vigente.',
        },
      ],
    },

    {
      id: 'p9',
      tipo: 'cierre',
      etiqueta: 'Cierre del nivel',
      titulo: 'Lo que te llevas',
      resumen: [
        'La pregunta que define si una deuda sirve no es la tasa, es si esa plata va a generar más de lo que cuesta.',
        'Cada herramienta resuelve un problema distinto: el factoring es para plazos de cobro, el crédito para invertir, el leasing para equipos.',
        'Compara con el CAE, no con la tasa. Es el único número que incluye comisiones y seguros.',
        'Si el negocio necesita deuda todos los meses para operar, el problema está en los márgenes o en los plazos, y más deuda no lo arregla.',
      ],
      pasoSemana:
        'Si tienes una deuda del negocio andando, busca su CAE y su plazo, y métela en el simulador de esta lección para ver cuánto estás pagando de intereses en total. Con ese número en la mano, pide a tu banco una oferta de refinanciamiento y compárala. Con esto cierras el Nivel 2: ya tienes con qué mirar la caja, los costos, los impuestos y el financiamiento de tu negocio con números en vez de con sensaciones.',
    },
  ],
}
