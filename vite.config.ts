import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  // Custom root domain -> keep base as "/"
  base: "/",

  server: {
    host: "::",
    port: 8080,
  },

  // Build the static site into /docs so GitHub Pages can serve it from main/docs
  build: {
    outDir: "docs",
    emptyOutDir: true, // cleans old builds so docs/ stays fresh
  },

  plugins: [
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
