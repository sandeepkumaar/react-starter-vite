import { defineConfig, splitVendorChunkPlugin, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';


export default defineConfig(({ mode }) => {
  const viteEnv = loadEnv(mode, "env");
  console.log(viteEnv);
  return {
    base: viteEnv.VITE_BASE_URL || '/',
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


