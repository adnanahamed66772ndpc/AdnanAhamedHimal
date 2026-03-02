import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/AdnanAhamedHimal/', // GitHub Pages repo name
  build: {
    outDir: 'docs', // GitHub Pages serves from /docs on main
  },
})
