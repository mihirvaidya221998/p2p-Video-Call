import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0',  // Listen on all IPs (including your local network IP)
    port: 5173,       // Specify the port you want to use
    proxy:{
      // Proxy all requests starting with /api to the backend
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
      // Proxy all WebSocket connections
      '/socket.io': {
        target: 'http://localhost:8000',
        ws: true,
      },
    }
  },
  plugins: [react()],
})
