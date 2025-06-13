import { browser } from '$app/environment';
import { writable } from 'svelte/store';

type Theme = 'light' | 'dark';

function createThemeStore() {
  const initial: Theme = browser 
    ? (localStorage.getItem('theme') === 'dark' ? 'dark' : 'light')
    : 'light';

  if (browser) {
    document.documentElement.classList.toggle('dark', initial === 'dark');
  }

  const { subscribe, set, update } = writable<Theme>(initial);

  return {
    subscribe,
    toggle: () =>
      update((current) => {
        const next = current === 'light' ? 'dark' : 'light';
        if (browser) {
          localStorage.setItem('theme', next);
          document.documentElement.classList.toggle('dark', next === 'dark');
        }
        return next;
      }),
    setTheme: (t: Theme) => {
      if (browser) {
        localStorage.setItem('theme', t);
        document.documentElement.classList.toggle('dark', t === 'dark');
      }
      set(t);
    }
  };
}

export const theme = createThemeStore();
