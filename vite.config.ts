import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { publicVideosPlugin } from "./vite/publicVideosPlugin";

// https://vitejs.dev/config/
export default defineConfig(() => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  preview: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), publicVideosPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-vendor': ['@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu', '@radix-ui/react-select', '@radix-ui/react-tabs', '@radix-ui/react-toast'],
          'utils': ['clsx', 'tailwind-merge', 'class-variance-authority'],
          'icons': ['lucide-react'],
        },
      },
    },
  },
}));
