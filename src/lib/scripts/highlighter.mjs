import { transformerMetaHighlight } from '@shikijs/transformers';
import { parse } from 'node-html-parser';
import { codeToHtml, createHighlighter } from 'shiki';
import { addCopyButton } from 'shiki-transformer-copy-button'

/**
 * Highlighter built by Rodneylab (https://github.com/rodneylab/sveltekit-shiki-code-highlighting/blob/main/src/lib/utilities/codeHighlighter.mjs)
 * Licensed under the BSD-3-Clause license
 */

const THEME = 'dracula';

/**
 * Returns code with curly braces and backticks replaced by HTML entity equivalents
 * @param {string} html - highlighted HTML
 * @returns {string} - escaped HTML
 */
function escapeHtml(code) {
	return code.replace(
		/[{}`]/g,
		(character) => ({ '{': '&lbrace;', '}': '&rbrace;', '`': '&grave;' })[character],
	);
}

/**
 * @param html {string} - code to highlight
 * @returns {string} - highlighted html
 */
function makeFocussable(html) {
	const root = parse(html);
	// root.querySelector('pre').setAttribute('tabIndex', '0');
	return root.toString();
}

/**
 * @param code {string} - code to highlight
 * @param lang {string} - code language
 * @param meta {string} - code meta
 * @returns {string} - highlighted html
 */
async function highlighter(code, lang, meta) {
	await createHighlighter({
		langs: [lang],
		themes: [THEME],
	});

	let html;
	if (!meta) {
		html = await codeToHtml(code, {
			lang,
			theme: THEME,
		});
	} else {
		html = await codeToHtml(code, {
			lang,
			theme: THEME,
			meta: { __raw: meta },
			transformers: [transformerMetaHighlight()],
		});
	}

	html = makeFocussable(html);
	return escapeHtml(html);
}

export default highlighter;