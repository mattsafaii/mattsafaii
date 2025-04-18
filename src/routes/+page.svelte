<script lang="ts">
	import * as config from '$lib/data/config';
	import RecentPosts from '$lib/components/RecentPosts.svelte';
	import Newsletter from '$lib/components/Newsletter.svelte';
	import Connect from '$lib/components/Connect.svelte';
	import { projects } from '$lib/data/projects';
	import RecentProjects from '$lib/components/RecentProjects.svelte';
	let { data } = $props();
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<section class="space-y-4">
	<div class="flex flex-col sm:flex-row items-start sm:items-center gap-4">
		<img
			src="matt-safaii-profile-pic.jpg"
			alt="Matt Safaii"
			loading="eager"
			class="w-24 rounded-full"
		/>
		<div class="space-y-2">
			<h1>Hi. I'm Matt.</h1>
			<p>I'm a developer, creator, and recovering perfectionist. Currently focused on building my own projects.</p>
		</div>
	</div>
</section>

<Newsletter />

<RecentProjects {projects} />

<RecentPosts posts={data.posts} />

<Connect />