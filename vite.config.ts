import { defineConfig } from 'vite'
import react from '@vitejs/react-swc'

export default defineConfig({
  base: '/i-love-pdf-toolkitt/',
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
})
