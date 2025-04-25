<script lang="ts">
	import * as config from '$lib/data/config';
	import RecentPosts from '$lib/components/RecentPosts.svelte';
	import Newsletter from '$lib/components/Newsletter.svelte';
	import Connect from '$lib/components/Connect.svelte';
	import { projects } from '$lib/data/projects';
	import RecentProjects from '$lib/components/RecentProjects.svelte';
	import Intro from '$lib/components/Intro.svelte';
	let { data } = $props();
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<Intro />

<Newsletter />

<RecentProjects {projects} />

<RecentPosts posts={data.posts} />

<Connect />