<script lang="ts">
  import { theme } from '$lib/stores/theme';
  import { derived } from 'svelte/store';
  import { onMount } from 'svelte';
  import { Moon, Sun } from '@lucide/svelte';

  const isDark = derived(theme, ($theme) => $theme === 'dark');

  let checked = $state(false);

  onMount(() => {
    const unsubscribe = isDark.subscribe((d) => {
      checked = d;
    });
    return unsubscribe;
  });

  function toggleTheme() {
    theme.toggle();
  }
</script>

<label class="btn btn-ghost btn-circle swap swap-rotate p-4" role="form" aria-label="Toggle theme">
  <input type="checkbox" class="theme-controller" bind:checked onchange={toggleTheme} value="winter" aria-label="Light / Dark theme toggle" />

   <Moon 
    class="swap-on w-6 h-6 fill-current"
    size={24}
  />

  <Sun 
    class="swap-off w-6 h-6 fill-current"
    size={24}
  />
</label>
