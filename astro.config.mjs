import { defineConfig } from "astro/config";
import icon from "astro-icon";
import mdx from "@astrojs/mdx";
import netlify from "@astrojs/netlify";
import partytown from "@astrojs/partytown";
import robotsTxt from "astro-robots-txt";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://floortrademarketing.com",
  integrations: [
    mdx(),
    sitemap(),
    icon({
      include: {
        'material-symbols-light': ["calendar-add-on"],
      },
    }),
    tailwind(),
    robotsTxt(),
    partytown({
      config: {
        forward: ['dataLayer.push'],
      },
    })
  ],
  output: "static",
  adapter: netlify()
});
