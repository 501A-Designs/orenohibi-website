<script context="module">
	export async function load({url, params}){
		const id = params.id;
		return {
			props:{id}
		}
	}
</script>

<script>
	export let id;
	import Button from '../../lib/Button.svelte';
	// import {newsData} from '../lib/newsData';
	import {recipeData} from '../../lib/recipeData';
	let recipeObject = recipeData[id];
</script>

<svelte:head>
	<title>{recipeObject.name}</title>
	<meta name="description" content="A todo list app" />
</svelte:head>

<div>
	<div class="recipeCover" style="background-image:url(../{recipeObject.thumbnailSrc})">
		<!-- svelte-ignore a11y-img-redundant-alt -->
		<div class="recipeCoverContainer">
			<img alt="Image" src={`../${recipeObject.thumbnailSrc}`}/>
			<h1>{recipeObject.name}</h1>
			<span>{recipeObject.motto}</span>
		</div>
	</div>
	<div class='grid-1fr-2fr'>
		<div>
			<h3>材料</h3>
			<ul>
				{#each recipeObject.ingredients as ingredient}
					<li>{ingredient}</li>
				{/each}
			</ul>
		</div>
		<div>
			<h3>レシピ</h3>
			<ol>
				{#each recipeObject.steps as step}
					<li>{step}</li>
				{/each}
			</ol>
			<h3>注意事項</h3>
			<ul>
				{#each recipeObject.caution as caution}
					<li>{caution}</li>
				{/each}
			</ul>
		</div>
		
	</div>
</div>

<style>
	img{
		border-radius: 100px;
		width: 100px;
		height: 100px;
	}
	.recipeCover{
		margin: 5% 0;
		-o-object-fit: cover;
			object-fit: cover;
		background-position: center;
		background-size: cover;
		border-radius: 15px;
	}
	.recipeCoverContainer{
		display:flex;
		align-items:center;
		flex-direction: column;
		padding: 1em;
		height:100%;
		width: max-width;
		border-radius: 15px 15px 0px 0px;
		background: linear-gradient(to top, rgb(255, 255, 255) 0%,rgba(255,255,255,0) 100%);
	}
</style>
