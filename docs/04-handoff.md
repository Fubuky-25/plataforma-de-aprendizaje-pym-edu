# Handoff: plataforma de aprendizaje PymEdu

Estado al 2026-10-16 y pasos para seguir avanzando.

| | |
|---|---|
| **Sitio de prueba** | https://fubuky-25.github.io/plataforma-de-aprendizaje-pym-edu/ |
| **Repositorio** | https://github.com/Fubuky-25/plataforma-de-aprendizaje-pym-edu (público) |
| **Guía para el equipo** | [guia-revision-equipo.md](guia-revision-equipo.md) |

---

## 1. En qué punto estamos

Existe una **versión de prueba publicada** con los niveles 1 y 2 completos del programa de PymEdu, lista para que el equipo la revise y opine.

Es un reproductor de lecciones interactivas, no la plataforma completa. PymEdu ya existe como ERP en pymedu.cl; este proyecto es su componente educativo. Se decidió que se integre **mediante un enlace desde el ERP** hacia este sitio, que sigue siendo una aplicación aparte; integrarlo dentro del ERP mismo queda como posibilidad futura.

### Lo que funciona

- **Niveles 1 y 2 completos:** doce módulos, 109 pantallas, unas 2 horas y 40 minutos de contenido, con un selector para cambiar de nivel.
- **Diez tipos de pantalla:** portada, lectura, tarjetas que se revelan, comparación, caso de negocio, emparejar, calculadora, aplícalo a tu negocio, evaluación y cierre.
- **Nueve calculadoras:** inflación, regla 50/30/20, pago mínimo de tarjeta, meta de ahorro, carga financiera, días de caja, gasto anualizado, IVA del mes y cuota de crédito. Las fórmulas se revisaron a mano una por una.
- **Lista de módulos** con el estado de cada uno y acceso directo al siguiente al terminar.
- **Modo claro y oscuro** con el sistema visual de pymedu.cl: Manrope, Material Symbols y los mismos colores.
- **Progreso guardado** en el navegador: al volver, cada módulo sigue donde quedó.
- **Funciona en teléfono.** Se revisó a 375 px de ancho.
- **Publicado** en GitHub Pages, con aviso para que los buscadores no lo indexen.

### Hallazgos de auditoría ya corregidos

El 2026-09-28 se hizo una auditoría técnica del reproductor. Se corrigió lo que afectaba directamente a la escritura de los niveles nuevos:

| Hallazgo | Qué se hizo |
|---|---|
| Contraste insuficiente en modo claro (A1, A2) | Se oscureció el dorado de texto hasta superar el mínimo legible. Afectaba a la etiqueta de sección y al aviso de respuesta incorrecta, presentes en casi todas las pantallas. |
| El validador no detectaba ids repetidos dentro de una pantalla (L2) | Ahora los revisa en preguntas, opciones, pares, tarjetas y campos, y además comprueba que no haya dos lecciones con el mismo id. |
| Las flechas del teclado saltaban de pantalla durante una actividad (L1) | Ahora solo navegan cuando no hay nada enfocado. |
| Sin pantalla de recuperación ante un error (F2) | Se agregó una: en vez de quedar en blanco, ofrece volver a los módulos. |
| "Responder de nuevo" no guardaba el reinicio (F4) | Ahora sí: al salir y volver no reaparece la respuesta anterior. |
| Los simuladores daban veredictos extremos con campos vacíos (F6) | Ahora muestran "Falta un dato" en vez de un diagnóstico. |
| Sin límites en los campos numéricos (L4) | Se acotaron montos y tasas. |
| El título de la pestaña nunca cambiaba (F5) | Ahora muestra el módulo abierto. |
| Accesibilidad del foco y de las ayudas de campo (A3, A4, A6) | El foco va al título al cambiar de pantalla, los ítems bloqueados del índice explican por qué, y las ayudas de los campos quedaron asociadas a su casilla. |

**Pendientes de esa auditoría:** F1 (el botón "atrás" del navegador sale de la aplicación), F3 (los puntos de navegación se ocultan en móvil) y S1 a S3, que son los que hay que resolver antes de cualquier integración real con el ERP.

**Sobre el hallazgo S5:** los casos de negocio de todos los módulos son ficticios, inventados para el curso. No se basan en personas reales.

### Lo que se verificó

- TypeScript compila sin errores.
- `npm run validar` revisa los datos de las seis lecciones y no encuentra problemas.
- En el sitio publicado: carga sin errores, abre los módulos, avanza entre pantallas y los iconos y la tipografía cargan bien.
- En local: se recorrieron el paso de la lista a un módulo, de un módulo al siguiente y la vuelta a la lista, con los estados actualizándose. Las cinco calculadoras dan resultados correctos.

**Lo que no se recorrió pantalla por pantalla:** las actividades de los módulos 1.2 a 1.6. Usan los mismos componentes ya probados en el 1.1 y los datos pasan la validación, pero nadie las ha completado de principio a fin. La ronda de revisión del equipo sirve también para eso.

---

## 2. Cómo se trabaja en el proyecto

Requiere Node.js. Desde la carpeta del proyecto:

```bash
npm install
```

```bash
npm run dev
```

| Comando | Qué hace |
|---|---|
| `npm run dev` | Levanta el proyecto en `http://localhost:5173` para trabajar. |
| `npm run validar` | Revisa los datos de las lecciones: alternativas correctas, casos, comparaciones. |
| `npm run build` | Compila y verifica tipos. |
| `npm run publicar` | Compila y sube el sitio a GitHub Pages. |

### Publicar un cambio

**Hacer push a `main` no actualiza el sitio.** Guarda el código, pero el sitio publicado solo cambia al correr `npm run publicar`. Es lo primero que confunde a quien llega nuevo.

1. Hacer el cambio.
2. Correr `npm run validar`.
3. Hacer commit y push a `main`.
4. Correr `npm run publicar`.
5. Esperar uno o dos minutos y revisar el link.

El script sube a la rama `gh-pages` solo el sitio compilado, reemplazándola entera. Esa rama no se edita a mano.

### Cómo está armado

Para quien retome, en este orden:

1. `CLAUDE.md`: las reglas de trabajo del proyecto.
2. `docs/02-decisiones.md`: qué se decidió y por qué.
3. `docs/03-programa-y-contenido.md`: el programa de 18 módulos, qué está convertido y qué se cambió del material.
4. Este documento.

La idea central de la arquitectura es que **el contenido vive en datos, no en código**. Cada lección es un archivo en `src/contenido/` que describe sus pantallas. El reproductor las lee y muestra el componente que corresponde a cada tipo. Cambiar un texto no requiere tocar ningún componente, y si algún día se cambia de tecnología, el contenido se conserva.

| Si quieres... | Se hace en |
|---|---|
| Cambiar un texto de una lección | `src/contenido/n1-m*.ts` |
| Agregar una lección al nivel | Crear el archivo en `src/contenido/` y sumarlo en `src/contenido/nivel1.ts` |
| Cambiar colores o tipografía | `src/estilos/variables.css`, en un solo lugar para los dos temas |
| Agregar un tipo de pantalla | `src/tipos.ts`, un componente en `src/pantallas/` y un caso en `src/pantallas/VistaPantalla.tsx` |
| Agregar una calculadora | Un caso en `src/tipos.ts` y su función en `src/pantallas/simuladores/Calculadoras.tsx` |

**Stack:** React, TypeScript y CSS plano, compilado con Vite. Cuatro dependencias. Los lenguajes son HTML, CSS y JavaScript; se evitó a propósito sumar herramientas con vocabulario propio, como Tailwind.

---

## 3. Lo que no está resuelto

Límites conocidos. Nada de esto impide la ronda de revisión, pero todo importa antes de mostrarlo a clientes.

### Contenido

- **Cifras desactualizadas.** Inflación y tasas de 2025, datos de deuda de la CMF de junio de 2024. Cada cifra aparece con su fecha, pero hay que reemplazarlas. El detalle está en `docs/03`, sección 3.
- **Respuestas deducidas.** El material no marcaba las alternativas correctas de las evaluaciones, así que se dedujeron del contenido.
- **Texto nuevo.** Las explicaciones de cada pregunta y los tres casos de negocio (Rodrigo, Patricia y Camila) no venían en el material.
- **Cambios al material.** Hay cinco cambios deliberados, listados en `docs/03`, sección 2.
- **Módulo 1.6.** Menciona procesos que en 2025 estaban por venir: finanzas abiertas, registro de deuda consolidada y neobancos. Hay que verificar en qué están hoy.
- **Revisión legal.** Nadie competente ha revisado lo legal: el derecho a retracto (1.6) y el procedimiento de insolvencia (1.5).

### Producto

- **El progreso solo vive en el navegador.** Se pierde al cambiar de dispositivo o al borrar datos, y no hay forma de saber cómo le fue a cada persona.
- **No hay medición.** No sabemos quién entra, dónde abandona ni qué pregunta falla más.
- **El feedback no se recoge dentro de la plataforma.** Llega por fuera, respondiendo a quien compartió el link.
- **El logo es provisional.** Es un mosaico con ícono que imita el del sitio.

### Técnico

- **La publicación es manual.** Automatizarla con GitHub Actions requiere un permiso de GitHub que la sesión actual no tiene. Ver el paso 10.
- **No hay pruebas automáticas de la interfaz.** Existen la verificación de tipos y la validación de datos.
- **Depende de Google Fonts.** Si la tipografía no carga, cae a la del sistema y todo sigue funcionando. **Si los iconos no cargan, aparece su nombre en texto** (por ejemplo, `arrow_forward`). Pasa en redes que bloquean Google.
- **La accesibilidad está cuidada, pero no auditada.** Hay foco visible, se respeta el movimiento reducido y se revisó el contraste de los botones. No se probó con un lector de pantalla.
- **El repositorio es público.** El código y los documentos de `docs/` son visibles para cualquiera. Las capturas de referencia y los PDF del material quedaron fuera.

---

## 4. Pasos siguientes

En orden. Cada bloque depende en parte del anterior.

### Ahora: la ronda de revisión

1. **Compartir el link y la guía con el equipo.** El link va al sitio; la guía está en `docs/guia-revision-equipo.md` y también se puede leer desde GitHub.
2. **Juntar las respuestas y clasificarlas** en cuatro grupos: errores, problemas de uso, problemas de contenido e ideas nuevas.
3. **Decidir qué se cambia antes de seguir.** Según `CLAUDE.md`, una idea no queda aprobada solo porque alguien la propuso ni porque ya esté hecha.

La pregunta más importante de esta ronda es la 9 de la guía: **¿se lo mostrarían hoy a un cliente?** La respuesta define si el siguiente paso es pulir el Nivel 1 o avanzar a los niveles 2 y 3.

### Antes de mostrarlo a usuarios reales

4. **Actualizar las cifras** contra el INE, el Banco Central y la CMF. Están todas en `src/contenido/`, cada una con su fecha al lado.
5. **Revisar las respuestas de las evaluaciones y los tres casos.** Lo puede hacer alguien del equipo con formación financiera.
6. **Pedir revisión legal de los módulos 1.5 y 1.6** a alguien competente.
7. **Poner el logo real.** Basta con entregar el archivo: el lugar ya está reservado en la barra superior.
8. **Quitar el aviso para buscadores** (`noindex` en `index.html`) cuando el contenido esté validado.

### Segunda etapa

9. **Nivel 3.** Seis módulos: contabilidad básica, flujo proyectado y punto de equilibrio, VAN y TIR, créditos y leasing, inversión inicial y retorno, y una certificación final de 15 preguntas. Hay dos cosas nuevas:
   - **Calculadoras:** punto de equilibrio, flujo de caja proyectado, y VAN y TIR. Se agregan igual que las nueve existentes.
   - **La certificación final** es un formato distinto de los quiz actuales: 15 preguntas de varios módulos con un diploma al final. Hay que decidir si se implementa y qué significa "aprobar".
10. **Publicación automática.** Correr `gh auth refresh -s workflow` para dar el permiso que falta y agregar un workflow de GitHub Actions que publique en cada push a `main`. Elimina el paso manual y el riesgo de olvidarlo.
11. **Medición básica.** Saber en qué pantalla abandona la gente y qué preguntas fallan más. Antes hay que decidir la herramienta y cómo se informa a los usuarios.

### La decisión estratégica pendiente

12. **Cómo se relaciona con el ERP.** Decidido el 2026-10-16: se integra **mediante un enlace** desde pymedu.cl hacia este sitio, que sigue siendo una aplicación aparte. Queda abierta la posibilidad de integrarlo de verdad más adelante.
    - **Integrarlo** resuelve las cuentas y el progreso entre dispositivos, y abre la posibilidad más interesante del proyecto: que las lecciones usen los datos reales del negocio del usuario, por ejemplo calcular su carga financiera con sus propios números del ERP en vez de números inventados.
    - **Costo de integrarlo:** pymedu.cl está hecho con Tailwind y este proyecto con CSS plano. Integrarlos obliga a elegir uno de los dos. Los colores, la tipografía y los componentes ya coinciden visualmente, así que el trabajo es de código, no de diseño.

### Futuro (solo con evidencia de que hace falta)

- Cuentas propias y progreso sincronizado entre dispositivos, si no se integra con el ERP.
- Certificado al completar un nivel. El módulo 3.6 del material lo propone.
- Puntos, insignias o rachas. A la referencia original le funcionaban, pero para este público pueden restar seriedad. Hay que decidirlo con lo que diga el equipo, no por defecto.
- Contenido en video o descargable.

---

## 5. Decisiones que necesitan un responsable

| Decisión | Quién podría tomarla | Qué bloquea |
|---|---|---|
| ¿Está listo para clientes? | El equipo, tras la revisión | Todo lo que va después del paso 3 |
| Cifras actualizadas y respuestas revisadas | Alguien con formación financiera | Mostrarlo a usuarios reales |
| Revisión legal de 1.5 y 1.6 | Asesoría legal | Mostrarlo a usuarios reales |
| Revisión tributaria de los niveles 2 y 3 | Contador o asesor tributario | Publicar los niveles 2 y 3 |
| Integración con el ERP | Producto y tecnología de PymEdu | Cuentas, progreso entre dispositivos, stack |
| Logo definitivo | Diseño o marca | Nada crítico |

---

## 6. Riesgos a vigilar

- **Que el contenido se publique sin revisión.** El mayor riesgo del proyecto no es técnico. Un dato financiero viejo o una afirmación legal inexacta en un curso con la marca PymEdu puede llevar a un cliente a una mala decisión con su plata.
- **Que el sitio se desactualice sin que nadie lo note.** Como publicar es manual, es fácil hacer push de un cambio y creer que ya está en línea. Se resuelve con el paso 10.
- **Que el equipo evalúe algo distinto de lo que es.** El link muestra un reproductor de cursos, no la plataforma final. La guía lo aclara, pero vale repetirlo al compartirlo.
