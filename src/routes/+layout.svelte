<script lang="ts">
  import "../app.css";
  import ThemeToggle from '$lib/components/ThemeToggle.svelte';
</script>

<div class="min-h-screen text-base-content transition-colors duration-300">
  <div class="navbar bg-base-100 flex justify-between sticky top-0 z-20 shadow-none">
    <div class="flex-1">
      <a class="btn btn-ghost text-xl" href="/">Home</a>
    </div>
      <div class="menu menu-horizontal gap-2 align-center justify-center">
        <a href="/blog" class="btn btn-ghost text-lg">Blog</a>
          <ThemeToggle />
      </div>
    </div>
  <div class="absolute top-4 right-4">
</div>

  <slot />
</div>
