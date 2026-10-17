import type { Leccion } from '../tipos'

/**
 * Nivel 3, Módulo 3.2 — Flujo proyectado y punto de equilibrio.
 * Adaptado de `contenido para los cursos/Pym_Edu_nivel3.pdf`.
 *
 * El ejemplo de la cafetería del material llegaba con las cifras incompletas en
 * el PDF; se reconstruyó con los números que hacen cuadrar su resultado
 * (500 tazas): costos fijos de $50.000, precio $150 y costo variable $50.
 */
export const leccion: Leccion = {
  id: 'n3-m2',
  nivel: 'Nivel 3 · Crecer',
  curso: 'Decisiones avanzadas',
  modulo: 'Módulo 3.2',
  area: 'Finanzas',
  titulo: 'Flujo proyectado y punto de equilibrio',
  actualizada: 'octubre de 2026',
  pantallas: [
    {
      id: 'p1',
      tipo: 'portada',
      etiqueta: 'Nivel 3 · Módulo 3.2',
      titulo: 'Flujo proyectado y punto de equilibrio',
      bajada:
        'Dos preguntas que todo negocio debería poder responder: cuánto necesito vender para no perder, y en qué mes me quedo sin plata.',
      duracionMin: 16,
      objetivos: [
        'Proyectar tu caja de los próximos meses y ver el problema antes de que llegue',
        'Calcular cuántas unidades necesitas vender para cubrir los costos',
        'Entender el margen de contribución y por qué decide todo',
        'Probar escenarios en vez de confiar en el optimista',
      ],
    },

    {
      id: 'p2',
      tipo: 'contenido',
      etiqueta: 'Lo esencial',
      titulo: 'Proyectar no es adivinar',
      parrafos: [
        'En el Nivel 2 viste el flujo de caja hacia atrás: qué entró y qué salió. Proyectarlo es hacer lo mismo hacia adelante, con lo que ya sabes.',
        'No se trata de predecir el futuro. Se trata de poner en una tabla lo que ya es bastante previsible: el arriendo del mes que viene, los sueldos, las facturas que vencen, las ventas de un mes normal. Con eso solo, se ve venir el mes apretado con semanas de anticipación.',
        'La diferencia entre ver un problema de caja en marzo o verlo el 30 de marzo es enorme. En el primer caso negocias con calma; en el segundo aceptas lo primero que te ofrezcan.',
      ],
      puntos: [
        'Parte de tus datos reales: ventas y gastos de los últimos meses, no de lo que te gustaría que pasara.',
        'Considera la estacionalidad. Enero no se parece a diciembre, y un negocio chico lo siente fuerte.',
        'Sé generoso al estimar gastos y conservador al estimar ventas. El error en la dirección contraria se paga en efectivo.',
        'Prueba tres escenarios: optimista, esperado y pesimista. El que importa para dormir tranquilo es el tercero.',
        'Actualízalo. Una proyección hecha una vez y archivada no sirve: es un documento vivo.',
      ],
      nota: 'Los cuatro errores más comunes son los mismos siempre: subestimar gastos, ignorar lo que pasa afuera, no actualizar nunca y no estar dispuesto a cambiar el plan cuando los números dicen otra cosa.',
    },

    {
      id: 'p3',
      tipo: 'simulador',
      etiqueta: 'Pruébalo',
      titulo: 'Tu caja en los próximos seis meses',
      instruccion:
        'Pon lo que tienes hoy, lo que entra y sale en un mes normal, y cuánto esperas crecer. Mira el saldo mes a mes.',
      calculo: 'flujoProyectado',
      etiquetas: {
        saldoInicial: '¿Cuánta plata tiene el negocio hoy?',
        ingresos: '¿Cuánto entra en un mes normal?',
        egresos: '¿Cuánto sale en un mes normal?',
        crecimiento: '¿Cuánto esperas crecer cada mes?',
      },
      inicial: { saldoInicial: 2000000, ingresos: 4000000, egresos: 4300000, crecimiento: 3 },
      lectura: 'En seis meses tendrías',
      nota: 'Pon el crecimiento en cero y mira otra vez. Si el negocio solo funciona asumiendo que las ventas suben todos los meses, no tienes un plan: tienes una esperanza.',
    },

    {
      id: 'p4',
      tipo: 'contenido',
      etiqueta: 'El otro número',
      titulo: '¿Cuánto tengo que vender para no perder?',
      parrafos: [
        'El punto de equilibrio es el nivel de ventas donde los ingresos cubren exactamente todos los costos. Ni ganas ni pierdes. Desde ahí hacia arriba, empieza la utilidad.',
        'Para calcularlo necesitas separar los costos como aprendiste en el Nivel 2: los fijos, que existen vendas o no, y los variables, que dependen de cada venta.',
        'La pieza clave se llama margen de contribución: es lo que deja cada unidad después de pagar su propio costo variable. Es lo que esa venta "contribuye" a cubrir los costos fijos.',
      ],
      puntos: [
        'Margen de contribución por unidad = precio de venta sin IVA menos costo variable de esa unidad.',
        'Punto de equilibrio en unidades = costos fijos dividido por el margen de contribución unitario.',
        'Ejemplo: una cafetería con $50.000 de costos fijos al día, que vende el café a $150 y gasta $50 en vaso, café y azúcar. El margen es $100, y el punto de equilibrio son 500 tazas. Desde la taza 501 empieza a ganar.',
      ],
      nota: 'Fíjate en lo que no aparece en la fórmula: el volumen de ventas actual. El punto de equilibrio no depende de cuánto vendes hoy, solo de tu estructura de costos y de tu precio.',
    },

    {
      id: 'p5',
      tipo: 'simulador',
      etiqueta: 'Pruébalo',
      titulo: 'Tu punto de equilibrio',
      instruccion:
        'Pon tus costos fijos del mes, el precio de lo que vendes y lo que te cuesta cada unidad.',
      calculo: 'puntoEquilibrio',
      etiquetas: {
        costosFijos: '¿Cuánto son tus costos fijos del mes?',
        precio: '¿A cuánto vendes cada unidad, sin IVA?',
        costoVariable: '¿Cuánto te cuesta cada unidad?',
        unidad: 'unidades',
      },
      inicial: { costosFijos: 1500000, precio: 5000, costoVariable: 2000 },
      lectura: 'Necesitas vender',
      nota: 'Prueba tres cosas por separado: sube el precio un 10 %, baja el costo variable un 10 % y baja los costos fijos un 10 %. Vas a ver que la primera es la que más mueve el resultado, y casi siempre es la que menos se considera.',
    },

    {
      id: 'p6',
      tipo: 'caso',
      etiqueta: 'Caso',
      titulo: 'La cafetería de Andrés',
      escenario: [
        'Andrés tiene una cafetería. Sus costos fijos son $1.800.000 al mes: arriendo, un ayudante y servicios. Vende el café a $2.000 y cada uno le cuesta $800 en insumos.',
        'Su punto de equilibrio son 1.500 cafés al mes, unos 50 al día. Hoy vende alrededor de 45 diarios, así que está perdiendo plata todos los meses.',
        'Está evaluando tres salidas: bajar el precio a $1.800 para atraer más gente, subirlo a $2.300, o cambiarse a un local más chico que cuesta $400.000 menos de arriendo.',
      ],
      pregunta: '¿Qué opciones mejoran de verdad la situación de Andrés?',
      elegir: 2,
      opciones: [
        {
          id: 'o1',
          texto: 'Subir el precio a $2.300: el margen pasa de $1.200 a $1.500 y el equilibrio baja a 1.200 cafés',
          correcta: true,
        },
        {
          id: 'o2',
          texto: 'Mudarse al local más chico: con $1.400.000 de costos fijos el equilibrio baja a unos 1.167 cafés',
          correcta: true,
        },
        {
          id: 'o3',
          texto: 'Bajar el precio a $1.800 para vender más volumen',
          correcta: false,
        },
        {
          id: 'o4',
          texto: 'Mantener todo igual y esperar a que mejore la temporada',
          correcta: false,
        },
        {
          id: 'o5',
          texto: 'Comprar más insumos de una vez para que salgan más baratos por unidad',
          correcta: false,
        },
      ],
      explicacion:
        'Las dos primeras atacan la fórmula por donde se puede: el margen de contribución o los costos fijos. Subir a $2.300 lleva el equilibrio de 1.500 a 1.200 cafés, es decir, 40 al día en vez de 50, y Andrés ya vende 45. El local más chico lo deja en unos 1.167. Bajar el precio es la trampa clásica: a $1.800 el margen cae a $1.000 y el equilibrio sube a 1.800 cafés, 60 diarios. Tendría que vender un tercio más solo para quedar igual de mal. Esperar la temporada no cambia ninguna de las tres variables. Y comprar insumos al por mayor ayuda un poco al margen, pero inmoviliza caja, que es justo lo que no le sobra. El riesgo real de subir el precio es perder clientes, y eso Andrés tiene que medirlo: la fórmula le dice cuánto margen gana, no cuánta demanda pierde.',
      bloquea: true,
    },

    {
      id: 'p7',
      tipo: 'aplicar',
      etiqueta: 'Tu negocio',
      titulo: 'Tus tres números',
      instruccion:
        'Con estos tres datos puedes calcular tu punto de equilibrio cuando quieras. Quedan guardados en tu navegador.',
      campos: [
        {
          id: 'c1',
          etiqueta: '¿Cuánto son tus costos fijos del mes?',
          ayuda: 'Arriendo, sueldos, servicios, planes: todo lo que pagas aunque no vendas nada.',
          formato: 'monto',
        },
        {
          id: 'c2',
          etiqueta: '¿A cuánto vendes tu producto o servicio principal, sin IVA?',
          formato: 'monto',
        },
        {
          id: 'c3',
          etiqueta: '¿Cuánto te cuesta producir o comprar cada unidad?',
          ayuda: 'Solo lo que varía con cada venta: insumos, comisiones, despacho.',
          formato: 'monto',
        },
      ],
      cierre:
        'Si tu punto de equilibrio te parece inalcanzable con la demanda que tienes, ese es el diagnóstico más importante que puedes obtener de este curso: el problema no es vender más, es que la estructura no da. Se arregla con precio, con costos o cambiando de escala, no con esfuerzo.',
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
          texto: '¿Cuál de estos pasos NO forma parte de elaborar un flujo de caja proyectado?',
          opciones: [
            { id: 'a', texto: 'Identificar las fuentes de ingresos', correcta: false },
            { id: 'b', texto: 'Ignorar los factores externos', correcta: true },
            { id: 'c', texto: 'Estimar los gastos', correcta: false },
            { id: 'd', texto: 'Revisar y ajustar continuamente', correcta: false },
          ],
          explicacion:
            'Al revés: considerar lo que pasa afuera es parte del trabajo. Un alza de insumos, un cambio de regulación o una caída de la demanda afectan tu caja aunque tu negocio haga todo bien. Ignorarlos es justamente uno de los cuatro errores clásicos de una proyección.',
        },
        {
          id: 'q2',
          texto:
            'Un negocio tiene costos fijos de $600.000 al mes, vende a $200 por unidad y cada unidad le cuesta $80. ¿Cuál es su punto de equilibrio?',
          opciones: [
            { id: 'a', texto: '3.000 unidades', correcta: false },
            { id: 'b', texto: '5.000 unidades', correcta: true },
            { id: 'c', texto: '7.500 unidades', correcta: false },
            { id: 'd', texto: '600.000 unidades', correcta: false },
          ],
          explicacion:
            'El margen de contribución es $200 menos $80, o sea $120. Dividiendo los costos fijos por el margen: 600.000 / 120 = 5.000 unidades. Ojo con la primera alternativa: dividir por el precio en vez de por el margen da 3.000 y es el error más común, porque olvida que cada venta también trae su propio costo.',
        },
        {
          id: 'q3',
          texto: 'Si bajas el precio de venta y todo lo demás queda igual, ¿qué pasa con tu punto de equilibrio?',
          opciones: [
            { id: 'a', texto: 'Baja, porque vendes más', correcta: false },
            { id: 'b', texto: 'No cambia: el precio no entra en la fórmula', correcta: false },
            {
              id: 'c',
              texto: 'Sube, porque el margen de cada unidad se achica',
              correcta: true,
            },
            { id: 'd', texto: 'Depende de los costos fijos', correcta: false },
          ],
          explicacion:
            'Bajar el precio achica el margen de contribución, así que cada venta aporta menos a cubrir los costos fijos y necesitas más unidades para llegar al mismo lugar. Es la trampa de "bajo el precio para vender más": puede funcionar si el volumen sube lo suficiente, pero el punto de equilibrio sube primero y hay que saber cuánto.',
        },
      ],
    },

    {
      id: 'p9',
      tipo: 'cierre',
      etiqueta: 'Cierre',
      titulo: 'Lo que te llevas',
      resumen: [
        'Proyectar la caja no es adivinar: es poner en una tabla lo que ya es previsible y ver el mes apretado con semanas de anticipación.',
        'El margen de contribución es lo que deja cada venta después de su propio costo. Es la pieza que decide el punto de equilibrio.',
        'Punto de equilibrio = costos fijos dividido por margen de contribución. No depende de cuánto vendes hoy.',
        'Bajar el precio sube el punto de equilibrio. Puede funcionar igual, pero hay que saber cuánto volumen extra se necesita.',
      ],
      pasoSemana:
        'Calcula tu punto de equilibrio y divídelo por los días que abres al mes. Ese número, unidades por día, es el más útil que te llevas de este curso: lo puedes mirar al cerrar cada día y saber si ese día ganaste o perdiste, sin esperar a fin de mes.',
    },
  ],
}
