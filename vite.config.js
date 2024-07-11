import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/react/',
  
  server: {
    proxy: {
      // Redirige las solicitudes que comienzan con /api a la URL del servidor
      '/api': {
        target: 'https://servicios.campus.pe', // URL del servidor al que se redirige
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''), // Elimina el prefijo /api de la URL
      },
    },
  },
})
