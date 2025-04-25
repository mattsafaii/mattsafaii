<script lang="ts">
	/** @runes */
	let { title = "The Newsletter", description = "I’m building a bunch of things. Whenever I learn something useful or find a good tool, I’ll share it here." } = $props<{
		title?: string;
		description?: string;
	}>()
</script>

<section>
	<div>
		<h2>{title}</h2>
		<p>{description}</p>
	</div>
	<form class="relative" method="POST">
		<input
			type="email"
			name="email"
			placeholder="Enter your email"
			autocomplete="off"
			autocapitalize="off"
			autocorrect="off"
			spellcheck="false"
			class="w-full pl-4 py-3 pr-32 rounded-md bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-300 placeholder:text-neutral-600 border border-neutral-200 dark:border-neutral-600 focus:outline-none focus:ring-2 focus:ring-neutral-600 text-sm"
		/>
		<button
			type="submit"
			class="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-1 bg-neutral-200 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-300 rounded hover:bg-neutral-300/80 inset-ring inset-ring-neutral-300 dark:inset-ring-neutral-700 shadow-xs transition-colors"
		>
			Subscribe
		</button>
	</form>
</section>