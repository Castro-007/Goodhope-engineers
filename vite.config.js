import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', 
    allowedHosts: ['goodhopeengineers.onrender.com'],
    port: process.env.PORT || 5173,
  },
  assetsInclude: ['**/*.PNG'],
    build: {
    outDir: 'dist', // ✅ Default safe folder for built files
    emptyOutDir: true, // ✅ Clears dist before rebuilding
  },
})
