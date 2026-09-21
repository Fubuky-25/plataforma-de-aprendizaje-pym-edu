import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // En GitHub Pages el sitio vive en /<nombre-del-repo>/. El script de
  // publicación define BASE_PATH; en desarrollo local queda en la raíz.
  base: process.env.BASE_PATH ?? '/',
  server: { host: true },
})
