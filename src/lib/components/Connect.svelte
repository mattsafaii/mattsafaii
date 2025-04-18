<script lang="ts">
    import * as config from '$lib/data/config';
    import Icon from './Icon.svelte';
</script>

<footer class="space-y-10">
    <div class="space-y-8">
        <div class="space-y-4">
            <h2>Let's Connect</h2>
            <p>Whether you have a project in mind, a question, or just want to say hi, feel free to reach out.</p>
            <a class="button" href="mailto:mattsafaii@gmail.com">Email me</a>
            <a class="button-secondary" href="https://x.com/mattsafaii">Book a call</a>
        </div>
        <div class="space-y-4">
            <div></div>
            <p>You can also find me on X, Github, and LinkedIn.</p>
            <div class="flex flex-wrap gap-2 sm:gap-4">
                <a class="flex items-center gap-2 text-sm text-neutral-600/80 dark:text-neutral-300 hover:text-neutral-600 transition-colors inset-ring inset-ring-neutral-300/80 dark:inset-ring-neutral-700/80 rounded-md px-2 py-1" href="mailto:mattsafaii@gmail.com">
                    <Icon name="mail" class="fill-current" /> <span class="hidden sm:inline">matt@mattsafaii.com</span>
                </a>
                <a class="flex items-center gap-2 text-sm text-neutral-600/80 dark:text-neutral-300 hover:text-neutral-600 transition-colors inset-ring inset-ring-neutral-300/80 dark:inset-ring-neutral-700/80 rounded-md px-2 py-1" href="https://x.com/mattsafaii">
                    <Icon name="x" class="fill-current" /> <span class="hidden sm:inline">@mattsafaii</span>
                </a>
                <a class="flex items-center gap-2 text-sm text-neutral-600/80 dark:text-neutral-300 hover:text-neutral-600 transition-colors inset-ring inset-ring-neutral-300/80 dark:inset-ring-neutral-700/80 rounded-md px-2 py-1" href="https://github.com/mattsafaii">
                    <Icon name="github" class="fill-current" /> <span class="hidden sm:inline">@mattsafaii</span>
                </a>
            </div>
        </div>
    </div>
    <p>&copy Copyright {new Date().getFullYear()} — {config.title} </p>
</footer>