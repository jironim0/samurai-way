import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/samurai-way-deploy/',
  build: {
    outDir: 'dist',
  },
  plugins: [react()],
})