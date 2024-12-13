import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react({ jsxImportSource: "@emotion/react" })],
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
  },
  server: {
    proxy: {
      "/users": {
        target: "https://jsonplaceholder.typicode.com/users",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/users/, "/users"),
      },
    },
  },
});
