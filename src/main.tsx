import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { ReporteDeError } from './ReporteDeError'

import './estilos/variables.css'
import './estilos/base.css'
import './estilos/reproductor.css'
import './estilos/pantallas.css'
import './estilos/nivel.css'

createRoot(document.getElementById('raiz')!).render(
  <StrictMode>
    <ReporteDeError>
      <App />
    </ReporteDeError>
  </StrictMode>,
)
