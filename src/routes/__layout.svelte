<script>
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
</script>

<main>
	<Header />
	<slot />
</main>

<footer>
	Orenohibi By Shinji. Site Designed by 501A
</footer>

<style>
	main{
		padding: 0 20%;
	}
	footer{
		text-align: center;
		margin: 2em;
		color: gray;
	}
</style>
