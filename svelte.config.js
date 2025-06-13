import adapter from "@sveltejs/adapter-static";
import { mdsvex } from "mdsvex";
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import fs from 'fs';

const contentDir = 'src/site/blog';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: [".svelte", ".svx", ".md", ".mdx"],
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: [vitePreprocess(),
		mdsvex({
      extensions: [".svx", ".md", ".mdx"],
      layout: {
        // wir wollen kein eigenes Blog‐Layout hier, damit alle MDX‐Seiten das Haupt-Layout (+layout.svelte) erben
      }
    })
	],

	kit: {
		adapter: adapter(),
				prerender: {
			entries: [
				"*",
				...fs.readdirSync(contentDir)
                    .filter(file => (file.endsWith('.md') || file.endsWith('.mdx')))
                    .map(file => `/blog/${file.replace('.mdx', '').replace('.md', '')}`)
			],
		},
	}
};

export default config;
