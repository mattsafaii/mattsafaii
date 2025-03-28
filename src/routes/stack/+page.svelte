<script lang="ts">
  const tools = [
    { name: 'ChatGPT', category: 'Artificial Intelligence', image: '/images/tools/chatgpt.webp' },
    { name: 'Linear', category: 'Productivity', image: '/images/tools/linear.webp' },
    { name: 'Slack', category: 'Productivity', image: '/images/tools/slack.webp' },
    { name: 'Lemon Squeezy', category: 'Development', image: '/images/tools/lemonsqueezy.webp' },
    { name: 'Framer', category: 'Development', image: '/images/tools/framer.webp' },
    { name: 'Typefully', category: 'Productivity', image: '/images/tools/typefully.webp' },
    { name: 'Arc', category: 'Productivity', image: '/images/tools/arc.webp' },
    { name: 'Figma', category: 'Design', image: '/images/tools/figma.webp' }
  ];
</script>

<div class="min-h-screen p-8">
  <div class="max-w-2xl mx-auto space-y-16">
    <div>
      <h1>Software Stack</h1>
      <p>Tools, resources and software I use daily.</p>
    </div>
    
    <div class="space-y-4">
      {#each tools as tool}
        <div class="list-item">
          <div class="flex items-center gap-4">
            <img src={tool.image} alt={tool.name} class="w-10 h-10 rounded-lg" loading="lazy" />
            <div>
              <h3>{tool.name}</h3>
              <p>{tool.category}</p>
            </div>
          </div>
        </div>
      {/each}
    </div>

    <div>
      <h2 class="text-2xl font-bold mb-6">Got a tool I should test?</h2>
      <p class="text-gray-600 mb-6">I'm always looking for new software to try out, would love to test yours as well and write a review on my website.</p>
      <button class="bg-secondary text-white px-6 py-3 rounded-lg hover:bg-secondary/90 transition-colors">
        Submit
      </button>
    </div>
  </div>
</div>
