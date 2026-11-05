import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/HotelTP8/', // <-- Agrega esta línea exactamente así
})