<script lang="ts">
	import { formatDate } from '$lib/utils'
	import type { Post } from '$lib/types'

	export let posts: Post[]
</script>

<section class="space-y-4">
	<h2>Letters</h2>
	<div class="space-y-2">
		{#each posts as post}
		<article class="list-item">
			<a 
				href={post.slug} 
				class="flex items-center justify-between"
			>
				<h3>{post.title}</h3>
				<span class="text-sm text-neutral-400">{formatDate(post.date)}</span>
			</a>
		</article>
	{/each}
	</div>
	<a 
		href="/letters" 
		class="inline-block text-sm text-neutral-400 hover:text-neutral-600 transition-colors mt-4"
	>
		View all →
	</a>
</section> 