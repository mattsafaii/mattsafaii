<script lang="ts">
	import { Home, Articles, Projects, Drops, Stack, Contact, Mail, X, Github } from '$lib/Icons';

	let { name, class: className } = $props();
</script>

<span class={className}>
	{#if name == 'home'}
		<Home />
	{/if}

	{#if name == 'articles'}
		<Articles />
	{/if}

	{#if name == 'projects'}
		<Projects />
	{/if}

	{#if name == 'drops'}
		<Drops />
	{/if}

	{#if name == 'stack'}
		<Stack />
	{/if}

	{#if name == 'contact'}
		<Contact />
	{/if}

	{#if name == 'mail'}
		<Mail />
	{/if}
	
	{#if name == 'x'}
		<X />
	{/if}

	{#if name == 'github'}
		<Github />
	{/if}
</span>
