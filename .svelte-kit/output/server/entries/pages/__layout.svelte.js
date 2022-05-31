import { c as create_ssr_component, a as add_attribute, v as validate_component } from "../../chunks/index-1259f1f6.js";
var logo = "/_app/immutable/assets/logo-904a23f6.png";
var Header_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "header.svelte-hmmzgl.svelte-hmmzgl{background:linear-gradient(to top, rgba(255, 255, 255, 0.917) 0%,rgb(255, 255, 255) 100%);padding:0.5em 1em;top:0;position:sticky;display:flex;justify-content:space-between;z-index:10}img.svelte-hmmzgl.svelte-hmmzgl{width:40px;height:40px;margin:0;padding:0}nav.svelte-hmmzgl.svelte-hmmzgl{display:flex;justify-content:center;align-items:center;gap:1em}nav.svelte-hmmzgl a.svelte-hmmzgl{text-decoration-thickness:2px}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<header class="${"svelte-hmmzgl"}"><div class="${"corner"}"><a href="${"/"}"><img${add_attribute("src", logo, 0)} alt="${"SvelteKit"}" class="${"svelte-hmmzgl"}"></a></div>
	<nav class="${"svelte-hmmzgl"}"><a href="${"/about"}" class="${"svelte-hmmzgl"}">About</a>
		<a href="${"/tools"}" class="${"svelte-hmmzgl"}">Tools</a></nav>
</header>`;
});
var app = "";
var __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "footer.svelte-1sk2qb7{text-align:center;margin:2em;color:gray}",
  map: null
};
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<main>${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
	${slots.default ? slots.default({}) : ``}</main>

<footer class="${"svelte-1sk2qb7"}">Orenohibi By Shinji. Site Designed by 501A
</footer>`;
});
export { _layout as default };
