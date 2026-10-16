# Plataforma de aprendizaje PymEdu

Lecciones interactivas de educación financiera para emprendedores y pequeñas
empresas. Usa el sistema visual de la plataforma principal
([pymedu.cl](https://www.pymedu.cl)), con modo claro y oscuro.

**Versión de prueba:** https://fubuky-25.github.io/plataforma-de-aprendizaje-pym-edu/

Para revisarla, hay una [guía para el equipo](docs/guia-revision-equipo.md).
El estado del proyecto y los pasos siguientes están en el
[handoff](docs/04-handoff.md).

## Estado actual

Es una versión de prueba para revisión interna.

- Están los **niveles 1 y 2 completos**: doce módulos, 109 pantallas y nueve
  calculadoras. Se entra por la lista de módulos, con un selector de nivel. El
  Nivel 3 está pendiente.
- **Las cifras son de 2024 y 2025.** Se muestran siempre con su fecha, pero hay
  que actualizarlas antes de mostrarlo a clientes.
- **Los módulos de IVA, formalización y financiamiento no tienen revisión
  profesional.** No deberían mostrarse a un usuario real hasta que la tengan.
- Las alternativas correctas de las evaluaciones se dedujeron del contenido,
  porque el material original no las marcaba. Hay que revisarlas.
- El logo es provisional.
- El avance se guarda en el navegador de cada persona. No hay cuentas.

## Cómo trabajar en el proyecto

Requiere Node.js. Instalar las dependencias una sola vez:

```bash
npm install
```

Levantar el proyecto para trabajar, en `http://localhost:5173`:

```bash
npm run dev
```

Revisar los datos de las lecciones antes de publicar:

```bash
npm run validar
```

Publicar en GitHub Pages:

```bash
npm run publicar
```

Hacer push a `main` guarda el código pero **no actualiza el sitio**. Para eso
hay que correr `npm run publicar`.

## Qué hay dentro

| Carpeta | Contenido |
|---|---|
| `src/contenido/` | El contenido de las lecciones, en archivos de datos. Es lo que se edita para cambiar un texto. |
| `src/pantallas/` | Un componente por tipo de pantalla. Hay diez, más las calculadoras en `simuladores/`. |
| `src/reproductor/` | Navegación, barra de progreso, tema claro y oscuro, y guardado del avance. |
| `src/nivel/` | La lista de módulos del nivel. |
| `src/estilos/variables.css` | Toda la paleta y la tipografía de los dos temas. Es el único archivo que cambia si cambia la marca. |
| `herramientas/` | Scripts para validar el contenido, publicar y extraer texto de los PDF del material. |
| `docs/` | Análisis de referencias, decisiones, programa de cursos, handoff y guía de revisión. |

Los PDF originales del material de cursos y las capturas usadas como referencia
de diseño no están en el repositorio.
