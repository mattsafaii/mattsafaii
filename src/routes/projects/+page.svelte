<script lang="ts">
	import * as config from '$lib/data/config';
	import { projects } from '$lib/data/projects';
	import { onMount } from 'svelte';

	let detailsElements: HTMLDetailsElement[] = [];

	onMount(() => {
		const handleClick = (e: MouseEvent) => {
			const target = e.target as HTMLElement;
			if (!target.closest('details')) {
				detailsElements.forEach(details => {
					if (details.open) details.open = false;
				});
			}
		};

		document.addEventListener('click', handleClick);
		return () => document.removeEventListener('click', handleClick);
	});
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<div class="space-y-2">
	<h1>Projects</h1>
</div>

<div class="space-y-2 [&:has(details[open])>details:not([open])]:opacity-50">
	{#each projects as project, i}
		<details 
			class="group -mx-4 rounded-lg transition-[colors,opacity] duration-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 [&[open]]:bg-neutral-100 dark:[&[open]]:bg-neutral-800 p-4"
			name="project"
			bind:this={detailsElements[i]}
		>
			<summary class="cursor-pointer list-none marker:hidden group-open:marker:block -m-4 p-4">
				<div class="flex items-center justify-between">
					<div class="flex items-center gap-2">
						<h3>{project.name}</h3>
						<span class="inline-block text-xs px-2.5 py-0.5 rounded-full ring-1 ring-inset"
							  class:bg-gray-100={project.status === 'Idea' || project.status === 'Archived'}
							  class:text-gray-800={project.status === 'Idea' || project.status === 'Archived'}
							  class:ring-gray-300={project.status === 'Idea' || project.status === 'Archived'}
							  class:dark:bg-gray-700={project.status === 'Idea' || project.status === 'Archived'}
							  class:dark:text-gray-300={project.status === 'Idea' || project.status === 'Archived'}
							  class:dark:ring-gray-600={project.status === 'Idea' || project.status === 'Archived'}

							  class:bg-yellow-100={project.status === 'Exploring'}
							  class:text-yellow-800={project.status === 'Exploring'}
							  class:ring-yellow-300={project.status === 'Exploring'}
							  class:dark:bg-yellow-900={project.status === 'Exploring'}
							  class:dark:text-yellow-300={project.status === 'Exploring'}
							  class:dark:ring-yellow-700={project.status === 'Exploring'}

							  class:bg-blue-100={project.status === 'In Progress'}
							  class:text-blue-800={project.status === 'In Progress'}
							  class:ring-blue-300={project.status === 'In Progress'}
							  class:dark:bg-blue-900={project.status === 'In Progress'}
							  class:dark:text-blue-300={project.status === 'In Progress'}
							  class:dark:ring-blue-700={project.status === 'In Progress'}

							  class:bg-green-100={project.status === 'Launched'}
							  class:text-green-800={project.status === 'Launched'}
							  class:ring-green-300={project.status === 'Launched'}
							  class:dark:bg-green-900={project.status === 'Launched'}
							  class:dark:text-green-300={project.status === 'Launched'}
							  class:dark:ring-green-700={project.status === 'Launched'}

							  class:bg-orange-100={project.status === 'Paused'}
							  class:text-orange-800={project.status === 'Paused'}
							  class:ring-orange-300={project.status === 'Paused'}
							  class:dark:bg-orange-900={project.status === 'Paused'}
							  class:dark:text-orange-300={project.status === 'Paused'}
							  class:dark:ring-orange-700={project.status === 'Paused'}
						>
							{project.status}
						</span>
						{#if project.recruitingStatus}
							<span class="inline-block text-xs px-2.5 py-0.5 rounded-full ring-1 ring-inset"
								  class:bg-purple-100={project.recruitingStatus === 'Hiring'}
								  class:text-purple-800={project.recruitingStatus === 'Hiring'}
								  class:ring-purple-300={project.recruitingStatus === 'Hiring'}
								  class:dark:bg-purple-900={project.recruitingStatus === 'Hiring'}
								  class:dark:text-purple-300={project.recruitingStatus === 'Hiring'}
								  class:dark:ring-purple-700={project.recruitingStatus === 'Hiring'}

								  class:bg-teal-100={project.recruitingStatus === 'Looking for Co-founder'}
								  class:text-teal-800={project.recruitingStatus === 'Looking for Co-founder'}
								  class:ring-teal-300={project.recruitingStatus === 'Looking for Co-founder'}
								  class:dark:bg-teal-900={project.recruitingStatus === 'Looking for Co-founder'}
								  class:dark:text-teal-300={project.recruitingStatus === 'Looking for Co-founder'}
								  class:dark:ring-teal-700={project.recruitingStatus === 'Looking for Co-founder'}
							>
								{project.recruitingStatus}
							</span>
						{/if}
					</div>
					<span class="text-neutral-600">{project.date}</span>
				</div>
				<p class="text-sm text-neutral-600 mb-0!">{project.summary}</p>
			</summary>
			<div class="mt-2 space-y-2 pt-0">
				<p>{project.description}</p>
				<p>{project.outcome}</p>
				<a href={project.link} class="text-blue-500 dark:text-blue-400 hover:underline">Check it out →</a>
			</div>
		</details>
	{/each}
</div>
