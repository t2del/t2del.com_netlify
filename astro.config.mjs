import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

import netlify from "@astrojs/netlify";
import pagefind from "astro-pagefind";
import react from '@astrojs/react'; // 👈 This line is crucial
// import db from "@astrojs/db";

export default defineConfig({
  site: "https://www.t2del.com",
  // output: "server",
  build: {
    format: "file",
  },
  integrations: [mdx(), sitemap(), tailwind(), pagefind(), react()],
  adapter: netlify(),
  i18n: {
    locales: ["es", "en"],
    defaultLocale: "en",
    routing: {
      prefixDefaultLocale: false
    },
    // domains: {
    //   es: "https://es.example.com",
    // }
  }
});