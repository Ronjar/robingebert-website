import { g as spread_props, f as pop, p as push, h as attr, j as slot } from "../../chunks/index3.js";
import { w as writable, d as derived } from "../../chunks/index2.js";
import { I as Icon } from "../../chunks/Icon.js";
function createThemeStore() {
  const initial = "light";
  const { subscribe, set, update } = writable(initial);
  return {
    subscribe,
    toggle: () => update((current) => {
      const next = current === "light" ? "dark" : "light";
      return next;
    }),
    setTheme: (t) => {
      set(t);
    }
  };
}
const theme = createThemeStore();
function Moon($$payload, $$props) {
  push();
  let { $$slots, $$events, ...props } = $$props;
  const iconNode = [
    [
      "path",
      { "d": "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" }
    ]
  ];
  Icon($$payload, spread_props([
    { name: "moon" },
    props,
    {
      iconNode,
      children: ($$payload2) => {
        props.children?.($$payload2);
        $$payload2.out += `<!---->`;
      },
      $$slots: { default: true }
    }
  ]));
  pop();
}
function Sun($$payload, $$props) {
  push();
  let { $$slots, $$events, ...props } = $$props;
  const iconNode = [
    [
      "circle",
      { "cx": "12", "cy": "12", "r": "4" }
    ],
    ["path", { "d": "M12 2v2" }],
    ["path", { "d": "M12 20v2" }],
    ["path", { "d": "m4.93 4.93 1.41 1.41" }],
    ["path", { "d": "m17.66 17.66 1.41 1.41" }],
    ["path", { "d": "M2 12h2" }],
    ["path", { "d": "M20 12h2" }],
    ["path", { "d": "m6.34 17.66-1.41 1.41" }],
    ["path", { "d": "m19.07 4.93-1.41 1.41" }]
  ];
  Icon($$payload, spread_props([
    { name: "sun" },
    props,
    {
      iconNode,
      children: ($$payload2) => {
        props.children?.($$payload2);
        $$payload2.out += `<!---->`;
      },
      $$slots: { default: true }
    }
  ]));
  pop();
}
function ThemeToggle($$payload, $$props) {
  push();
  derived(theme, ($theme) => $theme === "dark");
  let checked = false;
  $$payload.out += `<label class="btn btn-ghost btn-circle swap swap-rotate p-4"><input type="checkbox" class="theme-controller"${attr("checked", checked, true)} value="light"/> `;
  Moon($$payload, {
    class: "swap-on w-8 h-8 fill-current",
    size: 24
  });
  $$payload.out += `<!----> `;
  Sun($$payload, {
    class: "swap-off w-8 h-8 fill-current",
    size: 24
  });
  $$payload.out += `<!----></label>`;
  pop();
}
function _layout($$payload, $$props) {
  $$payload.out += `<div class="min-h-screen text-base-content transition-colors duration-300"><div class="navbar bg-base-100 flex justify-between sticky top-0 z-20 shadow-none"><div class="flex-1"><a class="btn btn-ghost text-xl" href="/">Home</a></div> <div class="menu menu-horizontal gap-2 align-center justify-center"><a href="/blog" class="btn btn-ghost text-lg">Blog</a> `;
  ThemeToggle($$payload);
  $$payload.out += `<!----></div></div> <div class="absolute top-4 right-4"></div> <!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></div>`;
}
export {
  _layout as default
};
