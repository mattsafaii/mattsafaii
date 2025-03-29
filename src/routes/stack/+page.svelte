<script lang="ts">
  const tools = [
    { name: 'HEY Email', category: 'Artificial Intelligence', image: '' },
    { name: 'HEY Calendar', category: 'Productivity', image: '' },
    { name: 'Reflect Notes', category: 'Productivity', image: '' },
    { name: 'Things 3', category: 'Development', image: '' },
    { name: 'MyMind', category: 'Development', image: '' },
    { name: 'Airtable', category: 'Productivity', image: '' },
    { name: 'Canva', category: 'Design', image: '' },
    { name: 'ChatGPT', category: 'Productivity', image: '' },
    { name: 'Grok', category: 'Productivity', image: '' },
    { name: 'Zed', category: 'Productivity', image: '' },
  ];
</script>

<div class="space-y-2">
  <h1>Software Stack</h1>
  <p>Tools, resources and software I use daily.</p>
</div>

<div class="space-y-4">
  {#each tools as tool}
    <div class="list-item">
      <div class="flex items-center gap-4">
        <!-- <img src={tool.image} alt={tool.name} class="w-10 h-10 rounded-lg" loading="lazy" /> -->
        <div>
          <h3>{tool.name}</h3>
          <p>{tool.category}</p>
        </div>
      </div>
    </div>
  {/each}
</div>
