<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import PageTransition from './transition.svelte'
	import { title, description,navLinks } from '$lib/config';

	import '../app.css';

	let { children, data } = $props();
</script>

<div class="relative flex flex-wrap gap-12 box-content mx-auto max-w-3xl">
	<aside class="flex-grow py-24 sticky top-0 h-screen">
		<nav class="space-y-6">
			<div class="space-y-2">
				<img src="matt-safaii-profile-pic.jpg" alt="Matt Safaii" loading="eager" width="72" height="72" class="rounded-full">
				<div>
					<span class="text-lg font-medium">{title}</span>
					<p>{description}</p>
				</div>
			</div>
			<ul class="space-y-2">
				{#each navLinks as link}
					<li>
						<a class="flex items-center justify-between text-lg hover:bg-stone-400 hover:text-stone-900" href={link.href}>
							<span>{link.label}</span>
							<span>&#x2192;</span>
						</a>
					</li>
				{/each}
			</ul>
		</nav>
	</aside>
	<main class="basis-0 grow-[999] min-w-[50%] py-24">
		<PageTransition url={data.url}>
			<div class="min-h-screen space-y-16">
				{@render children?.()}
			</div>
		</PageTransition>
		<Footer />
	</main>
</div>