import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/walking-project/',
  build: {
    outDir: 'dist', // Ensure this is set to 'dist'
  },
})