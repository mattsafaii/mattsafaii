<script lang="ts">
	import { formatDate } from '$lib/utils';
	import * as config from '$lib/data/config';

	let { data } = $props();
</script>

<svelte:head>
	<title>Posts in #{data.category} | {config.title}</title>
</svelte:head>

<div>
	<h1>Topics/<span class="category">{data.category.charAt(0).toUpperCase() + data.category.slice(1)}</span></h1>
	<p class="category-count">{data.posts.length} posts in #{data.category}</p>
</div>

{#if data.posts.length > 0}
	<ul class="space-y-2">
		{#each data.posts as post}
			<li class="flex justify-between items-center">
				<a href="/{post.slug}" class="title">{post.title}</a>
				<p class="date text-sm text-neutral-600/50 dark:text-neutral-300/50">{formatDate(post.date)}</p>
			</li>
		{/each}
	</ul>
{:else}
	<p class="no-posts">No posts found in this category.</p>
{/if}