import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command, isPreview }) => ({
  plugins: [react()],

  /* Ban build chay tai  https://lnismeee.github.io/Dartcode52-server-groom/
     tuc mot duong dan CON. Con chay thu tren may bang npm run dev thi o goc
     http://localhost:5176/ nen base phai la '/'. */
  base: command === 'build' || isPreview ? '/Dartcode52-server-groom/' : '/',

  server: {
    port: Number(process.env.PORT) || 5176,
    // Luon dung dung mot link - neu da co ban dang chay thi bao loi,
    // khong tu nhay sang cong khac
    strictPort: true,
  },

  preview: {
    port: Number(process.env.PORT) || 4174,
  },
}))
