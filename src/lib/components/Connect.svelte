<script lang="ts">
    import Icon from './Icon.svelte';
</script>

<section class="space-y-2">
    <h2>Connect</h2>
    <!-- <p>I'm always looking for new people to connect with. If you'd like to get in touch, please use the form below.</p> -->
    <div class="flex flex-nowrap justify-start items-center gap-4">
        <a class="flex items-center gap-2 text-sm text-neutral-600/80 dark:text-neutral-300 hover:text-neutral-600 transition-colors inset-ring inset-ring-neutral-300/80 dark:inset-ring-neutral-700/80 rounded-md px-2 py-1" href="mailto:mattsafaii@gmail.com">
            <Icon name="mail" class="fill-current" /> matt@mattsafaii.com
        </a>
        <a class="flex items-center gap-2 text-sm text-neutral-600/80 dark:text-neutral-300 hover:text-neutral-600 transition-colors inset-ring inset-ring-neutral-300/80 dark:inset-ring-neutral-700/80 rounded-md px-2 py-1" href="https://x.com/mattsafaii">
            <Icon name="x" class="fill-current" /> @mattsafaii
        </a>
        <a class="flex items-center gap-2 text-sm text-neutral-600/80 dark:text-neutral-300 hover:text-neutral-600 transition-colors inset-ring inset-ring-neutral-300/80 dark:inset-ring-neutral-700/80 rounded-md px-2 py-1" href="https://github.com/mattsafaii">
            <Icon name="github" class="fill-current" /> @mattsafaii
        </a>
    </div>
</section>