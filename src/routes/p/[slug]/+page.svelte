<script lang="ts">
	let { data } = $props();
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="website" />
	{#if data.meta.title}
		<meta property="og:title" content={data.meta.title} />
	{/if}
	{#if data.meta.description}
		<meta property="og:description" content={data.meta.description} />
	{/if}
</svelte:head>
<div class="p-4">
	<main
		class="p-6 2xl:mt-12 mt-4 max-w-4xl mx-auto bg-base-200 rounded-xl shadow-md space-y-4"
	>
		<h1 class="text-3xl font-bold">{data.meta.title}</h1>
		<div class="prose mt-8">
			<data.content />
		</div>
	</main>
</div>
