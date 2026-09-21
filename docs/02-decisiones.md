# Decisiones del proyecto — PymEdu

Registro de las decisiones tomadas y de las que siguen abiertas.
Última actualización: 2026-09-21.

---

## Decisiones confirmadas

### 1. Alcance del MVP: solo el reproductor de lección

Se construye la experiencia de una lección interactiva, no la plataforma con catálogo.

**Consecuencia aceptada:** el equipo no podrá evaluar descubrimiento de cursos, progreso entre cursos ni qué ve el usuario al volver una semana después. Esas piezas quedan sin validar en esta ronda de feedback.

**Mitigación aplicada:** el contenido del curso está en archivos de datos separados del código, y el reproductor recibe la lección como un parámetro. Si más adelante se agrega catálogo, el reproductor se reutiliza sin reescribirlo.

### 2. Stack: React + TypeScript + CSS plano, con Vite

Lenguajes en el proyecto: HTML, CSS y JavaScript. No se agrega ningún lenguaje ni vocabulario adicional.

Dependencias: `react`, `react-dom`, `typescript`, `vite` (más `@vitejs/plugin-react` y los tipos).

**Descartado y por qué:**

- **Tailwind CSS.** Introduce un vocabulario propio de clases acoplado a su herramienta; migrar después obliga a reescribir el marcado. Contradice el criterio de mantener pocos ejes.
- **JavaScript puro sin framework.** Cero dependencias, pero el reproductor tiene ocho tipos de pantalla, estado de actividades, bloqueo de avance y progreso persistente. Sin framework habría que escribir a mano un sistema equivalente que solo conoce quien lo escribió, lo que dificulta la migración en vez de facilitarla.
- **Next.js.** No hay servidor, ni SEO, ni rutas complejas.

**Decisión de fondo:** lo que protege una migración futura no es el framework, es que el contenido educativo viva en datos y no en el código. Eso está aplicado.

### 3. Sin cuentas de usuario ni backend

El progreso se guarda en `localStorage` del navegador. Funciona para la demostración y no requiere servidor.

**Limitación honesta:** el progreso vive en ese dispositivo y ese navegador. Si el usuario entra desde otro teléfono, empieza de cero. Las cuentas reales quedan para la segunda etapa.

### 4. Dispositivos: escritorio para el equipo, móvil para el usuario final

El diseño se hizo para escritorio y se verificó en 375 px de ancho. La comparación y el emparejamiento se reorganizan en móvil, no se encogen.

### 5. Identidad visual: tomada de la plataforma principal

El sistema visual viene de **pymedu.cl**, no de la referencia corporativa ni de una propuesta inventada. Se leyeron directamente los tokens de los dos temas del sitio.

- **Tipografía:** Manrope, la misma del sitio. Títulos en 800, botones en 700, cuerpo en 400.
- **Iconos:** Material Symbols Outlined, los mismos del sitio.
- **Color:** el esquema de tokens de Material 3 que ya usa la plataforma, con sus dos temas. En claro, verde bosque como color principal sobre superficie casi blanca. En oscuro, azul apagado sobre superficie casi negra. El dorado es el hilo común entre ambos.
- **Componentes:** tarjetas de 16 px de radio con 24 px de aire y borde muy tenue, botones tipo píldora, rótulos de sección en mayúsculas con seguimiento amplio. Todo tomado del sitio.
- **Modo claro y oscuro:** el reproductor respeta la preferencia del sistema, permite cambiarlo con el botón de la barra superior y recuerda la elección. El tema se fija antes del primer pintado para que no haya parpadeo.

Todos los colores están en `src/estilos/variables.css`. Es el único archivo que hay que tocar si la marca cambia.

**Dos diferencias deliberadas con el sitio:**

1. **Texto oscuro sobre el botón principal en modo oscuro.** El sitio usa texto blanco sobre el azul `#5a9ab5`, lo que da un contraste cercano a 3:1 e incumple el mínimo para texto normal. En una página de marketing se nota poco; en un curso que se lee entero, sí. El botón mantiene el mismo azul, con texto oscuro.
2. **El dorado de marca reemplaza al rojo para señalar errores.** Una respuesta incorrecta se marca en dorado, no en rojo. El usuario es un adulto aprendiendo por decisión propia; el rojo de error se reserva para fallos reales del sistema.

**Decisiones de diseño que se apartan de la referencia corporativa, a propósito:**

| Referencia | PymEdu | Motivo |
|---|---|---|
| Fondo oscuro con foto a pantalla completa | Los dos temas de la plataforma, sin foto detrás del texto | Una foto bajo el texto complica la lectura sostenida, y PymEdu apunta a sesiones repetidas. |
| Rojo para la opción incorrecta | Dorado de marca | Castigar con rojo hace abandonar a quien está aprendiendo por decisión propia. |
| Puntos, vidas y trofeos | Nada de eso | Ver riesgo 1 del análisis. Queda para evaluar con feedback real. |
| Temporizador de 20 segundos | No se implementa | Penaliza al usuario con menos confianza digital, que es público central. |
| Porcentaje de avance | "Pantalla 3 de 10" | Un conteo es más concreto que un porcentaje para este público. La barra se mantiene. |

### 6. El bloqueo de avance se usa con moderación

Solo tres tipos de pantalla frenan el avance: el caso, el emparejamiento y la evaluación. El caso y la evaluación se dan por resueltos al responder, se acierte o no, porque la explicación es el aprendizaje y bloquear a quien se equivocó lo hace cerrar la pestaña.

---

### 7. El programa es de tres niveles y dieciocho módulos

El material entregado cubre finanzas personales, gestión del emprendimiento y decisiones avanzadas. Está convertido el **Nivel 1 completo**, seis módulos. Los niveles 2 y 3 quedan para después, por decisión del 2026-09-21.

Convertir un nivel entero obligó a sumar una lista de módulos. Es deliberadamente mínima: un solo nivel, el estado de cada módulo y el acceso al siguiente. No hay búsqueda, categorías ni cuentas.

El detalle del programa, las adaptaciones hechas, las correcciones al material y cómo convertir el resto están en [03-programa-y-contenido.md](03-programa-y-contenido.md).

### 8. Publicación: repositorio público y GitHub Pages

Decidido el 2026-09-21 para la ronda de prueba con el equipo. Se eligió sobre un repositorio privado con Vercel por mantener todo en GitHub.

- **Repositorio:** https://github.com/Fubuky-25/plataforma-de-aprendizaje-pym-edu
- **Sitio:** https://fubuky-25.github.io/plataforma-de-aprendizaje-pym-edu/
- **Qué queda fuera:** las capturas de la referencia y los PDF del material. En los documentos se quitó el nombre de la empresa del curso de referencia.
- **Buscadores:** el sitio pide no ser indexado mientras el contenido no esté validado.
- **Publicación manual** con `npm run publicar`. GitHub Actions requiere un permiso que la sesión actual de GitHub no tiene.

---

## Decisiones pendientes

1. **Actualizar las cifras.** El material trae datos de 2025 y estamos en septiembre de 2026: IPC, tasas de depósito e indicadores de deuda. Por ahora cada cifra se muestra con su fecha explícita, pero hay que reemplazarlas. Es trabajo de contenido, no de código.
2. **Revisión tributaria y legal.** Los niveles 2 y 3 tocan IVA, Formulario 29, formalización y contabilidad. Falta definir quién lo revisa antes de publicarlo.
3. **Revisión del contenido del Nivel 1.** Las alternativas correctas del quiz se dedujeron en los seis módulos, los casos prácticos son nuevos y hay cinco cambios deliberados respecto del material. El módulo 1.6 es el que más revisión necesita. Detalle en la sección 2 del documento de programa.
4. **Logo real.** El mosaico con ícono de maletín es un marcador de posición que imita al del sitio. Falta el archivo del logo.
5. **Fórmulas del simulador.** Existen cinco, las del Nivel 1. Los niveles 2 y 3 van a pedir punto de equilibrio, flujo proyectado y VAN o TIR.
6. **Relación con el ERP.** Si esto queda como un sitio aparte o se integra en pymedu.cl, con el mismo login. Es la decisión que más afecta los pasos siguientes; ver el handoff.

---

## Estructura del proyecto

```
src/
  tipos.ts                  Estructura de datos de una lección
  contenido/                Contenido educativo (datos, sin código) y armado del nivel
  nivel/                    Lista de módulos del nivel
  reproductor/              Navegación, progreso, tema y barras
  pantallas/                Un componente por tipo de pantalla
    simuladores/            Las calculadoras
  estilos/                  variables.css contiene toda la paleta
herramientas/               Extractor de texto de PDF y script de publicación
docs/                       Análisis, decisiones, programa de cursos y handoff
```

Quedan fuera del repositorio, porque es público: `Referencia/` (capturas del curso usado como referencia) y `contenido para los cursos/` (los PDF originales). Ambas carpetas existen solo en el computador de trabajo.

Para agregar un tipo de pantalla nuevo: se suma al tipo `Pantalla` en `src/tipos.ts`, se crea su componente en `src/pantallas/` y se agrega un caso en `src/pantallas/VistaPantalla.tsx`. TypeScript avisa si falta alguno de los tres pasos.
