<script lang="ts">
	import type { ProjectType } from '$lib/data/projects';
	export let projects: ProjectType[];

	const recentProjects = projects
		.slice() // Create a shallow copy to avoid mutating the original prop array
		.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
		.slice(0, 3);
</script>

<section class="space-y-4">
	<h2>Creating</h2>
	<div class="space-y-2">
		{#each recentProjects as project (project.name)}
			<div class="list-item">
				<h3 class="leading-6">{project.name}</h3>
				<span>{project.summary}</span>
			</div>
		{/each}
	</div>
	{#if projects.length > 3}
		<a 
			href="/projects" 
			class="inline-block text-sm text-neutral-600/80 dark:text-neutral-300/80 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors"
		>
			View all projects →
		</a>
	{/if}
</section>