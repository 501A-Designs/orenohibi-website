<script>
	export let link;
</script>

<a href={link}>
	<div>
		<slot/>
	</div>
</a>

<style>
	div {
		background-color:　var(--orenoGreen);
		color: white;
		padding: 0.5em 1em;
        border: 2px solid #88bd2b;
		border-radius: 5px;
        height: fit-content;
		width:fit-content;
		cursor:pointer;
	}
</style>
