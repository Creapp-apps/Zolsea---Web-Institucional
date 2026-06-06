import { defineConfig, loadEnv } from 'vite';
import { resolve } from 'path';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    root: '.',
    publicDir: 'assets',
    define: {
      __SUPABASE_URL__: JSON.stringify(env.VITE_SUPABASE_URL || "https://rvoqvxmcakdeifnronhz.supabase.co"),
      __SUPABASE_ANON_KEY__: JSON.stringify(env.VITE_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ2b3F2eG1jYWtkZWlmbnJvbmh6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA2ODgwNjQsImV4cCI6MjA5NjI2NDA2NH0.3kzjBRACScYqFKWG68QWtkAin6B37M0cSbzOs9boz3I")
    },
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'index.html'),
          admin: resolve(__dirname, 'admin.html'),
        }
      }
    },
    server: {
      port: 5174,
      host: true,
      open: true,
    },
  };
});
