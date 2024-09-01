import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import robots from "astro-robots-txt";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
	site: "https://palladians.xyz",
	integrations: [tailwind(), robots(), sitemap()],
});
