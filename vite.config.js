import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' → site works from any sub-path (e.g. GitHub Pages project sites).
export default defineConfig({
  plugins: [react()],
  base: './',
})
