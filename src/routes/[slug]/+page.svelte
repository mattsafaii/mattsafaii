<script lang="ts">
	import { formatDate } from '$lib/utils'
	import Newsletter from '$lib/components/Newsletter.svelte'
	let { data } = $props()

	const backLink = $derived(
		data.type === 'post' ? '/letters' : 
		data.type === 'interview' ? '/interviews' : 
		'/projects'
	)
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<a href={backLink} class="inline-block mb-8 text-stone-400 hover:text-stone-300 transition-colors group"><span class="inline-block transition-transform duration-200 group-hover:-translate-x-1">←</span> Back</a>

<article class="space-y-4">
	<hgroup>
		<h1>{data.meta.title}</h1>
		<p>
			{#if data.type === 'project'}
				{data.meta.year}
			{:else}
				Published at {formatDate(data.meta.date)}
			{/if}
		</p>
	</hgroup>

	<div class="tags">
		{#each data.meta.categories as category}
			<a href="/category/{category}" class="surface-4">&num;{category}</a>
		{/each}
	</div>

	<div class="prose prose-stone">
		<data.content />
	</div>

	{#if data.type === 'project'}
		<a href="{data.meta.url}" class="button">Check it out →</a>
	{/if}
</article>

{#if data.type === 'post'}
	<Newsletter 
		title="Not already a subscriber?" 
		description="Sign up to receive more insights on running a one-person business." 
	/>
{/if}

<style>
	article {
		max-inline-size: var(--size-content-3);
		margin-inline: auto;

		h1 {
			text-transform: capitalize;
		}

		h1 + p {
			margin-top: var(--size-2);
			color: var(--text-2);
		}

		.tags {
			display: flex;
			gap: var(--size-3);
			margin-top: var(--size-7);

			> * {
				padding: var(--size-2) var(--size-3);
				border-radius: var(--radius-round);
				text-decoration: none;
				color: inherit;

				&:hover {
					background-color: var(--surface-3);
				}
			}
		}
	}
</style>
