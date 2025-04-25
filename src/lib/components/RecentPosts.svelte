<script lang="ts">
	import { formatDate } from '$lib/utils'
	import type { Post } from '$lib/types'

	export let posts: Post[]
</script>

<section class="space-y-4">
	<h2>Articles</h2>
	<div class="space-y-2">
		{#each posts.slice(0, 3) as post}
		<article class="list-item">
			<a 
				href={post.slug} 
				class="flex items-center justify-between"
			>
				<h3>{post.title}</h3>
				<span class="text-neutral-600 dark:text-neutral-300">{formatDate(post.date)}</span>
			</a>
		</article>
	{/each}
	</div>
	<a 
		href="/articles" 
		class="inline-block text-sm text-neutral-600/80 dark:text-neutral-300/80 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors"
	>
		View all articles →
	</a>
</section> 