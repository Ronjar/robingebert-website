import * as universal from '../entries/pages/blog/_page.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blog/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/blog/+page.ts";
export const imports = ["_app/immutable/nodes/3.T0FMf9z6.js","_app/immutable/chunks/DGPQAdF1.js","_app/immutable/chunks/3MqqZaLS.js","_app/immutable/chunks/BMFgCgEk.js"];
export const stylesheets = [];
export const fonts = [];
