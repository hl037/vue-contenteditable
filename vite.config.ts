import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib : {
      entry: "src/vue-contenteditable.ts",
      name: "contenteditable",
      formats: ['es', 'umd', 'cjs'],
      fileName: (format) => `vue-contenteditable.${format}.js`
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build
        // Add external deps here
        globals: {
          vue: 'Vue',
        },
      },
    },
  }
})
