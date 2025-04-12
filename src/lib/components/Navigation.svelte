<script lang="ts">
	import { page } from '$app/state';
	import { navLinks } from '$lib/data/config';
	import Icon from './Icon.svelte';
	import Tooltip from './Tooltip.svelte';
</script>

<nav
	class="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 md:inset-y-0 md:left-4 md:flex md:translate-x-0 md:items-center"
>
	<ul
		class="flex gap-2 rounded-full bg-neutral-100 px-2 py-0.5 inset-ring inset-ring-neutral-200 backdrop-blur-sm md:flex-col md:px-0.5 md:py-1.5 dark:bg-neutral-900/90 dark:inset-ring-neutral-800"
	>
		{#each navLinks as link (link.id)}
			<li>
				<Tooltip title={link.label}>
					<a
						href={link.href}
						class="nav-link p- flex h-8 w-8 items-center justify-center {page.url.pathname ===
						link.href
							? 'text-neutral-900 dark:text-neutral-300'
							: 'text-neutral-600 dark:text-neutral-600'} rounded-full transition-colors hover:text-neutral-600 dark:hover:text-neutral-300"
						aria-label={link.label}
						aria-current={page.url.pathname === link.href ? 'page' : undefined}
					>
						<Icon name={link.icon} class="" />
					</a>
				</Tooltip>
			</li>
		{/each}
	</ul>
</nav>

<style>
	nav {
		view-transition-name: navigation;
	}

	.nav-link {
		position: relative;
		isolation: isolate;

		&[aria-current='page'] {
			view-transition-name: active-link;
		}
	}
	.nav-link::after {
		content: '';
		position: absolute;
		inset: 0;
		border-radius: 9999px;
		opacity: 0;
		background: linear-gradient(to bottom, rgb(231 229 228 / 0.1), rgb(28 25 23 / 0.1));
		transition: opacity 0.2s ease;
		z-index: -1;

		&[aria-current='page'] {
			view-transition-name: active-link-bg;
		}
	}
	.nav-link:hover::after,
	.nav-link[aria-current='page']::after {
		opacity: 1;
	}
</style>
