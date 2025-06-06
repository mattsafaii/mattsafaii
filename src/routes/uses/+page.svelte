<script lang="ts">
  import * as config from '$lib/data/config';
  import { uses } from '$lib/data/uses';
  import { onMount } from 'svelte';
  import Mask from '$lib/components/Mask.svelte';

  let detailsElements: HTMLDetailsElement[] = [];
  let hoveredCategory: string | null = null;

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
  <h1>Uses</h1>
  <p>Tools, resources and software I use daily.</p>
</div>

<div class="space-y-2 [&:has(details[open])>details:not([open])]:opacity-50">
	{#each uses as category, i}
		<details 
			class="group -mx-4 rounded-lg transition-[colors,opacity] duration-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 [&[open]]:bg-neutral-100 dark:[&[open]]:bg-neutral-800 p-4"
			name="project"
			bind:this={detailsElements[i]}
			on:mouseenter={() => hoveredCategory = category.category}
			on:mouseleave={() => hoveredCategory = null}
		>
			<summary class="flex items-center justify-between cursor-pointer list-none marker:hidden group-open:marker:block -m-4 p-4">
        <div class="cursor-pointer list-none marker:hidden group-open:marker:block -m-4 p-4">
          <h3>{category.category}</h3>
        </div>
        <div class="flex items-center">
          <Mask 
                images={category.items.map(item => ({ 
                    src: item.image, 
                    alt: item.name, 
                    bgClass: 'bg-neutral-50 dark:bg-neutral-300' 
                }))} 
                showCount={hoveredCategory === category.category}
            />
        </div>
			</summary>
			<div class="mt-8 space-y-2 pt-0 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {#each category.items as item}
          <div>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </div>
        {/each}
			</div>
		</details>
	{/each}
</div>
