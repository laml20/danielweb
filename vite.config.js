import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/danielweb/'  // Change this to match your GitHub Pages repo name
});