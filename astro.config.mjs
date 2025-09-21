// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

// Detect environment
const isProd = process.env.NODE_ENV === "production";

export default defineConfig({
  integrations: [tailwind(), react()],
  vite: {
    resolve: {
      alias: {
        "@": "/src",
        "@components": "/src/components",
      },
    },
  },
  output: "static",
  // 👇 this makes dev work with "/" and GitHub Pages with "/Portfolio_Template/"
  base: isProd ? "/Portfolio_Template/" : "/",
  build: {
    inlineStylesheets: "auto",
  },
  server: {
    host: true,
    port: 4321,
  },
});
