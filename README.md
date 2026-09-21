# PymEdu — Reproductor de lección

Experiencia de lección interactiva para PymEdu. Usa el sistema visual de la
plataforma principal (pymedu.cl), con modo claro y oscuro.

## Cómo ejecutarlo

Instalar las dependencias una sola vez:

```bash
npm install
```

Levantar el proyecto para trabajar:

```bash
npm run dev
```

Queda disponible en `http://localhost:5173`. La terminal también muestra una
dirección de red para abrirlo desde el teléfono, si está en la misma red wifi.

Generar la versión final, lista para publicar:

```bash
npm run build
```

El resultado queda en `dist/`. Son archivos estáticos: no necesitan servidor
propio y se pueden subir a cualquier hosting.

Para leer el texto de un PDF del material:

```bash
node herramientas/extraer-pdf.mjs "contenido para los cursos/Pym_Edu_nivel1.pdf" nivel1.txt
```

## Qué hay dentro

| Carpeta | Contenido |
|---|---|
| `src/contenido/` | El contenido educativo, en archivos de datos. Es lo que se edita para cambiar una lección. |
| `src/pantallas/` | Un componente por tipo de pantalla. Hay diez. |
| `src/reproductor/` | Navegación, barra de progreso, tema claro y oscuro, y guardado del avance. |
| `src/estilos/variables.css` | Toda la paleta y la tipografía, en los dos temas. Es el único archivo que cambia si cambia la marca. |
| `src/tipos.ts` | La estructura de datos de una lección. |
| `herramientas/` | Extractor de texto de los PDF del material. |
| `docs/` | Análisis de referencias, decisiones y programa de cursos. |
| `contenido para los cursos/` | Los PDF originales entregados por PymEdu. |

## Estado actual

Es una primera versión para revisar con el equipo.

- Está convertido el **Nivel 1 completo**: seis módulos, 55 pantallas, cinco
  calculadoras. Se entra por la lista de módulos. Los niveles 2 y 3 están
  pendientes.
- **Las cifras del material son de 2025.** Se muestran siempre con su fecha a la
  vista, pero hay que actualizarlas antes de publicar. Ver
  [docs/03-programa-y-contenido.md](docs/03-programa-y-contenido.md).
- Las alternativas correctas de la evaluación se dedujeron del contenido, porque
  el PDF no las marcaba. Hay que revisarlas.
- El logo es un marcador de posición.
- El avance se guarda en el navegador del dispositivo. No hay cuentas de usuario.

Las decisiones tomadas y las que siguen abiertas están en
[docs/02-decisiones.md](docs/02-decisiones.md).
