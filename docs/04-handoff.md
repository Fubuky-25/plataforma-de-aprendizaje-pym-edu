# Handoff: plataforma de aprendizaje PymEdu

Documento para retomar el proyecto desde cero, sin contexto previo.
Estado al 2026-10-16.

| | |
|---|---|
| **Sitio de prueba** | https://fubuky-25.github.io/plataforma-de-aprendizaje-pym-edu/ |
| **Repositorio** | https://github.com/Fubuky-25/plataforma-de-aprendizaje-pym-edu (público) |
| **Guía para el equipo** | [guia-revision-equipo.md](guia-revision-equipo.md) |
| **Carpeta de trabajo** | `C:\Users\sergi\Desktop\Plataforma_educativa` |

---

## 1. Qué es este proyecto

**PymEdu ya existe** como ERP para micro y pequeñas empresas chilenas, en
[pymedu.cl](https://www.pymedu.cl): dashboard, ventas y gastos, inventario,
remuneraciones, F29, asistente con IA, backend en Supabase, planes de pago.

**Este proyecto es su componente educativo**: un reproductor de lecciones
interactivas de educación financiera. No es la plataforma completa ni toca el
ERP. Se decidió que se integre **mediante un enlace** desde pymedu.cl hacia este
sitio, que sigue siendo una aplicación aparte.

El contenido viene de tres PDF entregados por PymEdu, en
`contenido para los cursos/`: tres niveles de seis módulos cada uno.

### De dónde salió el diseño

El equipo mostró capturas de un curso corporativo de inducción en gestión de
riesgos que les gustó. Al analizarlas se encontró algo importante: **no era una
plataforma, era un solo curso dentro de un LMS ajeno**. Cubría la capa "dentro
de la lección" y nada más. Eso definió el alcance.

El sistema visual, en cambio, **no** salió de esa referencia: se leyeron
directamente los tokens de color, la tipografía y los componentes de pymedu.cl.
El análisis completo está en [01-analisis-referencia.md](01-analisis-referencia.md).

---

## 2. En qué punto está

### Lo que funciona

- **Los tres niveles completos:** 17 módulos, 154 pantallas, unas 4 horas de
  contenido. Falta solo la certificación final del material (módulo 3.6).
- **Diez tipos de pantalla:** portada, contenido, tarjetas que se revelan,
  comparación, caso de negocio, emparejar, calculadora, aplícalo a tu negocio,
  evaluación y cierre.
- **Doce calculadoras**, todas con la fórmula verificada a mano contra el
  resultado en pantalla: inflación, regla 50/30/20, pago mínimo de tarjeta,
  meta de ahorro, carga financiera con semáforo, días de caja, gasto anualizado,
  IVA del mes, cuota de crédito, punto de equilibrio, flujo proyectado a seis
  meses, y evaluación de inversión con VAN, TIR, Payback y ROI.
- **Lista de módulos** con selector de nivel, estado de cada módulo y acceso
  directo al siguiente al terminar uno.
- **Modo claro y oscuro** con el sistema visual de pymedu.cl.
- **Progreso guardado** en el navegador, por módulo.
- **Funciona en teléfono.** Revisado a 375 px.
- **Publicado** en GitHub Pages, con `noindex` mientras el contenido no esté
  validado.

### Inventario por nivel

| Nivel | Módulos | Pantallas | Minutos | Temas |
|---|---|---|---|---|
| 1 · Fundamentos de educación financiera | 6 | 55 | ~78 | Inflación y UF, presupuesto, tarjetas, ahorro, sobreendeudamiento, sistema financiero |
| 2 · Gestión del emprendimiento | 6 | 54 | ~83 | Flujo de caja, costos, herramientas digitales, formalización, IVA y F29, financiamiento |
| 3 · Decisiones avanzadas | 5 | 45 | ~77 | Contabilidad, punto de equilibrio, VAN/TIR/Payback/ROI, fuentes de financiamiento, inversión inicial |

El detalle módulo por módulo está en
[03-programa-y-contenido.md](03-programa-y-contenido.md).

### Lo que se verificó

- TypeScript compila sin errores y `npm run validar` pasa en los 17 módulos.
- Las doce calculadoras dan resultados correctos, comprobados contra el cálculo
  hecho a mano. Los números de los ejemplos del texto coinciden con lo que
  entrega el simulador si el usuario los escribe.
- En el sitio publicado: carga sin errores de consola, los tres niveles
  aparecen, se abren módulos y se avanza entre pantallas, y la tipografía y los
  iconos cargan.
- El botón "atrás" del navegador retrocede de pantalla y termina en la lista.
- `npm audit`: cero vulnerabilidades.

**Lo que NO se verificó:** no se recorrió cada actividad de los 17 módulos
haciendo clic una por una. Usan componentes ya probados y los datos pasan la
validación, pero nadie completó el programa entero de principio a fin.

---

## 3. Cómo trabajar en el proyecto

Requiere Node.js.

```bash
npm install
```

```bash
npm run dev
```

| Comando | Qué hace |
|---|---|
| `npm run dev` | Levanta el proyecto en `http://localhost:5173`. |
| `npm run validar` | Revisa los datos de las lecciones: una sola alternativa correcta por pregunta, ids únicos, celdas completas en comparaciones. |
| `npm run build` | Compila y verifica tipos. |
| `npm run publicar` | Compila y sube el sitio a GitHub Pages. |

### Trampas que conviene saber de antemano

1. **Hacer push a `main` NO actualiza el sitio.** El sitio solo cambia con
   `npm run publicar`, que sube a la rama `gh-pages`. Es lo primero que
   confunde a quien llega nuevo.
2. **Las auditorías de seguridad no están en el repositorio.** Hay dos
   documentos, `docs/05-auditoria-tecnica.md` y
   `docs/06-auditoria-pymedu-cl-vivo.md`, más un `.docx`, que están en el
   `.gitignore` a propósito: el segundo describe vulnerabilidades **sin
   corregir del sitio en producción** y el repositorio es público. Existen solo
   en el computador de trabajo. Si hay que compartirlos, por canal privado.
3. **No se pueden agregar scripts en línea en `index.html`.** La política de
   seguridad de contenido los prohíbe. Por eso el script que fija el tema vive
   en `public/tema.js`.
4. **Si pruebas `BASE_PATH` desde Git Bash**, usa `MSYS_NO_PATHCONV=1` o la
   ruta se convierte en una ruta de Windows y el build sale mal. El script de
   publicación no tiene ese problema porque define la variable desde Node.
5. **La rama `gh-pages` no se edita a mano.** Se reemplaza entera en cada
   publicación.

### Flujo para publicar un cambio

1. Hacer el cambio.
2. `npm run validar`.
3. Commit y push a `main`.
4. `npm run publicar`.
5. Esperar uno o dos minutos y revisar el link.

### Orden de lectura para retomar

1. `CLAUDE.md`: las reglas de trabajo del proyecto.
2. Este documento.
3. [02-decisiones.md](02-decisiones.md): qué se decidió y por qué.
4. [03-programa-y-contenido.md](03-programa-y-contenido.md): el programa y qué
   se cambió del material original.
5. `docs/05-auditoria-tecnica.md`, si está en el disco.

---

## 4. Cómo está armado

La idea central: **el contenido vive en datos, no en código**. Cada lección es
un archivo en `src/contenido/` que describe sus pantallas. El reproductor las
lee y muestra el componente de cada tipo. Cambiar un texto no requiere tocar
ningún componente, y si algún día se cambia de tecnología, el contenido se
conserva.

```
src/
  tipos.ts                     Estructura de datos de lecciones y niveles
  App.tsx                      Dos vistas: lista de módulos o reproductor
  ReporteDeError.tsx           Pantalla de recuperación ante un error de render
  contenido/
    n1-m*.ts, n2-m*.ts, n3-m*.ts   Una lección por archivo
    nivel1.ts, nivel2.ts, nivel3.ts  Arman cada nivel
    niveles.ts                 El programa completo y la búsqueda de lecciones
  nivel/ListaModulos.tsx       Lista de módulos con selector de nivel
  reproductor/                 Navegación, progreso, tema, historial
  pantallas/                   Un componente por tipo de pantalla
    simuladores/               Las doce calculadoras, en tres archivos
  estilos/variables.css        Toda la paleta y tipografía, en los dos temas
herramientas/
  extraer-pdf.mjs              Saca el texto de los PDF del material
  validar-contenido.mjs        `npm run validar`
  publicar.mjs                 `npm run publicar`
public/tema.js                 Fija el tema antes del primer pintado
docs/                          Análisis, decisiones, programa, handoff, guía
```

| Si quieres... | Se hace en |
|---|---|
| Cambiar un texto de una lección | `src/contenido/nX-mY-*.ts` |
| Agregar una lección a un nivel | Crear el archivo y sumarlo en `src/contenido/nivelX.ts` |
| Agregar un nivel | Crear `nivelX.ts` y sumarlo en `src/contenido/niveles.ts` |
| Cambiar colores o tipografía | `src/estilos/variables.css`, un solo lugar para ambos temas |
| Agregar un tipo de pantalla | `src/tipos.ts`, un componente en `src/pantallas/` y un caso en `VistaPantalla.tsx` |
| Agregar una calculadora | Un caso en la unión de `src/tipos.ts`, su componente en `src/pantallas/simuladores/` y un caso en `Simulador.tsx` |

**Stack:** React, TypeScript y CSS plano, compilado con Vite. Cuatro
dependencias. Los lenguajes son HTML, CSS y JavaScript; se evitó a propósito
sumar herramientas con vocabulario propio, como Tailwind, por pedido explícito
del dueño del proyecto.

---

## 5. Reglas de contenido

Esto es lo más importante para quien escriba o actualice lecciones. No son
preferencias de estilo: son decisiones tomadas por razones concretas.

1. **Toda cifra lleva su fecha a la vista.** El material es de 2024 y 2025. Un
   dato financiero sin fecha se lee como vigente, y eso lleva a decisiones
   equivocadas con plata real. Usa el campo `fuente` de la pantalla.
2. **Nunca afirmar plazos, multas ni condiciones de programas como vigentes.**
   Se presentan como "lo que decía el material en 2025" y se remite a la fuente
   oficial: sii.cl, bcentral.cl, cmfchile.cl, corfo.cl, sercotec.cl.
3. **Suavizar las afirmaciones legales absolutas.** El material decía que en
   una persona jurídica los socios "no comprometen su patrimonio personal". Eso
   no es exacto: tiene excepciones y se cae si el dueño firma como aval.
4. **No nombrar productos comerciales.** PymEdu es un ERP; recomendar
   competidores en su propio curso es una decisión comercial del equipo, no del
   contenido. Se enseñan categorías y criterios de elección.
5. **Los casos de negocio son ficticios.** Todos inventados para el curso, no
   se basan en personas reales.
6. **Las evaluaciones del material venían como preguntas abiertas.** Se
   convirtieron a selección múltiple para que el reproductor pueda corregir y
   explicar el porqué, que es donde está el aprendizaje.
7. **Si el material tiene un error, se corrige y se explica.** Pasó en el
   módulo 3.5: el ejemplo trataba el aumento de ventas como si fuera utilidad.
   Se corrigió usando margen de contribución y el error se convirtió en el
   contenido central de una pantalla.
8. **Registrar cada cambio deliberado** en la sección 2 de
   [03-programa-y-contenido.md](03-programa-y-contenido.md).

---

## 6. Decisiones ya tomadas

Para no volver a discutirlas. El detalle y los motivos están en
[02-decisiones.md](02-decisiones.md).

| Decisión | Resultado |
|---|---|
| Alcance | El reproductor de lecciones, no la plataforma completa |
| Stack | React + TypeScript + CSS plano con Vite. Sin Tailwind |
| Cuentas y backend | No hay. Progreso en `localStorage` |
| Identidad visual | Tomada de pymedu.cl, no inventada ni copiada de la referencia |
| Dispositivos | Escritorio para el equipo, móvil para el usuario final |
| Bloqueo de avance | Solo en caso, emparejar y evaluación. Se resuelve al responder, se acierte o no |
| Publicación | Repositorio público y GitHub Pages, publicación manual |
| Integración con el ERP | Enlace desde pymedu.cl a este sitio aparte |
| Niveles | Los tres convertidos. La certificación final queda para definir con el equipo |

Dos diferencias deliberadas con pymedu.cl, por accesibilidad: el texto del
botón principal en modo oscuro va oscuro y no blanco, y el error en las
respuestas se marca en dorado y no en rojo.

---

## 7. Lo que no está resuelto

### Contenido, lo más urgente

- **Las cifras están desactualizadas.** Inflación y tasas de 2025, datos de la
  CMF de junio de 2024, tasa de política monetaria de octubre de 2025, plazos
  de pago a pymes de 2025. Todas aparecen con su fecha, pero hay que
  reemplazarlas.
- **Nada tiene revisión profesional.** Los módulos 1.5, 1.6, 2.4, 2.5 y 3.1
  tocan materia legal, tributaria y contable. **El 2.5 es el de mayor riesgo:**
  cita plazos de declaración del F29 y porcentajes de multa.
- **Las alternativas correctas se dedujeron.** El material no las marcaba en
  ninguno de los 17 módulos.
- **Las explicaciones y los casos son texto nuevo**, escritos para el curso.
- **El módulo 1.6 habla de procesos que en 2025 estaban por venir:** finanzas
  abiertas, registro de deuda consolidada, neobancos. Hay que verificar en qué
  están hoy.

### Producto

- El progreso vive solo en ese navegador. No se sincroniza ni se puede saber
  cómo le fue a alguien.
- No hay medición: no se sabe quién entra ni dónde abandona.
- El feedback se recoge fuera de la plataforma.
- El logo es provisional.

### Técnico

- La publicación es manual.
- No hay pruebas automáticas de interfaz; sí verificación de tipos y validación
  de datos.
- Depende de Google Fonts. Si la tipografía no carga, cae a la del sistema; **si
  los iconos no cargan, se ve su nombre en texto** (`arrow_forward`). Ocurre en
  redes que bloquean Google. Pendiente S3 de la auditoría: esa dependencia
  además entrega la IP del visitante a Google.
- Accesibilidad cuidada pero no auditada con lector de pantalla real.
- El repositorio es público: el código y `docs/` son visibles. Las capturas de
  referencia y los PDF del material quedaron fuera.

---

## 8. Pasos siguientes

### Ahora: la ronda de revisión con el equipo

1. Compartir el link y la [guía de revisión](guia-revision-equipo.md).
2. Juntar las respuestas y clasificarlas: errores, problemas de uso, problemas
   de contenido, ideas nuevas.
3. Decidir qué se cambia antes de seguir. Una idea no queda aprobada solo
   porque alguien la propuso ni porque ya esté implementada.

La pregunta que define todo lo demás es la 9 de la guía: **¿se lo mostrarían
hoy a un cliente?**

### Antes de mostrarlo a usuarios reales

4. **Actualizar las cifras** contra INE, Banco Central y CMF.
5. **Revisar las alternativas correctas y los casos** con alguien de formación
   financiera.
6. **Revisión legal y tributaria** de 1.5, 1.6, 2.4, 2.5 y 3.1. Prioridad: 2.5.
7. **Validar la corrección del módulo 3.5**, donde el contenido se apartó del
   material original.
8. **Poner el logo real.** El lugar ya está reservado en la barra superior.
9. **Quitar el `noindex`** de `index.html` cuando el contenido esté validado.

### Después

10. **La certificación final (módulo 3.6).** Lo único que falta del material:
    15 preguntas de todo el nivel avanzado con un diploma. Antes de construirla
    hay que decidir con el equipo:
    - Qué significa aprobar y qué pasa si no se aprueba.
    - Si se puede reintentar, cuántas veces y si las preguntas cambian.
    - Qué se entrega: un diploma descargable, un correo, algo en el ERP.
    - Si el resultado debe quedar registrado, lo que obligaría a tener cuentas.
11. **Publicación automática.** Correr `gh auth refresh -s workflow` y agregar
    un workflow de GitHub Actions que publique en cada push a `main`.
12. **Medición básica.** Saber en qué pantalla abandona la gente y qué
    preguntas fallan más. Decidir herramienta y cómo se informa a los usuarios.
13. **Resolver los pendientes de auditoría** si se avanza hacia la integración:
    S3 (Google Fonts) y el cifrado de los datos guardados.

### Futuro, solo con evidencia de que hace falta

- Integrar de verdad con el ERP: cuentas, progreso sincronizado y, lo más
  interesante, lecciones que usen los datos reales del negocio del usuario en
  vez de números de ejemplo. **Costo:** pymedu.cl usa Tailwind y este proyecto
  CSS plano; habría que elegir uno. Lo visual ya coincide, así que el trabajo
  es de código.
- Puntos, insignias o rachas. A la referencia le funcionaban, pero este público
  es distinto y puede restarle seriedad. Decidirlo con feedback, no por defecto.
- Contenido en video o descargable.

---

## 9. Decisiones que necesitan un responsable

| Decisión | Quién | Qué bloquea |
|---|---|---|
| ¿Está listo para clientes? | El equipo, tras la revisión | Todo lo demás |
| Cifras actualizadas y respuestas revisadas | Alguien con formación financiera | Mostrarlo a usuarios reales |
| Revisión legal y tributaria | Contador y asesoría legal | Mostrarlo a usuarios reales |
| Formato de la certificación final | Producto | Construir el módulo 3.6 |
| Nombrar o no herramientas por marca | Comercial | El módulo 2.3 |
| Integración real con el ERP | Producto y tecnología | Cuentas, progreso entre dispositivos, stack |
| A quién se entregan las auditorías | Tecnología | Reparar lo del sitio en producción |
| Logo definitivo | Diseño o marca | Nada crítico |

---

## 10. Riesgos a vigilar

- **Que el contenido se publique sin revisión.** Es el mayor riesgo del
  proyecto y no es técnico. Un dato viejo o una afirmación legal inexacta, con
  la marca PymEdu encima, puede llevar a un cliente a una mala decisión con su
  plata.
- **Que el sitio se desactualice sin que nadie lo note.** Publicar es manual:
  es fácil hacer push y creer que ya está en línea.
- **Que las auditorías terminen en el repositorio público.** Están en el
  `.gitignore`, pero alguien podría forzarlas. La del sitio en producción
  describe vulnerabilidades sin corregir.
- **Que el equipo evalúe algo distinto de lo que es.** El link muestra un
  reproductor de cursos, no la plataforma final.
