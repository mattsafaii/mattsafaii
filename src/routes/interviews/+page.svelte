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
		<h1>Interviews</h1>
		<p>You can listen to over 80 hours of interviews, where I'm the guest. <br> Each one has an MP3 you can download, or a transcript if you prefer to read.</p>
	</div>

	<div class="space-y-4">
		{#each data.interviews as interview}
		<article class="list-item">
			<a 
				href={interview.slug}
				class="flex items-center justify-between"
			>
				<h3>{interview.title}</h3>
				<span class="text-sm text-neutral-400">{formatDate(interview.date)}</span>
			</a>
		</article>
	{/each}
	</div>
</div>

<style>
	/* Remove existing styles as we're using Tailwind classes now */
</style>
