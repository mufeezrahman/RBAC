import { defineConfig } from 'vite'
import ReactCompiler from 'babel-plugin-react-compiler';
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react({
    babel:{
      plugins:[ReactCompiler]
    }
  })],
})
