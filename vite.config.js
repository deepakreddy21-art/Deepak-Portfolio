import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react(), tailwindcss()],
  base: mode === 'production' ? "/deepak-portfolio" : "/", // Base path for GitHub Pages only in production
  server: {
    port: 5173,
    open: true, // Automatically open browser
    host: true, // Listen on all addresses
    strictPort: false, // Try next available port if 5173 is busy
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'esbuild',
  },
}));
