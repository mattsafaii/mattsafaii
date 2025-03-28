<script>
	import Footer from '$lib/components/Footer.svelte';
	import PageTransition from './transition.svelte'
	import { title, description,navLinks } from '$lib/config';

	import '../app.css';

	let { children, data } = $props();
</script>

<div class="flex gap-12 mx-auto min-h-screen w-full max-w-4xl px-8">
	<aside class="sticky top-0 hidden h-screen w-48 py-20 md:block">
		<nav class="flex h-full w-full flex-col gap-12 overflow-visible" aria-label="Desktop navigation">
			<div class="flex w-full flex-col items-start gap-4 text-left">
				<img src="matt-safaii-profile-pic.jpg" alt="Matt Safaii" loading="eager" width="72" height="72" class="rounded-full">
				<div>
					<span class="text-lg font-medium">{title}</span>
					<p>{description}</p>
				</div>
			</div>
			<ul class="space-y-4">
				{#each navLinks as link}
					<li>
						<a class="text-lg font-medium" href={link.href}>
							<span>{link.label}</span>
						</a>
					</li>
				{/each}
			</ul>
		</nav>
	</aside>
	<div class="flex h-min w-full flex-col gap-16 overflow-visible py-8 md:gap-24 md:py-20">
		<PageTransition url={data.url}>
			<main class="space-y-16">
				{@render children?.()}
			</main>
		</PageTransition>
		<Footer />
	</div>
</div>