<script lang="ts">
	/** @runes */
	let { title = "Newsletter", description = "I'm sending out an irregular newsletter sometimes. If you wanna be part of the subscriber list, I'd love to have you sign up." } = $props<{
		title?: string;
		description?: string;
	}>()
</script>

<section class="space-y-4">
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
			class="w-full pl-4 py-3 pr-32 rounded-md bg-stone-900 text-stone-300 placeholder:text-stone-500 border border-stone-700 focus:outline-none focus:ring-2 focus:ring-stone-600 text-sm"
		/>
		<button
			type="submit"
			class="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-1 bg-stone-800 text-stone-300 rounded hover:bg-stone-800 transition-colors"
		>
			Subscribe
		</button>
	</form>
</section>