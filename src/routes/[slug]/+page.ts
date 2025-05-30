import { error } from '@sveltejs/kit'

export async function load({ params }) {
	try {
		const post = await import(`../../content/posts/${params.slug}.md`)
		return {
			content: post.default,
			meta: post.metadata,
			type: 'post'
		}
	} catch (e) {
		console.error('Failed to load content:', e)
		error(404, `Could not find ${params.slug}`)
	}
}