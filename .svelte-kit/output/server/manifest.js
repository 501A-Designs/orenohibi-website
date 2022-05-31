export const manifest = {
	appDir: "_app",
	assets: new Set(["favicon.png","img/coffeebeans.jpg","img/coldbrewcoffee.jpg","img/hokago1.jpg","img/hokago2.jpg","img/hokago3.jpg","img/hokago4.jpg","img/hokago5.jpg","img/hokago6.jpg","img/hokago7.jpg","img/hokago8.jpg","img/icedcoffee.jpg","img/icedcoffee2.jpg","img/latte.jpg","img/lemonade.jpg","img/lemonade2.jpg","img/matcha.jpg","img/orenoprocess.jpg","img/orenoprocess2.jpg","img/orenoprocess3.jpg","img/orenowallpaper.jpg","img/orenowallpaper2.jpg","img/orenowallpaper3.jpg","img/orenowallpaper4.jpg","img/pot1.jpg","img/pot2.jpg","robots.txt","svelte-welcome.png","svelte-welcome.webp"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg",".txt":"text/plain",".webp":"image/webp"},
	_: {
		entry: {"file":"start-e62ed6c5.js","js":["start-e62ed6c5.js","chunks/index-92202d2e.js"],"css":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/4.js')
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				id: "about",
				pattern: /^\/about\/?$/,
				names: [],
				types: [],
				path: "/about",
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				id: "tools",
				pattern: /^\/tools\/?$/,
				names: [],
				types: [],
				path: "/tools",
				shadow: null,
				a: [0,4],
				b: [1]
			},
			{
				type: 'page',
				id: "recipes/[id]",
				pattern: /^\/recipes\/([^/]+?)\/?$/,
				names: ["id"],
				types: [null],
				path: null,
				shadow: null,
				a: [0,5],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
