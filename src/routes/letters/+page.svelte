<script lang="ts">
	import { formatDate } from '$lib/utils'
	import * as config from '$lib/config'
	import Newsletter from '$lib/components/Newsletter.svelte'
	let { data } = $props()
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<div class="space-y-8">
	<div class="space-y-2">
		<h1>Building businesses in public. Sharing my experiences.</h1>
		<p>A selection of ideas and thoughts to inspire, learn, and create.</p>
	</div>

	<Newsletter
		title="Not already a subscriber?" 
		description="I write about what I'm learning and curate valuable resources for entrepreneurs every Sunday morning." 
	/>
	
	<div class="space-y-4">
		{#each data.posts as post}
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
</div>

<style>
	/* Remove existing styles as we're using Tailwind classes now */
</style>
