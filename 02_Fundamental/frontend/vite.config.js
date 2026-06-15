import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server : {
    proxy : {
      // this toolchain detect if /api is there then automatically add this
      // this proxy will be added like the request is coming from this url only
      '/api' : 'http://localhost:3000'
    }
  },
  plugins: [react()],
})
