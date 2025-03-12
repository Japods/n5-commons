import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), federation({
    name: 'n5-remote-commons',
    filename: 'remoteEntry.js',
    exposes: {
      './Button': './src/components/Button.jsx',
      './CardCharacter': './src/components/CardCharacter.jsx',
      './Header': './src/components/Header.jsx',
    },
    remotes: {},
    shared: ['react', 'react-dom'],
  })],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.js", // Archivo de configuración de pruebas
  },
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
})
