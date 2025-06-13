import { C as head, l as escape_html, y as ensure_array_like, f as pop, p as push, h as attr } from "../../../../chunks/index3.js";
function _page($$payload, $$props) {
  push();
  let { data } = $$props;
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>${escape_html(data.meta.title)}</title>`;
    $$payload2.out += `<meta property="og:type" content="article"/> `;
    if (data.meta.title) {
      $$payload2.out += "<!--[-->";
      $$payload2.out += `<meta property="og:title"${attr("content", data.meta.title)}/>`;
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--> `;
    if (data.meta.description) {
      $$payload2.out += "<!--[-->";
      $$payload2.out += `<meta property="og:description"${attr("content", data.meta.description)}/>`;
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--> `;
    if (data.meta.date) {
      $$payload2.out += "<!--[-->";
      $$payload2.out += `<meta property="og:article:modified_time"${attr("content", new Date(data.meta.date).toISOString())}/>`;
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]-->`;
  });
  $$payload.out += `<div class="p-6 mt-20 max-w-4xl mx-auto bg-base-200 rounded-xl shadow-md space-y-4"><h1 class="text-3xl font-bold">${escape_html(data.meta.title)}</h1> `;
  if (data.meta.date) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<p class="text-sm text-base-content/70">${escape_html(new Date(data.meta.date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    }))}</p>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> `;
  if (data.meta.tags && data.meta.tags.length > 0) {
    $$payload.out += "<!--[-->";
    const each_array = ensure_array_like(data.meta.tags.split(","));
    $$payload.out += `<p class="text-sm text-base-content/70"><!--[-->`;
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let word = each_array[$$index];
      $$payload.out += `<span class="badge badge-secondary ml-1">${escape_html(word.trim())}</span>`;
    }
    $$payload.out += `<!--]--></p>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <div class="prose"><!---->`;
  data.content($$payload, {});
  $$payload.out += `<!----></div></div>`;
  pop();
}
export {
  _page as default
};
