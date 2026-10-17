import type { Leccion } from '../tipos'

/**
 * Nivel 3, Módulo 3.3 — VAN, TIR, Payback y ROI.
 * Adaptado de `contenido para los cursos/Pym_Edu_nivel3.pdf`.
 *
 * Los dos proyectos de la comparación y del caso se calcularon con las mismas
 * fórmulas que usa el simulador, para que un usuario que meta esos números
 * obtenga exactamente los resultados que aparecen en el texto.
 */
export const leccion: Leccion = {
  id: 'n3-m3',
  nivel: 'Nivel 3 · Crecer',
  curso: 'Decisiones avanzadas',
  modulo: 'Módulo 3.3',
  area: 'Finanzas',
  titulo: 'VAN, TIR, Payback y ROI sin miedo',
  actualizada: 'octubre de 2026',
  pantallas: [
    {
      id: 'p1',
      tipo: 'portada',
      etiqueta: 'Nivel 3 · Módulo 3.3',
      titulo: 'VAN, TIR, Payback y ROI sin miedo',
      bajada:
        'Cuatro siglas que suenan a finanzas corporativas y que sirven igual para decidir si comprar un horno de un millón.',
      duracionMin: 16,
      objetivos: [
        'Entender por qué mil pesos de hoy valen más que mil pesos en tres años',
        'Saber qué pregunta responde cada uno de los cuatro indicadores',
        'Evaluar un proyecto propio con números, no con intuición',
        'Reconocer cuándo un indicador solo te puede llevar a decidir mal',
      ],
    },

    {
      id: 'p2',
      tipo: 'contenido',
      etiqueta: 'Lo esencial',
      titulo: 'Mil pesos hoy no son mil pesos en tres años',
      parrafos: [
        'Esto ya lo viste en el primer módulo del Nivel 1, con la inflación. Aquí se usa para algo distinto: comparar un desembolso de hoy con ganancias que van a llegar repartidas en varios años.',
        'La plata de hoy vale más por dos razones. Una es la inflación: dentro de tres años esos pesos comprarán menos. La otra es el costo de oportunidad: si no inviertes en este proyecto, podrías usar esa plata en otra cosa que rinda.',
        'Por eso, cuando un proyecto promete devolverte $400.000 al año durante cuatro años, no es correcto sumarlos y decir que te devuelve $1.600.000. Hay que traer cada uno a su valor de hoy, y eso es exactamente lo que hace el VAN.',
        'La tasa con la que se hace esa conversión se llama tasa de descuento, y la eliges tú. Puede ser la tasa del crédito que tomarías o lo que te rendiría esa plata en otra parte: es el mínimo que le exiges al proyecto.',
      ],
      nota: 'No necesitas calcular esto a mano. Lo que sí necesitas es entender qué significa el resultado, porque eso es lo que te deja discutir con un banco o con un socio de igual a igual.',
    },

    {
      id: 'p3',
      tipo: 'tarjetas',
      etiqueta: 'Cuatro indicadores',
      titulo: 'Qué pregunta responde cada uno',
      instruccion: 'Toca cada indicador para ver qué mide y en qué unidad.',
      tarjetas: [
        {
          id: 't1',
          titulo: 'VAN',
          definicion:
            'Valor Actual Neto. Trae todas las ganancias futuras a pesos de hoy y les resta la inversión. Se expresa en pesos. Si es positivo, el proyecto rinde más que la tasa que le exigiste; si es negativo, te conviene más usar la plata en otra cosa.',
        },
        {
          id: 't2',
          titulo: 'TIR',
          definicion:
            'Tasa Interna de Retorno. Es la rentabilidad anual del proyecto: la tasa exacta a la que el VAN daría cero. Se expresa en porcentaje. Sirve para compararla con lo que te cuesta la plata: si la TIR es 22 % y el crédito te cobra 15 %, hay margen.',
        },
        {
          id: 't3',
          titulo: 'Payback',
          definicion:
            'Cuánto demoras en recuperar lo que pusiste. Se expresa en años o meses. Es el más simple y el más útil cuando hay incertidumbre: un proyecto que se recupera en un año arriesga mucho menos que uno que demora cinco, aunque el segundo prometa más.',
        },
        {
          id: 't4',
          titulo: 'ROI',
          definicion:
            'Retorno sobre la inversión: la ganancia total dividida por lo que invertiste, en porcentaje. Es el más fácil de comunicar y el menos riguroso, porque no considera cuándo llega la plata. Un ROI de 60 % en un año y uno de 60 % en diez años no son lo mismo.',
        },
      ],
      nota: 'Ninguno se usa solo. El VAN dice cuánto ganas, la TIR a qué ritmo, el Payback cuánto arriesgas mientras tanto y el ROI cuánto rindió en total.',
    },

    {
      id: 'p4',
      tipo: 'emparejar',
      etiqueta: 'Practica',
      titulo: '¿Qué indicador responde a esto?',
      instruccion: 'Toca una pregunta y después el indicador que la responde.',
      izquierdaTitulo: 'Lo que quieres saber',
      derechaTitulo: 'Indicador',
      pares: [
        {
          id: 'e1',
          izquierda: '¿Cuánta plata de hoy me deja este proyecto, descontando lo que le exijo?',
          derecha: 'VAN',
        },
        {
          id: 'e2',
          izquierda: '¿A qué tasa anual rinde, para compararlo con mi crédito?',
          derecha: 'TIR',
        },
        {
          id: 'e3',
          izquierda: '¿Cuánto tiempo estoy expuesto antes de recuperar lo que puse?',
          derecha: 'Payback',
        },
        {
          id: 'e4',
          izquierda: '¿Cuánto gané en total sobre lo que invertí?',
          derecha: 'ROI',
        },
      ],
      bloquea: true,
    },

    {
      id: 'p5',
      tipo: 'comparacion',
      etiqueta: 'Compara',
      titulo: 'El mismo millón, dos proyectos',
      bajada:
        'Los dos piden $1.000.000. Uno devuelve $400.000 al año durante cuatro años; el otro, $600.000 al año durante dos. Exigiéndoles un 10 % anual, esto es lo que dicen los cuatro indicadores.',
      criterios: [
        'Lo que devuelve en total',
        'VAN al 10 %',
        'TIR',
        'Payback',
        'ROI',
      ],
      columnas: [
        {
          titulo: 'Proyecto A: $400.000 por 4 años',
          recomendada: true,
          celdas: [
            '$1.600.000',
            '$267.946: el más alto',
            'Cerca de 21,9 % anual',
            '2 años y 6 meses',
            '60 % sobre lo invertido',
          ],
        },
        {
          titulo: 'Proyecto B: $600.000 por 2 años',
          celdas: [
            '$1.200.000',
            '$41.322: positivo, pero apenas',
            'Cerca de 13,1 % anual',
            '1 año y 8 meses: el más rápido',
            '20 % sobre lo invertido',
          ],
        },
      ],
      nota: 'Tres de los cuatro indicadores prefieren A. Solo el Payback prefiere B, y no por eso está equivocado: B te deja fuera de riesgo diez meses antes. Si tu negocio no puede quedarse sin ese millón por dos años y medio, B es la decisión correcta aunque gane menos.',
    },

    {
      id: 'p6',
      tipo: 'simulador',
      etiqueta: 'Pruébalo',
      titulo: 'Evalúa tu propio proyecto',
      instruccion:
        'Pon cuánto tienes que invertir, cuánto esperas que deje al año y qué rentabilidad mínima le exiges.',
      calculo: 'inversion',
      etiquetas: {
        inversion: '¿Cuánto tienes que invertir?',
        flujoAnual: '¿Cuánto esperas que te deje al año?',
        anios: '¿Durante cuántos años?',
        tasa: '¿Qué rentabilidad mínima le exiges?',
      },
      inicial: { inversion: 1000000, flujoAnual: 400000, anios: 4, tasa: 10 },
      lectura: 'VAN: lo que deja en pesos de hoy',
      nota: 'Sube la tasa que le exiges hasta que el VAN se vuelva negativo. El valor donde cruza el cero es la TIR, y así se entiende qué significa de verdad: es el techo de lo que puedes pagar por la plata antes de que el proyecto deje de convenir.',
    },

    {
      id: 'p7',
      tipo: 'caso',
      etiqueta: 'Caso',
      titulo: 'El proyecto que se veía mejor',
      escenario: [
        'Carolina tiene un taller de costura y $1.000.000 para invertir. Evalúa dos opciones.',
        'La primera es comprar dos máquinas que le dejarían $400.000 al año durante cuatro años. La segunda es un contrato de confección a dos años que le dejaría $600.000 anuales.',
        'Su contador le dice que el contrato "tiene mejor retorno porque recupera la plata más rápido". Carolina tiene un crédito al 15 % anual que podría pagar antes con cualquiera de los dos.',
      ],
      pregunta: '¿Qué debería considerar Carolina?',
      elegir: 2,
      opciones: [
        {
          id: 'o1',
          texto:
            'Que la TIR del contrato, cerca de 13,1 %, es menor que el 15 % de su crédito: le conviene más pagar la deuda que tomar ese contrato',
          correcta: true,
        },
        {
          id: 'o2',
          texto:
            'Que recuperar rápido no es lo mismo que ganar más: las máquinas dejan tres veces más valor actual',
          correcta: true,
        },
        {
          id: 'o3',
          texto: 'Que el contrato es mejor porque el Payback es el indicador más confiable',
          correcta: false,
        },
        {
          id: 'o4',
          texto: 'Que debe elegir el que devuelva más plata en total, sin descontar nada',
          correcta: false,
        },
        {
          id: 'o5',
          texto: 'Que ambos dan lo mismo porque la inversión inicial es idéntica',
          correcta: false,
        },
      ],
      explicacion:
        'El dato que cambia la decisión es el crédito al 15 %. Con una TIR cercana al 13,1 %, el contrato rinde menos de lo que le cuesta su propia deuda: Carolina ganaría más usando ese millón en pagar el crédito. Las máquinas, con TIR cercana al 21,9 %, sí superan ese costo. Y el consejo del contador confunde velocidad con rentabilidad: el Payback mide riesgo y liquidez, no cuánto ganas, así que como único criterio lleva a rechazar proyectos buenos. Sumar los flujos sin descontarlos ignora que la plata de hoy vale más. La inversión igual no hace comparables dos proyectos: lo que los diferencia es cuánto devuelven y cuándo.',
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
          texto: '¿Qué significa que el VAN de un proyecto sea positivo?',
          opciones: [
            { id: 'a', texto: 'Que el proyecto no tiene riesgo', correcta: false },
            {
              id: 'b',
              texto: 'Que rinde más que la tasa mínima que le exigiste',
              correcta: true,
            },
            { id: 'c', texto: 'Que recupera la inversión en menos de un año', correcta: false },
            { id: 'd', texto: 'Que la inversión inicial es baja', correcta: false },
          ],
          explicacion:
            'El VAN positivo significa que, después de traer las ganancias futuras a pesos de hoy y descontarles lo que le exigiste al proyecto, todavía sobra plata. No dice nada sobre el riesgo ni sobre la velocidad de recuperación: para eso están el Payback y tu propio juicio sobre qué tan confiables son esos flujos.',
        },
        {
          id: 'q2',
          texto: '¿Cómo se interpreta la TIR frente a la tasa mínima que exiges?',
          opciones: [
            { id: 'a', texto: 'Si la TIR es menor, el proyecto conviene', correcta: false },
            {
              id: 'b',
              texto: 'Si la TIR es mayor que esa tasa, el proyecto rinde más de lo que le exiges',
              correcta: true,
            },
            { id: 'c', texto: 'La TIR siempre debe ser mayor al 100 %', correcta: false },
            { id: 'd', texto: 'La TIR no se compara con nada: se mira sola', correcta: false },
          ],
          explicacion:
            'La TIR sola no dice si un proyecto es bueno: necesita una referencia. Esa referencia es lo que te cuesta la plata, sea la tasa de tu crédito o lo que rendiría en otra parte. Una TIR de 13 % es excelente si tu costo es 5 % y es mala si tu crédito cobra 15 %, como en el caso de Carolina.',
        },
        {
          id: 'q3',
          texto: '¿Cuál es la principal limitación del ROI?',
          opciones: [
            { id: 'a', texto: 'Que es difícil de calcular', correcta: false },
            { id: 'b', texto: 'Que solo sirve para inversiones grandes', correcta: false },
            {
              id: 'c',
              texto: 'Que no considera cuándo llega la plata: 60 % en un año y en diez años se ven igual',
              correcta: true,
            },
            { id: 'd', texto: 'Que no se puede expresar en porcentaje', correcta: false },
          ],
          explicacion:
            'El ROI es una división simple y por eso es el más fácil de comunicar, pero ignora el tiempo por completo. Dos proyectos con el mismo ROI pueden ser muy distintos si uno devuelve en un año y el otro en diez. Por eso se usa junto al VAN y al Payback, que sí consideran cuándo ocurren las cosas.',
        },
      ],
    },

    {
      id: 'p9',
      tipo: 'cierre',
      etiqueta: 'Cierre',
      titulo: 'Lo que te llevas',
      resumen: [
        'La plata de hoy vale más que la misma cantidad en el futuro. Por eso no se suman flujos de años distintos sin descontarlos.',
        'El VAN dice cuánto ganas en pesos de hoy; la TIR a qué tasa rinde; el Payback cuánto demoras en salir del riesgo; el ROI cuánto rindió en total.',
        'La TIR se compara siempre contra lo que te cuesta la plata. Sola no significa nada.',
        'Ningún indicador decide por sí solo. El Payback prefiere lo rápido, el VAN prefiere lo rentable, y cuál pesa más depende de cuánta caja puedas dejar comprometida.',
      ],
      pasoSemana:
        'Toma una inversión que tengas pendiente, aunque sea chica, y métela en el simulador con una estimación honesta de lo que te dejaría al año. Usa como tasa mínima la de tu crédito más caro. Si el VAN sale negativo, acabas de ahorrarte esa plata; si sale positivo, ya tienes con qué justificarlo ante un banco.',
    },
  ],
}
