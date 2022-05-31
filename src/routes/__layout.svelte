<script>
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
</script>

<main>
	<Header />
	<slot />
</main>

<style>
	main{
		padding: 0 20%;
	}
</style>
