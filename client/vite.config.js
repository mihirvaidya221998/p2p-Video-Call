import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0',  // Listen on all IPs (including your local network IP)
    port: 5173,       // Specify the port you want to use
  },
  plugins: [react()],
})
