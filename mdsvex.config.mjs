import highlighter from './src/lib/scripts/highlighter.mjs';

const config = {
	extensions: ['.svx', '.md', '.mdx'],
	highlight: {
		highlighter,
	},
};

export default config;