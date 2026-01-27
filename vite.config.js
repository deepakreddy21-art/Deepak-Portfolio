import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  const env = loadEnv(mode, process.cwd(), '');
  
  return {
    plugins: [react(), tailwindcss()],
    base: mode === 'production' ? "/Deepak-Portfolio" : "/", // Base path for GitHub Pages only in production
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
    // Define env vars for production build
    define: {
      'import.meta.env.VITE_EMAILJS_PUBLIC_KEY': JSON.stringify(
        env.VITE_EMAILJS_PUBLIC_KEY || 'sSszYZb4UyFba-BY_'
      ),
      'import.meta.env.VITE_EMAILJS_SERVICE_ID_CONTACT': JSON.stringify(
        env.VITE_EMAILJS_SERVICE_ID_CONTACT || 'service_3czmphc'
      ),
      'import.meta.env.VITE_EMAILJS_TEMPLATE_ID_CONTACT': JSON.stringify(
        env.VITE_EMAILJS_TEMPLATE_ID_CONTACT || 'template_rb3lco6'
      ),
      'import.meta.env.VITE_EMAILJS_SERVICE_ID_CHAT': JSON.stringify(
        env.VITE_EMAILJS_SERVICE_ID_CHAT || 'service_3czmphc'
      ),
      'import.meta.env.VITE_EMAILJS_TEMPLATE_ID_CHAT': JSON.stringify(
        env.VITE_EMAILJS_TEMPLATE_ID_CHAT || 'template_rb3lco6'
      ),
    },
  };
});
