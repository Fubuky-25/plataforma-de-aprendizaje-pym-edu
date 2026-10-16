import { Component, type ErrorInfo, type ReactNode } from 'react'

interface Props {
  children: ReactNode
}

interface Estado {
  falló: boolean
}

/**
 * Si algo falla al dibujar una pantalla, React desmontaría toda la aplicación y
 * el usuario vería una página en blanco sin explicación. Esto muestra una
 * salida en su lugar.
 */
export class ReporteDeError extends Component<Props, Estado> {
  state: Estado = { falló: false }

  static getDerivedStateFromError(): Estado {
    return { falló: true }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('Falla al mostrar una pantalla:', error, info.componentStack)
  }

  volverAlInicio = () => {
    try {
      localStorage.removeItem('pymedu:leccion-abierta')
    } catch {
      /* sin almacenamiento disponible */
    }
    window.location.reload()
  }

  render() {
    if (!this.state.falló) return this.props.children

    return (
      <div className="app">
        <main className="lienzo">
          <div className="pagina">
            <p className="etiqueta">Algo salió mal</p>
            <h1 className="titulo">No pudimos mostrar esta pantalla</h1>
            <p className="bajada">
              Es un problema nuestro, no tuyo. Tu avance quedó guardado: puedes volver a la lista
              de módulos y seguir desde ahí.
            </p>
            <div className="acciones">
              <button type="button" className="boton boton--principal" onClick={this.volverAlInicio}>
                Volver a los módulos
              </button>
            </div>
          </div>
        </main>
      </div>
    )
  }
}
