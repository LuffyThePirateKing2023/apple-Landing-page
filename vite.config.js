import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:"/apple-Landing-page/",
  plugins: [react(), sentryVitePlugin({
    org: "na-b9j",
    project: "javascript-react"
  })],
  build: {
    sourcemap: true
  }
})