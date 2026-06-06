import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Relative asset paths make the build work on any GitHub Pages repo URL:
  // https://username.github.io/any-repo-name/
  base: './',
});
