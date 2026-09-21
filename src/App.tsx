import { useEffect, useState } from 'react'
import { Reproductor } from './reproductor/Reproductor'
import { ListaModulos } from './nivel/ListaModulos'
import { nivel1 } from './contenido/nivel1'

const CLAVE = 'pymedu:leccion-abierta'

function leerAbierta(): string | null {
  try {
    const id = localStorage.getItem(CLAVE)
    return id && nivel1.lecciones.some((l) => l.id === id) ? id : null
  } catch {
    return null
  }
}

/**
 * Dos vistas: la lista de módulos del nivel y el reproductor de una lección.
 * Se recuerda la lección abierta para que recargar la página no saque al usuario.
 */
export default function App() {
  const [abierta, setAbierta] = useState<string | null>(leerAbierta)

  useEffect(() => {
    try {
      if (abierta) localStorage.setItem(CLAVE, abierta)
      else localStorage.removeItem(CLAVE)
    } catch {
      /* sin almacenamiento disponible */
    }
    window.scrollTo({ top: 0 })
  }, [abierta])

  const indice = nivel1.lecciones.findIndex((l) => l.id === abierta)

  if (indice === -1) {
    return <ListaModulos nivel={nivel1} alAbrir={setAbierta} />
  }

  const leccion = nivel1.lecciones[indice]
  const proxima = nivel1.lecciones[indice + 1]

  return (
    <Reproductor
      key={leccion.id}
      leccion={leccion}
      alSalir={() => setAbierta(null)}
      siguiente={
        proxima
          ? { modulo: proxima.modulo, titulo: proxima.titulo, alIr: () => setAbierta(proxima.id) }
          : undefined
      }
    />
  )
}
