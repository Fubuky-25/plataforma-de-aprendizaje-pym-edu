import { useCallback, useEffect, useState } from 'react'

export type Tema = 'light' | 'dark'

const CLAVE = 'pymedu:tema'

function temaInicial(): Tema {
  // `index.html` ya fijó el tema antes del primer pintado; aquí solo se lee.
  const actual = document.documentElement.dataset.theme
  return actual === 'dark' ? 'dark' : 'light'
}

/** Tema claro u oscuro, igual que en la plataforma principal. */
export function useTema() {
  const [tema, setTema] = useState<Tema>(temaInicial)

  useEffect(() => {
    document.documentElement.dataset.theme = tema
    try {
      localStorage.setItem(CLAVE, tema)
    } catch {
      /* sin almacenamiento disponible */
    }
  }, [tema])

  const alternar = useCallback(() => {
    setTema((t) => (t === 'dark' ? 'light' : 'dark'))
  }, [])

  return { tema, alternar }
}
