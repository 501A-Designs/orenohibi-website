<script context="module">
	import { browser, dev } from '$app/env';
	export const hydrate = dev;
	export const router = browser;
	export const prerender = true;
</script>

<svelte:head>
	<title>Tools</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div>
	<h1>Tools</h1>
    <section class="grid-1fr-2fr">
        <h2>Dripper</h2>
        <div>
            <h3>Hario V60</h3>
            <p>
                サードウェーブコーヒーのカフェでよく使われるドリッパー。その扱いやすさから多くの支持を得ている。スパイラルリブはドリップ時のコーヒー粉の膨らみを活性化する。また多くのリブは排水をよくする。このことからドリップ時の水の量でコーヒーの風味をコントロールすることが可能である。コーヒーの味にこだわり、カスタマイズ性を良くするのであればおすすめだ。
            </p>
            <h3>Blue Bottle Dripper</h3>
            <p>
                有名コーヒーチェーン、ブルーボトルコーヒーが販売しているドリッパーである。V60と同様にリブ数の多さはコーヒーの味をコントロールするのに一役買っている。また、酸っぱい風味が特徴のサードウェーブを再現するのに適したドリッパーである。またそのデザイン性もとても良い。
            </p>
        </div>
    </section>
    <section class="grid-1fr-2fr">
        <h2>Pot</h2>
        <div>
            <h3>Keyuca DENK II</h3>
            <p>
                極細の注ぎ口がマルチなドリッピングを可能にする。特に水量で風味をコントロールするOrenohibiのレシピに最も適したポットだ。また、比較的安価に購入ができるのも嬉しい。
            </p>
        </div>
    </section>
</div>

<style>

</style>
