<script context="module">
	import { browser, dev } from '$app/env';
	export const hydrate = dev;
	export const router = browser;
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

	<h3>頻出単語</h3>
	<p>
		ビバレッジの味を下支えする名脇役。彼らがいるから、頑張れる。
	</p>
	<h4>シロップ</h4>
	<p>苦味を抑える。風味を豊かにするなどの効果がある。ガムシロップのように単純な甘味料としてではなく、一つのフレーバーファクターとして。</p>
	<h4>ハーブ</h4>
	<p>Coming soon...</p>
	<h4>アイス</h4>
	<p>Coming soon...</p>
</div>

<style>

</style>
