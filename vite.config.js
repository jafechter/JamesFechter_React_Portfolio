import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: "/JamesFechter_React_Portfolio",
  assetsInclude: ["**/*.JPG", "**/*.PNG"],
});
