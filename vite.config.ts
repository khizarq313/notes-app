import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'
import type { BuildOptions } from 'vite'
import vue from '@vitejs/plugin-vue'

interface CustomBuildOptions extends BuildOptions {
  css: {
    preprocessor: string,
    options: {
      implementation: (id: string) => any
    }
  }
}

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: <CustomBuildOptions> {
    css: {
      preprocessor: 'sass',
      options: {
        implementation: require('sass')
      }
    }
  }
})
