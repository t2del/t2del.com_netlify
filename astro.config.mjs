import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

import netlify from "@astrojs/netlify";
import pagefind from "astro-pagefind";

export default defineConfig({
  site: "https://www.t2del.com",
  build: {
    format: "file",
  },
  integrations: [mdx(), sitemap(), tailwind(),pagefind()],
  adapter: netlify(),
});