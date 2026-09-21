import type { Leccion } from '../tipos'

/**
 * Nivel 1, Módulo 1.2 — Presupuesto personal.
 * Adaptado de `contenido para los cursos/Pym_Edu_nivel1.pdf`.
 *
 * Las cifras de la CMF corresponden al informe de endeudamiento con datos a
 * junio de 2024. Se muestran siempre con su fecha. Hay que actualizarlas.
 */
export const leccion: Leccion = {
  id: 'n1-m2',
  nivel: 'Nivel 1 · Fundamentos',
  curso: 'Fundamentos de educación financiera',
  modulo: 'Módulo 1.2',
  area: 'Finanzas',
  titulo: 'Presupuesto personal',
  actualizada: 'septiembre de 2026',
  fuentes: [
    'Comisión para el Mercado Financiero (CMF), informe de endeudamiento con datos a junio de 2024.',
    'Calculadora de presupuesto del SERNAC.',
  ],
  pantallas: [
    {
      id: 'p1',
      tipo: 'portada',
      etiqueta: 'Nivel 1 · Módulo 1.2',
      titulo: 'Presupuesto personal',
      bajada:
        'Un presupuesto no es una lista de prohibiciones. Es saber a dónde se va tu plata antes de que se vaya.',
      duracionMin: 12,
      objetivos: [
        'Entender qué es un presupuesto y para qué sirve de verdad',
        'Distinguir gastos fijos, variables y hormiga',
        'Aplicar la regla 50/30/20 a tu propio ingreso',
        'Armar tu primer presupuesto en cinco pasos',
      ],
    },

    {
      id: 'p2',
      tipo: 'contenido',
      etiqueta: 'Lo esencial',
      titulo: '¿Qué es un presupuesto?',
      bajada: 'Un plan de lo que entra y de lo que sale, en un periodo definido.',
      parrafos: [
        'Un presupuesto registra tus ingresos y tus gastos durante un mes. Con eso puedes organizar tus recursos, detectar en qué se te está yendo de más y ver si te queda espacio para ahorrar.',
        'La mayoría de la gente cree que ya sabe cuánto gasta. Al anotarlo durante un mes casi siempre aparece una diferencia, y esa diferencia es justamente lo que no se estaba viendo.',
        'El punto no es cortar gastos: es decidirlos. Un gasto elegido y uno que simplemente ocurrió cuestan lo mismo, pero solo uno de los dos lo controlas tú.',
      ],
      puntos: [
        'A junio de 2024, la mediana de la deuda de las personas en Chile era de $1,9 millones.',
        'La carga financiera promedio, es decir la parte del ingreso que se va en pagar deudas, estaba en 13,6 %.',
        'El porcentaje de deudores con carga financiera alta había bajado a 16,5 %.',
      ],
      nota: 'Esos números no son una amenaza: son un punto de referencia. Si tu carga financiera está muy por encima del 13,6 %, tienes menos margen que el promedio para un imprevisto.',
      fuente:
        'Informe de endeudamiento de la CMF con datos a junio de 2024. Revisa el informe vigente en cmfchile.cl.',
    },

    {
      id: 'p3',
      tipo: 'tarjetas',
      etiqueta: 'Clasifica',
      titulo: 'Tus gastos no son todos iguales',
      instruccion: 'Toca cada tipo para ver cuál es y qué se puede hacer con él.',
      tarjetas: [
        {
          id: 't1',
          titulo: 'Gastos fijos',
          definicion:
            'Los que se repiten igual todos los meses: arriendo o dividendo, cuentas de servicios, plan de teléfono, cuotas de créditos. Son los más difíciles de bajar en el corto plazo, pero también los más fáciles de anotar: ya sabes cuánto son.',
        },
        {
          id: 't2',
          titulo: 'Gastos variables',
          definicion:
            'Cambian mes a mes: comida, transporte, salidas, ropa. Aquí está casi todo el margen real de ajuste, porque dependen de decisiones que tomas cada semana y no de un contrato firmado.',
        },
        {
          id: 't3',
          titulo: 'Gastos hormiga',
          definicion:
            'Consumos chicos y diarios que no se sienten: el café, el delivery, la suscripción que ya no usas. Cada uno es menor, pero repetido veinte o treinta veces al mes puede superar a un gasto fijo completo. Son los más fáciles de recortar y los más difíciles de notar.',
        },
      ],
      nota: 'Separarlos importa porque cada tipo se controla distinto. Un gasto fijo se renegocia, uno variable se decide, uno hormiga se hace visible.',
    },

    {
      id: 'p4',
      tipo: 'emparejar',
      etiqueta: 'Practica',
      titulo: '¿Qué tipo de gasto es?',
      instruccion: 'Toca un gasto y después el tipo que le corresponde.',
      izquierdaTitulo: 'Gasto',
      derechaTitulo: 'Tipo',
      pares: [
        { id: 'e1', izquierda: 'El arriendo del departamento', derecha: 'Gasto fijo' },
        { id: 'e2', izquierda: 'La feria del sábado', derecha: 'Gasto variable' },
        { id: 'e3', izquierda: 'El café de camino al trabajo, todos los días', derecha: 'Gasto hormiga' },
      ],
      bloquea: true,
    },

    {
      id: 'p5',
      tipo: 'contenido',
      etiqueta: 'Cómo se hace',
      titulo: 'Cinco pasos para armar el tuyo',
      parrafos: [
        'No necesitas una planilla complicada ni una aplicación. Una hoja y una hora al mes bastan para empezar. Lo difícil no es armarlo: es revisarlo.',
      ],
      puntos: [
        'Define tus metas. ¿Juntar un fondo para emergencias? ¿Salir de una deuda? Una meta concreta y con monto sirve; "ahorrar más" no.',
        'Registra tus ingresos. Sueldo, honorarios, pensión, bonos y cualquier entrada extra. Si son variables, usa el promedio de los últimos tres meses.',
        'Clasifica tus gastos en fijos, variables y hormiga. Aquí es donde aparecen las sorpresas.',
        'Aplica la regla 50/30/20 como punto de partida y ajústala a tu realidad.',
        'Revisa y ajusta a fin de mes. Compara lo planeado con lo que pasó de verdad y corrige el siguiente.',
      ],
      nota: 'El paso cinco es el que casi todos se saltan, y es el único que convierte el presupuesto en algo útil. Un presupuesto que no se revisa es una lista de buenas intenciones.',
    },

    {
      id: 'p6',
      tipo: 'simulador',
      etiqueta: 'Pruébalo',
      titulo: 'La regla 50/30/20 con tu ingreso',
      instruccion:
        'Pon lo que recibes al mes y mira cómo quedaría repartido. Es una referencia, no una regla rígida.',
      calculo: 'regla503020',
      etiquetas: { ingreso: '¿Cuánto recibes al mes?' },
      inicial: { ingreso: 700000 },
      lectura: 'Si siguieras la regla, podrías ahorrar al mes',
      nota: 'Si el 50 % no te alcanza para lo básico, la regla no está mal: está mostrando que tus gastos fijos son demasiado altos para tu ingreso. Ese es el dato útil, aunque incomode.',
    },

    {
      id: 'p7',
      tipo: 'aplicar',
      etiqueta: 'Tu caso',
      titulo: 'Tu presupuesto de este mes',
      instruccion:
        'Responde con lo que sepas ahora, aunque sea aproximado. Queda guardado en tu navegador para que lo compares el próximo mes.',
      campos: [
        {
          id: 'c1',
          etiqueta: '¿Cuánto entra al mes?',
          ayuda: 'Suma sueldo, honorarios, pensiones, bonos y cualquier ingreso extra.',
          formato: 'monto',
        },
        {
          id: 'c2',
          etiqueta: '¿Cuánto se va en gastos fijos?',
          ayuda: 'Arriendo o dividendo, cuentas, plan de teléfono, cuotas de créditos.',
          formato: 'monto',
        },
        {
          id: 'c3',
          etiqueta: '¿Qué gasto hormiga reconoces en tu semana?',
          ayuda: 'Escribe el que se te venga a la cabeza primero. Ese suele ser el importante.',
          formato: 'texto',
        },
      ],
      cierre:
        'Si la resta entre lo que entra y tus gastos fijos ya te deja poco margen, el problema no está en los gustos: está en la estructura. Eso se arregla renegociando o cambiando algo grande, no apretando el café.',
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
          texto:
            'Según el informe de endeudamiento de la CMF con datos a junio de 2024, ¿cuál era la mediana de la deuda de las personas en Chile?',
          opciones: [
            { id: 'a', texto: '$2,3 millones', correcta: false },
            { id: 'b', texto: '$1,9 millones', correcta: true },
            { id: 'c', texto: '$3,5 millones', correcta: false },
            { id: 'd', texto: '$500.000', correcta: false },
          ],
          explicacion:
            'La mediana era de $1,9 millones. Mediana no es lo mismo que promedio: significa que la mitad de los deudores debía menos que eso y la otra mitad más. Se usa la mediana justamente porque unos pocos deudores muy grandes distorsionarían el promedio.',
        },
        {
          id: 'q2',
          texto: 'La carga financiera es el porcentaje del ingreso que se destina a:',
          opciones: [
            { id: 'a', texto: 'Ahorro', correcta: false },
            { id: 'b', texto: 'Gastos variables', correcta: false },
            { id: 'c', texto: 'Pago de deudas', correcta: true },
            { id: 'd', texto: 'Inversión en fondos mutuos', correcta: false },
          ],
          explicacion:
            'Es la parte de tu ingreso mensual que se va en pagar cuotas de deudas. Es el indicador más directo de cuánto margen te queda: mientras más alto, menos te queda para vivir y menos capacidad tienes de absorber un imprevisto sin endeudarte de nuevo.',
        },
        {
          id: 'q3',
          texto: '¿En qué consiste la regla 50/30/20?',
          opciones: [
            { id: 'a', texto: 'Dividir el gasto fijo en 50 % y el variable en 30 %', correcta: false },
            { id: 'b', texto: 'Destinar 50 % a ahorro, 30 % a deudas y 20 % a gustos', correcta: false },
            { id: 'c', texto: 'Asignar 50 % a necesidades, 30 % a gustos y 20 % a ahorro o deudas', correcta: true },
            { id: 'd', texto: 'Dividir el ingreso en tres partes iguales', correcta: false },
          ],
          explicacion:
            'Mitad para lo que necesitas, un tercio aproximado para lo que quieres y un quinto para ahorrar o pagar deudas. Es una referencia para empezar, no una ley: en Chile el arriendo solo puede llevarse buena parte del 50 %, y ajustarla a tu realidad es parte del ejercicio.',
        },
      ],
    },

    {
      id: 'p9',
      tipo: 'cierre',
      etiqueta: 'Cierre',
      titulo: 'Lo que te llevas',
      resumen: [
        'Un presupuesto no restringe: hace visible. Lo que no se anota no se puede decidir.',
        'Fijos, variables y hormiga se controlan de maneras distintas. Confundirlos hace que aprietes donde no corresponde.',
        'La regla 50/30/20 sirve como punto de partida. Si no te calza, el dato útil es por qué no te calza.',
        'El paso que hace la diferencia es revisar a fin de mes. Sin eso, el presupuesto es solo una intención.',
      ],
      pasoSemana:
        'Durante los próximos siete días anota cada gasto apenas lo hagas, sin juzgarlo y sin dejar ninguno fuera. Al séptimo día súmalos por tipo. Ese número es tu punto de partida real, y casi nunca es el que uno espera.',
    },
  ],
}
