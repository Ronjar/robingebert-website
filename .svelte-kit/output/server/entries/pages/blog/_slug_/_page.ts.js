import { e as error } from "../../../../chunks/index.js";
const __variableDynamicImportRuntimeHelper = (glob, path, segs) => {
  const v = glob[path];
  if (v) {
    return typeof v === "function" ? v() : Promise.resolve(v);
  }
  return new Promise((_, reject) => {
    (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(
      reject.bind(
        null,
        new Error(
          "Unknown variable dynamic import: " + path + (path.split("/").length !== segs ? ". Note that variables only represent file names one level deep." : "")
        )
      )
    );
  });
};
const prerender = true;
async function load({ params }) {
  try {
    const site = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../../../site/blog/Test.md": () => import("../../../../chunks/Test.js") }), `../../../site/blog/${params.slug}.md`, 6);
    return {
      content: site.default,
      meta: site.metadata
    };
  } catch (e) {
    error(404, `Could not find ${params.slug}`);
  }
}
export {
  load,
  prerender
};
