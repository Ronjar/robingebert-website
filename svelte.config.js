import adapter from "@sveltejs/adapter-static";
import { mdsvex } from "mdsvex";
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import mdsvexConfig from './mdsvex.config.mjs';
import fs from 'fs';

const contentDir = 'src/site/blog';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: [".svelte", ".svx", ".md", ".mdx"],
	preprocess: [vitePreprocess(), mdsvex(mdsvexConfig)],

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
