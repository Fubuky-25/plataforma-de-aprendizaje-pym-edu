# Análisis de las referencias visuales — PymEdu

Fecha: 2026-09-20
Fuente: 15 capturas en `Referencia/` (un curso corporativo de inducción en gestión de riesgos, de una empresa que no se nombra aquí).

---

## 1. Qué es realmente la referencia

**Observado directamente:** las capturas no muestran una plataforma educativa completa. Muestran **un solo curso interactivo ejecutándose dentro de un reproductor**, embebido en un LMS externo.

Evidencia:

- La barra gris superior del navegador muestra el nombre del curso y de la empresa, con dos botones: `Show Menu` y `Return to LMS`. Es decir, el curso vive dentro de otra plataforma (probablemente un LMS tipo Moodle/SCORM) y el usuario puede "volver" a ella.
- No aparece en ninguna captura: catálogo de cursos, login, perfil de usuario, buscador, categorías, listado de cursos, panel de progreso general, ni dashboard.
- La navegación es lineal: `← Anterior` / `Siguiente ›` y una fila de ~30 puntos que representa las diapositivas del curso.

**Consecuencia importante para el proyecto:** la referencia cubre únicamente la capa **"dentro de la lección"**. Toda la capa de plataforma (catálogo, cuenta de usuario, progreso entre cursos, retomar donde quedaste) **no está en las referencias** y debe diseñarse desde cero para PymEdu.

Esto no es un problema, pero sí una decisión de alcance que hay que tomar de forma explícita antes de construir. Ver sección 12.

---

## 2. Inventario de pantallas observadas

| # | Slide | % progreso | Tipo |
|---|-------|-----------|------|
| 1 | Palabras de Bienvenida (mensaje del gerente general, foto + cita) | 4 % | Contenido estático |
| 2 | ¿Qué aprenderás en este curso? (6 tarjetas de objetivos) | 13 % | Contenido estático |
| 3 | Introducción a la Gestión de Riesgos (Módulo I) | 17 % | Contenido estático |
| 4 | Definiciones clave (7 tarjetas que revelan definición al hacer clic) | 21 % | Interacción: revelar |
| 5 | Importancia de la Gestión de Riesgos (texto + lista de beneficios) | 25 % | Contenido estático |
| 6 | Simulador de Decisiones Rápidas (6 escenarios con tiempo) | 29 % | Actividad evaluada |
| 7 | Pantalla de resultado del simulador ("¡Agente de Riesgos! 670 pts") | 29 % | Cierre de actividad |
| 8 | Modelo de 3 Líneas de Defensa (acordeón de 3 filas) | 33 % | Interacción: revelar |
| 9 | Conecta el Rol con su Misión (emparejar 3 + 3) | 38 % | Actividad evaluada |
| 10 | El ciclo de gestión (rueda de 6 segmentos clicables) | 40 % | Interacción: revelar |
| 11 | ¿Qué falló y cómo lo prevenimos? (escenario + selección múltiple) | 83 % | Actividad evaluada, con bloqueo |

El porcentaje de la barra coincide siempre con la posición en la fila de puntos: **la barra mide avance por diapositiva, no por logro**.

---

## 3. Sistema visual inferido

### Estructura de pantalla (constante en todas las slides)

1. **Barra superior fija (~55 px):** logo de marca a la izquierda | nombre del curso + barra de progreso + porcentaje | a la derecha: contador de puntos (`⚡ 0 pts`), menú (☰), audio (🔊).
2. **Línea verde de acento** separando el encabezado del contenido.
3. **Lienzo central:** fotografía de contexto real del negocio a pantalla completa, cubierta por una capa azul oscuro muy opaca (~85 %). La foto aporta identidad y calidez sin competir con el texto.
4. **Barra inferior fija:** `← Anterior` a la izquierda, puntos de navegación al centro, `Siguiente ›` a la derecha (botón con degradado verde-azul, el más visible de la pantalla).

### Jerarquía dentro del lienzo

Siempre el mismo orden vertical:

1. **Chip / etiqueta de contexto** en mayúsculas pequeñas con ícono y color según el tipo de slide:
   - `MÓDULO I` (azul)
   - `OBJETIVO DEL CURSO` (verde)
   - `MENSAJE DEL GERENTE GENERAL` (verde)
   - `ACTIVIDAD · MÓDULO I` (verde)
   - `ACTIVIDAD INTERACTIVA` (azul)
   - `GESTIÓN DE MARCA · MÓDULO III` (naranja)
2. **Título grande** (tipografía sans geométrica, peso alto, blanco).
3. **Subtítulo o instrucción de una línea** ("Haz clic en cada tarjeta para ver la definición"). Aparece siempre que hay interacción; es lo que evita que el usuario se quede parado.
4. **Cuerpo:** tarjetas, texto o componente interactivo.
5. **Franja de cierre inferior:** una tarjeta ancha con ícono (💡 / 📋) y una idea de refuerzo o llamado a la acción.

### Tarjetas

- Fondo translúcido oscuro con desenfoque (efecto vidrio).
- Borde superior o izquierdo de color como acento; el color varía por tarjeta (verde, azul, naranja) sin un significado semántico evidente. **Supuesto a validar:** parece decorativo, no codificación de estado.
- Ícono emoji arriba, título en negrita, párrafo corto debajo.
- Rejilla de 3 columnas en escritorio (se observan 3×2 y 2×1 según el contenido).

### Color

Observado: azul marino profundo como base, verde brillante como color de acción y acierto, rojo para rechazo/error, naranja para advertencia o énfasis, blanco para texto. Alto contraste. Es una paleta corporativa heredada de la marca del cliente, **no debe copiarse**: PymEdu necesita su propia paleta con la misma lógica funcional (un color de marca, un color de acción, verde acierto, rojo error, ámbar advertencia).

---

## 4. Patrones de interacción

### Confirmados por las capturas

**a) Revelar al hacer clic (tarjetas).** "Definiciones clave": rejilla de 7 tarjetas; al hacer clic en una, aparece un panel con la definición. La tarjeta activa cambia de estado visual. Reduce el texto en pantalla y convierte la lectura en exploración.

**b) Revelar al hacer clic (acordeón).** "Modelo de 3 Líneas de Defensa": tres filas apiladas; la fila seleccionada muestra su descripción a la derecha y se resalta. Mismo patrón que el anterior con otra presentación.

**c) Revelar al hacer clic (diagrama).** "El ciclo de gestión": rueda de 6 segmentos; al hacer clic en un segmento se muestra su explicación en un panel lateral. Antes de interactuar, el panel muestra una instrucción ("Haz clic en cualquier segmento de la rueda para ver los detalles").

**d) Emparejar pares.** "Conecta el Rol con su Misión": tres responsabilidades a la izquierda, tres roles a la derecha. El usuario hace clic en una y luego en la otra. Pareja correcta → ambas se ponen verdes con ✅ y aparece "¡Correcto!". Hay un texto guía permanente ("Selecciona una tarea de la izquierda…") que se reemplaza por el resultado.

**e) Simulador de decisión con tiempo.** "Simulador de Decisiones Rápidas":

- 6 escenarios consecutivos, contador `Escenario 1/6`.
- Temporizador circular visible (20 s por escenario, se ve en 18 y en 12).
- Puntaje acumulado visible (`★ 150 pts` → `★ 670 pts`).
- Tres vidas (`♥ ♥ ♥`).
- Dos opciones grandes y opuestas: `✕ IGNORAR` (rojo) / `✓ ACTUAR / REPORTAR` (verde).
- Retroalimentación inmediata en panel verde explicando **por qué** la respuesta es correcta, no solo que lo es.
- Pantalla final con trofeo, título ganado ("¡Agente de Riesgos!"), puntaje total y botón `↻ Volver a jugar`.

**f) Selección múltiple sobre un caso real.** "¿Qué falló y cómo lo prevenimos?": se presenta un escenario realista (un tuit de crisis con métricas de viralidad) y se pregunta qué tipo de riesgo representa, con 5 opciones y la instrucción `(Elige 2)`. Un aviso ámbar indica: **"Completa la actividad de esta slide antes de continuar"** → la navegación está bloqueada hasta resolver la actividad.

**g) Gamificación ligera.** Contador global de puntos en la barra superior (`⚡ 0 pts`), puntos por actividad, vidas, títulos al completar. En todas las capturas el contador global marca 0, lo que sugiere que los puntos de actividad **no se estaban acumulando al total** en ese momento — puede ser un defecto de la referencia o una función no terminada.

### Supuestos que requieren validación

- El menú ☰ probablemente abre un índice de módulos/slides para saltar entre secciones. No hay captura que lo confirme.
- El ícono 🔊 sugiere narración por audio o efectos de sonido. No confirmado.
- No se observa si el progreso se guarda al salir y volver. El botón `Return to LMS` sugiere que la persistencia la maneja el LMS anfitrión, no el curso.
- No se observa evaluación final, certificado, ni nota de aprobación.
- No se observa comportamiento en móvil. El diseño visto es claramente de escritorio y de alta densidad horizontal.

---

## 5. Qué hace buena a esta referencia

Vale la pena nombrar el mecanismo, no el adorno:

1. **Una idea por pantalla.** Cada slide tiene un solo propósito y cabe sin desplazamiento. Reduce carga cognitiva.
2. **Instrucción explícita siempre que hay interacción.** Nunca se asume que el usuario adivina qué hacer.
3. **Alternancia lectura / acción.** Dos o tres slides de contenido y luego una actividad. Evita el muro de texto.
4. **Retroalimentación que enseña.** El acierto se explica; el error también. La actividad es contenido, no examen.
5. **Contenido situado en el negocio real.** Los escenarios son situaciones concretas del rubro (olor a combustible, caída del POS en hora punta, crisis en redes sociales), no ejemplos abstractos.
6. **Un solo siguiente paso visible.** El botón `Siguiente` es el elemento más llamativo de la pantalla en todo momento.
7. **Progreso siempre a la vista** en dos formatos: barra con porcentaje (cuánto falta) y puntos (dónde estoy).

---

## 6. Qué adaptar a PymEdu

| Elemento de la referencia | Decisión para PymEdu | Motivo |
|---|---|---|
| Lección como secuencia de pantallas | **Adoptar** | Es el núcleo de lo que gustó al equipo y funciona bien para usuarios con poca experiencia digital. |
| Instrucción de una línea en cada interacción | **Adoptar** | Barato y con alto impacto en usabilidad. |
| Retroalimentación que explica el porqué | **Adoptar y reforzar** | En temas tributarios y legales el "por qué" es el aprendizaje real. |
| Escenarios de negocio reales | **Adoptar, con casos de PYME chilena** | Boleta vs factura, flujo de caja de un mes malo, inicio de actividades en el SII, contrato de un primer trabajador. |
| Tarjetas de revelar, acordeón, emparejar, selección múltiple | **Adoptar** (4 tipos de actividad) | Cubren casi todo lo observado con poco código. |
| Actividad bloqueante antes de avanzar | **Adaptar con cuidado** | Útil para garantizar aprendizaje, frustrante si es demasiado estricto. Propuesta: bloquear solo en la actividad de cierre de módulo, no en cada slide. |
| Simulador con temporizador de 20 s | **Aplazar a 2ª etapa** | Es el componente más caro de construir y la presión de tiempo puede excluir justamente al usuario con menos confianza digital. Ver riesgos. |
| Puntos, vidas, trofeos | **Reducir al mínimo en el MVP** | El público objetivo es un adulto dueño de su negocio, no un empleado cumpliendo una inducción obligatoria. Su motivación es aplicar algo hoy, no ganar puntos. Ver riesgos. |
| Foto de fondo a pantalla completa con velo oscuro | **Adaptar, no copiar** | Aporta identidad, pero un tema oscuro permanente perjudica la lectura larga. Propuesta: fondo claro para el contenido y uso de fotografía solo en portadas de curso y módulo. |
| Barra superior con logo del cliente y "Return to LMS" | **Descartar** | PymEdu es la plataforma, no un curso alojado en otra. |
| Paleta azul/verde de la marca de referencia | **Descartar** | Identidad ajena. |
| Mensaje del gerente general | **Descartar como tal** | Tiene sentido en una inducción corporativa obligatoria. En PymEdu el equivalente útil sería un video o texto corto de "para quién es este curso y qué vas a lograr". |

---

## 7. Lo que la referencia no resuelve y PymEdu sí necesita

Estas piezas no aparecen en ninguna captura y hay que diseñarlas:

- Cómo se descubre un curso (catálogo, categorías, búsqueda).
- Cómo se retoma el aprendizaje después de días sin entrar.
- Cómo se ve el progreso a través de varios cursos.
- Qué pasa la segunda vez que el usuario entra a la plataforma.
- Cómo se aplica lo aprendido al negocio propio (la referencia enseña a reconocer, no a hacer).

El último punto es la mayor oportunidad de diferenciación. El curso de referencia busca que el empleado **reconozca** un riesgo. PymEdu busca que el dueño de una PYME **haga algo** en su negocio: calcular su punto de equilibrio, separar sus finanzas personales de las del negocio, decidir su régimen tributario. Eso sugiere un tipo de actividad que la referencia no tiene: una **herramienta aplicada** donde el usuario ingresa datos de su propio negocio y obtiene un resultado. Propuesta para evaluar, no para construir aún.

---

## 8. Propuesta de experiencia para PymEdu

### Estructura de contenido (3 niveles, no más)

```
Área temática  (Finanzas · Gestión · Legal y tributario · Digitalización)
└── Curso       (4 a 6 lecciones, 40–60 min en total)
    └── Lección (5 a 9 pantallas, 6–10 min)
        └── Pantalla (contenido o actividad)
```

Se descarta un nivel intermedio de "módulo" dentro del curso: con 4 a 6 lecciones no aporta y agrega profundidad de navegación innecesaria.

### Tipos de pantalla dentro de una lección

1. **Portada de lección** — qué vas a aprender y en cuánto tiempo.
2. **Contenido** — una idea, texto corto, apoyo visual.
3. **Tarjetas de conceptos** — revelar al hacer clic.
4. **Comparación** — dos opciones lado a lado (ej. boleta vs factura).
5. **Caso de PYME** — situación real + pregunta de selección múltiple + explicación.
6. **Emparejar** — relacionar conceptos con ejemplos.
7. **Aplícalo a tu negocio** — una pregunta abierta o mini herramienta, sin corrección automática.
8. **Cierre de lección** — resumen en 3 puntos y un paso concreto para hacer esta semana.

### Recorrido principal del usuario

1. Entra a la plataforma → **Inicio**.
2. Si es la primera vez: qué es PymEdu, elige área de interés, ve cursos recomendados.
3. Si ya empezó algo: tarjeta grande "Continuar donde quedaste" con el nombre de la lección y el progreso del curso.
4. Elige un curso → **Detalle del curso**: para quién es, qué logra, lista de lecciones con estado (completada / en curso / pendiente), botón principal `Comenzar` o `Continuar`.
5. Entra a una lección → **Reproductor de lección** (el patrón de la referencia): avanza pantalla por pantalla con progreso visible.
6. Termina la lección → **Pantalla de cierre**: resumen, paso a aplicar, y el siguiente paso obvio (`Siguiente lección`) o vuelta al curso.
7. Termina el curso → resumen de lo aprendido y recomendación del siguiente curso.

### Progreso

- Por lección: completada o no.
- Por curso: lecciones completadas / total, como barra.
- En el reproductor: pantalla actual / total, como barra y puntos, igual que la referencia.
- Sin puntos ni rachas en el MVP.

---

## 9. Alcance propuesto

### MVP (lo que se presenta al equipo)

- Inicio con "continuar donde quedaste" y cursos recomendados.
- Catálogo con 4 áreas temáticas y filtro por área.
- Detalle de curso con lista de lecciones y estado.
- Reproductor de lección completo con navegación anterior/siguiente, barra de progreso e índice.
- 4 tipos de pantalla de contenido y 3 tipos de actividad: tarjetas de revelar, selección múltiple con explicación, emparejar.
- Pantalla de cierre de lección con resumen y paso aplicable.
- Progreso persistente por lección y por curso.
- 1 curso completo con contenido real + 5 a 7 cursos de muestra en el catálogo con contenido parcial.
- Diseño responsive funcional en móvil.

### Segunda etapa

- Actividad de "aplícalo a tu negocio" con guardado de respuestas.
- Simulador de decisiones con temporizador.
- Diagrama interactivo (rueda / proceso).
- Evaluación de cierre de curso y constancia de finalización.
- Buscador.
- Cuentas de usuario reales con correo y contraseña.

### Futuro (evaluar solo con feedback de usuarios reales)

- Puntos, rachas, insignias.
- Rutas de aprendizaje recomendadas según el tipo de negocio.
- Plantillas y herramientas descargables.
- Certificados.
- Panel para creadores de contenido.
- Comunidad, comentarios, preguntas.

---

## 10. Datos a almacenar (mínimo del MVP)

- **Usuario:** identificador, nombre, área de interés, fecha de registro.
- **Curso:** identificador, área, título, descripción, para quién es, duración estimada, orden.
- **Lección:** identificador, curso, título, orden, duración estimada.
- **Pantalla:** identificador, lección, orden, tipo, contenido (estructura variable según el tipo).
- **Progreso:** usuario + lección → estado, última pantalla vista, fecha de actualización.
- **Respuestas de actividad:** usuario + pantalla → respuesta, si fue correcta, intentos. (Necesario solo si se quiere mostrar resultados; puede omitirse en el MVP si las actividades no se califican.)

---

## 11. Riesgos identificados

**Riesgo 1 — La gamificación puede restar credibilidad.**
El público de PymEdu es un adulto que le está quitando tiempo a su negocio. Puntos, vidas y trofeos funcionan en una inducción corporativa obligatoria, donde hay que compensar la falta de motivación propia. Aquí la motivación ya existe y es distinta: resolver un problema concreto. Un sistema de puntos visible puede hacer que la plataforma parezca un juego y no una fuente confiable en temas tributarios y legales. Propuesta: dejarlo fuera del MVP y decidirlo con feedback real.

**Riesgo 2 — El temporizador excluye.**
La presión de 20 segundos penaliza exactamente al usuario con menos confianza digital o menos conocimiento previo, que es parte central del público objetivo. Si se implementa, debe poder desactivarse.

**Riesgo 3 — Tema oscuro para lectura larga.**
La referencia es un curso de ~30 pantallas que se hace de una vez. PymEdu aspira a sesiones repetidas de lectura. Un fondo oscuro con foto detrás del texto complica la lectura sostenida y perjudica a usuarios con baja visión.

**Riesgo 4 — Bloquear el avance en cada actividad frustra.**
En una inducción obligatoria el usuario no puede abandonar. En PymEdu sí puede cerrar la pestaña. El bloqueo debe usarse con moderación.

**Riesgo 5 — El contenido es el cuello de botella real, no el código.**
Un curso bien hecho de 5 lecciones son entre 40 y 60 pantallas de texto redactado, revisado y correcto en materia legal y tributaria. Construir la plataforma es más rápido que llenarla. Si no hay contenido disponible, el MVP se demostrará con contenido de ejemplo y eso debe decirse con claridad al equipo.

**Riesgo 6 — Precisión en temas legales y tributarios.**
Información incorrecta sobre el SII, regímenes tributarios o normativa laboral genera daño real y responsabilidad. Todo contenido de estas áreas necesita revisión de alguien competente antes de publicarse, y la plataforma debe mostrar la fecha de actualización de cada curso.

---

## 12. Decisiones pendientes antes de construir

1. **Alcance:** ¿plataforma con catálogo y progreso, o solo el reproductor de lección (una única experiencia de curso)?
2. **Cuentas de usuario:** ¿el MVP necesita registro real, o basta con un perfil local en el navegador para la demostración?
3. **Contenido:** ¿existe material educativo ya escrito, o se redacta contenido de ejemplo para la demostración?
4. **Stack técnico:** pendiente de decisión conjunta (ver documento de decisiones técnicas cuando se defina).
5. **Identidad visual:** ¿existen logo, colores o tipografía definidos para PymEdu?
6. **Dispositivo principal:** ¿el equipo evaluará el MVP en escritorio, o el usuario final entra mayoritariamente desde el teléfono?
7. **Gamificación:** ¿el equipo la considera esencial o fue el efecto visual lo que gustó?
