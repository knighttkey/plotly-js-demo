import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  base: './',  //資源路徑改為相對,
  build: {
    outDir: "docs",
  },
  server: {
    host: '0.0.0.0',
    port: 9001,
  },
})
