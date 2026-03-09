import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://danielmorales.me",
  integrations: [
    mdx({ optimize: true }),
    sitemap({
      filter: (page) => !page.includes("/blog/tag/"),
      serialize: (item) => {
        // Set lastmod for all pages
        item.lastmod = new Date().toISOString();
        return item;
      },
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
