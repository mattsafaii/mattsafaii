<script lang="ts">
    interface Image {
        src: string;
        alt: string;
        bgClass: string;
    }

    let { images, showCount = false } = $props<{ 
        images: Image[],
        showCount?: boolean 
    }>();
    const MAX_IMAGES = 6;
</script>

<div class="flex gap-x-16 rounded-full p-2 items-center">
    <span class="grid grid-cols-[repeat({Math.min(images.length, MAX_IMAGES)},var(--column))] content-end h-[var(--size)]">
      {#each images.slice(0, MAX_IMAGES) as image}
        <span data-masked class="aspect-[1/2] w-[var(--size)] grid items-end">
          <span class="inline-grid place-items-center w-full h-[var(--size)] rounded-full {image.bgClass}">
            <img src={image.src} alt={image.alt} class="w-full h-full rounded-full overflow-visible" />
          </span>
        </span>
      {/each}
    </span>
    <span class="w-[var(--size)] grid place-items-center min-w-fit">
        {#if showCount}
            <span class="flex flex-nowrap items-center justify-center text-sm text-neutral-500 dark:text-neutral-400">
                {images.length} {images.length === 1 ? 'item' : 'items'}
            </span>
        {:else}
            <svg class="size-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg>
        {/if}
    </span>
</div>

<style>
    :root {
        --size: 48px;
        --border: 8px;
        --column: 32px;
    }

    @property --y {
        syntax: '<number>';
        inherits: true;
        initial-value: 0.5;
    }

    [data-masked] {
        position: relative;
    }

    [data-masked]:not(:first-of-type) {
        --circle: calc(((var(--border) * 2) + var(--size)) * 0.5);
        --y: calc(100% - (var(--size) * 0.5));
    mask: radial-gradient(
        var(--circle) var(--circle) at 
        calc(var(--circle) - var(--column) - var(--border))
        50%
    , #0000 var(--circle), #fff var(--circle)) 0 calc(var(--size) * 0.5) / 100% 100%;
        transition: mask-position 0.2s;
    }
    [data-masked] > span {
        transition: translate 0.2s;
    }
    [data-masked]:hover span:first-of-type {
        translate: 0 -50%;
    }

    [data-masked]:hover + [data-masked] {
        mask-position: 0 0;
    }
</style>