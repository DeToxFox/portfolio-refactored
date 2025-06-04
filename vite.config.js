import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/send': 'http://localhost:5000',
    },
  },
});


// I like this "Prefer to reach out directly? Feel free to email me or view my resume below.
// 📧 Send Email"
// But more dynamic, like a popup where some one can select a copy icon then close the popup with a mouse click or something like that.