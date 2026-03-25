import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://danielmorales.me",
  trailingSlash: "always",
  integrations: [
    mdx({ optimize: true }),
    sitemap({
      filter: (page) => !page.includes("/blog/tag/"),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@": "/src",
      },
    },
  },
});
