import { error } from '@sveltejs/kit'

export const prerender = true;

export async function load({ params }) {
	try {
		const site = await import(`../../../site/blog/${params.slug}.md`)

		return {
			content: site.default,
			meta: site.metadata
		}
	} catch (e) {
		error(404, `Could not find ${params.slug}`)
	}
}