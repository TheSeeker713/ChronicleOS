import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // Ensure proper base path for GitHub Pages
  build: {
    outDir: 'dist',
    sourcemap: true
  }
})
