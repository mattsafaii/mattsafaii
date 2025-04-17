<script lang="ts">
  import * as config from '$lib/data/config';
  import { drops } from '$lib/data/drops';
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
  <h1>Drops</h1>
  <p>Products I've created.</p>
</div>

<div class="space-y-2 [&:has(details[open])>details:not([open])]:opacity-50">
	{#each drops as drop, i}
		<details 
			class="group -mx-4 rounded-lg transition-[colors,opacity] duration-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 [&[open]]:bg-neutral-100 dark:[&[open]]:bg-neutral-800 p-4"
			name="project"
      open={i === 0}
			bind:this={detailsElements[i]}
		>
			<summary class="cursor-pointer list-none marker:hidden group-open:marker:block -m-4 p-4">
        <div class="flex items-center justify-between cursor-pointer list-none marker:hidden group-open:marker:block -m-4 p-4">
          <h3 class="font-medium">{drop.category}</h3>
          {#if drop.category !== 'Latest Drop'}
            <div class="flex items-center">
              <div class="flex flex-row-reverse -space-x-3 space-x-reverse">
                {#each drop.items as item}
                  <div class="relative w-10 h-10 rounded-full ring-2 ring-neutral-50 dark:ring-neutral-700">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      class="w-full h-full rounded-full object-cover" 
                      loading="lazy" 
                    />
                  </div>
                {/each}
              </div>
              <span class="ml-4 text-sm text-neutral-500 dark:text-neutral-400">{drop.items.length} {drop.items.length === 1 ? 'item' : 'items'}</span>
            </div>
          {/if}
        </div>
			</summary>
      <div class="mt-8">
      {#if drop.items.length === 0}
        <div class="text-neutral-500 dark:text-neutral-400">No items available in this category.</div>
      {:else}
        <div 
          class="space-y-2 pt-0 grid gap-4 {drop.category === 'Latest Drop' ? 'grid-cols-1' : 'grid-cols-2 md:grid-cols-2 lg:grid-cols-3'}"
        >
          {#each drop.items as item}
            {#if drop.category === 'Latest Drop'}
            <div class="flex flex-col justify-center items-center gap-4 w-full">
              <img src={item.image} alt={item.name} class="rounded-lg" loading="lazy" />
              <div class="text-center">
                <h3>{item.name}</h3>
                <p>{item.price}</p>
              </div>
            </div>
            {:else}
            <div class="flex flex-col justify-center items-center gap-4">
              <img src={item.image} alt={item.name} class="w-10 h-10 rounded-lg" loading="lazy" />
              <div class="text-center">
                <h3>{item.name}</h3>
                <p>{item.price}</p>
              </div>
            </div>
            {/if}
          {/each}
        </div>
      {/if}
      </div>
		</details>
	{/each}
</div>