import { defineConfig, normalizePath } from 'vite'
import react from '@vitejs/plugin-react'
import { existsSync } from 'node:fs'
import { fileURLToPath } from 'node:url'

const fieldImage = normalizePath(fileURLToPath(new URL('./public/images/hero/tim-mossholder-campo-agricola-4DLnYJQE6kw.jpg', import.meta.url)))

export default defineConfig(() => ({
  plugins: [react(), {
    name: 'local-hero-context',
    configureServer(server) {
      server.watcher.add(fieldImage)
      const refresh = file => {
        if (normalizePath(file) === fieldImage) server.restart()
      }
      server.watcher.on('add', refresh).on('unlink', refresh)
      server.httpServer?.once('close', () => {
        server.watcher.off('add', refresh).off('unlink', refresh)
      })
    },
  }],
  define: {
    'import.meta.env.VITE_HERO_FIELD_CONTEXT': JSON.stringify(existsSync(fieldImage) ? '/images/hero/tim-mossholder-campo-agricola-4DLnYJQE6kw.jpg' : ''),
  },
}))
