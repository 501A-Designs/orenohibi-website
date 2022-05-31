<script context="module">
	export const prerender = true;
</script>

<script>

	import {newsData} from '../lib/newsData';
	import {recipeData} from '../lib/recipeData';
	import Counter from '$lib/Counter.svelte';
	import Button from '../lib/Button.svelte';
	import News from '../lib/News.svelte';
	import RecipeCard from '../lib/RecipeCard.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<div style='margin:10% 0;'>
		<!-- svelte-ignore a11y-missing-attribute -->
		<div style="background-image:url('img/orenowallpaper2.jpg')" class="coverPhoto">
			<div class="coverContent">
				<div style='width:100%'>
					<h1>
						ORENOHIBI
					</h1>
					<p style="color:white">
						緻密なエンジニアリングによって
						<br/>
						開発されたレシピを公開しております。
					</p>
					<Button>詳しく</Button>
				</div>
			</div>
		</div>
	</div>

	<section style="margin:10% 0">
		<div style="display:flex; justify-content:space-between;align-items:center;">
			<h1>Recipes</h1>
			<Button>もっと見る</Button>
		</div>	
		<section class="grid-1fr-1fr-1fr-1fr-1fr">
			{#each recipeData as recipe}
				<RecipeCard name={recipe.name} src={recipe.thumbnailSrc}/>
			{/each}
		</section>
	</section>

	<div class="grid-1fr-2fr">
		<div>
			<h1>
				All Yours
			</h1>
			<p>
				あなたのそばに寄り添うコーヒー
				<br/>
				#orenohibi で作ったドリンクを共有しよう
			</p>
		</div>
		<div style="padding-top:0.5em;">
			<section>
				<h2>Oreno News</h2>
				{#each newsData as news}
					<News date={news.date}>
						{news.content}
					</News>
				{/each}
				<Button>もっと見る</Button>
			</section>
		</div>
	</div>


</section>

<style>
	.coverPhoto{
		border-radius: 15px;
		width: 100%;
		height: 500px;
		-o-object-fit: cover;
			object-fit: cover;
		background-position: center;
		background-size: cover;
	}
	
	.coverContent{
		border-radius: 15px;
		background: linear-gradient(to right, rgb(24, 24, 24) 0%,rgba(255,255,255,0) 100%);
		color: white;
		padding-left: 5%;
		height:100%;
		width: 80%;
		display: flex;
		align-items: center;
	}

	.grid-1fr-2fr{
		display: grid;
		grid-template-columns: 1fr 2fr;
		gap:2em;
	}
	.grid-1fr-1fr-1fr-1fr-1fr{
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
		gap:0.5em;
	}
</style>
