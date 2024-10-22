import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        /// the proxy works for all the routes with /api
        target: "https://localhost:3000", //// This is server origin or port
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""), //// This removes the api prefix or origin and replaces with blank
      },
    },
  },
});
