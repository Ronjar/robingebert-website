import type { Site } from '$lib/types/site';
import { fetchSites } from '$lib/fetchSites';

export const prerender = true;

export async function load() {
  const files = await fetchSites();

  const posts: Site[] = Array.isArray(files)
    ? files
    : Object.values(files);

  posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return { posts };
}
