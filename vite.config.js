import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/chef-service/',
  root: resolve(__dirname, 'src'),
  build: {
    outDir: '../build',
    emptyOutDir: true,
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler', // or "modern"
      },
    },
  },
});
