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
      // './Button': './src/components/Button.jsx',
      './CardCharacter': './src/components/CardCharacter/CardCharacter.jsx',
      './Header': './src/components/Header/Header.jsx',
    },
    remotes: {},
    shared: ['react', 'react-dom'],
  })],
  server: {
    cors: {
      origin: '*', // Permite cualquier origen
      methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
      allowedHeaders: ['Content-Type', 'Authorization'],
    },
  },
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
