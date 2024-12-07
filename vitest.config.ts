import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'jsdom',
    include: ['src/**/*.{test,spec}.(t|j)s?(x)'],
    exclude: ['node_modules', '.next'],
    coverage: {
      provider: 'istanbul',
      reporter: ['text', 'html'],
      include: ['src/**/*.ts(x)']
    },
    alias: {
      '@': '/src'
    }
  }
})
