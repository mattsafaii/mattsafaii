import { error } from '@sveltejs/kit'

export async function load({ params }) {
	try {
		// Try posts first
		try {
			const post = await import(`../../content/posts/${params.slug}.md`)
			return {
				content: post.default,
				meta: post.metadata,
				type: 'post'
			}
		} catch {
			// If post not found, try interviews
			try {
				const interview = await import(`../../content/interviews/${params.slug}.md`)
				return {
					content: interview.default,
					meta: interview.metadata,
					type: 'interview'
				}
			} catch {
				// If interview not found, try projects
				const project = await import(`../../content/projects/${params.slug}.md`)
				return {
					content: project.default,
					meta: project.metadata,
					type: 'project'
				}
			}
		}
	} catch (e) {
		console.error('Failed to load content:', e)
		error(404, `Could not find ${params.slug}`)
	}
}
