<script lang="ts">
	import { fly } from 'svelte/transition';
	import { onMount, onDestroy } from 'svelte';
	
	let { title = '', isHovered = false, children } = $props();
	let isDesktop = $state(false);
	let mediaQueryList: MediaQueryList | null = null;
	
	function checkScreenSize(event: MediaQueryListEvent | MediaQueryList) {
		isDesktop = event.matches;
		if (!isDesktop) {
			isHovered = false; // Ensure tooltip hides if screen shrinks
		}
	}
	
	onMount(() => {
		if (typeof window !== 'undefined') {
			mediaQueryList = window.matchMedia('(min-width: 768px) and (pointer: fine)');
			checkScreenSize(mediaQueryList);
			mediaQueryList.addEventListener('change', checkScreenSize);
		}
	});
	
	onDestroy(() => {
		if (mediaQueryList) {
			mediaQueryList.removeEventListener('change', checkScreenSize);
		}
	});
	
	function mouseOver(event: MouseEvent | FocusEvent) {
		if (isDesktop) {
			isHovered = true;
		}
	}
	function mouseLeave(event: MouseEvent | FocusEvent) {
		if (isDesktop) {
			isHovered = false;
		}
	}
</script>

<div
	role="group"
	class="tooltip-wrapper relative inline-block"
	onmouseover={mouseOver}
	onmouseleave={mouseLeave}
	onfocus={mouseOver}
	onblur={mouseLeave}
>
	{@render children?.()}

	{#if isHovered && isDesktop}
		<div
			class="tooltip absolute left-full top-1/2 -translate-y-1/2 ml-2 whitespace-nowrap z-10 shadow-lg text-xs rounded-full px-2 py-1 bg-neutral-900 text-neutral-300 inset-ring inset-ring-neutral-300/30"
			transition:fly={{ x: -50, duration: 500 }}
		>
			{title}
		</div>
	{/if}
</div>