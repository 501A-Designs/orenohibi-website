<script context="module">
	import { browser, dev } from '$app/env';

	// we don't need any JS on this page, though we'll load
	// it in dev so that we get hot module replacement...
	export const hydrate = dev;

	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	export const router = browser;

	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div>
	<h1>About</h1>
	<h2>Orenohibiについて</h2>
	<p>
		Orenohibiは緻密なレシピエンジニアリングによって開発されたレシピをWebサイト上で公開しております。全ての人にわかりやすく、幸せなおうち時間をお約束します。
	</p>
	<h2>信念</h2>
	<p>
		「全ての人に、幸せなひとときを。」Orenohibiの根幹です。昨今のコロナの事情によって思うように行動ができなくなった中、それでも幸せを支えたい。全ての人に簡単に手に入る材料を使ったドリンクレシピを公開しています。緻密なレシピエンジニアリングは全ての人にわかりやすく、幸せなおうち時間をお約束します。
	</p>

	<h2>レシピの読み方</h2>
	<p>
		レシピをご覧になる上で単位表記に疑問を持たれるかもしれません。Orenohibiでは固形物を"g(グラム)"、液体物を"mL(ミリリットル)"としております。なお、"1mL=g"換算を用いており、ご自宅のはかりを使用することができます。
	</p>
</div>

<style>

</style>
