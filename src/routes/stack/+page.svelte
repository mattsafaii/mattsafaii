<script lang="ts">
  import * as config from '$lib/data/config';
  import { stack } from '$lib/data/stack';
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
  <h1>Stack</h1>
  <p>Tools, resources and software I use daily.</p>
</div>

<div class="space-y-2 [&:has(details[open])>details:not([open])]:opacity-50">
	{#each stack as stack, i}
		<details 
			class="group -mx-4 rounded-lg transition-[colors,opacity] duration-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 [&[open]]:bg-neutral-100 dark:[&[open]]:bg-neutral-800 p-4"
			name="project"
			bind:this={detailsElements[i]}
		>
			<summary class="cursor-pointer list-none marker:hidden group-open:marker:block -m-4 p-4">
        <div class="cursor-pointer list-none marker:hidden group-open:marker:block -m-4 p-4">
          <h3>{stack.category}</h3>
        </div>
			</summary>
			<div class="mt-2 space-y-2 pt-0 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {#each stack.items as item}
          <div>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </div>
        {/each}
			</div>
		</details>
	{/each}
</div>
