import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync, existsSync } from 'fs'

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-cname',
      writeBundle() {
        // Copy CNAME file to dist if it exists
        if (existsSync('CNAME')) {
          copyFileSync('CNAME', 'dist/CNAME')
          console.log('CNAME file copied to dist/')
        }
      }
    }
  ],
  base: './', // Use relative paths for better GitHub Pages compatibility
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      output: {
        // Ensure JavaScript files have .js extension, not .jsx
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      }
    }
  },
  server: {
    // Fix MIME type issues in development
    fs: {
      strict: false
    }
  }
})
