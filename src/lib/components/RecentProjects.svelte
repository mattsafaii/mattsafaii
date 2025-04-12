<script lang="ts">
	import { projects } from '$lib/data/projects';

	const recentProjects = projects
		.slice() // Create a shallow copy to avoid mutating the original prop array
		.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
		.slice(0, 3);
</script>

<section class="space-y-4">
	<div>
		<h2>Recent Projects</h2>
	</div>
	{#each recentProjects as project (project.name)}
		<div class="list-item">
			<h3 class="leading-6">{project.name}</h3>
			<span>{project.description}</span>
		</div>
	{/each}
	{#if projects.length > 3}
		<div class="text-sm">
			<a href="/projects" class="text-accent underline hover:no-underline">View all projects &rarr;</a>
		</div>
	{/if}
</section>