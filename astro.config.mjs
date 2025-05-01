import { defineConfig } from 'astro/config';
import path from 'path';
import tailwindcss from "@tailwindcss/vite";

import react from '@astrojs/react';
import vue from '@astrojs/vue';

export default defineConfig({
  integrations: [
    react(),
    vue(),
  ],

  vite: {
    plugins: [
      tailwindcss(),
    ],
    resolve: {
      alias: {
        '@app': path.resolve('./src/app'),
        '@widgets': path.resolve('./src/widgets'),
        '@features': path.resolve('./src/features'),
        '@entities': path.resolve('./src/entities'),
        '@shared': path.resolve('./src/shared'),
      }
    }
  },
});