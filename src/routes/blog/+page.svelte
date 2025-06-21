<script lang="ts">
  import BlogListCard from '$lib/components/BlogListCard.svelte';
  import type { Site } from '$lib/types/site';

  let { data } = $props();

  const posts: Site[] = Array.isArray(data.posts) ? data.posts : [];

  let searchQuery = $state('');
  let selectedTag: string = $state('');

  let allTags = Array.from(new Set(posts.flatMap(p => p.tags))).sort();

  let filteredPosts = $derived.by(() => posts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (selectedTag != '' ? post.tags.includes(selectedTag) : true)
  ));

  let postsByYear = $derived.by(() => filteredPosts.reduce((acc, post) => {
    const year = new Date(post.date).getFullYear();
    (acc[year] ??= []).push(post);
    return acc;
  }, {} as Record<number, Site[]>));

  let years = $derived(Object.keys(postsByYear)
    .map(y => parseInt(y))
    .sort((a, b) => b - a));

  function setTag(tag: string) {
    selectedTag = tag;
  }
</script>

<svelte:head>
	<title>My Blog</title>
</svelte:head>
<div class="max-w-3xl mx-auto py-8 px-4">
  <h1 class="text-3xl font-bold">My Blog</h1>
  <p class="text-base-content/60 mb-4">
    Welcome to my blog! Here you can find all my latest posts, tutorials, setups, sorted by year.
  </p>

  <div class="mb-8">
    <input
      type="text"
      placeholder="Search by title"
      bind:value={searchQuery}
      class="input input-bordered w-full mb-4"
    />

    <form class="filter">
      <input class="btn btn-square" type="reset" value="×" aria-label="Remove tag selection" role="searchbox"/>
      {#each allTags as tag}
        <input class="btn" type="radio" name="tags" aria-label={tag} onclick={() => setTag(tag)} role="searchbox"/>
      {/each}
    </form>
  </div>

  {#if years.length === 0}
    <p class="text-center text-base-content/60">
      No blog entries found.
    </p>
  {:else}
    {#each years as year}
      <section>
        <h2 class="text-2xl font-semibold mb-4">{year}</h2>
        <div class="space-y-6">
          {#each postsByYear[year] as post}
            <BlogListCard
              title={post.title}
              slug={post.slug}
              description={post.description}
              date={post.date}
              tags={post.tags}
            />
          {/each}
        </div>
      </section>
    {/each}
  {/if}
</div>
