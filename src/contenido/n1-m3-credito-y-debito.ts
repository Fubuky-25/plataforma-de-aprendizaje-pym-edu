import type { Leccion } from '../tipos'

/**
 * Nivel 1, Módulo 1.3 — Tarjetas: crédito versus débito.
 * Adaptado de `contenido para los cursos/Pym_Edu_nivel1.pdf`.
 *
 * El material original mencionaba a Tenpo Bank como banco digital "próximo a
 * operar", con licencia esperada antes del cierre de 2025. Eso quedó fuera:
 * es una afirmación sobre el futuro escrita en 2025 que hoy no se puede dar por
 * cierta sin verificarla, y nombrar a una empresa concreta en un curso exige
 * más cuidado que mencionar una categoría.
 */
export const leccion: Leccion = {
  id: 'n1-m3',
  nivel: 'Nivel 1 · Fundamentos',
  curso: 'Fundamentos de educación financiera',
  modulo: 'Módulo 1.3',
  area: 'Finanzas',
  titulo: 'Tarjetas: crédito versus débito',
  actualizada: 'septiembre de 2026',
  fuentes: [
    'Comisión para el Mercado Financiero (CMF), material de educación financiera sobre medios de pago.',
  ],
  pantallas: [
    {
      id: 'p1',
      tipo: 'portada',
      etiqueta: 'Nivel 1 · Módulo 1.3',
      titulo: 'Tarjetas: crédito versus débito',
      bajada:
        'Se parecen, caben en el mismo bolsillo y se pasan por la misma máquina. Pero una gasta tu plata y la otra te presta la del banco.',
      duracionMin: 14,
      objetivos: [
        'Distinguir qué hace cada tarjeta con tu dinero',
        'Entender qué es el CAE y por qué es el número que hay que mirar',
        'Ver el costo real de pagar solo el mínimo',
        'Elegir el medio de pago que corresponde a cada situación',
      ],
    },

    {
      id: 'p2',
      tipo: 'contenido',
      etiqueta: 'Lo esencial',
      titulo: 'Dos tarjetas, dos cosas distintas',
      parrafos: [
        'La tarjeta de débito identifica al titular de una cuenta corriente o de ahorro. Cuando compras o giras, el monto se descuenta al instante del saldo disponible. Por eso necesitas tener fondos: no hay nada que prestar, solo lo que ya tienes.',
        'La tarjeta de crédito funciona al revés. El emisor, que puede ser un banco, una casa comercial o una cooperativa, te otorga una línea de crédito, y tú compras con esa plata prestada. El pago llega al mes siguiente en un estado de cuenta: puedes pagarlo completo o en cuotas, y si no lo pagas entero se generan intereses y comisiones.',
        'Ahí está toda la diferencia. Con débito gastas lo que tienes. Con crédito adquieres una deuda, aunque en el momento de pasar la tarjeta se sienta exactamente igual.',
      ],
      nota: 'Pagar con crédito y pagar el total al vencimiento no cuesta intereses. El problema no es la tarjeta de crédito: es no pagarla completa.',
    },

    {
      id: 'p3',
      tipo: 'comparacion',
      etiqueta: 'Compara',
      titulo: 'En qué se diferencian',
      bajada: 'La misma compra, con la misma máquina, produce dos situaciones distintas.',
      criterios: [
        'De dónde sale la plata',
        'Qué pasa con la deuda',
        'Comisiones y costos',
        'Qué ganas',
        'Qué arriesgas',
      ],
      columnas: [
        {
          titulo: 'Débito',
          celdas: [
            'De tu cuenta, al instante',
            'No hay deuda: gastas solo lo que tienes',
            'Generalmente menores, aunque algunos bancos cobran mantención',
            'Control inmediato del gasto, porque el saldo baja a la vista',
            'Robo de datos y clonación',
          ],
        },
        {
          titulo: 'Crédito',
          celdas: [
            'De una línea de crédito que te otorga el emisor',
            'Pagas el estado de cuenta al mes siguiente; si no pagas todo, corren intereses',
            'Comisión de mantención, tasas de interés y costos por avance en efectivo',
            'Puntos, millas o cashback, y la posibilidad de financiar en cuotas',
            'Sobreendeudamiento, interés rotativo y la trampa del pago mínimo',
          ],
        },
      ],
      nota: 'Ninguna de las dos es mejor en abstracto. La pregunta correcta no es cuál usar siempre, sino cuál corresponde a la compra que tienes delante.',
    },

    {
      id: 'p4',
      tipo: 'tarjetas',
      etiqueta: 'Cuatro palabras',
      titulo: 'Los términos que aparecen en el estado de cuenta',
      instruccion: 'Toca cada uno para ver qué significa.',
      tarjetas: [
        {
          id: 't1',
          titulo: 'CAE',
          definicion:
            'Carga Anual Equivalente. Es el costo total del crédito expresado en un solo porcentaje anual: incluye la tasa de interés más las comisiones y los seguros asociados. Sirve para comparar dos créditos distintos con un solo número. Si comparas solo tasas, te falta la mitad de la historia.',
        },
        {
          id: 't2',
          titulo: 'Pago mínimo',
          definicion:
            'La cantidad más baja que puedes pagar sin quedar en mora. No es una sugerencia del banco sobre cuánto conviene pagar: es el piso legal para no caer en incumplimiento. Pagar el mínimo mes tras mes alarga la deuda y multiplica los intereses.',
        },
        {
          id: 't3',
          titulo: 'Línea de crédito',
          definicion:
            'El monto máximo que el emisor pone a tu disposición. No es plata tuya ni es un ahorro: es cuánto te están dispuestos a prestar. Que la línea suba no significa que estés mejor económicamente, solo que el emisor está dispuesto a arriesgar más contigo.',
        },
        {
          id: 't4',
          titulo: 'Avance en efectivo',
          definicion:
            'Sacar plata en efectivo con cargo a la tarjeta de crédito. Suele ser lo más caro que se puede hacer con una tarjeta: además del interés, casi siempre hay una comisión por la operación, y en muchos casos el interés empieza a correr de inmediato y no al mes siguiente.',
        },
      ],
    },

    {
      id: 'p5',
      tipo: 'simulador',
      etiqueta: 'Pruébalo',
      titulo: 'Cuánto cuesta pagar poco cada mes',
      instruccion:
        'Pon una deuda, la tasa mensual que te cobran y lo que pagarías al mes. Mira cuánto demoras y cuánto terminas pagando de más.',
      calculo: 'pagoMinimo',
      etiquetas: {
        deuda: '¿Cuánto debes en la tarjeta?',
        tasaMensual: '¿Qué interés mensual te cobran?',
        cuota: '¿Cuánto vas a pagar cada mes?',
      },
      inicial: { deuda: 800000, tasaMensual: 2.5, cuota: 40000 },
      lectura: 'Terminarías de pagarla en',
      nota: 'Baja la cuota de a poco y vas a llegar a un punto donde el simulador dice que la deuda no se termina nunca. Ese punto existe de verdad: cuando lo que pagas no alcanza a cubrir el interés del mes, el saldo sube aunque estés pagando.',
      fuente:
        'El 2,5 % mensual es un valor de ejemplo. Revisa la tasa y el CAE de tu propia tarjeta en tu estado de cuenta.',
    },

    {
      id: 'p6',
      tipo: 'caso',
      etiqueta: 'Caso',
      titulo: 'Tres compras el mismo mes',
      escenario: [
        'A Rodrigo se le juntó todo en marzo. Tiene que comprar un notebook de $450.000 para poder trabajar, hacer el supermercado del mes por unos $180.000, y le llegó una multa de $95.000 que vence en diez días.',
        'Tiene $250.000 en la cuenta y una tarjeta de crédito con cupo disponible. Su sueldo entra el día 30.',
      ],
      pregunta: '¿Cuáles de estas decisiones son razonables para Rodrigo?',
      elegir: 2,
      opciones: [
        {
          id: 'o1',
          texto: 'Pagar el supermercado con débito, porque tiene los fondos y es un gasto del mes',
          correcta: true,
        },
        {
          id: 'o2',
          texto:
            'Comprar el notebook con crédito en cuotas, porque es una herramienta de trabajo que va a durar años',
          correcta: true,
        },
        {
          id: 'o3',
          texto: 'Sacar un avance en efectivo de la tarjeta para pagar la multa',
          correcta: false,
        },
        {
          id: 'o4',
          texto: 'Pagar todo con crédito y después abonar solo el mínimo hasta que mejore el mes',
          correcta: false,
        },
        {
          id: 'o5',
          texto: 'Pedir una segunda tarjeta para repartir las compras entre las dos',
          correcta: false,
        },
      ],
      explicacion:
        'El supermercado es un gasto corriente que Rodrigo puede pagar: no tiene sentido financiarlo. El notebook es otra cosa: es una inversión que va a producir ingresos durante años, así que financiarlo en cuotas es una decisión defendible, siempre que la cuota entre en su presupuesto. El avance en efectivo es lo más caro que ofrece una tarjeta y la multa se puede cubrir con el saldo o esperando al día 30. Pagar el mínimo alarga la deuda y multiplica los intereses, y una segunda tarjeta no reparte el problema: lo duplica.',
      bloquea: true,
    },

    {
      id: 'p7',
      tipo: 'contenido',
      etiqueta: 'Cómo se usa bien',
      titulo: 'Cuatro reglas para no perder el control',
      parrafos: [
        'La tarjeta de crédito no es el enemigo. Usada con criterio ordena los pagos, permite financiar algo que lo amerita y en muchos casos devuelve beneficios. El problema aparece cuando deja de ser una decisión y pasa a ser un hábito.',
      ],
      puntos: [
        'Evita el pago mínimo. Pagarlo de forma habitual es la manera más rápida de convertir una compra chica en una deuda larga.',
        'Mira el CAE, no la tasa. Es el único número que permite comparar dos créditos de verdad, porque incluye intereses, comisiones y seguros.',
        'No pases del 25 % de tu ingreso en cuotas. Por encima de eso pierdes la capacidad de absorber cualquier imprevisto sin endeudarte de nuevo.',
        'Revisa el estado de cuenta todos los meses. Ahí aparecen cobros que no reconoces, seguros que nunca contrataste y comisiones que se pueden reclamar.',
      ],
      nota: 'Si detectas un cobro indebido, primero reclama ante el emisor y guarda el número de la gestión. Si no responde o la respuesta no te convence, puedes reclamar ante el SERNAC.',
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
          texto: '¿Qué define a una tarjeta de débito?',
          opciones: [
            { id: 'a', texto: 'Permite financiar compras a plazo', correcta: false },
            { id: 'b', texto: 'Usa una línea de crédito del banco', correcta: false },
            { id: 'c', texto: 'Descuenta los fondos al instante de tu cuenta', correcta: true },
            { id: 'd', texto: 'No tiene comisiones', correcta: false },
          ],
          explicacion:
            'El débito descuenta del saldo que ya tienes, en el momento. No financia nada ni usa una línea de crédito. Y ojo con la alternativa de las comisiones: muchas cuentas cobran mantención, así que "sin comisiones" no es parte de la definición de débito.',
        },
        {
          id: 'q2',
          texto: 'Si pagas solo el mínimo de tu tarjeta de crédito:',
          opciones: [
            { id: 'a', texto: 'Cancelas la deuda más rápido', correcta: false },
            { id: 'b', texto: 'No pagas interés', correcta: false },
            { id: 'c', texto: 'Prolongas la deuda y pagas más intereses', correcta: true },
            { id: 'd', texto: 'Obtienes puntos extra', correcta: false },
          ],
          explicacion:
            'El mínimo cubre poco más que el interés del periodo, así que el capital baja muy lento y el interés se sigue aplicando sobre un saldo que casi no se mueve. Es el mecanismo que convierte una compra de unos cientos de miles en una deuda de años, y por eso el simulador de la pantalla anterior es tan incómodo de mirar.',
        },
        {
          id: 'q3',
          texto: '¿Qué es el CAE?',
          opciones: [
            { id: 'a', texto: 'Una tasa que indica cuántos puntos acumulas', correcta: false },
            {
              id: 'b',
              texto: 'El costo total del crédito, que incluye intereses y comisiones',
              correcta: true,
            },
            { id: 'c', texto: 'El capital acumulado en tu cuenta de ahorro', correcta: false },
            { id: 'd', texto: 'La comisión que cobra el banco por giros en cajero', correcta: false },
          ],
          explicacion:
            'Carga Anual Equivalente: el costo completo del crédito en un solo porcentaje anual. Existe precisamente para que no puedan mostrarte una tasa baja y cobrarte el resto en comisiones y seguros. Cuando compares dos ofertas, compara CAE contra CAE.',
        },
      ],
    },

    {
      id: 'p9',
      tipo: 'cierre',
      etiqueta: 'Cierre',
      titulo: 'Lo que te llevas',
      resumen: [
        'El débito gasta lo que tienes. El crédito crea una deuda, aunque al pasar la tarjeta se sienta idéntico.',
        'Usar crédito y pagar el total al vencimiento no cuesta intereses. El costo aparece cuando no se paga completo.',
        'El CAE es el número que permite comparar. La tasa sola esconde comisiones y seguros.',
        'El pago mínimo no es una recomendación del banco: es el piso para no caer en mora, y usarlo de forma habitual alarga la deuda durante años.',
      ],
      pasoSemana:
        'Busca tu último estado de cuenta y ubica tres cosas: el CAE, el monto del pago mínimo y el total adeudado. Después mete esos números en el simulador de esta lección con la cuota que sueles pagar. Toma cinco minutos y suele cambiar la decisión del mes siguiente.',
    },
  ],
}
