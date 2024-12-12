import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { checker } from 'vite-plugin-checker';
import eslint from 'vite-plugin-eslint';
import viteTsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  base: '/',
  plugins: [react(), viteTsconfigPaths(), eslint(), checker({ typescript: true })],
  server: {
    open: true,
    port: 3000,
  },
});
