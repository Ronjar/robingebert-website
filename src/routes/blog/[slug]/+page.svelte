<script lang="ts">
	let { data } = $props();
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	{#if data.meta.title}
		<meta property="og:title" content={data.meta.title} />
	{/if}
	{#if data.meta.description}
		<meta property="og:description" content={data.meta.description} />
	{/if}
	{#if data.meta.date}
		<meta
			property="og:article:modified_time"
			content={new Date(data.meta.date).toISOString()}
		/>
	{/if}
</svelte:head>

<div
	class="p-6 mt-20 max-w-4xl mx-auto bg-base-200 rounded-xl shadow-md space-y-4"
>
	<h1 class="text-3xl font-bold">{data.meta.title}</h1>
	{#if data.meta.date}
		<p class="text-sm text-base-content/70">
			{new Date(data.meta.date).toLocaleDateString('en-US', {
				year: 'numeric',
				month: 'long',
				day: 'numeric'
			})}
		</p>
	{/if}
	{#if data.meta.tags && data.meta.tags.length > 0}
		<p class="text-sm text-base-content/70">
			{#each data.meta.tags.split(',') as word}
				<span class="badge badge-secondary ml-1">{word.trim()}</span>
			{/each}
		</p>
	{/if}
	<div class="prose">
		<data.content />
	</div>
</div>
