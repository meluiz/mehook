import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    coverage: {
      all: true,
      provider: 'v8',
      include: ['packages/**'],
      reporter: ['text', 'json', 'html'],
    },
  },
})
