import "clsx";
import { g as spread_props, f as pop, p as push, h as attr, l as escape_html, x as bind_props } from "../../chunks/index3.js";
import { I as Icon } from "../../chunks/Icon.js";
function Github($$payload, $$props) {
  push();
  let { $$slots, $$events, ...props } = $$props;
  const iconNode = [
    [
      "path",
      {
        "d": "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
      }
    ],
    ["path", { "d": "M9 18c-4.51 2-5-2-7-2" }]
  ];
  Icon($$payload, spread_props([
    { name: "github" },
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
function Instagram($$payload, $$props) {
  push();
  let { $$slots, $$events, ...props } = $$props;
  const iconNode = [
    [
      "rect",
      {
        "width": "20",
        "height": "20",
        "x": "2",
        "y": "2",
        "rx": "5",
        "ry": "5"
      }
    ],
    [
      "path",
      {
        "d": "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
      }
    ],
    [
      "line",
      {
        "x1": "17.5",
        "x2": "17.51",
        "y1": "6.5",
        "y2": "6.5"
      }
    ]
  ];
  Icon($$payload, spread_props([
    { name: "instagram" },
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
function Mail($$payload, $$props) {
  push();
  let { $$slots, $$events, ...props } = $$props;
  const iconNode = [
    [
      "path",
      { "d": "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" }
    ],
    [
      "rect",
      {
        "x": "2",
        "y": "4",
        "width": "20",
        "height": "16",
        "rx": "2"
      }
    ]
  ];
  Icon($$payload, spread_props([
    { name: "mail" },
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
function HeroCard($$payload, $$props) {
  let avatar = $$props["avatar"];
  let name = $$props["name"];
  let subtitle = $$props["subtitle"];
  let instagramUrl = $$props["instagramUrl"];
  let githubUrl = $$props["githubUrl"];
  let mail = $$props["mail"];
  let description = $$props["description"];
  $$payload.out += `<div class="relative bg-base-300 shadow-xl rounded-2xl w-full max-w-xl pt-16 pb-6 px-6"><div class="absolute -top-8 left-1/2 transform -translate-x-1/2 w-32 h-32 rounded-full bg-base-200 overflow-hidden"><img${attr("src", avatar)} alt="Avatar" class="w-full h-full object-cover"/></div> <div class="mt-16 text-center"><h1 class="text-2xl font-semibold mb-2">${escape_html(name)}</h1> <p class="text-base-content/70 mb-4">${escape_html(subtitle)}</p> <p class="text-base-content mt-4 mb-8">${escape_html(description)}</p> <div class="flex justify-center space-x-4"><a${attr("href", instagramUrl)} target="_blank" rel="noopener" aria-label="Instagram">`;
  Instagram($$payload, {
    class: "w-8 h-8 text-accent hover:scale-110 transition-colors"
  });
  $$payload.out += `<!----></a> <a${attr("href", githubUrl)} target="_blank" rel="noopener" aria-label="GitHub">`;
  Github($$payload, {
    class: "w-8 h-8 text-secondary hover:scale-110 transition-colors"
  });
  $$payload.out += `<!----></a> `;
  if (mail) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<a${attr("href", `mailto:${mail}`)} target="_blank" rel="noopener" aria-label="Email">`;
    Mail($$payload, {
      class: "w-8 h-8 text-primary hover:scale-110 transition-colors"
    });
    $$payload.out += `<!----></a>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div></div></div>`;
  bind_props($$props, {
    avatar,
    name,
    subtitle,
    instagramUrl,
    githubUrl,
    mail,
    description
  });
}
function _page($$payload) {
  const avatar = "/images/profile.jpg";
  const name = "Robin Gebert";
  const subtitle = "Teaching student and developer from Stuttgart, Germany";
  const description = "As a teaching student, I am passionate about education and technology. I love to share knowledge and help others learn. In my free time, I enjoy coding, exploring new technologies, and contributing to open-source projects.";
  const instagramUrl = "https://instagram.com/robin.gebert";
  const githubUrl = "https://github.com/ronjar";
  const mail = "dev@robingebert.com";
  $$payload.out += `<div class="flex flex-col items-center justify-center min-h-screen p-4">`;
  HeroCard($$payload, {
    avatar,
    name,
    subtitle,
    description,
    instagramUrl,
    githubUrl,
    mail
  });
  $$payload.out += `<!----></div>`;
}
export {
  _page as default
};
