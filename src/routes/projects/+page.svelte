<script lang="ts">
	import { formatDate } from '$lib/utils'
	import * as config from '$lib/config'
	let { data } = $props()
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<div class="space-y-8">
	<div class="space-y-2">
		<h1>Projects</h1>
		<p>I've worked on (and continue to work on) an absurd number of things. Current tally? 77 projects.</p>
	</div>

	<div class="space-y-4">
		{#each data.projects as project}
		<article class="list-item">
			<a 
				href={project.slug} 
				class="flex items-center justify-between"
			>
				<h3>{project.title}</h3>
				<!-- <span class="text-sm text-neutral-400">{formatDate(project.date)}</span> -->
			</a>
		</article>
	{/each}
	</div>
</div>