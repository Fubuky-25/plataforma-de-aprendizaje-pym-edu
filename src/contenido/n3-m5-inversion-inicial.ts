import type { Leccion } from '../tipos'

/**
 * Nivel 3, Módulo 3.5 — Inversión inicial y retorno esperado.
 * Adaptado de `contenido para los cursos/Pym_Edu_nivel3.pdf`.
 *
 * CORRECCIÓN IMPORTANTE AL MATERIAL: el ejemplo del freezer trataba el aumento
 * de **ventas** como si fuera aumento de **utilidad**, olvidando el costo
 * variable del helado adicional que se vende. Con eso le salía un payback de
 * 0,4 años. Aquí se corrige usando margen de contribución, el payback honesto
 * queda en unos 9 meses, y el error se convierte en el contenido central de la
 * pantalla, porque es el error más caro que se comete al evaluar inversiones.
 */
export const leccion: Leccion = {
  id: 'n3-m5',
  nivel: 'Nivel 3 · Crecer',
  curso: 'Decisiones avanzadas',
  modulo: 'Módulo 3.5',
  area: 'Finanzas',
  titulo: 'Inversión inicial y retorno esperado',
  actualizada: 'octubre de 2026',
  pantallas: [
    {
      id: 'p1',
      tipo: 'portada',
      etiqueta: 'Nivel 3 · Módulo 3.5',
      titulo: 'Inversión inicial y retorno esperado',
      bajada:
        'Todo lo anterior junto, aplicado a una decisión concreta: ¿compro esa máquina o no?',
      duracionMin: 15,
      objetivos: [
        'Estimar el costo real de una inversión, no solo el precio del equipo',
        'Calcular el retorno sin el error que lo infla',
        'Identificar los riesgos antes de comprometer la plata',
        'Decidir con los cuatro indicadores del módulo anterior',
      ],
    },

    {
      id: 'p2',
      tipo: 'contenido',
      etiqueta: 'Lo esencial',
      titulo: 'Planificar una inversión en seis pasos',
      parrafos: [
        'Una inversión mal planificada no suele fallar por el precio del equipo. Falla porque aparecieron costos que nadie contó o porque los ingresos esperados eran más optimistas de lo razonable.',
        'El orden de estos seis pasos importa: el quinto no se puede hacer bien sin los tres primeros.',
      ],
      puntos: [
        'Define el objetivo en una frase concreta. "Comprar un horno para duplicar la producción de pan" sirve; "modernizarse" no.',
        'Estima el costo inicial completo: el precio del activo más instalación, traslado, capacitación, permisos y un margen para imprevistos.',
        'Proyecta ingresos y costos adicionales. Aquí está el error que se ve en la pantalla siguiente, así que léela antes de hacer este paso.',
        'Elige la fuente de financiamiento según el riesgo del proyecto, como viste en el módulo anterior.',
        'Calcula los indicadores: VAN, TIR, Payback y ROI con los números del paso tres.',
        'Analiza los riesgos y qué harías si ocurren. No se trata de predecirlos, sino de no quedar sin plan.',
      ],
      nota: 'El costo inicial casi siempre es mayor que el precio. Instalar, capacitar y dejar funcionando un equipo puede sumar un 20 % o más sobre lo que dice la cotización.',
    },

    {
      id: 'p3',
      tipo: 'contenido',
      etiqueta: 'Cuidado con esto',
      titulo: 'Vender más no es ganar más',
      bajada: 'Es el error más caro al evaluar una inversión, y es muy fácil de cometer.',
      parrafos: [
        'Una heladería evalúa comprar un congelador industrial por $1.200.000. Calcula que le permitirá almacenar más producto y vender $300.000 más al mes. La energía y la mantención le sumarán $50.000 mensuales.',
        'La cuenta rápida, y equivocada, es esta: entran $300.000 más, salen $50.000, quedan $250.000 al mes, o sea $3.000.000 al año. La inversión se recupera en menos de cinco meses.',
        'El problema es que esos $300.000 son ventas, no utilidad. Para venderlos hay que comprar más helado. Si el margen de contribución de la heladería es 60 %, de cada $300.000 vendidos quedan $180.000 después de pagar el producto.',
        'La cuenta honesta: $180.000 de margen adicional menos $50.000 de costos operativos dan $130.000 al mes, o sea $1.560.000 al año. El payback real es de unos 9 meses, no 5.',
      ],
      puntos: [
        'Para evaluar una inversión se usa el margen de contribución adicional, no las ventas adicionales.',
        'La diferencia aquí fue casi el doble en el plazo de recuperación. En proyectos de margen bajo, la diferencia puede dar vuelta la decisión completa.',
      ],
      nota: 'Sigue siendo una buena inversión: recuperar $1.200.000 en nueve meses es excelente. Pero una cosa es decidir con el número correcto y otra es acertar por suerte.',
    },

    {
      id: 'p4',
      tipo: 'simulador',
      etiqueta: 'Pruébalo',
      titulo: 'Evalúa tu inversión',
      instruccion:
        'Pon el costo completo de la inversión y lo que te dejaría al año, usando margen adicional menos costos adicionales, no ventas.',
      calculo: 'inversion',
      etiquetas: {
        inversion: '¿Cuánto cuesta en total la inversión?',
        flujoAnual: '¿Cuánto margen adicional te dejaría al año?',
        anios: '¿Cuántos años de vida útil tiene?',
        tasa: '¿Qué rentabilidad mínima le exiges?',
      },
      inicial: { inversion: 1200000, flujoAnual: 1560000, anios: 5, tasa: 15 },
      lectura: 'VAN: lo que deja en pesos de hoy',
      nota: 'Los números que vienen cargados son los del congelador, ya corregidos. Prueba poniendo $3.000.000 como en la cuenta equivocada y mira cuánto cambia todo: ese es el tamaño del error.',
    },

    {
      id: 'p5',
      tipo: 'tarjetas',
      etiqueta: 'Qué puede salir mal',
      titulo: 'Cuatro riesgos y qué hacer con ellos',
      instruccion: 'Toca cada riesgo para ver cómo reducirlo.',
      tarjetas: [
        {
          id: 't1',
          titulo: 'Los ingresos esperados no llegan',
          definicion:
            'Es el riesgo más común. Se reduce probando en chico antes: arrendar el equipo un mes, hacer una preventa, o partir con la mitad de la capacidad. Mejor gastar algo en averiguarlo que todo en suponerlo.',
        },
        {
          id: 't2',
          titulo: 'Los insumos suben de precio',
          definicion:
            'Afecta directo al margen de contribución, que es de donde sale el retorno. Se reduce cerrando precios con proveedores por un periodo, o calculando el proyecto con un costo de insumos más alto que el actual para ver si aguanta.',
        },
        {
          id: 't3',
          titulo: 'Aparecen costos que no se contaron',
          definicion:
            'Instalación, permisos, capacitación, repuestos, el seguro. Se reduce pidiendo la cotización completa por escrito e incluyendo un margen de imprevistos en el costo inicial, en vez de agregarlos después con plata que ya no hay.',
        },
        {
          id: 't4',
          titulo: 'El equipo compromete la caja del negocio',
          definicion:
            'Aunque la inversión sea rentable, puede dejar al negocio sin margen para operar mientras rinde. Se reduce mirando el flujo proyectado del módulo 3.2 con la cuota incluida, o eligiendo leasing para no descapitalizarse de una vez.',
        },
      ],
      nota: 'Analizar riesgos no es predecir el futuro: es decidir de antemano qué harías en cada caso, para no tener que improvisar con el negocio ya comprometido.',
    },

    {
      id: 'p6',
      tipo: 'caso',
      etiqueta: 'Caso',
      titulo: 'El horno de la pizzería',
      escenario: [
        'Una pizzería evalúa un horno nuevo de $4.000.000. La cotización no incluye $600.000 de instalación eléctrica ni $200.000 de capacitación del personal.',
        'Con el horno podrían vender unas 400 pizzas más al mes, a $8.000 cada una. Cada pizza les cuesta $3.200 en insumos. La energía adicional serían $180.000 al mes.',
        'El dueño calcula: "400 por 8.000 son $3.200.000 al mes, menos $180.000 de luz. Esto se paga en dos meses".',
      ],
      pregunta: '¿Qué está mal en el cálculo y cuál es el número correcto?',
      elegir: 2,
      opciones: [
        {
          id: 'o1',
          texto:
            'Está usando ventas en vez de margen: el margen por pizza es $4.800, así que son $1.920.000 al mes, no $3.200.000',
          correcta: true,
        },
        {
          id: 'o2',
          texto:
            'La inversión real no es $4.000.000 sino $4.800.000, porque faltan la instalación y la capacitación',
          correcta: true,
        },
        {
          id: 'o3',
          texto: 'El error es haber incluido el costo de la energía adicional',
          correcta: false,
        },
        {
          id: 'o4',
          texto: 'Debería usar el precio con IVA incluido para calcular las ventas',
          correcta: false,
        },
        {
          id: 'o5',
          texto: 'No hay error: dos meses de payback es razonable para un horno',
          correcta: false,
        },
      ],
      explicacion:
        'Los dos errores van en la misma dirección, y por eso el resultado se ve tan bien. El margen por pizza es $8.000 menos $3.200, o sea $4.800, así que las 400 pizzas dejan $1.920.000 de margen y no $3.200.000 de utilidad. Y la inversión completa son $4.800.000 contando instalación y capacitación. Con los números corregidos: $1.920.000 menos $180.000 de energía dan $1.740.000 al mes, y $4.800.000 divididos por eso dan un payback cercano a los 2,8 meses. Sigue siendo una inversión excelente, pero la cuenta del dueño mezclaba una inversión subestimada con un retorno inflado, y esa combinación es la que hace que proyectos malos parezcan buenos. La energía adicional está bien incluida, y el IVA no corresponde porque no es ingreso del negocio.',
      bloquea: true,
    },

    {
      id: 'p7',
      tipo: 'aplicar',
      etiqueta: 'Tu negocio',
      titulo: 'Tu plan de inversión',
      instruccion:
        'Piensa en algo concreto que estés evaluando comprar. Estas cuatro respuestas son tu evaluación completa.',
      campos: [
        {
          id: 'c1',
          etiqueta: '¿Qué quieres comprar y para qué?',
          ayuda: 'Una frase. Si no cabe en una frase, el objetivo todavía no está claro.',
          formato: 'texto',
        },
        {
          id: 'c2',
          etiqueta: '¿Cuánto cuesta en total?',
          ayuda: 'Precio más instalación, traslado, capacitación, permisos e imprevistos.',
          formato: 'monto',
        },
        {
          id: 'c3',
          etiqueta: '¿Cuánto margen adicional te dejaría al mes?',
          ayuda: 'Ventas adicionales menos el costo variable de esas ventas, menos los costos operativos nuevos.',
          formato: 'monto',
        },
        {
          id: 'c4',
          etiqueta: '¿Qué pasaría si ese margen fuera la mitad de lo que estimaste?',
          ayuda: 'Si la respuesta es "igual conviene", tienes un buen proyecto. Si es "me complica", ya sabes el riesgo.',
          formato: 'texto',
        },
      ],
      cierre:
        'Divide el segundo número por el tercero y vas a tener tu payback en meses. Si ese plazo te parece largo para lo incierto que es el proyecto, la decisión ya está tomada, aunque el VAN salga positivo.',
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
          texto: 'Al evaluar cuánto te deja una inversión, ¿qué cifra debes usar?',
          opciones: [
            { id: 'a', texto: 'Las ventas adicionales que generaría', correcta: false },
            {
              id: 'b',
              texto: 'El margen adicional, es decir, las ventas menos su propio costo variable',
              correcta: true,
            },
            { id: 'c', texto: 'El total facturado del negocio', correcta: false },
            { id: 'd', texto: 'La utilidad neta del año anterior', correcta: false },
          ],
          explicacion:
            'Usar las ventas adicionales infla el retorno, porque esas ventas traen su propio costo: más producto que comprar o producir. El número correcto es el margen de contribución adicional menos los costos operativos nuevos. Es el error del ejemplo del congelador y, en negocios de margen bajo, puede dar vuelta la decisión completa.',
        },
        {
          id: 'q2',
          texto: '¿Qué debe incluir la inversión inicial, además del precio del equipo?',
          opciones: [
            { id: 'a', texto: 'Nada: el precio es la inversión', correcta: false },
            {
              id: 'b',
              texto: 'Instalación, traslado, capacitación, permisos y un margen de imprevistos',
              correcta: true,
            },
            { id: 'c', texto: 'Las ventas esperadas del primer año', correcta: false },
            { id: 'd', texto: 'El sueldo del dueño durante ese periodo', correcta: false },
          ],
          explicacion:
            'Todo lo que hay que gastar para dejar el equipo funcionando es parte de la inversión. Olvidarlo subestima el costo y, combinado con un retorno inflado, hace que proyectos malos parezcan buenos. En el caso de la pizzería eran $800.000 que no estaban en la cotización, un 20 % sobre el precio.',
        },
        {
          id: 'q3',
          texto: '¿Qué ventaja tiene el leasing frente a comprar un activo al contado?',
          opciones: [
            { id: 'a', texto: 'Que sale más barato en total', correcta: false },
            {
              id: 'b',
              texto: 'Que permite acceder al equipo sin descapitalizarse de una vez',
              correcta: true,
            },
            { id: 'c', texto: 'Que el equipo no se puede perder nunca', correcta: false },
            { id: 'd', texto: 'Que no hay que pagar cuotas', correcta: false },
          ],
          explicacion:
            'La ventaja es de caja: conservas liquidez para operar mientras el equipo empieza a rendir, y el propio bien sirve de garantía. El costo total suele ser mayor que comprar al contado, así que no es más barato: es más manejable. Y hay que cumplir las cuotas, porque si no, se puede perder la opción de compra.',
        },
      ],
    },

    {
      id: 'p9',
      tipo: 'cierre',
      etiqueta: 'Cierre del nivel',
      titulo: 'Lo que te llevas',
      resumen: [
        'La inversión inicial es el precio más todo lo necesario para dejar el equipo funcionando. Casi siempre es más de lo que dice la cotización.',
        'El retorno se calcula con margen adicional, nunca con ventas adicionales. Es el error más caro de esta materia.',
        'Analizar riesgos es decidir de antemano qué harías si ocurren, no predecirlos.',
        'Un proyecto rentable puede igual comprometer la caja. Por eso el flujo proyectado se mira junto con los indicadores.',
      ],
      pasoSemana:
        'Toma la inversión que tengas pendiente y haz las dos correcciones de este módulo: suma todos los costos que faltan en la cotización y cambia ventas por margen. Vuelve a calcular el payback. Si el proyecto sigue en pie después de eso, ya puedes tomar la decisión con tranquilidad. Con esto cierras el Nivel 3: pasaste de ordenar tu plata personal a evaluar inversiones de tu negocio con los mismos criterios que usa un banco.',
    },
  ],
}
