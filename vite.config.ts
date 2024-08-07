import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/notes-app/",
  plugins: [vue()],
  assetsInclude: ['**/*.otf', '**/*.woff', '**/*.woff2'],
})