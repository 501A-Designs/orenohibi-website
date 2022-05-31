<script>
    export let date;
</script>

<div>
    <div class="dateTag">{date}</div>
    <p class="newsContainer"><slot/></p>
</div>

<style>
	.dateTag {
        font-size: 0.7em;
		background-color: #cdef92;
        color: white;
        /* background-color:rgb(242, 242, 242); */
        color: black;
        border: none;
        padding: 0.5em 1em;
		border-radius: 25px;
        margin: 0;
        width: fit-content;
	}
    .newsContainer{
        margin: 0;
        padding: 0.8em 0.5em 1em 0.5em;
        transform: translateX(15px);
        border-left: 2px solid rgb(213, 213, 213);
    }
</style>
