<script lang="ts">
	import * as config from '$lib/config'
	import PostsList from '$lib/components/PostsList.svelte'
	import Newsletter from '$lib/components/Newsletter.svelte'
	import Connect from '$lib/components/Connect.svelte'
	let { data } = $props()

	const ventures = [
		{
			name: 'MGENCY',
			description: 'Indie product studio',
			link: 'https://mgency.com'
		},
		{
			name: 'YouTube | Matt Safaii',
			description: 'Aesthetic tech videos',
			link: 'https://mgency.com'
		},
		{
			name: 'Zonebrite Solutions',
			description: 'Local surveillance installation services',
			link: 'https://zonebrite.com'
		},
	]
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<section class="space-y-4">
	<h1>Hi. I'm Matt. <br> Designer from Los Angeles</h1>
	<p>Currently, I'm designing at the visionOS team at Apple and building simple and functional Framer templates on the side.</p>
	<!-- <div class="flex gap-2">
		<a href="#" class="button">About me</a>
		<a href="#" class="button">Email me</a>
	</div> -->
</section>

<Newsletter />

<section class="space-y-4">
	<div>
		<h2>Ventures</h2>
		<p>Businesses I'm actively working on</p>
	</div>
	{#each ventures as venture}
		<div class="list-item">
			<h3 class="leading-6">{venture.name}</h3>
			<span>{venture.description}</span>
		</div>
	{/each}
</section>

<PostsList posts={data.posts} />

<Connect />
