import { c as create_ssr_component, a as add_attribute, e as escape, v as validate_component, b as each } from "../../chunks/index-1259f1f6.js";
import { r as recipeData } from "../../chunks/Button.svelte_svelte_type_style_lang-9cfde4ac.js";
let newsData = [
  {
    date: "2022 5/31",
    content: "Orenohibi \u30A6\u30A7\u30D6\u30B5\u30A4\u30C8\u7B2C\u4E8C\u30EA\u30CB\u30E5\u30FC\u30A2\u30EB\u958B\u59CB"
  },
  {
    date: "2021 7/15",
    content: "\u3010\u653E\u8AB2\u5F8C\u30B3\u30FC\u30D2\u30FC\u958B\u50AC\u3011\u30DD\u30C3\u30D7\u30A2\u30C3\u30D7\u6642\u306E\u30EC\u30B7\u30D4\u516C\u958B\u3057\u3066\u307E\u3059\u3002"
  },
  {
    date: "2021 6/13",
    content: "\u3010Iced Coffee\u3011\u65B0\u767B\u5834\u3002\u30EC\u30B7\u30D4\u516C\u958B\u3057\u3066\u307E\u3059\u3002"
  },
  {
    date: "2021 2/21",
    content: "Orenohibi \u30A6\u30A7\u30D6\u30B5\u30A4\u30C8\u8A2D\u7ACB"
  }
];
var Counter_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "div.svelte-k6bmkh{background-color:var(--orenoGreen);color:white;padding:0.5em 1em;border:2px solid #88bd2b;border-radius:5px;height:fit-content;width:fit-content;cursor:pointer}",
  map: null
};
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { link } = $$props;
  if ($$props.link === void 0 && $$bindings.link && link !== void 0)
    $$bindings.link(link);
  $$result.css.add(css$3);
  return `<a${add_attribute("href", link, 0)}><div class="${"svelte-k6bmkh"}">${slots.default ? slots.default({}) : ``}</div>
</a>`;
});
var News_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".dateTag.svelte-xh2xsj{font-size:0.7em;background-color:#cdef92;color:white;color:black;border:none;padding:0.5em 1em;border-radius:25px;margin:0;width:fit-content}.newsContainer.svelte-xh2xsj{margin:0;padding:0.8em 0.5em 1em 0.5em;transform:translateX(15px);border-left:2px solid rgb(213, 213, 213)}",
  map: null
};
const News = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { date } = $$props;
  if ($$props.date === void 0 && $$bindings.date && date !== void 0)
    $$bindings.date(date);
  $$result.css.add(css$2);
  return `<div><div class="${"dateTag svelte-xh2xsj"}">${escape(date)}</div>
    <p class="${"newsContainer svelte-xh2xsj"}">${slots.default ? slots.default({}) : ``}</p>
</div>`;
});
var RecipeCard_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".recipeCard.svelte-f1pxwv{padding:15px;border-radius:15px;display:flex;flex-direction:column;align-items:center;gap:1em;cursor:pointer}.recipeCard.svelte-f1pxwv:hover{background-color:rgb(241, 241, 241)}img.svelte-f1pxwv{width:100px;height:100px;border-radius:10px;margin:0;padding:0}h4.svelte-f1pxwv{margin:0;text-align:center}",
  map: null
};
const RecipeCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name } = $$props;
  let { src } = $$props;
  let { link } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.link === void 0 && $$bindings.link && link !== void 0)
    $$bindings.link(link);
  $$result.css.add(css$1);
  return `<a${add_attribute("href", `/recipes/${link}`, 0)}><div class="${"recipeCard svelte-f1pxwv"}">
        <img alt="${"image"}"${add_attribute("src", src, 0)} class="${"svelte-f1pxwv"}">
        <h4 class="${"svelte-f1pxwv"}">${escape(name)}</h4></div>
</a>`;
});
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: ".coverPhoto.svelte-15jl8ev{border-radius:15px;width:100%;height:500px;-o-object-fit:cover;object-fit:cover;background-position:center;background-size:cover}.coverContent.svelte-15jl8ev{border-radius:15px;background:linear-gradient(to right, rgb(24, 24, 24) 0%,rgba(255,255,255,0) 100%);color:white;padding-left:5%;height:100%;width:80%;display:flex;align-items:center}",
  map: null
};
const prerender = true;
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Home</title>`, ""}<meta name="${"description"}" content="${"Svelte demo app"}" data-svelte="svelte-t32ptj">`, ""}

<section><div style="${"margin:10% 0;"}">
		<div style="${"background-image:url('img/orenowallpaper2.jpg')"}" class="${"coverPhoto svelte-15jl8ev"}"><div class="${"coverContent svelte-15jl8ev"}"><div style="${"width:100%"}"><h1>ORENOHIBI
					</h1>
					<p style="${"color:white"}">\u7DFB\u5BC6\u306A\u30A8\u30F3\u30B8\u30CB\u30A2\u30EA\u30F3\u30B0\u306B\u3088\u3063\u3066
						<br>
						\u958B\u767A\u3055\u308C\u305F\u30EC\u30B7\u30D4\u3092\u516C\u958B\u3057\u3066\u304A\u308A\u307E\u3059\u3002
					</p>
					${validate_component(Button, "Button").$$render($$result, { link: "/about" }, {}, {
    default: () => {
      return `\u8A73\u3057\u304F`;
    }
  })}</div></div></div></div>

	<section style="${"margin:10% 0"}"><div style="${"display:flex; justify-content:space-between;align-items:center;"}"><h1>Recipes</h1>
			</div>	
		<section class="${"grid-1fr-1fr-1fr-1fr-1fr"}">${each(recipeData, (recipe) => {
    return `${validate_component(RecipeCard, "RecipeCard").$$render($$result, {
      name: recipe.name,
      src: recipe.thumbnailSrc,
      link: recipeData.indexOf(recipe)
    }, {}, {})}`;
  })}</section></section>

	<section style="${"margin:10% 0"}"><div class="${"grid-1fr-2fr"}"><div><h1>All Yours
				</h1>
				<p>\u3042\u306A\u305F\u306E\u305D\u3070\u306B\u5BC4\u308A\u6DFB\u3046\u30B3\u30FC\u30D2\u30FC
					<br>
					#orenohibi \u3067\u4F5C\u3063\u305F\u30C9\u30EA\u30F3\u30AF\u3092\u5171\u6709\u3057\u3088\u3046
				</p></div>
			<div style="${"padding-top:0.5em;"}"><section><h2>Oreno News</h2>
					${each(newsData, (news) => {
    return `${validate_component(News, "News").$$render($$result, { date: news.date }, {}, {
      default: () => {
        return `${escape(news.content)}
						`;
      }
    })}`;
  })}
					</section></div></div></section>
</section>`;
});
export { Routes as default, prerender };
