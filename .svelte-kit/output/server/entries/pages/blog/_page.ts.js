import fs from "fs";
import path from "path";
const prerender = true;
function load() {
  const contentDir = path.resolve("src/site/blog");
  const files = fs.readdirSync(contentDir).filter((f) => f.endsWith(".md") || f.endsWith(".mdx")).map((file) => ({
    slug: file.replace(/\.(md|mdx)$/, "")
    // optional: lies frontmatter aus, sortiere nach Datum etc.
  }));
  return { posts: files };
}
export {
  load,
  prerender
};
