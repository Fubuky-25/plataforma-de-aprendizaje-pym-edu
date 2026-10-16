import type { Leccion } from '../tipos'

/**
 * Nivel 2, Módulo 2.2 — Gasto inteligente y control de costos.
 * Adaptado de `contenido para los cursos/Pym_Edu_nivel2.pdf`.
 *
 * El material original nombraba productos comerciales concretos para control de
 * gastos. Aquí se habla de categorías de herramienta y de criterios para
 * elegirlas: PymEdu es un ERP y recomendar software por nombre en su propio
 * curso es una decisión comercial que le corresponde al equipo, no al contenido.
 */
export const leccion: Leccion = {
  id: 'n2-m2',
  nivel: 'Nivel 2 · Tu negocio',
  curso: 'Gestión del emprendimiento',
  modulo: 'Módulo 2.2',
  area: 'Gestión',
  titulo: 'Gasto inteligente y control de costos',
  actualizada: 'octubre de 2026',
  pantallas: [
    {
      id: 'p1',
      tipo: 'portada',
      etiqueta: 'Nivel 2 · Módulo 2.2',
      titulo: 'Gasto inteligente y control de costos',
      bajada:
        'No se trata de gastar menos. Se trata de saber qué gasto produce ventas y cuál solo se lleva plata sin que nadie lo note.',
      duracionMin: 13,
      objetivos: [
        'Distinguir costos directos de indirectos y fijos de variables',
        'Detectar los gastos que se escapan sin que aparezcan en ninguna decisión',
        'Ver cuánto pesa al año un gasto chico mensual',
        'Saber qué gasto se puede recortar y cuál no, sin dañar el negocio',
      ],
    },

    {
      id: 'p2',
      tipo: 'contenido',
      etiqueta: 'Lo esencial',
      titulo: 'Clasificar no es burocracia',
      parrafos: [
        'Cuando el negocio aprieta, la reacción natural es cortar lo primero que aparezca. Es la peor forma de hacerlo, porque lo primero que aparece suele ser lo que se ve, no lo que sobra.',
        'Los costos se clasifican de dos maneras distintas, y sirven para preguntas distintas. Una te dice si tu precio está bien puesto; la otra, cuánto necesitas vender para no perder plata.',
        'Un mismo gasto puede ser directo y fijo al mismo tiempo, o indirecto y variable. No son categorías opuestas: son dos formas de mirar el mismo gasto.',
      ],
      puntos: [
        'Directo o indirecto responde a: ¿este gasto se puede atribuir a un producto o servicio concreto? Sirve para saber si lo que cobras cubre lo que cuesta hacerlo.',
        'Fijo o variable responde a: ¿este gasto cambia si vendo más o menos? Sirve para saber cuánto tienes que vender para cubrir la estructura.',
      ],
      nota: 'La pregunta útil antes de cortar un gasto no es cuánto cuesta, sino qué deja de pasar si lo elimino. Algunos gastos se eliminan solos; otros se llevan las ventas con ellos.',
    },

    {
      id: 'p3',
      tipo: 'tarjetas',
      etiqueta: 'Cinco tipos',
      titulo: 'Cómo se clasifica un gasto',
      instruccion: 'Toca cada tipo para ver cuál es y qué se puede hacer con él.',
      tarjetas: [
        {
          id: 't1',
          titulo: 'Costo directo',
          definicion:
            'Va pegado a lo que vendes: la materia prima, la mano de obra que produce. Si dejas de vender ese producto, el costo desaparece. Es el que tienes que cubrir con el precio, sí o sí.',
        },
        {
          id: 't2',
          titulo: 'Costo indirecto',
          definicion:
            'Existe aunque no se pueda atribuir a un producto concreto: arriendo, administración, marketing. Hay que repartirlo entre todo lo que vendes, y por eso se suele olvidar al poner precios.',
        },
        {
          id: 't3',
          titulo: 'Costo fijo',
          definicion:
            'Es el mismo vendas mucho o poco: arriendo, sueldos, seguros, planes. Es el que te aprieta en un mes malo, porque no baja aunque las ventas sí lo hagan.',
        },
        {
          id: 't4',
          titulo: 'Costo variable',
          definicion:
            'Sube y baja con las ventas: insumos, comisiones, despachos. Es más llevadero en un mes malo, pero hay que vigilarlo cuando crece el negocio, porque crece con él.',
        },
        {
          id: 't5',
          titulo: 'Gasto no operacional',
          definicion:
            'No aporta nada al negocio: multas por declarar fuera de plazo, intereses por mora, comisiones que nadie revisó. Es el único tipo de gasto que se puede eliminar sin perder absolutamente nada a cambio.',
        },
      ],
      nota: 'Si tuvieras que revisar una sola categoría este mes, revisa la última. Es la única donde recortar no tiene costo.',
    },

    {
      id: 'p4',
      tipo: 'emparejar',
      etiqueta: 'Practica',
      titulo: '¿Qué tipo de costo es?',
      instruccion: 'Toca un gasto y después el tipo que le corresponde.',
      izquierdaTitulo: 'Gasto de un negocio',
      derechaTitulo: 'Tipo',
      pares: [
        { id: 'e1', izquierda: 'La harina de una panadería', derecha: 'Costo directo y variable' },
        { id: 'e2', izquierda: 'El arriendo del local', derecha: 'Costo indirecto y fijo' },
        {
          id: 'e3',
          izquierda: 'La comisión que cobra la máquina de tarjetas por cada venta',
          derecha: 'Costo variable',
        },
        {
          id: 'e4',
          izquierda: 'La multa por declarar el IVA fuera de plazo',
          derecha: 'Gasto no operacional',
        },
      ],
      bloquea: true,
    },

    {
      id: 'p5',
      tipo: 'contenido',
      etiqueta: 'Lo que no se ve',
      titulo: 'Los gastos invisibles',
      parrafos: [
        'Hay gastos que nunca aparecen en una decisión porque nadie los decide: simplemente se descuentan. Son chicos, son mensuales y por eso no se discuten.',
        'El problema no es cada uno por separado. Es que juntos pueden superar varios cientos de miles de pesos al mes en un negocio chico, y nadie los sumó nunca.',
      ],
      puntos: [
        'Comisiones por cada venta con tarjeta, que se descuentan antes de que veas la plata.',
        'Multas e intereses por declaraciones fuera de plazo, que son evitables en su totalidad.',
        'Suscripciones a servicios que se contrataron una vez y nadie volvió a usar.',
        'Seguros asociados a un crédito que ya se pagó, o que se contrataron sin saberlo.',
        'Intereses de la línea de crédito de la cuenta corriente, usada como colchón permanente.',
      ],
      nota: 'Todos estos tienen algo en común: se pagan solos, mes a mes, sin que nadie los apruebe. Un gasto que nadie aprueba es un gasto que nadie revisa.',
    },

    {
      id: 'p6',
      tipo: 'simulador',
      etiqueta: 'Pruébalo',
      titulo: 'Cuánto pesa un gasto chico',
      instruccion: 'Pon un gasto mensual que tengas, de esos que no decides cada mes. Míralo a un año.',
      calculo: 'gastoAnual',
      etiquetas: { montoMensual: '¿Cuánto es al mes?' },
      inicial: { montoMensual: 200000 },
      lectura: 'En un año se va',
      nota: 'Esta es la razón por la que conviene revisar lo chico: el monto mensual no asusta a nadie, pero la cifra del año suele ser comparable a una inversión que llevas tiempo postergando.',
    },

    {
      id: 'p7',
      tipo: 'contenido',
      etiqueta: 'Qué hacer',
      titulo: 'Cómo tomar el control',
      parrafos: [
        'Controlar gastos no es un esfuerzo heroico una vez al año: es un hábito de revisión. Estas son las prácticas que más rinden en un negocio chico.',
      ],
      puntos: [
        'Separa la cuenta del negocio de la tuya y asígnate un sueldo. Si esto no está hecho, todo lo demás se vuelve impreciso.',
        'Haz un presupuesto mensual con metas por categoría y compáralo con lo que pasó de verdad. Lo importante no es acertar: es ver la desviación a tiempo.',
        'Define quién puede comprar qué y hasta cuánto. Aunque seas tú solo, escribirlo cambia las decisiones de compra del día a día.',
        'Paga todo desde una cuenta o tarjeta del negocio, nunca en efectivo sin registro. Lo que no deja rastro no se puede revisar.',
        'Revisa las comisiones y las suscripciones cada tres meses. Es una hora que suele pagarse sola varias veces.',
        'Automatiza las declaraciones de impuestos. Las multas por atraso son el gasto más fácil de eliminar porque dependen solo de la fecha.',
      ],
      nota: 'La regla 50/30/20 también se puede adaptar al negocio: la mitad a costos esenciales, un tercio a inversión y crecimiento, y un quinto a ahorro o a pagar deudas. Sirve como referencia inicial, igual que en las finanzas personales.',
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
          texto: '¿Cuál es la diferencia entre un costo directo y uno indirecto?',
          opciones: [
            { id: 'a', texto: 'El directo es fijo y el indirecto es variable', correcta: false },
            {
              id: 'b',
              texto: 'El directo se puede atribuir a un producto o servicio concreto; el indirecto no',
              correcta: true,
            },
            { id: 'c', texto: 'El directo lo paga el cliente y el indirecto la empresa', correcta: false },
            { id: 'd', texto: 'El directo se paga al contado y el indirecto a crédito', correcta: false },
          ],
          explicacion:
            'Lo que los separa es si el gasto se puede asignar a algo que vendes. La harina del pan es directa; el arriendo del local es indirecto, porque sostiene todo lo que haces y no un producto en particular. Ojo con la primera alternativa: directo e indirecto es una clasificación distinta de fijo y variable, y un mismo gasto puede ser directo y variable a la vez.',
        },
        {
          id: 'q2',
          texto: '¿Qué tienen de particular los gastos no operacionales, como una multa por atraso?',
          opciones: [
            { id: 'a', texto: 'Que son obligatorios y no se pueden evitar', correcta: false },
            { id: 'b', texto: 'Que siempre son los más altos del negocio', correcta: false },
            {
              id: 'c',
              texto: 'Que no aportan nada al negocio, así que recortarlos no cuesta nada a cambio',
              correcta: true,
            },
            { id: 'd', texto: 'Que se descuentan de los impuestos', correcta: false },
          ],
          explicacion:
            'Es la única categoría donde recortar es gratis. Si cortas un costo directo dejas de producir, y si cortas uno indirecto algo del negocio deja de funcionar. Una multa por declarar tarde, en cambio, no compra nada: se evita cumpliendo una fecha. Por eso conviene atacarla primero, antes de tocar cualquier otro gasto.',
        },
        {
          id: 'q3',
          texto: 'En un mes de ventas bajas, ¿qué tipo de costo te aprieta más?',
          opciones: [
            { id: 'a', texto: 'Los costos variables, porque suben solos', correcta: false },
            {
              id: 'b',
              texto: 'Los costos fijos, porque hay que pagarlos igual aunque vendas menos',
              correcta: true,
            },
            { id: 'c', texto: 'Los costos directos, porque dependen del precio', correcta: false },
            { id: 'd', texto: 'Ninguno: todos bajan con las ventas', correcta: false },
          ],
          explicacion:
            'Los fijos no se mueven: el arriendo y los sueldos son los mismos vendas mucho o poco. Los variables, en cambio, bajan solos cuando vendes menos, porque dependen de la venta. Por eso un negocio con costos fijos altos necesita un piso de ventas más alto para no perder plata, y eso es justamente lo que mide el punto de equilibrio que verás en el Nivel 3.',
        },
      ],
    },

    {
      id: 'p9',
      tipo: 'cierre',
      etiqueta: 'Cierre',
      titulo: 'Lo que te llevas',
      resumen: [
        'Directo o indirecto sirve para poner precios. Fijo o variable sirve para saber cuánto necesitas vender. Son dos preguntas distintas sobre el mismo gasto.',
        'Antes de cortar un gasto, pregúntate qué deja de pasar si lo eliminas. Si la respuesta es "nada", ya encontraste por dónde empezar.',
        'Los gastos invisibles no se deciden, se descuentan. Por eso sobreviven años sin que nadie los revise.',
        'Un gasto chico mensual se ve inofensivo y a un año suele equivaler a una inversión que llevas tiempo postergando.',
      ],
      pasoSemana:
        'Saca la cartola del último mes de la cuenta del negocio y marca todo cargo que no reconozcas de inmediato o que no hayas decidido tú este mes. Súmalos y multiplica por doce. Ese número es tu punto de partida, y casi siempre sorprende.',
    },
  ],
}
