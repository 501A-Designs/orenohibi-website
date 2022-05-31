<script>
	import logo from './logo.png';
</script>

<header>
	<div class="corner">
		<a href="/">
			<img src={logo} alt="SvelteKit" />
		</a>
	</div>
	<nav>
		<a href="/about">About</a>
		<a href="/about">Recipes</a>
	</nav>
</header>

<style>
	header {
		background-color: white;
		padding: 1em 1.5em;
		top: 0;
		position: sticky;
		display: flex;
		justify-content: space-between;
		z-index: 10;
	}
	img{
		width: 35px;
		height: 35px;
		margin: 0;
		padding: 0;
	}
	nav {
		display: flex;
		justify-content: center;
		align-items: center;
		gap:1em;
	}
</style>
