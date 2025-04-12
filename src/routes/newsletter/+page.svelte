<script lang="ts">
	import * as config from '$lib/data/config';
    import Newsletter from '$lib/components/Newsletter.svelte';
	let { data } = $props()
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<section>
    <article class="prose text-neutral-900">
        <h1>The Manual.</h1>
        <p>The Manual is a monthly newsletter where I share stories, experiences and links to anything I’ve found interesting. I don’t usually share this stuff anywhere else but in this newsletter. What to expect:</p>
        <ul>
            <li>
                <p>Personal stories and experiences</p>
            </li>
            <li>
                <p>Self-development and business related info</p>
            </li>
            <li>
                <p>“Link Lowdown” section sharing links to websites, products, articles and anything else worth sharing</p>
            </li>
            <li>
                <p>Exclusive offers and discounts for subscribers only</p>
            </li>
            <li>
                <p>Sent once a month</p>
            </li>
        </ul>
    </article>
    <Newsletter />
</section>