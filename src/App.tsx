import { useEffect, useState } from 'react'
import { Reproductor } from './reproductor/Reproductor'
import { ListaModulos } from './nivel/ListaModulos'
import { niveles, ubicarLeccion } from './contenido/niveles'

const CLAVE_LECCION = 'pymedu:leccion-abierta'
const CLAVE_NIVEL = 'pymedu:nivel-activo'

function leerGuardado(clave: string): string | null {
  try {
    return localStorage.getItem(clave)
  } catch {
    return null
  }
}

function guardar(clave: string, valor: string | null) {
  try {
    if (valor) localStorage.setItem(clave, valor)
    else localStorage.removeItem(clave)
  } catch {
    /* sin almacenamiento disponible */
  }
}

/**
 * Dos vistas: la lista de módulos de un nivel y el reproductor de una lección.
 * Se recuerdan el nivel y la lección abierta para que recargar la página no
 * saque al usuario de donde estaba.
 */
export default function App() {
  const [abierta, setAbierta] = useState<string | null>(() => {
    const id = leerGuardado(CLAVE_LECCION)
    return ubicarLeccion(id) ? id : null
  })
  const [nivelId, setNivelId] = useState<string>(() => {
    const id = leerGuardado(CLAVE_NIVEL)
    return niveles.some((n) => n.id === id) ? id! : niveles[0].id
  })

  useEffect(() => {
    guardar(CLAVE_LECCION, abierta)
    window.scrollTo({ top: 0 })
  }, [abierta])

  useEffect(() => {
    guardar(CLAVE_NIVEL, nivelId)
  }, [nivelId])

  const ubicacion = ubicarLeccion(abierta)

  if (!ubicacion) {
    const nivelActivo = niveles.find((n) => n.id === nivelId) ?? niveles[0]
    return (
      <ListaModulos
        niveles={niveles}
        nivelActivo={nivelActivo}
        alCambiarNivel={setNivelId}
        alAbrir={(id) => {
          // Al abrir una lección se recuerda a qué nivel pertenece, para volver
          // a la lista correcta al salir.
          const destino = ubicarLeccion(id)
          if (destino) setNivelId(destino.nivel.id)
          setAbierta(id)
        }}
      />
    )
  }

  const { leccion, siguiente } = ubicacion

  return (
    <Reproductor
      key={leccion.id}
      leccion={leccion}
      alSalir={() => setAbierta(null)}
      siguiente={
        siguiente
          ? { modulo: siguiente.modulo, titulo: siguiente.titulo, alIr: () => setAbierta(siguiente.id) }
          : undefined
      }
    />
  )
}
