import type { Leccion } from '../tipos'

/**
 * Nivel 3, Módulo 3.1 — Contabilidad básica para decisiones.
 * Adaptado de `contenido para los cursos/Pym_Edu_nivel3.pdf`.
 *
 * El ejemplo de la panadería del material venía con la tabla de cifras vacía en
 * el PDF, así que se construyó uno nuevo con números propios y consistentes.
 * Este módulo describe la estructura de dos reportes contables; no reemplaza a
 * un contador ni establece cómo deben llevarse los registros formalmente.
 */
export const leccion: Leccion = {
  id: 'n3-m1',
  nivel: 'Nivel 3 · Crecer',
  curso: 'Decisiones avanzadas',
  modulo: 'Módulo 3.1',
  area: 'Finanzas',
  titulo: 'Contabilidad para decidir, no para cumplir',
  actualizada: 'octubre de 2026',
  pantallas: [
    {
      id: 'p1',
      tipo: 'portada',
      etiqueta: 'Nivel 3 · Módulo 3.1',
      titulo: 'Contabilidad para decidir, no para cumplir',
      bajada:
        'La contabilidad que se hace solo para el SII no sirve para nada más. La misma información, ordenada en dos reportes, te dice si el negocio funciona.',
      duracionMin: 15,
      objetivos: [
        'Leer un estado de resultados y saber qué pregunta responde',
        'Distinguir margen bruto de utilidad neta y por qué importa',
        'Entender qué muestra un balance y la ecuación que siempre se cumple',
        'Usar ambos reportes para decidir, no solo para declarar',
      ],
    },

    {
      id: 'p2',
      tipo: 'contenido',
      etiqueta: 'Lo esencial',
      titulo: 'Dos reportes, dos preguntas',
      parrafos: [
        'Casi todo negocio chico lleva contabilidad porque se la piden. Esa es la razón menos útil, porque lleva a producir papeles que nadie lee y a perderse lo que de verdad contienen.',
        'Hay dos reportes que responden preguntas distintas y que juntos describen el negocio completo. Conviene entenderlos como preguntas, no como formularios.',
        'El estado de resultados pregunta: en este periodo, ¿gané o perdí? Mira una película, un mes o un año. El balance pregunta: hoy, ¿qué tengo y qué debo? Mira una foto, un instante.',
      ],
      puntos: [
        'Un negocio puede tener buen estado de resultados y mal balance: gana plata pero está lleno de deudas de antes.',
        'También al revés: un balance sólido y un mal mes. Son dos diagnósticos independientes.',
        'Y, como viste en el Nivel 2, ninguno de los dos te dice si vas a poder pagar los sueldos el día 30. Esa es la tercera pregunta y la responde el flujo de caja.',
      ],
      nota: 'Si tuvieras que mirar un solo número de todo este módulo, mira el margen bruto. Te dice si lo que cobras cubre lo que cuesta producirlo, y ningún recorte de gastos arregla un margen bruto negativo.',
    },

    {
      id: 'p3',
      tipo: 'tarjetas',
      etiqueta: 'Cinco líneas',
      titulo: 'Cómo se arma un estado de resultados',
      instruccion: 'Toca cada línea para ver qué es y de dónde sale.',
      tarjetas: [
        {
          id: 't1',
          titulo: 'Ingresos',
          definicion:
            'Las ventas netas del periodo, sin IVA. Es la primera línea y la más mirada, y también la que menos dice por sí sola: vender mucho no significa ganar.',
        },
        {
          id: 't2',
          titulo: 'Costo de ventas',
          definicion:
            'Lo que costó producir o comprar exactamente lo que vendiste: materias primas, mercadería, el flete de esa venta. No incluye el arriendo ni la administración, que existen vendas o no.',
        },
        {
          id: 't3',
          titulo: 'Margen bruto',
          definicion:
            'Ingresos menos costo de ventas. Es lo que deja cada venta antes de pagar la estructura del negocio. Si este número es chico, el problema está en el precio o en los insumos, y ningún ahorro en gastos lo va a salvar.',
        },
        {
          id: 't4',
          titulo: 'Gastos operativos',
          definicion:
            'Lo que cuesta mantener el negocio abierto: sueldos administrativos, arriendo, servicios, marketing, depreciación. Son los costos indirectos y fijos del Nivel 2, vistos desde el reporte.',
        },
        {
          id: 't5',
          titulo: 'Utilidad neta',
          definicion:
            'Lo que queda después de todo, incluidos impuestos e intereses. Es el número final, pero es el peor para diagnosticar: si es malo, hay que subir a mirar el margen bruto para saber dónde se rompió.',
        },
      ],
      nota: 'El orden importa. Se baja de ingresos a utilidad neta restando, y cada resta responde a una pregunta distinta sobre el negocio.',
    },

    {
      id: 'p4',
      tipo: 'contenido',
      etiqueta: 'Ejemplo',
      titulo: 'La panadería, línea por línea',
      bajada: 'Un mes cualquiera, con números redondos para seguir la lógica.',
      parrafos: [
        'La panadería vendió $8.000.000 en el mes. La harina, la levadura y el resto de los insumos de ese pan costaron $3.200.000. El margen bruto es $4.800.000, un 60 % de las ventas.',
        'De ahí salen los gastos operativos: $2.400.000 en sueldos de dos panaderos, $900.000 de arriendo y servicios, y $300.000 de marketing y otros. En total $3.600.000.',
        'La utilidad antes de impuestos queda en $1.200.000. Después de impuestos e intereses del crédito, la utilidad neta ronda los $900.000.',
        'Ahora la pregunta útil: ¿qué pasa si la harina sube un 20 %? El costo de ventas pasa de $3.200.000 a $3.840.000 y el margen bruto cae a $4.160.000. Como los gastos operativos no cambian, la utilidad antes de impuestos se desploma de $1.200.000 a $560.000. Un alza del 20 % en un insumo se llevó más de la mitad de la utilidad.',
      ],
      nota: 'Ese es el poder del reporte: no es el número final, es poder mover una línea y ver qué le pasa al resto. Con el margen bruto en 60 %, cada punto que sube el insumo pesa mucho más de lo que parece.',
    },

    {
      id: 'p5',
      tipo: 'emparejar',
      etiqueta: 'Practica',
      titulo: '¿Dónde va cada movimiento?',
      instruccion: 'Toca un movimiento y después la línea del reporte que le corresponde.',
      izquierdaTitulo: 'Movimiento',
      derechaTitulo: 'Dónde va',
      pares: [
        { id: 'e1', izquierda: 'Venta de 200 empanadas', derecha: 'Ingresos' },
        { id: 'e2', izquierda: 'Compra de la harina del mes', derecha: 'Costo de ventas' },
        { id: 'e3', izquierda: 'Publicidad en redes sociales', derecha: 'Gastos operativos' },
        {
          id: 'e4',
          izquierda: 'Intereses del crédito del horno',
          derecha: 'Bajo la utilidad operativa',
        },
      ],
      bloquea: true,
    },

    {
      id: 'p6',
      tipo: 'tarjetas',
      etiqueta: 'El otro reporte',
      titulo: 'El balance en tres bloques',
      instruccion: 'Toca cada bloque para ver qué incluye.',
      tarjetas: [
        {
          id: 'b1',
          titulo: 'Activos',
          definicion:
            'Todo lo que el negocio tiene o le deben: efectivo, cuentas por cobrar, inventario, máquinas, instalaciones. Se ordenan del más líquido al menos líquido, es decir, de lo que es plata hoy a lo que costaría convertir en plata.',
        },
        {
          id: 'b2',
          titulo: 'Pasivos',
          definicion:
            'Todo lo que el negocio debe: proveedores, créditos bancarios, impuestos por pagar, sueldos pendientes. Se ordenan por vencimiento, de lo que vence pronto a lo que vence después.',
        },
        {
          id: 'b3',
          titulo: 'Patrimonio',
          definicion:
            'Lo que queda para los dueños: lo que aportaron más las utilidades que dejaron dentro del negocio. No es plata disponible: es lo que sobraría si se vendiera todo y se pagaran todas las deudas.',
        },
        {
          id: 'b4',
          titulo: 'La ecuación que siempre se cumple',
          definicion:
            'Activos = Pasivos + Patrimonio. No es una regla contable arbitraria: dice que todo lo que el negocio tiene vino de algún lado, y solo hay dos lados posibles, lo que debe o lo que pusieron los dueños. Si no cuadra, hay un error de registro.',
        },
      ],
      nota: 'Si tus pasivos de corto plazo superan a tus activos líquidos, el balance te está avisando de un problema de caja antes de que llegue.',
    },

    {
      id: 'p7',
      tipo: 'caso',
      etiqueta: 'Caso',
      titulo: 'Dos negocios, el mismo resultado',
      escenario: [
        'Dos ferreterías cerraron el año con la misma utilidad neta: $12.000.000.',
        'La primera tiene $20.000.000 en inventario, $8.000.000 por cobrar, $2.000.000 en efectivo y debe $25.000.000 en créditos de corto plazo.',
        'La segunda tiene $9.000.000 en inventario, $3.000.000 por cobrar, $14.000.000 en efectivo y debe $4.000.000 a proveedores.',
      ],
      pregunta: '¿Qué se puede concluir de estos dos negocios?',
      elegir: 2,
      opciones: [
        {
          id: 'o1',
          texto:
            'La segunda está en mejor posición: tiene más activos líquidos que deudas y aguanta un mal mes',
          correcta: true,
        },
        {
          id: 'o2',
          texto:
            'El estado de resultados no alcanza para comparar dos negocios: hace falta mirar también el balance',
          correcta: true,
        },
        {
          id: 'o3',
          texto: 'Son equivalentes, porque ganaron lo mismo',
          correcta: false,
        },
        {
          id: 'o4',
          texto: 'La primera es mejor porque tiene más activos en total',
          correcta: false,
        },
        {
          id: 'o5',
          texto: 'La primera debe vender más para pagar sus deudas',
          correcta: false,
        },
      ],
      explicacion:
        'Misma utilidad, situaciones opuestas. La primera tiene $10.000.000 entre efectivo y cuentas por cobrar contra $25.000.000 que vence pronto: su plata está atrapada en inventario que todavía no se vende. La segunda tiene $17.000.000 líquidos contra $4.000.000 de deuda. Tener más activos totales no dice nada si son difíciles de convertir en plata, que es justo el problema de la primera. Y "vender más" no es la solución: necesita vender lo que ya tiene en bodega, que es distinto. Esto es exactamente por qué los dos reportes se leen juntos.',
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
          texto: '¿Qué mide el margen bruto?',
          opciones: [
            { id: 'a', texto: 'La utilidad final del negocio, después de impuestos', correcta: false },
            {
              id: 'b',
              texto: 'Lo que dejan las ventas después de descontar lo que costó producirlas',
              correcta: true,
            },
            { id: 'c', texto: 'El total de ventas del periodo', correcta: false },
            { id: 'd', texto: 'La diferencia entre activos y pasivos', correcta: false },
          ],
          explicacion:
            'Es ingresos menos costo de ventas, antes de los gastos de mantener el negocio abierto. Sirve para saber si tu precio cubre lo que cuesta producir. Si el margen bruto es bajo, el problema está en el precio o en los insumos, y recortar gastos operativos no lo arregla. La última alternativa describe el patrimonio, que es del balance.',
        },
        {
          id: 'q2',
          texto: '¿Qué dice la ecuación Activos = Pasivos + Patrimonio?',
          opciones: [
            { id: 'a', texto: 'Que el negocio no debe tener deudas', correcta: false },
            {
              id: 'b',
              texto: 'Que todo lo que el negocio tiene vino de una deuda o de los dueños',
              correcta: true,
            },
            { id: 'c', texto: 'Que las ventas deben igualar a los gastos', correcta: false },
            { id: 'd', texto: 'Que el patrimonio debe ser mayor que los pasivos', correcta: false },
          ],
          explicacion:
            'Es una verdad de origen: cada peso que hay en el negocio entró porque alguien lo prestó o porque los dueños lo pusieron. Por eso el balance siempre cuadra, y si no cuadra hay un error de registro. No dice nada sobre cuánta deuda es sana: eso lo evalúas tú mirando los plazos.',
        },
        {
          id: 'q3',
          texto:
            'Un negocio tiene utilidad neta positiva pero no puede pagar los sueldos este mes. ¿Qué reporte explica eso?',
          opciones: [
            { id: 'a', texto: 'El estado de resultados', correcta: false },
            { id: 'b', texto: 'El balance general, únicamente', correcta: false },
            {
              id: 'c',
              texto: 'El flujo de caja, que muestra la plata que entró y salió de verdad',
              correcta: true,
            },
            { id: 'd', texto: 'Ninguno: es un error de registro', correcta: false },
          ],
          explicacion:
            'El estado de resultados puede incluir ventas facturadas que todavía no cobras, así que muestra utilidad sin que haya plata. El balance muestra que esas ventas están en cuentas por cobrar. Pero el que responde directamente a "¿tengo con qué pagar?" es el flujo de caja, que viste en el Nivel 2. No es un error: es la diferencia entre ganar y tener.',
        },
      ],
    },

    {
      id: 'p9',
      tipo: 'cierre',
      etiqueta: 'Cierre',
      titulo: 'Lo que te llevas',
      resumen: [
        'El estado de resultados pregunta si ganaste en un periodo. El balance pregunta qué tienes y qué debes hoy. Son diagnósticos independientes.',
        'El margen bruto es el número que más dice: si está mal, el problema es el precio o los insumos, y recortar gastos no lo arregla.',
        'Activos = Pasivos + Patrimonio siempre se cumple, porque todo lo que hay en el negocio vino de una deuda o de los dueños.',
        'Dos negocios con la misma utilidad pueden estar en situaciones opuestas. Por eso los reportes se leen juntos.',
      ],
      pasoSemana:
        'Arma el estado de resultados del mes pasado de tu negocio con cinco líneas: ventas, costo de lo vendido, margen bruto, gastos operativos y lo que quedó. Aunque sea aproximado. Después calcula qué porcentaje de las ventas es tu margen bruto: ese número es el que vas a querer vigilar todos los meses de aquí en adelante.',
    },
  ],
}
