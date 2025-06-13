import "clsx";
const metadata = {
  "title": "Privacy policy",
  "description": "The privacy policy for my Website Casey",
  "date": "2023-4-14",
  "tags": "Test, LOL"
};
const { title, description, date, tags } = metadata;
function Test_md($$payload) {
  $$payload.out += `<p>This application does not collect or store personal information. No user data is transmitted, logged, shared, or retained by any third party. Any information provided by the user remains solely under their control and is never accessed or processed by the application’s systems.</p> <p><em>This is an example privacy policy made by a free AI and a teaching student, aka no legal advice or anything!</em></p>`;
}
export {
  Test_md as default,
  metadata
};
