<script lang="ts">
import { stack } from '$lib/data/stack';
</script>

<div class="space-y-2">
  <h1>Software Stack</h1>
  <p>Tools, resources and software I use daily.</p>
</div>

<div class="space-y-8">
  {#each stack as stack}
    <details class="group">
      <summary class="mb-4 text-xl list-none cursor-pointer group-open:mb-4">{stack.Category}</summary>
      <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {#each stack.items as item}
            <div>
              <h3 class="font-medium">{item.name}</h3>
              <p class="text-sm text-neutral-600">{item.description}</p>
            </div>
        {/each}
      </div>
    </details>
  {/each}
</div>
