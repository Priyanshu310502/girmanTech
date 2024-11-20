// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })



import path from "path"; // Node.js path module
import { fileURLToPath } from "url"; // Import the `fileURLToPath` method
import react from "@vitejs/plugin-react"; // React plugin for Vite
import { defineConfig } from "vite"; // Vite's configuration method

// Resolve the current directory
const __filename = fileURLToPath(import.meta.url); // Get the current file URL
const __dirname = path.dirname(__filename); // Resolve the directory name

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Set up an alias for the src directory
    },
  },
});

