import { c as create_ssr_component, e as escape, a as add_attribute, b as each } from "../../../chunks/index-1259f1f6.js";
import { r as recipeData } from "../../../chunks/Button.svelte_svelte_type_style_lang-9cfde4ac.js";
var _id__svelte_svelte_type_style_lang = "";
const css = {
  code: "img.svelte-16vt373{border-radius:100px;width:100px;height:100px}.recipeCover.svelte-16vt373{margin:5% 0;-o-object-fit:cover;object-fit:cover;background-position:center;background-size:cover;border-radius:15px}.recipeCoverContainer.svelte-16vt373{display:flex;align-items:center;flex-direction:column;padding:1em;padding-top:1.5em;height:100%;width:max-width;border-radius:15px 15px 0px 0px;background:linear-gradient(to top, rgb(255, 255, 255) 0%,rgba(255,255,255,0) 100%)}",
  map: null
};
async function load({ url, params }) {
  const id = params.id;
  return { props: { id } };
}
const U5Bidu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { id } = $$props;
  let recipeObject = recipeData[id];
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>${escape(recipeObject.name)}</title>`, ""}<meta name="${"description"}" content="${"A todo list app"}" data-svelte="svelte-dhhgcd">`, ""}

<div><div class="${"recipeCover svelte-16vt373"}" style="${"background-image:url(../" + escape(recipeObject.thumbnailSrc) + ")"}">
		<div class="${"recipeCoverContainer svelte-16vt373"}"><img alt="${"Image"}"${add_attribute("src", `../${recipeObject.thumbnailSrc}`, 0)} class="${"svelte-16vt373"}">
			<h1>${escape(recipeObject.name)}</h1>
			<span>${escape(recipeObject.motto)}</span></div></div>
	<div class="${"grid-1fr-2fr"}"><div><h3>\u6750\u6599</h3>
			<ul>${each(recipeObject.ingredients, (ingredient) => {
    return `<li>${escape(ingredient)}</li>`;
  })}</ul></div>
		<div><h3>\u30EC\u30B7\u30D4</h3>
			<ol>${each(recipeObject.steps, (step) => {
    return `<li>${escape(step)}</li>`;
  })}</ol>
			<h3>\u6CE8\u610F\u4E8B\u9805</h3>
			<ul>${each(recipeObject.caution, (caution) => {
    return `<li>${escape(caution)}</li>`;
  })}</ul></div></div>
</div>`;
});
export { U5Bidu5D as default, load };
