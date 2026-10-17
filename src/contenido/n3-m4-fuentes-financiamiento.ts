import type { Leccion } from '../tipos'

/**
 * Nivel 3, Módulo 3.4 — Créditos, leasing, factoring y otras fuentes.
 * Adaptado de `contenido para los cursos/Pym_Edu_nivel3.pdf`.
 *
 * SOLAPAMIENTO CON EL MÓDULO 2.6: el material repite en este módulo los cuatro
 * instrumentos que ya explicó en el Nivel 2 (crédito, línea, leasing,
 * factoring). Aquí no se repiten: el módulo se enfoca en lo que el 2.6 no
 * cubría, que es financiar un proyecto de crecimiento y la diferencia entre
 * financiarse con deuda o con capital.
 *
 * Los programas públicos se nombran, porque son información pública útil, pero
 * sin sus condiciones: cambian cada año y el material es de 2025.
 */
export const leccion: Leccion = {
  id: 'n3-m4',
  nivel: 'Nivel 3 · Crecer',
  curso: 'Decisiones avanzadas',
  modulo: 'Módulo 3.4',
  area: 'Finanzas',
  titulo: 'Con qué plata financiar el crecimiento',
  actualizada: 'octubre de 2026',
  fuentes: [
    'Programas de apoyo de CORFO y SERCOTEC, según el material del curso, 2025.',
  ],
  pantallas: [
    {
      id: 'p1',
      tipo: 'portada',
      etiqueta: 'Nivel 3 · Módulo 3.4',
      titulo: 'Con qué plata financiar el crecimiento',
      bajada:
        'En el Nivel 2 viste los instrumentos de deuda. Aquí entra la pregunta anterior: ¿esto se financia con deuda, con capital propio o con alguien que entre al negocio?',
      duracionMin: 15,
      objetivos: [
        'Distinguir financiarse con deuda de financiarse con capital',
        'Conocer las fuentes que no son un crédito bancario',
        'Saber qué te van a pedir en cada una',
        'Elegir la fuente según el proyecto, no según lo que esté a mano',
      ],
    },

    {
      id: 'p2',
      tipo: 'contenido',
      etiqueta: 'Lo esencial',
      titulo: 'Deuda o capital: la decisión de fondo',
      parrafos: [
        'Todo el financiamiento del mundo cae en dos categorías, y la diferencia no es el costo sino qué entregas a cambio.',
        'Con deuda entregas una obligación de pago. Devuelves lo que pediste más intereses, en fechas fijas, pase lo que pase con el negocio. El negocio sigue siendo cien por ciento tuyo.',
        'Con capital entregas una parte del negocio. No hay cuota que pagar: quien entró gana si el negocio gana. A cambio, ya no decides solo y las utilidades futuras se reparten.',
        'La pregunta útil no es cuál es más barata, porque depende. Es: ¿este proyecto genera flujos predecibles con los que pueda pagar una cuota, o es tan incierto que una cuota fija me ahogaría si sale mal?',
      ],
      puntos: [
        'Flujos predecibles y plazo claro: la deuda suele convenir, porque no cedes propiedad.',
        'Proyecto incierto, de crecimiento rápido o sin ingresos todavía: el capital aguanta mejor, porque no exige pagos mientras tanto.',
        'Hay opciones intermedias: los programas públicos pueden aportar fondos no reembolsables, que no son ni deuda ni capital.',
      ],
      nota: 'Un error frecuente es financiar con deuda de corto plazo un proyecto que recién va a dar frutos en dos años. El proyecto puede ser excelente y aun así hundirte, porque las cuotas empiezan mucho antes que los ingresos.',
    },

    {
      id: 'p3',
      tipo: 'tarjetas',
      etiqueta: 'Cuatro fuentes',
      titulo: 'Las que no son un crédito bancario',
      instruccion: 'Toca cada una para ver qué ofrece y qué pide.',
      tarjetas: [
        {
          id: 't1',
          titulo: 'Crowdfunding',
          definicion:
            'Muchas personas aportan montos chicos a través de una plataforma, normalmente a cambio del producto por adelantado. Además de plata, te dice si el producto le interesa a alguien antes de producirlo. A cambio exige una campaña intensa y, si no llegas a la meta, en muchas plataformas no recibes nada.',
        },
        {
          id: 't2',
          titulo: 'Capital de riesgo',
          definicion:
            'Un inversionista pone capital a cambio de un porcentaje de la empresa. Trae recursos grandes y, muchas veces, experiencia y contactos. Está pensado para negocios que pueden crecer mucho y rápido: si tu negocio es estable y rentable pero no escala, no es el camino, y cedes control.',
        },
        {
          id: 't3',
          titulo: 'Programas públicos',
          definicion:
            'Instituciones como CORFO y SERCOTEC ofrecen créditos preferenciales, subsidios y asistencia técnica. Algunos fondos no se devuelven. A cambio, los procesos son largos y competitivos, hay que demostrar viabilidad y los fondos son limitados: no todos los que postulan quedan.',
        },
        {
          id: 't4',
          titulo: 'Familia y socios',
          definicion:
            'Capital de personas cercanas. Es flexible, rápido y a veces sin intereses. El costo no es financiero: si el negocio va mal, el conflicto es personal. Conviene dejar por escrito el monto, el plazo y qué pasa si no se puede devolver, justamente porque se siente innecesario.',
        },
      ],
      nota: 'La más usada por los negocios chicos en Chile es la última, y es la única que casi nunca se documenta. Escribir las condiciones no es desconfianza: es lo que protege la relación cuando algo sale distinto de lo planeado.',
    },

    {
      id: 'p4',
      tipo: 'comparacion',
      etiqueta: 'Compara',
      titulo: 'Financiarse con deuda o con capital',
      bajada: 'La misma plata, dos acuerdos muy distintos.',
      criterios: [
        'Qué entregas a cambio',
        'Qué pasa si el negocio va mal',
        'Qué pasa si va muy bien',
        'Quién decide',
        'Cuándo conviene',
      ],
      columnas: [
        {
          titulo: 'Deuda',
          celdas: [
            'Una obligación de pago con intereses',
            'Igual tienes que pagar la cuota, y eso puede ahogarte',
            'Pagas lo pactado y toda la ganancia extra es tuya',
            'Tú, el negocio sigue siendo cien por ciento tuyo',
            'Proyectos con flujos predecibles y plazo definido',
          ],
        },
        {
          titulo: 'Capital',
          celdas: [
            'Una parte de la propiedad del negocio',
            'No hay cuota que pagar: el inversionista pierde contigo',
            'Repartes las utilidades para siempre, no solo hasta pagar',
            'Compartido: entra alguien más a las decisiones',
            'Proyectos inciertos o de crecimiento rápido, sin flujos todavía',
          ],
        },
      ],
      nota: 'El capital se ve gratis al principio porque no hay cuota. No lo es: si el negocio funciona, repartir utilidades durante años cuesta mucho más que haber pagado un crédito.',
    },

    {
      id: 'p5',
      tipo: 'emparejar',
      etiqueta: 'Practica',
      titulo: '¿Qué fuente para qué proyecto?',
      instruccion: 'Toca un proyecto y después la fuente que mejor le calza.',
      izquierdaTitulo: 'Proyecto',
      derechaTitulo: 'Fuente',
      pares: [
        {
          id: 'e1',
          izquierda: 'Comprar una máquina que ya sabes cuánto va a producir',
          derecha: 'Crédito o leasing',
        },
        {
          id: 'e2',
          izquierda: 'Lanzar un producto nuevo y saber antes si alguien lo quiere',
          derecha: 'Crowdfunding',
        },
        {
          id: 'e3',
          izquierda: 'Digitalizar la gestión y recibir además asesoría técnica',
          derecha: 'Programa público',
        },
        {
          id: 'e4',
          izquierda: 'Escalar rápido a varias regiones, sin ingresos todavía',
          derecha: 'Capital de riesgo',
        },
      ],
      bloquea: true,
    },

    {
      id: 'p6',
      tipo: 'caso',
      etiqueta: 'Caso',
      titulo: 'La cervecería de Tomás',
      escenario: [
        'Tomás produce cerveza artesanal. Vende estable a bares de su ciudad y le va bien, con márgenes conocidos.',
        'Quiere dar dos pasos: comprar un tanque de fermentación de $8.000.000, que le permitiría duplicar la producción que ya tiene vendida, y además lanzar una línea nueva de bebidas sin alcohol, un mercado que no conoce y donde no sabe si va a funcionar.',
        'Un inversionista le ofrece $20.000.000 por el 30 % de la empresa, para hacer las dos cosas de una vez.',
      ],
      pregunta: '¿Qué le convendría evaluar a Tomás?',
      elegir: 2,
      opciones: [
        {
          id: 'o1',
          texto:
            'Financiar el tanque con crédito o leasing: tiene demanda conocida y flujos predecibles para pagar la cuota',
          correcta: true,
        },
        {
          id: 'o2',
          texto:
            'Probar la línea sin alcohol en chico antes, por ejemplo con crowdfunding o un fondo público, para validar si interesa',
          correcta: true,
        },
        {
          id: 'o3',
          texto: 'Aceptar los $20.000.000 porque es la opción que no tiene cuotas que pagar',
          correcta: false,
        },
        {
          id: 'o4',
          texto: 'Financiar ambos proyectos con el mismo crédito bancario a corto plazo',
          correcta: false,
        },
        {
          id: 'o5',
          texto: 'Postergar el tanque hasta tener la línea nueva funcionando',
          correcta: false,
        },
      ],
      explicacion:
        'Son dos proyectos con riesgos opuestos y no tienen por qué financiarse igual. El tanque es casi un cálculo: hay demanda, hay margen conocido y una cuota fija es perfectamente pagable, así que endeudarse por él no justifica ceder nada del negocio. La línea sin alcohol es lo contrario: Tomás no sabe si funciona, y una cuota fija sobre un proyecto incierto es justo lo que lo podría hundir. Ceder el 30 % para siempre por $20.000.000 se ve cómodo porque no hay cuotas, pero si el negocio crece, ese 30 % de las utilidades futuras va a costar mucho más que los intereses de un crédito de $8.000.000. Juntar ambos en un crédito de corto plazo es el peor escenario: la parte incierta empieza a pagar cuotas antes de generar un peso. Y postergar el tanque deja parada la única parte que ya está vendida.',
      bloquea: true,
    },

    {
      id: 'p7',
      tipo: 'contenido',
      etiqueta: 'Cómo prepararte',
      titulo: 'Lo que te van a pedir, sea quien sea',
      parrafos: [
        'Un banco, un fondo público y un inversionista piden cosas distintas, pero todos parten del mismo lugar: quieren saber si entiendes tu propio negocio.',
        'Lo bueno es que todo lo que necesitas ya lo armaste en este curso.',
      ],
      puntos: [
        'Tus reportes al día: estado de resultados y balance, del módulo 3.1.',
        'Un flujo de caja proyectado que muestre con qué vas a pagar, del módulo 3.2.',
        'Los indicadores del proyecto: VAN, TIR, Payback y ROI, del módulo 3.3.',
        'Tu carga financiera actual y el detalle de las deudas que ya tienes, del Nivel 1.',
        'Para fondos públicos, además: formalización al día, declaraciones sin atrasos y una descripción clara del impacto esperado.',
      ],
      nota: 'Llegar con estos números resueltos cambia la conversación. Deja de ser una solicitud y pasa a ser una propuesta, y eso mejora las condiciones que te ofrecen.',
      fuente:
        'Los requisitos, montos y plazos de los programas de CORFO y SERCOTEC cambian cada año. Confirma las convocatorias abiertas en corfo.cl y sercotec.cl antes de contar con ellas.',
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
          texto: '¿Cuál es la diferencia de fondo entre financiarse con deuda o con capital?',
          opciones: [
            { id: 'a', texto: 'La deuda siempre es más cara', correcta: false },
            {
              id: 'b',
              texto: 'Con deuda entregas una obligación de pago; con capital, una parte del negocio',
              correcta: true,
            },
            { id: 'c', texto: 'El capital solo está disponible para empresas grandes', correcta: false },
            { id: 'd', texto: 'La deuda no se devuelve si el negocio quiebra', correcta: false },
          ],
          explicacion:
            'Lo que las separa es qué entregas a cambio. La deuda se devuelve pase lo que pase, pero el negocio sigue siendo tuyo. El capital no exige cuotas, pero reparte las utilidades para siempre. Cuál sale más cara depende de cómo le vaya al negocio: si crece mucho, haber cedido propiedad resulta mucho más caro que haber pagado intereses.',
        },
        {
          id: 'q2',
          texto: '¿Qué aporta el crowdfunding además de financiamiento?',
          opciones: [
            { id: 'a', texto: 'Una tasa de interés más baja', correcta: false },
            {
              id: 'b',
              texto: 'Validación: te dice si el producto le interesa a alguien antes de producirlo',
              correcta: true,
            },
            { id: 'c', texto: 'Garantía estatal sobre el monto recaudado', correcta: false },
            { id: 'd', texto: 'Asesoría contable permanente', correcta: false },
          ],
          explicacion:
            'Esa es su ventaja menos obvia y a veces la más valiosa: una campaña que no alcanza la meta te acaba de ahorrar producir algo que nadie quería. El costo es que exige una campaña intensa y que, en muchas plataformas, si no llegas a la meta no recibes nada.',
        },
        {
          id: 'q3',
          texto: 'Tienes un proyecto incierto, sin ingresos todavía. ¿Qué forma de financiamiento calza mejor?',
          opciones: [
            { id: 'a', texto: 'Un crédito de consumo a doce meses', correcta: false },
            {
              id: 'b',
              texto: 'Capital o fondos no reembolsables, que no exigen pagos mientras tanto',
              correcta: true,
            },
            { id: 'c', texto: 'Factoring de facturas futuras', correcta: false },
            { id: 'd', texto: 'Una línea de crédito de la cuenta corriente', correcta: false },
          ],
          explicacion:
            'Sobre un proyecto que todavía no genera ingresos, cualquier cuota fija empieza a correr antes que la plata, y eso puede hundir un proyecto que iba bien. El capital y los fondos no reembolsables aguantan esa espera. El factoring tampoco sirve aquí por una razón simple: requiere facturas ya emitidas a clientes que te deben, y en un proyecto que no ha vendido todavía no existen.',
        },
      ],
    },

    {
      id: 'p9',
      tipo: 'cierre',
      etiqueta: 'Cierre',
      titulo: 'Lo que te llevas',
      resumen: [
        'Con deuda entregas una obligación de pago y conservas el negocio. Con capital entregas una parte del negocio y no hay cuotas.',
        'Proyectos con flujos predecibles van mejor con deuda; proyectos inciertos aguantan mejor con capital o fondos no reembolsables.',
        'Dos proyectos distintos no tienen por qué financiarse igual, aunque los hagas al mismo tiempo.',
        'El capital se ve gratis porque no tiene cuota. Si el negocio funciona, repartir utilidades por años cuesta más que los intereses.',
      ],
      pasoSemana:
        'Escribe el proyecto que tienes pendiente en una frase y responde una sola pregunta: ¿sabes con bastante certeza cuánto va a generar y cuándo? Si la respuesta es sí, busca deuda y no cedas nada del negocio. Si es no, busca una forma de probarlo en chico antes de comprometer plata grande.',
    },
  ],
}
