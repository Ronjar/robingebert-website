import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.7V9pmLVD.js","_app/immutable/chunks/DGPQAdF1.js","_app/immutable/chunks/3MqqZaLS.js","_app/immutable/chunks/BMFgCgEk.js","_app/immutable/chunks/CRFgCLcX.js","_app/immutable/chunks/czJSyklJ.js","_app/immutable/chunks/DITS2XTL.js","_app/immutable/chunks/BPrJDHAd.js","_app/immutable/chunks/Cdjtwoyp.js","_app/immutable/chunks/DjmFp_-1.js"];
export const stylesheets = [];
export const fonts = [];
