<script lang="ts">
  const products = [
    { name: 'MGENCY Hat', category: 'Merch', price: '$28', image: 'mgency-hat.png' },
  ];
</script>

<div class="space-y-2">
  <h1>Drops</h1>
  <p>Random products I create</p>
</div>

<div class="space-y-4">
  {#each products as product}
    <a href={product.link} class="list-item">
      <div class="flex items-center gap-4">
        <img src={product.image} alt={product.name} class="w-10 h-10 rounded-lg" loading="lazy" />
        <div>
          <h3>{product.name}</h3>
          <span class="text-sm text-stone-400">{product.category} • {product.price}</span>
        </div>
      </div>
    </a>
  {/each}
</div>
