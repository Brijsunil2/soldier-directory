import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [react()],
    base: "/soldier-directory/",
    server: {
      port: 3000
    }, define: {
      'import.meta.env.APP_ENV': JSON.stringify(env.APP_ENV || 'development'),
    },
  }
})