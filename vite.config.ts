import { defineConfig } from 'vite'
import react from '@vitejs/react-swc'
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  base: '/i-love-pdf-toolkitt/',
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
