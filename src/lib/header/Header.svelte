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
		<a href="/tools">Tools</a>
	</nav>
</header>

<style>
	header {
		/* background-color: white; */
		background: linear-gradient(to top, rgba(255, 255, 255, 0.917) 0%,rgb(255, 255, 255) 100%);
		padding: 0.5em 1em;
		top: 0;
		position: sticky;
		display: flex;
		justify-content: space-between;
		z-index: 10;
	}
	img{
		width: 40px;
		height: 40px;
		margin: 0;
		padding: 0;
	}
	nav {
		display: flex;
		justify-content: center;
		align-items: center;
		gap:1em;
	}
	nav a{
		text-decoration-thickness: 2px;
	}
</style>
