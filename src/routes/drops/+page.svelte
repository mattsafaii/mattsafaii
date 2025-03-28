<script lang="ts">
  const tools = [
    { name: 'Dark Mesh Wallpapers', category: 'Wallpapers', price: '$10', image: '/images/tools/chatgpt.webp' },
    { name: 'Wave Wallpapers', category: 'Wallpapers', price: '$10', image: '/images/tools/linear.webp' },
    { name: 'Prism Wallpapers', category: 'Wallpapers', price: '$10', image: '/images/tools/slack.webp' },
    { name: 'Gradient Wallpapers', category: 'Wallpapers', price: '$10', image: '/images/tools/lemonsqueezy.webp' },
    { name: 'SvelteKit Component Pack', category: 'Development', price: '$10', image: '/images/tools/framer.webp', link: 'https://www.sveltekit.com/components' },
    { name: 'Lightroom Presets', category: 'Presets', price: '$10', image: '/images/tools/typefully.webp', link: 'https://www.lightroompresets.com' }
  ];
</script>

<div class="min-h-screen p-8">
  <div class="max-w-2xl mx-auto space-y-16">
    <div>
      <h1>Drops</h1>
      <p>Random products I create</p>
    </div>
    
    <div class="space-y-4">
      {#each tools as tool}
        <a href={tool.link} class="list-item">
          <div class="flex items-center gap-4">
            <img src={tool.image} alt={tool.name} class="w-10 h-10 rounded-lg" loading="lazy" />
            <div>
              <h3>{tool.name}</h3>
              <span class="text-sm text-stone-400">{tool.category} • {tool.price}</span>
            </div>
          </div>
        </a>
      {/each}
    </div>
  </div>
</div>
