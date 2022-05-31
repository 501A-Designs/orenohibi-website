<script>
    export let name;
    export let src;
    export let link;
</script>

<a href={`/recipes/${link}`}>
    <div class='recipeCard' >
        <!-- svelte-ignore a11y-img-redundant-alt -->
        <img alt="image" {src}/>
        <h4>{name}</h4>
    </div>
</a>

<style>
    .recipeCard{
        padding:15px;
        border-radius: 15px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1em;
        cursor: pointer;
        
    }
    .recipeCard:hover{
        background-color: rgb(241, 241, 241);
    }
	img{
		width: 100px;
		height: 100px;
        border-radius: 10px;
		margin: 0;
		padding: 0;
	}
	h4 {
        margin: 0;
        text-align: center;
	}
</style>
