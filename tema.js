// Fija el tema antes del primer pintado para que no haya un parpadeo claro.
// Vive en un archivo aparte y no incrustado en la página para que la política
// de seguridad de contenido pueda prohibir los scripts en línea.
;(function () {
  try {
    var guardado = localStorage.getItem('pymedu:tema')
    var oscuro = window.matchMedia('(prefers-color-scheme: dark)').matches
    document.documentElement.dataset.theme = guardado || (oscuro ? 'dark' : 'light')
  } catch (e) {
    document.documentElement.dataset.theme = 'light'
  }
})()
