import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// @ts-ignore
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

// @ts-ignore
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: '/', // Ajuste para '/subpasta/' se necessário para a Hostinger
  server: {
    host: '::',
    port: 8080,
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: mode === 'development',
    minify: mode === 'production',
  },
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
}));
