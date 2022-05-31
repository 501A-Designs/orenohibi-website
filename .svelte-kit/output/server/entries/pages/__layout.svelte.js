import { c as create_ssr_component, a as add_attribute, v as validate_component } from "../../chunks/index-1259f1f6.js";
var logo = "/_app/immutable/assets/logo-904a23f6.png";
var Header_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "header.svelte-iydzbb.svelte-iydzbb{background-color:white;padding:0.5em 0em;top:0;position:sticky;display:flex;justify-content:space-between;z-index:10}img.svelte-iydzbb.svelte-iydzbb{width:40px;height:40px;margin:0;padding:0}nav.svelte-iydzbb.svelte-iydzbb{display:flex;justify-content:center;align-items:center;gap:1em}nav.svelte-iydzbb a.svelte-iydzbb{text-decoration-thickness:2px}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<header class="${"svelte-iydzbb"}"><div class="${"corner"}"><a href="${"/"}"><img${add_attribute("src", logo, 0)} alt="${"SvelteKit"}" class="${"svelte-iydzbb"}"></a></div>
	<nav class="${"svelte-iydzbb"}"><a href="${"/about"}" class="${"svelte-iydzbb"}">About</a>
		<a href="${"/tools"}" class="${"svelte-iydzbb"}">Tools</a></nav>
</header>`;
});
var app = "";
var __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-1y2e2r3{padding:0 20%}footer.svelte-1y2e2r3{text-align:center;margin:2em;color:gray}",
  map: null
};
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<main class="${"svelte-1y2e2r3"}">${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
	${slots.default ? slots.default({}) : ``}</main>

<footer class="${"svelte-1y2e2r3"}">Orenohibi By Shinji. Site Designed by 501A
</footer>`;
});
export { _layout as default };
