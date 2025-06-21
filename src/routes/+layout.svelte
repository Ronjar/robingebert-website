<script lang="ts">
  import "../app.css";
  import ThemeToggle from "$lib/components/ThemeToggle.svelte";
  import { afterNavigate } from "$app/navigation";

  let { children } = $props();
</script>

<div class="min-h-screen text-base-content transition-colors duration-300">
  <div
    class="navbar bg-base-100 flex justify-between sticky top-0 z-20 shadow-none"
  >
    <div class="menu menu-horizontal gap-2 align-center justify-center">
      <a class="btn btn-ghost text-xl" href="/">Home</a>
      <a href="/blog" class="btn btn-ghost text-xl">Blog</a>
    </div>
    <div class="menu menu-horizontal gap-2 align-center justify-center">
      <ThemeToggle />
    </div>
  </div>
  <div class="fixed bottom-4 right-4">
    <a href="/imprint" class="btn btn-ghost">Imprint</a>
  </div>
  {@render children()}
</div>
