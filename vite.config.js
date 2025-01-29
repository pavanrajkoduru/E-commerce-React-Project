import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/E-Commerce-React-Project/", // Important for GitHub Pages
  plugins: [react()],
});
