import type { Post } from '$lib/types';

export async function load({ fetch }: { fetch: (input: RequestInfo) => Promise<Response> }) {
	const response = await fetch('api/posts');
	const posts: Post[] = await response.json();
	return { posts };
}
