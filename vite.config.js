import { defineConfig, splitVendorChunkPlugin, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';


export default defineConfig(({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, "env") };
  return {
    base: process.env.VITE_BASE_URL || '/',
    plugins: [
      react(),
      splitVendorChunkPlugin(),
    ],
    build: {
      outDir: 'public',
      emptyOutDir: false
    },
    envDir: "env"
  }
}
);


