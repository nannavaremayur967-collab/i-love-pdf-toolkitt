import { defineConfig } from 'vite'

export default defineConfig({
  base: '/i-love-pdf-toolkitt/',
  resolve: {
    alias: {
      "@": "/src",
    },
  },
})
