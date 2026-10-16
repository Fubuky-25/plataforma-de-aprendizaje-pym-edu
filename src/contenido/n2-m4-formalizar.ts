import type { Leccion } from '../tipos'

/**
 * Nivel 2, Módulo 2.4 — Formaliza tu emprendimiento.
 * Adaptado de `contenido para los cursos/Pym_Edu_nivel2.pdf`.
 *
 * REQUIERE REVISIÓN LEGAL Y TRIBUTARIA ANTES DE PUBLICARSE.
 *
 * Este módulo habla de tipos de sociedad, responsabilidad patrimonial, trámites
 * y regímenes tributarios. El contenido describe el mecanismo general y en
 * ningún caso reemplaza asesoría: cada afirmación concreta sobre requisitos,
 * costos o plazos se remite a la fuente oficial. El material original afirmaba
 * que en una persona jurídica "los socios no comprometen su patrimonio
 * personal"; aquí se matiza, porque la limitación depende del tipo de sociedad
 * y tiene excepciones.
 */
export const leccion: Leccion = {
  id: 'n2-m4',
  nivel: 'Nivel 2 · Tu negocio',
  curso: 'Gestión del emprendimiento',
  modulo: 'Módulo 2.4',
  area: 'Legal',
  titulo: 'Formalizar tu emprendimiento',
  actualizada: 'octubre de 2026',
  fuentes: [
    'Registro de Empresas y Sociedades, tuempresaenundia.cl.',
    'Servicio de Impuestos Internos, inicio de actividades y regímenes tributarios.',
    'Guías de formalización para MiPymes, 2025.',
  ],
  pantallas: [
    {
      id: 'p1',
      tipo: 'portada',
      etiqueta: 'Nivel 2 · Módulo 2.4',
      titulo: 'Formalizar tu emprendimiento',
      bajada:
        'Formalizarse no es solo cumplir. Es poder facturar, acceder a crédito y separar lo que es del negocio de lo que es tuyo.',
      duracionMin: 15,
      objetivos: [
        'Entender qué cambia al formalizar, más allá del trámite',
        'Distinguir persona natural de persona jurídica y qué arriesga cada una',
        'Reconocer los tipos de empresa más usados en Chile',
        'Conocer el recorrido completo, con sus tiempos y costos',
      ],
    },

    {
      id: 'p2',
      tipo: 'contenido',
      etiqueta: 'Lo esencial',
      titulo: '¿Para qué sirve formalizarse?',
      parrafos: [
        'Mucha gente formaliza porque "hay que hacerlo". Esa es la peor razón, porque hace parecer la formalización un costo y no lo que es: la puerta de entrada a cosas que informalmente no se pueden hacer.',
        'Un negocio formal puede emitir facturas, y eso abre la venta a empresas, que son los clientes que compran volumen. Puede postular a programas públicos y a créditos con garantía estatal. Y puede, según la figura que elija, separar el patrimonio del negocio del personal.',
        'También tiene costos: declaraciones mensuales, patente municipal, contabilidad. La pregunta no es si formalizarse conviene en abstracto, sino si tu negocio ya está en el punto donde lo que se abre vale más que lo que cuesta.',
      ],
      puntos: [
        'Emitir facturas, que es lo que te permite venderle a empresas y al Estado.',
        'Acceder a crédito formal y a programas públicos de apoyo.',
        'Separar, en ciertas figuras, el patrimonio del negocio del tuyo.',
        'Contratar trabajadores con contrato y cotizaciones.',
      ],
      nota: 'Si tu negocio ya vende a empresas que te piden factura, la decisión está tomada por el mercado y no por ti. Formalizarse es simplemente dejar de perder esas ventas.',
    },

    {
      id: 'p3',
      tipo: 'comparacion',
      etiqueta: 'La decisión clave',
      titulo: 'Persona natural o persona jurídica',
      bajada:
        'Es la primera decisión y la que más consecuencias tiene. Define con qué patrimonio respondes si algo sale mal.',
      criterios: [
        'Quién asume los derechos y obligaciones',
        'Con qué se responde por las deudas',
        'Qué RUT se usa',
        'Quiénes la forman',
        'Capital para empezar',
      ],
      columnas: [
        {
          titulo: 'Persona natural con giro',
          celdas: [
            'La persona, a su propio nombre',
            'Con tu patrimonio personal: no hay separación entre tus bienes y los del negocio',
            'El mismo RUT de la persona',
            'Una sola persona',
            'No se exige capital para empezar',
          ],
        },
        {
          titulo: 'Persona jurídica',
          celdas: [
            'La empresa, como entidad distinta de sus dueños',
            'Con el patrimonio de la empresa. En las figuras de responsabilidad limitada los socios responden hasta sus aportes, aunque existen excepciones legales',
            'La empresa tiene RUT propio',
            'Una o más personas, naturales o jurídicas',
            'Requiere un capital, en dinero o bienes',
          ],
        },
      ],
      nota: 'La frase "no arriesgas tu patrimonio" se repite mucho y es demasiado simple. La limitación existe, pero tiene excepciones y se cae si, por ejemplo, firmas personalmente como aval de un crédito del negocio, que es lo que suelen pedir los bancos.',
    },

    {
      id: 'p4',
      tipo: 'tarjetas',
      etiqueta: 'Las figuras',
      titulo: 'Los tipos de empresa más usados',
      instruccion: 'Toca cada uno para ver cuándo tiene sentido.',
      tarjetas: [
        {
          id: 't1',
          titulo: 'Empresa Individual de Responsabilidad Limitada (EIRL)',
          definicion:
            'Un solo dueño, pero con personalidad jurídica propia y responsabilidad limitada al capital aportado. Es el paso natural para quien trabaja solo y quiere separar el patrimonio sin buscar socios. No permite sumar socios después sin transformarla.',
        },
        {
          id: 't2',
          titulo: 'Sociedad por Acciones (SpA)',
          definicion:
            'Puede tener uno o varios dueños y su propiedad se divide en acciones, lo que facilita que entre un inversionista o que alguien venda su parte. Es la figura más usada hoy por emprendimientos que esperan crecer o recibir inversión.',
        },
        {
          id: 't3',
          titulo: 'Sociedad de Responsabilidad Limitada (SRL)',
          definicion:
            'Dos o más socios con responsabilidad limitada a sus aportes. Los cambios de socio requieren modificar la sociedad, lo que la hace más rígida que una SpA pero también más estable entre socios que piensan quedarse.',
        },
        {
          id: 't4',
          titulo: 'Microempresa Familiar',
          definicion:
            'Figura para actividades económicas que se desarrollan en la casa habitación, con requisitos y límites propios. Simplifica permisos municipales para negocios chicos que funcionan en el domicilio. Conviene revisar los requisitos vigentes antes de optar por ella.',
        },
      ],
      nota: 'La elección no es para siempre: una empresa puede transformarse después. Pero cada transformación cuesta tiempo y dinero, así que vale la pena pensarla una vez bien.',
    },

    {
      id: 'p5',
      tipo: 'contenido',
      etiqueta: 'El recorrido',
      titulo: 'Los pasos para formalizar',
      parrafos: [
        'En Chile existen dos caminos: el régimen simplificado, que es en línea y gratuito para la constitución, y el tradicional, con notaría, publicación y registro. Para la mayoría de los emprendimientos el simplificado es suficiente.',
      ],
      puntos: [
        'Define el tipo de empresa según cuántos socios tendrás, qué responsabilidad quieres asumir y qué capital puedes aportar.',
        'Constituye la empresa en el Registro de Empresas y Sociedades, en tuempresaenundia.cl, usando ClaveÚnica. En el régimen simplificado hay modelos de estatutos predefinidos.',
        'Firma los estatutos, que definen el objeto de la empresa, los aportes y quién la administra.',
        'Obtén el RUT de la empresa e inicia actividades en sii.cl.',
        'Solicita la patente municipal en tu comuna. Su valor y requisitos varían de una municipalidad a otra.',
        'Habilita la emisión de boletas y facturas electrónicas en el SII.',
        'Elige el régimen tributario que corresponda a tu caso. Las alternativas para empresas chicas tienen reglas distintas de contabilidad y de pago de impuestos, y conviene decidirlo con un contador.',
        'Si vas a tener trabajadores, regístralos con contrato y cotizaciones desde el primer día.',
      ],
      nota: 'En el régimen simplificado, la constitución en línea no tiene costo y el proceso suele tomar días. En el tradicional hay gastos de notaría, publicación y registro, y puede tomar semanas.',
      fuente:
        'Los pasos, requisitos y costos cambian. Confirma cada uno en tuempresaenundia.cl, sii.cl y la municipalidad que corresponda antes de iniciar el trámite.',
    },

    {
      id: 'p6',
      tipo: 'caso',
      etiqueta: 'Caso',
      titulo: 'El taller de Nicolás',
      escenario: [
        'Nicolás repara electrodomésticos. Hoy trabaja solo, cobra en efectivo y por transferencia, y factura alrededor de $2.000.000 al mes.',
        'Dos cadenas de retail le ofrecieron convertirse en su servicio técnico, pero le exigen factura. Es el triple de su facturación actual.',
        'Para tomar el trabajo tendría que comprar herramientas por unos $3.000.000 y probablemente contratar un ayudante en unos meses. Un amigo le dice que se formalice "como persona natural, que es más fácil".',
      ],
      pregunta: '¿Qué debería considerar Nicolás antes de decidir?',
      elegir: 2,
      opciones: [
        {
          id: 'o1',
          texto:
            'Que trabajando con equipos ajenos y con un ayudante el riesgo sube, y una figura con responsabilidad limitada separa su patrimonio personal',
          correcta: true,
        },
        {
          id: 'o2',
          texto:
            'Que va a necesitar emitir facturas sí o sí, porque sin eso las dos cadenas no le compran',
          correcta: true,
        },
        {
          id: 'o3',
          texto: 'Que como persona natural no tendrá que declarar impuestos mensualmente',
          correcta: false,
        },
        {
          id: 'o4',
          texto: 'Que formalizarse le impide seguir atendiendo clientes particulares',
          correcta: false,
        },
        {
          id: 'o5',
          texto: 'Que conviene esperar a facturar más para recién formalizarse',
          correcta: false,
        },
      ],
      explicacion:
        'Nicolás está pasando de trabajar solo y en pequeño a manipular equipos de terceros y tener a alguien a cargo. Ese cambio de escala es justamente donde la responsabilidad limitada deja de ser un lujo. Y la factura no es opcional: es la condición que ponen sus clientes nuevos. Las otras tres son errores comunes. Declarar impuestos no depende de ser persona natural o jurídica, sino de la actividad y el régimen. Formalizarse no impide venderle a particulares, solo cambia el documento que emites. Y esperar a facturar más significa, en su caso, rechazar el contrato que triplicaría sus ventas. Con todo, la figura concreta que le conviene depende de su situación y es una conversación con un contador, no una respuesta de curso.',
      bloquea: true,
    },

    {
      id: 'p7',
      tipo: 'aplicar',
      etiqueta: 'Tu caso',
      titulo: '¿Dónde estás tú?',
      instruccion:
        'Estas tres respuestas son las que un contador te va a pedir en la primera reunión. Tenerlas listas ahorra tiempo y plata.',
      campos: [
        {
          id: 'c1',
          etiqueta: '¿Tus clientes te piden factura?',
          ayuda: 'Si vendes a empresas o al Estado, probablemente sí. Si vendes a particulares, probablemente no.',
          formato: 'texto',
        },
        {
          id: 'c2',
          etiqueta: '¿Vas a trabajar solo o con socios?',
          ayuda: 'Define si una figura de un solo dueño te sirve o necesitas una que admita socios.',
          formato: 'texto',
        },
        {
          id: 'c3',
          etiqueta: '¿Cuánto facturas al mes hoy?',
          ayuda: 'Aproximado. Es lo que determina qué régimen tributario puede corresponderte.',
          formato: 'monto',
        },
      ],
      cierre:
        'Con estas tres respuestas, una reunión con un contador se resuelve en media hora en vez de tres. La elección de la figura y del régimen tributario sí conviene hacerla con alguien que conozca tu caso.',
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
            'Operando como persona natural con giro, ¿con qué patrimonio respondes por las deudas del negocio?',
          opciones: [
            { id: 'a', texto: 'Solo con los bienes del negocio', correcta: false },
            { id: 'b', texto: 'Con tu patrimonio personal, sin separación', correcta: true },
            { id: 'c', texto: 'Con el capital declarado al iniciar actividades', correcta: false },
            { id: 'd', texto: 'Con nada: las deudas las asume el Estado', correcta: false },
          ],
          explicacion:
            'Como persona natural no hay separación: el negocio funciona con tu RUT y tus bienes responden por sus deudas. Esa es la diferencia central con una figura de responsabilidad limitada, donde el patrimonio de la empresa es distinto del tuyo. Es más simple de iniciar, pero el riesgo que asumes es mayor.',
        },
        {
          id: 'q2',
          texto: '¿Cuál es la ventaja principal de una SpA frente a una EIRL?',
          opciones: [
            { id: 'a', texto: 'No paga impuestos', correcta: false },
            {
              id: 'b',
              texto: 'Admite varios dueños y facilita que entre o salga un inversionista',
              correcta: true,
            },
            { id: 'c', texto: 'No necesita llevar contabilidad', correcta: false },
            { id: 'd', texto: 'Permite no emitir facturas', correcta: false },
          ],
          explicacion:
            'La SpA divide la propiedad en acciones, lo que hace mucho más simple que entre un socio nuevo o que alguien venda su parte. La EIRL es de un solo dueño y para sumar socios hay que transformarla. Las otras tres alternativas describen cosas que ninguna figura legal permite: toda empresa formal declara impuestos, lleva registro contable según su régimen y emite documentos tributarios.',
        },
        {
          id: 'q3',
          texto: 'En el régimen simplificado de constitución, ¿qué costo tiene crear la empresa?',
          opciones: [
            {
              id: 'a',
              texto: 'La constitución en línea no tiene costo; se paga la patente municipal',
              correcta: true,
            },
            { id: 'b', texto: 'Siempre hay que pagar notaría y publicación', correcta: false },
            { id: 'c', texto: 'Es gratis por completo, sin ningún pago posterior', correcta: false },
            { id: 'd', texto: 'Depende del capital aportado', correcta: false },
          ],
          explicacion:
            'La constitución en línea en el Registro de Empresas y Sociedades no tiene costo, y ahí está la diferencia con el régimen tradicional, que sí implica notaría, publicación e inscripción. Pero gratis del todo no es: queda la patente municipal, cuyo valor depende de tu comuna. Confirma los costos vigentes antes de empezar, porque cambian.',
        },
      ],
    },

    {
      id: 'p9',
      tipo: 'cierre',
      etiqueta: 'Cierre',
      titulo: 'Lo que te llevas',
      resumen: [
        'Formalizarse abre la venta a empresas, el crédito formal y los programas públicos. Si tus clientes ya te piden factura, la decisión la tomó el mercado.',
        'Persona natural es más simple de iniciar, pero respondes con tu patrimonio personal.',
        'La responsabilidad limitada existe y es real, aunque tiene excepciones y se cae si firmas personalmente como aval.',
        'El régimen simplificado permite constituir en línea sin costo; queda la patente municipal y las obligaciones mensuales.',
      ],
      pasoSemana:
        'Entra a tuempresaenundia.cl y recorre el formulario sin enviarlo. Vas a ver exactamente qué datos te piden y cuáles no tienes todavía. Eso convierte la formalización de una idea vaga en una lista concreta de cosas por conseguir.',
    },
  ],
}
