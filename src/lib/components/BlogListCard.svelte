<script lang="ts">

  interface BlogEntry {
    title: string;
    slug: string;
    description: string;
    date: string;
    tags: string[];
  }

  let data: BlogEntry = $props();
</script>

<a
  href={`/blog/${data.slug}`}
  class="block border border-base-300 rounded-lg p-4 hover:shadow-xl transition-shadow duration-200 no-underline focus:outline-none"
>
  <article>
    <h2 class="text-xl font-semibold">{data.title}</h2>
    <p class="text-sm text-base-content/60 mt-1">
      {new Date(data.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })}
    </p>
    <p class="mt-2">{data.description}</p>

    {#if data.tags.length}
      <div class="mt-4 flex flex-wrap gap-2">
        {#each data.tags as tag}
          <span class="badge badge-secondary">{tag}</span>
        {/each}
      </div>
    {/if}
  </article>
</a>
