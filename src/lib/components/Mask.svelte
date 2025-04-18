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

<div class="flex gap-x-4 sm:gap-x-8 rounded-full p-2 items-center">
    <span 
        class="grid content-end h-[var(--size)]" 
        style="grid-template-columns: repeat({Math.min(images.length, MAX_IMAGES)}, var(--column))"
    >
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
            <span class="flex flex-nowrap items-center justify-center text-xs sm:text-sm text-neutral-500 dark:text-neutral-400">
                {images.length} {images.length === 1 ? 'item' : 'items'}
            </span>
        {:else}
            <svg class="size-5 sm:size-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg>
        {/if}
    </span>
</div>

<style>
    /* Default (mobile) styles */
    :root {
        --size: 32px; /* Smaller size for mobile */
        --border: 4px;  /* Smaller border for mobile */
        --column: 24px; /* Adjust overlap for mobile */
    }

    /* Styles for larger screens (adjust breakpoint as needed) */
    @media (min-width: 640px) { /* Corresponds to Tailwind's 'sm' breakpoint */
        :root {
            --size: 48px;
            --border: 6px;
            --column: 32px;
        }
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
        /* Calculate the radius needed, considering border */
        --circle: calc(((var(--border) * 2) + var(--size)) * 0.5);

        /* Apply the mask: transparent outside the circle, opaque inside */
        mask: radial-gradient(
            /* Shape and size */
            var(--circle) var(--circle) at 
            /* Position (original logic) */
            calc(var(--circle) - var(--column) - var(--border)) 50%,
            /* Colors: transparent outside, opaque inside */
            #0000 var(--circle), 
            #fff calc(var(--circle) + 0.5px) /* Use #fff for opaque */
        ) 
        /* Mask position, size, and repeat */
        0 calc(var(--size) * 0.5) / 100% 100% no-repeat;
    }
    [data-masked] > span {
        transition: translate 0.2s;
    }
    /* Consider disabling hover on touch devices if needed, but keeping for now */
    @media (hover: hover) {
        [data-masked]:hover span:first-of-type {
            translate: 0 -50%;
        }
        
        [data-masked]:hover + [data-masked] {
            mask-position: 0 0;
        }
    }
</style>