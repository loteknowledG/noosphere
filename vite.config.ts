import { defineConfig } from 'vite';

import viteReact from '@vitejs/plugin-react'
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    viteReact(),],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
