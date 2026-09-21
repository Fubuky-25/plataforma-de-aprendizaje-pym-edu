import type { Leccion } from '../tipos'

/**
 * Nivel 1, Módulo 1.1 — El valor del dinero y la inflación.
 * Adaptado de `contenido para los cursos/Pym_Edu_nivel1.pdf`.
 *
 * ATENCIÓN CON LAS CIFRAS: el material original trae datos de 2025 (IPC de
 * septiembre de 2025 y tasas de depósito de octubre de 2025). Aquí cada cifra
 * aparece con su fecha a la vista para no presentarla como vigente. Antes de
 * publicar hay que actualizarlas contra el INE y el Banco Central.
 */
export const leccion: Leccion = {
  id: 'n1-m1',
  nivel: 'Nivel 1 · Fundamentos',
  curso: 'Fundamentos de educación financiera',
  modulo: 'Módulo 1.1',
  area: 'Finanzas',
  titulo: 'El valor del dinero y la inflación',
  actualizada: 'septiembre de 2026',
  fuentes: [
    'Instituto Nacional de Estadísticas (INE), índice de precios al consumidor, septiembre de 2025.',
    'Banco Central de Chile, valor y cálculo de la Unidad de Fomento.',
    'Tasas de depósito a plazo publicadas por los bancos, octubre de 2025.',
  ],
  pantallas: [
    {
      id: 'p1',
      tipo: 'portada',
      etiqueta: 'Nivel 1 · Módulo 1.1',
      titulo: 'El valor del dinero y la inflación',
      bajada:
        'La misma cantidad de plata no compra lo mismo todos los años. Entender por qué es el primer paso para no perder sin darte cuenta.',
      duracionMin: 12,
      objetivos: [
        'Reconocer las tres funciones que cumple el dinero',
        'Entender qué mide el IPC y qué significa la inflación',
        'Saber qué es la UF y para qué se usa',
        'Comparar si tu ahorro le gana o le pierde a la inflación',
      ],
    },

    {
      id: 'p2',
      tipo: 'contenido',
      etiqueta: 'Lo esencial',
      titulo: '¿Qué es el dinero?',
      bajada: 'Cumple tres funciones al mismo tiempo, y solemos notar solo una.',
      parrafos: [
        'Usamos el dinero todos los días sin pensar en qué hace. Hace tres cosas distintas, y cada una resuelve un problema diferente de la vida económica.',
        'En Chile, el Banco Central es la institución que emite el peso y se preocupa de que mantenga su valor en el tiempo. Esa última parte es la que se vuelve difícil, y es de lo que trata esta lección.',
      ],
      puntos: [
        'Medio de intercambio: sirve para pagar, sin tener que cambiar una cosa por otra.',
        'Unidad de cuenta: sirve para comparar, porque pone todo en la misma escala.',
        'Depósito de valor: sirve para guardar, porque no se echa a perder como un producto.',
      ],
      nota: 'La tercera función es la que falla cuando hay inflación: el dinero sigue sirviendo para pagar y para comparar, pero guarda cada vez menos valor.',
    },

    {
      id: 'p3',
      tipo: 'emparejar',
      etiqueta: 'Practica',
      titulo: '¿Qué función está cumpliendo el dinero?',
      instruccion: 'Toca una situación y después la función que le corresponde.',
      izquierdaTitulo: 'Situación',
      derechaTitulo: 'Función del dinero',
      pares: [
        {
          id: 'e1',
          izquierda: 'Pagas el pan con un billete de $2.000',
          derecha: 'Medio de intercambio',
        },
        {
          id: 'e2',
          izquierda: 'Miras dos zapatillas y decides cuál conviene por su precio',
          derecha: 'Unidad de cuenta',
        },
        {
          id: 'e3',
          izquierda: 'Guardas $50.000 este mes para usarlos el próximo',
          derecha: 'Depósito de valor',
        },
      ],
      bloquea: true,
    },

    {
      id: 'p4',
      tipo: 'contenido',
      etiqueta: 'El concepto',
      titulo: 'Inflación: cuando los precios suben y tu plata rinde menos',
      parrafos: [
        'La inflación es el aumento generalizado de los precios. No es que un producto suba: es que casi todo sube al mismo tiempo, y por eso la misma plata alcanza para menos.',
        'Para medirla, el Instituto Nacional de Estadísticas arma una canasta con los bienes y servicios que consume un hogar promedio y revisa mes a mes cuánto cuesta. Esa medición es el Índice de Precios al Consumidor, el IPC.',
        'En septiembre de 2025, el IPC subió 0,4 % respecto del mes anterior, acumulando 3,3 % en lo que iba del año y 4,4 % en doce meses. El Banco Central tiene como meta que la inflación anual se mantenga cerca del 3 %, así que esa cifra estaba por encima de lo esperado.',
      ],
      nota: 'Si tus ingresos suben menos que la inflación, ganas más pesos pero puedes comprar menos. Por eso conviene mirar siempre ambos números juntos.',
      fuente:
        'Cifras del INE correspondientes a septiembre de 2025. Antes de tomar decisiones, revisa el dato más reciente en ine.gob.cl.',
    },

    {
      id: 'p5',
      tipo: 'tarjetas',
      etiqueta: 'Cuatro palabras',
      titulo: 'Los términos que se confunden',
      instruccion: 'Toca cada uno para ver qué significa.',
      tarjetas: [
        {
          id: 't1',
          titulo: 'IPC',
          definicion:
            'Índice de Precios al Consumidor. Es la medición: cuánto cuesta este mes la canasta de bienes y servicios de un hogar promedio, comparada con el mes anterior. Lo publica el INE una vez al mes.',
        },
        {
          id: 't2',
          titulo: 'Inflación',
          definicion:
            'Es el fenómeno que el IPC mide: el alza generalizada de los precios. Cuando alguien dice "la inflación fue de 4,4 %", se refiere a cuánto subió el IPC en doce meses.',
        },
        {
          id: 't3',
          titulo: 'UF',
          definicion:
            'Unidad de Fomento. Es una unidad de medida que se reajusta con la inflación. El Banco Central calcula su valor todos los días tomando como referencia el IPC, por lo que una deuda en UF mantiene su valor real aunque suban los precios.',
        },
        {
          id: 't4',
          titulo: 'Banco Central',
          definicion:
            'La institución que emite el peso chileno y cuida su valor. Su meta es que la inflación anual se mantenga en torno al 3 %. Para lograrlo mueve la tasa de interés, que es lo que termina afectando lo que pagas por un crédito.',
        },
      ],
      nota: 'La UF no es plata: es una regla para expresar montos. No existen billetes de UF, existen pesos que se calculan según ella.',
    },

    {
      id: 'p6',
      tipo: 'simulador',
      etiqueta: 'Pruébalo',
      titulo: '¿Cuánto vale tu plata dentro de un año?',
      instruccion:
        'Pon una cantidad que tengas guardada y mira cuánto podrá comprar más adelante si los precios siguen subiendo.',
      calculo: 'inflacion',
      etiquetas: {
        monto: '¿Cuánta plata tienes guardada?',
        tasa: '¿Cuánto esperas que suban los precios al año?',
        meses: '¿Dentro de cuántos meses?',
      },
      inicial: { monto: 1000000, tasaAnual: 4.4, meses: 12 },
      lectura: 'Con esa plata vas a poder comprar lo que hoy compras con',
      nota: 'La plata no desaparece: sigues teniendo la misma cantidad de pesos. Lo que cambia es cuánto alcanzan. Por eso dejar el ahorro quieto tiene un costo, aunque no se vea en la cuenta.',
      fuente:
        'El 4,4 % que viene cargado es la inflación de doce meses a septiembre de 2025. Cámbialo por el dato actual para que el resultado sirva.',
    },

    {
      id: 'p7',
      tipo: 'comparacion',
      etiqueta: 'Compara',
      titulo: 'Un contrato en pesos o en UF',
      bajada:
        'Un compromiso de $10 millones a dos años, escrito de las dos maneras. No hay una mejor para todos: depende de qué lado estés.',
      criterios: [
        'Cómo queda la cuota',
        'Qué pasa si los precios suben',
        'Cuánto vale al final en poder de compra',
        'A quién protege',
        'Dónde se usa habitualmente',
      ],
      columnas: [
        {
          titulo: 'En pesos',
          celdas: [
            'Se fija un número y ese número no cambia en los dos años',
            'La cuota sigue igual, pero representa menos valor real cada mes',
            'Menos de lo pactado: con 4,4 % anual, dos años se comen cerca de un 8 % del valor',
            'A quien paga, porque su deuda se vuelve más liviana en términos reales',
            'Compras cotidianas, sueldos, créditos de consumo cortos',
          ],
        },
        {
          titulo: 'En UF',
          celdas: [
            'Se fija una cantidad de UF y los pesos se recalculan cada día',
            'La cuota en pesos sube junto con los precios',
            'Lo mismo que se pactó: ese es el punto de usar UF',
            'A quien recibe, porque conserva el valor real de lo acordado',
            'Arriendos, créditos hipotecarios, seguros, contratos largos',
          ],
        },
      ],
      nota: 'Antes de firmar en UF, calcula la cuota en pesos de hoy y pregúntate si podrías pagarla si subiera un 5 %. La UF protege el valor del contrato, no tu bolsillo.',
      fuente: 'Ejercicio construido con la inflación de 4,4 % anual observada a septiembre de 2025.',
    },

    {
      id: 'p8',
      tipo: 'contenido',
      etiqueta: 'Aplícalo',
      titulo: 'Tu ahorro, ¿le gana o le pierde a la inflación?',
      parrafos: [
        'Un depósito a plazo es un ahorro que dejas en el banco por un tiempo definido a cambio de una tasa conocida de antemano. Es el instrumento más simple que existe y por eso es el primero que muchos usan.',
        'En octubre de 2025, las tasas a 30 días se movían entre 0,35 % y 0,43 % mensual según el banco. Banco Internacional y Banco Ripley ofrecían 0,43 % mensual; BancoEstado pagaba 0,36 % mensual.',
        'El número mensual engaña, porque hay que compararlo con una inflación anual. Un 0,36 % mensual, repetido doce veces, equivale a cerca de 4,4 % al año. Es decir, prácticamente lo mismo que subían los precios en ese momento: ese ahorro no ganaba valor, apenas lo empataba.',
      ],
      puntos: [
        'Lleva siempre la tasa mensual a su equivalente anual antes de compararla.',
        'Compárala contra la inflación de doce meses, no contra la del mes.',
        'Si la tasa anual queda por debajo de la inflación, tu ahorro pierde poder de compra aunque el saldo crezca.',
      ],
      nota: 'Que un ahorro empate a la inflación no lo hace inútil: conserva el valor y está disponible. Pero conviene saber que conservar no es lo mismo que crecer.',
      fuente:
        'Tasas publicadas por los bancos en octubre de 2025. Las tasas cambian seguido: revisa las vigentes antes de decidir.',
    },

    {
      id: 'p9',
      tipo: 'quiz',
      etiqueta: 'Evaluación',
      titulo: 'Comprueba lo que entendiste',
      instruccion: 'Cuatro preguntas. Después de cada una vas a ver por qué.',
      bloquea: true,
      preguntas: [
        {
          id: 'q1',
          texto: '¿Cuál de estas no es una función del dinero?',
          opciones: [
            { id: 'a', texto: 'Medio de intercambio', correcta: false },
            { id: 'b', texto: 'Unidad de cuenta', correcta: false },
            { id: 'c', texto: 'Generador de intereses', correcta: true },
            { id: 'd', texto: 'Depósito de valor', correcta: false },
          ],
          explicacion:
            'El dinero por sí solo no genera intereses. Los intereses aparecen cuando prestas ese dinero o lo dejas en un instrumento de ahorro: los paga quien lo usa, no el billete. Las tres funciones del dinero son intercambio, cuenta y depósito de valor.',
        },
        {
          id: 'q2',
          texto:
            'En septiembre de 2025 el IPC aumentó 0,4 % en el mes. ¿Cuál fue la inflación de los últimos doce meses?',
          opciones: [
            { id: 'a', texto: '3,3 %', correcta: false },
            { id: 'b', texto: '4,4 %', correcta: true },
            { id: 'c', texto: '5,6 %', correcta: false },
            { id: 'd', texto: '2,7 %', correcta: false },
          ],
          explicacion:
            'La inflación de doce meses fue 4,4 %. Ojo con el 3,3 %: esa era la variación acumulada en lo que iba del año, de enero a septiembre, que es otra medición. Las tres cifras conviven en la misma publicación del INE y conviene no confundirlas.',
        },
        {
          id: 'q3',
          texto: '¿Por qué se usa la UF en los contratos de largo plazo?',
          opciones: [
            { id: 'a', texto: 'Para obtener una rentabilidad', correcta: false },
            { id: 'b', texto: 'Para proteger el valor real frente a la inflación', correcta: true },
            { id: 'c', texto: 'Porque es obligatoria en todas las transacciones', correcta: false },
            { id: 'd', texto: 'Porque tiene un valor fijo', correcta: false },
          ],
          explicacion:
            'La UF se reajusta con el IPC, así que lo pactado mantiene su valor aunque pasen años y los precios suban. No es una inversión ni da rentabilidad, y tampoco es fija: justamente lo contrario, cambia todos los días. Tampoco es obligatoria, se usa donde las partes lo acuerdan.',
        },
        {
          id: 'q4',
          texto:
            'Un depósito a plazo paga 0,36 % mensual y la inflación anual es 4,4 %. ¿Qué pasa con el poder de compra de esa plata?',
          opciones: [
            { id: 'a', texto: 'Aumenta con seguridad', correcta: false },
            { id: 'b', texto: 'Se mantiene exactamente igual', correcta: false },
            { id: 'c', texto: 'Puede disminuir', correcta: true },
            { id: 'd', texto: 'Se duplica', correcta: false },
          ],
          explicacion:
            'Un 0,36 % mensual repetido doce veces da alrededor de 4,4 % al año: casi lo mismo que la inflación. Queda tan al límite que cualquier cosa lo inclina hacia abajo, empezando por el impuesto sobre los intereses. Por eso la respuesta correcta es que puede disminuir, no que se mantenga: empatar en el papel no es empatar en la práctica.',
        },
      ],
    },

    {
      id: 'p10',
      tipo: 'cierre',
      etiqueta: 'Cierre',
      titulo: 'Lo que te llevas',
      resumen: [
        'El dinero sirve para pagar, para comparar y para guardar valor. La inflación ataca la tercera función: los pesos siguen ahí, pero alcanzan para menos.',
        'El IPC es la medición y la inflación es el fenómeno. El dato que importa para decisiones de largo plazo es el de doce meses.',
        'La UF existe para que un contrato largo conserve su valor real. Protege a quien recibe el pago, no a quien lo hace.',
        'Una tasa mensual hay que anualizarla antes de compararla con la inflación. Si queda por debajo, el ahorro pierde poder de compra aunque el saldo suba.',
      ],
      pasoSemana:
        'Busca el último IPC de doce meses en ine.gob.cl y compáralo con la tasa que te paga hoy tu cuenta de ahorro o tu depósito. Son dos números y cinco minutos, y te dicen si tu plata está creciendo o solo aguantando.',
    },
  ],
}
