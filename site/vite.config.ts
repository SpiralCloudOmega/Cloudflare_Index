import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Static build for GitHub Pages (no Cloudflare Workers dependency)
// To deploy on Cloudflare Workers, add: import { cloudflare } from "@cloudflare/vite-plugin"
// and add cloudflare() to plugins array
export default defineConfig({
  plugins: [react()],
  base: "/Cloudflare_Index/",
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
