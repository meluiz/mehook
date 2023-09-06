import { resolve } from 'path'

import React from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [dts({ entryRoot: 'src', staticImport: true }), React()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es', 'cjs'],
      fileName: (format) => (format === 'es' ? 'index.mjs' : 'index.cjs'),
    },
    rollupOptions: {
      output: [
        {
          format: 'cjs',
          exports: 'named',
          preserveModules: true,
          preserveModulesRoot: 'src',
          entryFileNames: '[name].cjs',
          banner: (x) => (x.fileName.endsWith('index.cjs') ? '' : `'use client';`),
        },
        {
          format: 'es',
          exports: 'named',
          preserveModules: true,
          preserveModulesRoot: 'src',
          entryFileNames: '[name].mjs',
          banner: (x) => (x.fileName.endsWith('index.mjs') ? '' : `'use client';`),
        },
      ],
    },
  },
})
