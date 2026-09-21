import type { Leccion } from '../tipos'

/**
 * Nivel 1, Módulo 1.4 — Ahorro con metas.
 * Adaptado de `contenido para los cursos/Pym_Edu_nivel1.pdf`.
 *
 * CORRECCIÓN AL MATERIAL: el PDF anualiza las tasas mensuales multiplicando
 * por 12, lo que da 4,3–5,2 %. Aquí se usa interés compuesto, que es como
 * funciona de verdad: 0,36 % mensual equivale a 4,4 % anual y 0,43 % a 5,3 %.
 * La conclusión del material no cambia, pero las cifras sí.
 */
export const leccion: Leccion = {
  id: 'n1-m4',
  nivel: 'Nivel 1 · Fundamentos',
  curso: 'Fundamentos de educación financiera',
  modulo: 'Módulo 1.4',
  area: 'Finanzas',
  titulo: 'Ahorro con metas',
  actualizada: 'septiembre de 2026',
  fuentes: [
    'Tasas de depósito a plazo publicadas por los bancos, octubre de 2025.',
    'Banco Central de Chile, valor de la Unidad de Fomento.',
  ],
  pantallas: [
    {
      id: 'p1',
      tipo: 'portada',
      etiqueta: 'Nivel 1 · Módulo 1.4',
      titulo: 'Ahorro con metas',
      bajada:
        'Ahorrar lo que sobra no funciona, porque nunca sobra. Ahorrar con una meta y un plazo, sí.',
      duracionMin: 13,
      objetivos: [
        'Entender por qué el ahorro con meta funciona y el ahorro sin meta no',
        'Distinguir el ahorro informal del formal y qué arriesga cada uno',
        'Calcular cuánto tienes que guardar al mes para llegar a tu meta',
        'Comparar el rendimiento de tu ahorro contra la inflación',
      ],
    },

    {
      id: 'p2',
      tipo: 'contenido',
      etiqueta: 'Lo esencial',
      titulo: 'Págate primero',
      parrafos: [
        'Ahorrar sirve para tres cosas concretas: enfrentar una emergencia sin pedir prestado, financiar un proyecto y cumplir una meta. Las tres tienen algo en común: son la alternativa a endeudarse.',
        'La práctica que más cambia el resultado es simple y se llama "págate primero": apartar el ahorro apenas entra el sueldo, no a fin de mes con lo que quede. Suena menor, pero invierte el orden completo. Si ahorras lo que sobra, estás ahorrando lo que tu propio consumo decidió dejarte.',
        'La segunda decisión es dónde ponerlo. Guardar la plata en casa la deja expuesta a robo y, sobre todo, a la inflación: sigue siendo la misma cantidad de pesos, pero compra menos cada mes que pasa.',
      ],
      nota: 'Un fondo de emergencia no es un ahorro cualquiera: es el que evita que un imprevisto se convierta en una deuda al 2,5 % mensual. Por eso conviene armarlo antes que cualquier otra meta.',
    },

    {
      id: 'p3',
      tipo: 'comparacion',
      etiqueta: 'Compara',
      titulo: 'Guardar en casa o guardar en el sistema',
      bajada: 'La misma plata, con riesgos distintos.',
      criterios: [
        'Dónde está',
        'Qué pasa con la inflación',
        'Disponibilidad',
        'Riesgo principal',
        'Cuándo tiene sentido',
      ],
      columnas: [
        {
          titulo: 'Ahorro informal',
          celdas: [
            'En casa, en efectivo o en una alcancía',
            'Pierde poder de compra mes a mes: nada la compensa',
            'Inmediata, y esa es justamente la tentación',
            'Robo, pérdida y la facilidad de gastarla sin pensarlo',
            'Para montos chicos y de muy corto plazo',
          ],
        },
        {
          titulo: 'Ahorro formal',
          celdas: [
            'En una cuenta de ahorro, un depósito a plazo o un fondo',
            'Puede compensarla en parte o del todo, según el instrumento',
            'Depende del instrumento: la cuenta es inmediata, el depósito tiene plazo',
            'Rendimiento por debajo de la inflación, y en fondos, variación del valor',
            'Para el fondo de emergencia y para cualquier meta a meses o años',
          ],
        },
      ],
      nota: 'Que el depósito a plazo tenga fecha de vencimiento no siempre es un defecto. Para un fondo de emergencia molesta, pero para una meta a doce meses ese candado ayuda.',
    },

    {
      id: 'p4',
      tipo: 'tarjetas',
      etiqueta: 'Dónde ponerlo',
      titulo: 'Cuatro instrumentos formales',
      instruccion: 'Toca cada uno para ver qué ofrece y qué pide a cambio.',
      tarjetas: [
        {
          id: 't1',
          titulo: 'Cuenta de ahorro',
          definicion:
            'La más simple. Rinde poco, pero la plata está disponible y separada de la cuenta que usas a diario. Esa separación ya es la mitad del beneficio: lo que no ves en el saldo corriente, no lo gastas sin pensar.',
        },
        {
          id: 't2',
          titulo: 'Depósito a plazo',
          definicion:
            'Dejas un monto por un tiempo definido a cambio de una tasa que conoces de antemano. No hay sorpresas: sabes exactamente cuánto vas a recibir. A cambio, no puedes retirarlo antes sin perder parte del rendimiento.',
        },
        {
          id: 't3',
          titulo: 'Cuenta de ahorro en UF',
          definicion:
            'El saldo se expresa en UF, así que se reajusta con la inflación. Es el instrumento pensado específicamente para conservar poder de compra en plazos largos. No busca ganar: busca no perder.',
        },
        {
          id: 't4',
          titulo: 'Fondo mutuo',
          definicion:
            'Un conjunto de inversiones administrado por terceros. Puede rendir más que un depósito, pero su valor sube y baja: es posible retirar menos de lo que se puso. No es un ahorro, es una inversión, y no corresponde para el fondo de emergencia.',
        },
      ],
      nota: 'Más rendimiento siempre viene con más variación. Si alguien te ofrece rendimiento alto sin riesgo, el riesgo existe igual y está en otra parte.',
    },

    {
      id: 'p5',
      tipo: 'contenido',
      etiqueta: 'El número que importa',
      titulo: '¿Tu ahorro le gana a la inflación?',
      parrafos: [
        'Una tasa mensual parece pequeña y una inflación anual parece grande, así que compararlas de memoria engaña. Hay que llevarlas a la misma escala.',
        'En octubre de 2025, las mejores tasas de depósito a 30 días rondaban 0,43 % mensual y otras entidades ofrecían 0,36 %. Llevadas a un año con interés compuesto, eso equivale aproximadamente a 5,3 % y 4,4 % anual respectivamente.',
        'La inflación de doce meses en ese momento era 4,4 %. Es decir: el depósito más bajo apenas empataba y el más alto ganaba menos de un punto. El ahorro a plazo en pesos conservaba el valor, pero no lo hacía crecer.',
      ],
      puntos: [
        'Anualiza siempre la tasa mensual antes de compararla. Multiplicar por 12 sirve como aproximación rápida, pero se queda corto.',
        'Compara contra la inflación de doce meses, no contra la del mes.',
        'Si la meta es de varios años, mira instrumentos en UF: están hechos para este problema.',
      ],
      nota: 'Conservar el valor no es fracasar. Un fondo de emergencia tiene que estar disponible y seguro, no rendir: para eso está el resto de tu ahorro.',
      fuente:
        'Tasas de octubre de 2025 e inflación de doce meses a septiembre de 2025. Las tasas cambian seguido: revisa las vigentes antes de decidir.',
    },

    {
      id: 'p6',
      tipo: 'simulador',
      etiqueta: 'Pruébalo',
      titulo: 'Cuánto tienes que guardar al mes',
      instruccion:
        'Pon tu meta, el plazo y el rendimiento mensual que te ofrezcan. Mira cuánto cambia la cuota cuando la plata rinde.',
      calculo: 'metaAhorro',
      etiquetas: {
        meta: '¿Cuánto quieres juntar?',
        meses: '¿En cuántos meses?',
        tasaMensual: '¿Qué rendimiento mensual te ofrecen?',
      },
      inicial: { meta: 1000000, meses: 12, tasaMensual: 0.4 },
      lectura: 'Tienes que apartar cada mes',
      nota: 'Pon el rendimiento en 0 y compara. En plazos cortos la diferencia es chica, y eso también es información: para doce meses lo que decide si llegas es la disciplina del aporte, no la tasa.',
      fuente: 'El 0,4 % mensual es un valor de referencia de octubre de 2025. Usa la tasa que te ofrezcan hoy.',
    },

    {
      id: 'p7',
      tipo: 'aplicar',
      etiqueta: 'Tu caso',
      titulo: 'Tu meta',
      instruccion:
        'Una meta sin monto ni fecha no es una meta. Escríbela completa. Queda guardada en tu navegador.',
      campos: [
        {
          id: 'c1',
          etiqueta: '¿Para qué quieres ahorrar?',
          ayuda: 'Sé concreto: "fondo de emergencia de tres meses" funciona mejor que "por si acaso".',
          formato: 'texto',
        },
        { id: 'c2', etiqueta: '¿Cuánto necesitas juntar?', formato: 'monto' },
        {
          id: 'c3',
          etiqueta: '¿Cuánto puedes apartar el día que te pagan?',
          ayuda: 'El día que te pagan, no a fin de mes. Ese es el punto.',
          formato: 'monto',
        },
      ],
      cierre:
        'Divide lo que necesitas por lo que puedes apartar y vas a tener el plazo real, no el que te gustaría. Si el número te parece demasiado largo, hay dos salidas honestas: bajar la meta o subir el aporte. Estirar la esperanza no es una de ellas.',
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
          texto: '¿Qué tipo de ahorro protege mejor contra la inflación?',
          opciones: [
            { id: 'a', texto: 'Cuenta corriente', correcta: false },
            { id: 'b', texto: 'Alcancía en casa', correcta: false },
            { id: 'c', texto: 'Depósito a plazo en UF', correcta: true },
            { id: 'd', texto: 'Tarjeta de crédito', correcta: false },
          ],
          explicacion:
            'La UF se reajusta con el IPC, así que un instrumento expresado en UF conserva el poder de compra por diseño. La cuenta corriente y la alcancía dejan la plata fija en pesos mientras los precios suben. Y la tarjeta de crédito no es un instrumento de ahorro: es lo contrario, una deuda.',
        },
        {
          id: 'q2',
          texto:
            'Si un depósito a plazo paga 0,4 % mensual y la inflación anual proyectada es 4,4 %, el rendimiento real del ahorro será:',
          opciones: [
            { id: 'a', texto: 'Significativamente superior a la inflación', correcta: false },
            { id: 'b', texto: 'Similar a la inflación', correcta: true },
            { id: 'c', texto: 'Nulo', correcta: false },
            { id: 'd', texto: 'Negativo con certeza', correcta: false },
          ],
          explicacion:
            'Un 0,4 % mensual con interés compuesto equivale a cerca de 4,9 % anual, muy cerca del 4,4 % de inflación. El ahorro conserva el valor y gana un poco, pero no mucho más. No es nulo ni claramente negativo, aunque queda tan al límite que el impuesto sobre los intereses puede comerse la diferencia.',
        },
        {
          id: 'q3',
          texto: 'Para planificar una meta de ahorro debes:',
          opciones: [
            { id: 'a', texto: 'Definir el objetivo, el plazo y la cuota mensual', correcta: true },
            { id: 'b', texto: 'Depositar dinero solo cuando sobre', correcta: false },
            { id: 'c', texto: 'Esperar a fin de mes para ver cuánto queda', correcta: false },
            { id: 'd', texto: 'Gastar primero y ahorrar lo que quede', correcta: false },
          ],
          explicacion:
            'Objetivo, plazo y cuota: con esos tres datos la meta se vuelve verificable y sabes cada mes si vas bien o mal. Las otras tres alternativas describen lo mismo con distintas palabras, que es ahorrar lo que sobre. El problema conocido de ese método es que no sobra.',
        },
      ],
    },

    {
      id: 'p9',
      tipo: 'cierre',
      etiqueta: 'Cierre',
      titulo: 'Lo que te llevas',
      resumen: [
        'Págate primero: aparta el ahorro el día que entra la plata, no con lo que quede a fin de mes.',
        'El ahorro en casa pierde valor todos los meses aunque nadie te lo robe.',
        'Objetivo, plazo y cuota convierten una intención en un plan que puedes revisar.',
        'Un depósito a plazo en pesos conserva el valor frente a la inflación, pero casi no lo hace crecer. Para plazos largos, los instrumentos en UF están hechos para eso.',
      ],
      pasoSemana:
        'Define una sola meta con monto y fecha, calcula la cuota con el simulador de esta lección y programa una transferencia automática para el día que te pagan. Automatizarla es lo que hace que sobreviva al tercer mes, que es donde se cae casi siempre.',
    },
  ],
}
