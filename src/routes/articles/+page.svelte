<script lang="ts">
	import { formatDate } from '$lib/utils';
	import * as config from '$lib/data/config';
	import Newsletter from '$lib/components/Newsletter.svelte';
	let { data } = $props();
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<div class="space-y-2">
	<h1>Building businesses in public. Sharing my experiences.</h1>
	<p>A selection of ideas and thoughts to inspire, learn, and create.</p>
	<Newsletter
		title=""
		description=""
	/>
</div>

<section>
	{#each data.posts as post (post.slug)}
		<article class="list-item">
			<a href={post.slug} class="flex items-center justify-between">
				<h3>{post.title}</h3>
				<span class="text-sm text-neutral-600">{formatDate(post.date)}</span>
			</a>
		</article>
	{/each}
</section>
