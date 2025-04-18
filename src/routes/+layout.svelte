<script lang="ts">
	import Navigation from '$lib/components/Navigation.svelte';
	import PageTransition from './transition.svelte'
	import BlurEffect from '$lib/components/BlurEffect.svelte';
	import { onNavigate } from '$app/navigation'
	import '../app.css';
	let { children, data } = $props();

	onNavigate((navigation) => {
		if (!document.startViewTransition) return

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve()
				await navigation.complete
			})
		})
	})
</script>

<!-- Main container: centers content, sets max width, horizontal padding -->
<div class="relative flex flex-col md:flex-row md:flex-nowrap gap-6 md:gap-12 box-content mx-auto max-w-2xl px-4 sm:px-8">
	<aside class="md:sticky md:top-0 md:h-screen md:py-24">
		<Navigation />
	</aside>
	<main class="w-full flex-1 py-8 md:py-24">
		<PageTransition url={data.url}>
			<div class="min-h-screen space-y-8 md:space-y-16">
				{@render children?.()}
			</div>
		</PageTransition>
	</main>
</div>
<BlurEffect />