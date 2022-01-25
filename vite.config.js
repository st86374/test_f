import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base:'/test_f/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '/src'),
    },
  },
})
