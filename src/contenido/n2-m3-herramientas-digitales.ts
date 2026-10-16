import type { Leccion } from '../tipos'

/**
 * Nivel 2, Módulo 2.3 — Herramientas digitales para la gestión.
 * Adaptado de `contenido para los cursos/Pym_Edu_nivel2.pdf`.
 *
 * DECISIÓN DE CONTENIDO: el material original recomendaba siete productos
 * comerciales por nombre. Aquí se enseñan las categorías y los criterios para
 * elegir. Razones: PymEdu es un ERP y recomendar competidores en su propio
 * curso es una decisión comercial del equipo; además, una lista de productos
 * envejece mal. Si el equipo quiere nombrar herramientas, incluida la propia,
 * es una decisión consciente que se agrega aquí.
 *
 * Los programas públicos de apoyo a la digitalización se describen sin montos
 * ni requisitos: cambian cada año y el material es de 2025.
 */
export const leccion: Leccion = {
  id: 'n2-m3',
  nivel: 'Nivel 2 · Tu negocio',
  curso: 'Gestión del emprendimiento',
  modulo: 'Módulo 2.3',
  area: 'Digitalización',
  titulo: 'Herramientas digitales para gestionar',
  actualizada: 'octubre de 2026',
  pantallas: [
    {
      id: 'p1',
      tipo: 'portada',
      etiqueta: 'Nivel 2 · Módulo 2.3',
      titulo: 'Herramientas digitales para gestionar',
      bajada:
        'Digitalizar no es comprar software. Es dejar de depender de la memoria y del cuaderno para saber cómo va el negocio.',
      duracionMin: 12,
      objetivos: [
        'Saber qué problema resuelve cada tipo de herramienta',
        'Reconocer cuándo una planilla basta y cuándo ya no',
        'Elegir con criterios propios, no por lo que use el vecino',
        'Dar el primer paso sin gastar plata',
      ],
    },

    {
      id: 'p2',
      tipo: 'contenido',
      etiqueta: 'Lo esencial',
      titulo: 'Qué gana un negocio al digitalizarse',
      parrafos: [
        'La promesa habitual de la digitalización es "ahorrar tiempo", y es verdad, pero no es lo más importante. Lo que de verdad cambia es que empiezas a tener datos.',
        'Un negocio que anota todo puede responder preguntas que antes se contestaban por intuición: qué producto deja más margen, qué mes es el malo, qué cliente paga tarde siempre. Esas respuestas cambian decisiones.',
        'Hay además una razón obligatoria. Si emites boletas o facturas, el SII exige que sean electrónicas, así que una parte de la digitalización no es opcional ni una mejora: es la forma de operar formalmente.',
      ],
      puntos: [
        'Menos errores: lo que se registra una vez no se vuelve a copiar a mano.',
        'Menos tiempo en tareas repetitivas, que en un negocio chico es tiempo del dueño.',
        'Información para decidir, en vez de impresiones.',
        'Cumplimiento con el SII sin que sea una carrera a fin de mes.',
      ],
      nota: 'La trampa más común es comprar la herramienta antes de tener claro el problema. Un software caro sobre un proceso desordenado deja un desorden más caro.',
    },

    {
      id: 'p3',
      tipo: 'tarjetas',
      etiqueta: 'Cinco categorías',
      titulo: 'Qué resuelve cada tipo de herramienta',
      instruccion: 'Toca cada categoría para ver qué problema resuelve.',
      tarjetas: [
        {
          id: 't1',
          titulo: 'Facturación homologada con el SII',
          definicion:
            'Emite boletas y facturas electrónicas válidas y deja el registro listo para declarar. Homologada significa que el SII la reconoce. Es la categoría que no puedes saltarte si vendes formalmente.',
        },
        {
          id: 't2',
          titulo: 'Punto de venta e inventario',
          definicion:
            'Registra cada venta en el momento y descuenta el stock solo. Resuelve el problema de no saber qué se vendió ni qué queda, que en un negocio con muchos productos chicos es imposible de llevar de memoria.',
        },
        {
          id: 't3',
          titulo: 'Control de gastos',
          definicion:
            'Centraliza lo que sale: pagos, cuentas, boletas de compra. Sirve sobre todo para los gastos invisibles del módulo anterior, que solo aparecen cuando algo los junta en un mismo lugar.',
        },
        {
          id: 't4',
          titulo: 'Atención al cliente centralizada',
          definicion:
            'Junta los mensajes de WhatsApp, redes sociales y correo en una sola bandeja. Resuelve el problema de responder tarde porque el mensaje llegó por un canal que nadie estaba mirando.',
        },
        {
          id: 't5',
          titulo: 'Tableros de indicadores',
          definicion:
            'Toma los datos que ya tienes y los muestra en gráficos: ventas por mes, márgenes, cuentas por cobrar. No genera información nueva, hace visible la que ya estaba dispersa.',
        },
      ],
      nota: 'Un ERP combina varias de estas categorías en un solo sistema. Esa es su ventaja, y también su costo: conviene cuando ya tienes volumen suficiente para que la integración valga la pena.',
    },

    {
      id: 'p4',
      tipo: 'comparacion',
      etiqueta: 'Compara',
      titulo: '¿Planilla o software?',
      bajada:
        'La planilla no es el paso de los principiantes: es la herramienta correcta hasta cierto punto. El tema es saber dónde está ese punto.',
      criterios: [
        'Costo',
        'Tiempo de puesta en marcha',
        'Qué pasa cuando crece el negocio',
        'Riesgo principal',
        'Cuándo conviene',
      ],
      columnas: [
        {
          titulo: 'Planilla de cálculo',
          celdas: [
            'Gratis o casi',
            'Se parte hoy mismo, sin aprender nada nuevo',
            'Se vuelve lenta y frágil: una fórmula mal copiada arrastra errores sin avisar',
            'Que exista una sola copia, en un solo computador, sin respaldo',
            'Al principio, con pocas ventas diarias y un solo responsable',
          ],
        },
        {
          titulo: 'Software de gestión',
          celdas: [
            'Mensual, a veces por usuario',
            'Días o semanas: hay que cargar productos, clientes y saldos iniciales',
            'Aguanta el volumen y permite que varias personas trabajen a la vez',
            'Quedar amarrado a un proveedor y no poder sacar tus datos',
            'Cuando las ventas diarias o el equipo ya no caben en una planilla',
          ],
        },
      ],
      nota: 'Antes de contratar cualquier software, pregunta una sola cosa: si mañana me cambio, ¿cómo saco mis datos y en qué formato? Si no hay respuesta clara, ya sabes algo importante.',
    },

    {
      id: 'p5',
      tipo: 'caso',
      etiqueta: 'Caso',
      titulo: 'La distribuidora de Ximena',
      escenario: [
        'Ximena distribuye productos de limpieza a almacenes de barrio. Tiene unos 60 clientes, vende todos los días y lleva todo en un cuaderno y su memoria.',
        'Este mes le pasaron tres cosas: le reclamaron por un pedido que ya había entregado pero no había anotado, se quedó sin stock de un producto que se vendía bien, y no supo decirle a su contador cuánto le debían sus clientes.',
        'Un vendedor le ofrece un sistema completo de gestión con inventario, facturación y reportes, con un costo mensual que le aprieta el presupuesto.',
      ],
      pregunta: '¿Qué le conviene hacer primero a Ximena?',
      elegir: 2,
      opciones: [
        {
          id: 'o1',
          texto:
            'Empezar registrando ventas, clientes y cobros en una planilla, para saber qué necesita antes de comprar',
          correcta: true,
        },
        {
          id: 'o2',
          texto:
            'Poner primero la facturación electrónica homologada, porque es obligatoria y además deja el registro armado',
          correcta: true,
        },
        {
          id: 'o3',
          texto: 'Contratar de inmediato el sistema completo que le ofrecieron',
          correcta: false,
        },
        {
          id: 'o4',
          texto: 'Seguir con el cuaderno y contratar a alguien que lo pase a limpio cada semana',
          correcta: false,
        },
        {
          id: 'o5',
          texto: 'Esperar a tener más clientes para que el sistema se justifique',
          correcta: false,
        },
      ],
      explicacion:
        'Los tres problemas de Ximena son de registro, no de software: no tiene dónde quedó anotado lo que entregó, lo que queda en bodega ni lo que le deben. Una planilla resuelve eso esta semana y sin costo, y además le muestra qué necesita de verdad cuando llegue el momento de comprar. La facturación electrónica va en paralelo porque es obligatoria y de paso le arma el registro de ventas. Contratar el sistema completo hoy es comprar sobre un proceso desordenado: va a terminar con el mismo desorden y una cuota mensual. Pagar a alguien para pasar el cuaderno a limpio conserva el problema y le agrega un costo. Y esperar a tener más clientes empeora todo: con 60 ya se le escapan pedidos.',
      bloquea: true,
    },

    {
      id: 'p6',
      tipo: 'contenido',
      etiqueta: 'Cómo partir',
      titulo: 'Cinco pasos sin gastar plata',
      parrafos: [
        'La digitalización se puede empezar hoy con lo que ya tienes. El orden importa más que las herramientas.',
      ],
      puntos: [
        'Registra en un solo lugar. Una planilla con fecha, cliente, categoría, monto y forma de pago cubre el 80 % de lo que vas a necesitar saber.',
        'Pon la facturación electrónica. Es obligatoria si vendes formalmente y, de paso, te deja la mitad del registro hecho.',
        'Automatiza lo que se repite. Las alertas de facturas por vencer y los recordatorios de declaración evitan los gastos invisibles del módulo anterior.',
        'Mira los números una vez al mes. Ventas, gastos y margen, comparados con el mes anterior. Media hora, siempre el mismo día.',
        'Revisa si hay apoyo público disponible. Existen programas estatales que financian digitalización y capacitación para empresas chicas; sus montos, plazos y requisitos cambian cada año, así que hay que confirmar cuáles están abiertos hoy.',
      ],
      nota: 'Si solo puedes hacer uno de los cinco, haz el primero. Sin registro, ninguna de las otras herramientas tiene con qué trabajar.',
      fuente:
        'El material original mencionaba un programa de apoyo a la digitalización vigente en 2025. Confirma en sercotec.cl qué programas están abiertos antes de contar con ellos.',
    },

    {
      id: 'p7',
      tipo: 'quiz',
      etiqueta: 'Evaluación',
      titulo: 'Comprueba lo que entendiste',
      instruccion: 'Tres preguntas. Después de cada una vas a ver por qué.',
      bloquea: true,
      preguntas: [
        {
          id: 'q1',
          texto: '¿Qué significa que un software esté homologado con el SII?',
          opciones: [
            { id: 'a', texto: 'Que es gratuito para las pymes', correcta: false },
            {
              id: 'b',
              texto: 'Que el SII lo reconoce para emitir documentos tributarios electrónicos válidos',
              correcta: true,
            },
            { id: 'c', texto: 'Que paga los impuestos automáticamente por ti', correcta: false },
            { id: 'd', texto: 'Que está certificado como seguro contra virus', correcta: false },
          ],
          explicacion:
            'Homologado quiere decir que el SII lo reconoce y que las boletas y facturas que emite son válidas. Ojo con la tercera alternativa: un software puede ayudarte a preparar la declaración y a tener los datos ordenados, pero declarar y pagar sigue siendo responsabilidad tuya.',
        },
        {
          id: 'q2',
          texto: '¿Para qué sirve un tablero de indicadores?',
          opciones: [
            { id: 'a', texto: 'Para generar información nueva sobre el negocio', correcta: false },
            {
              id: 'b',
              texto: 'Para mostrar en un solo lugar datos que ya tienes pero están dispersos',
              correcta: true,
            },
            { id: 'c', texto: 'Para reemplazar al contador', correcta: false },
            { id: 'd', texto: 'Para emitir facturas más rápido', correcta: false },
          ],
          explicacion:
            'Un tablero no inventa datos: toma los que ya existen en tus registros y los hace visibles juntos. Esa es toda su utilidad, y es mucha: ver las ventas, los gastos y el margen en la misma pantalla hace evidentes cosas que en una planilla de mil filas no se notan. Si los datos de origen están mal, el tablero los muestra mal más bonito.',
        },
        {
          id: 'q3',
          texto: '¿Cuándo una planilla de cálculo deja de ser suficiente?',
          opciones: [
            { id: 'a', texto: 'Apenas el negocio se formaliza', correcta: false },
            {
              id: 'b',
              texto: 'Cuando el volumen o el número de personas que la usan la vuelve frágil',
              correcta: true,
            },
            { id: 'c', texto: 'Nunca: siempre es mejor que un software', correcta: false },
            { id: 'd', texto: 'Cuando el SII la prohíbe', correcta: false },
          ],
          explicacion:
            'La planilla es la herramienta correcta hasta que el volumen la hace lenta o varias personas la editan a la vez y empiezan los errores silenciosos. No hay una cifra mágica: la señal es cuando pasas más tiempo arreglando la planilla que usándola. Formalizarse no obliga a comprar software, aunque sí obliga a emitir documentos electrónicos.',
        },
      ],
    },

    {
      id: 'p8',
      tipo: 'cierre',
      etiqueta: 'Cierre',
      titulo: 'Lo que te llevas',
      resumen: [
        'Digitalizar sirve sobre todo para tener datos con los que decidir, no solo para ahorrar tiempo.',
        'Primero el problema, después la herramienta. Un software sobre un proceso desordenado deja un desorden más caro.',
        'La planilla es la herramienta correcta hasta que el volumen o el equipo la vuelven frágil.',
        'Antes de contratar cualquier sistema, pregunta cómo sacas tus datos si te cambias. La respuesta dice mucho.',
      ],
      pasoSemana:
        'Abre una planilla y crea cinco columnas: fecha, cliente, categoría, monto y forma de pago. Registra ahí cada venta y cada gasto durante una semana, sin excepción. Al séptimo día vas a tener más información sobre tu negocio que en todos los meses anteriores juntos.',
    },
  ],
}
