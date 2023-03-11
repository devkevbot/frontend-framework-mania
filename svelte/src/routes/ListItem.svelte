<script>
	export let id = 0;
	export let desc = '';
	export let done = false;
	export let toggleDone = (id) => {};
	export let deleteTodo = (id) => {};
</script>

<div class="list-item">
	<h2>{id} - {desc}</h2>
	<span>Done? {String(done)}</span> <br />
	<div>
		<button type="button" on:click={() => toggleDone(id)}>Toggle done</button>
		<button type="button" class="danger" on:click={() => deleteTodo(id)}>Delete todo</button>
	</div>
</div>

<style>
	.list-item {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	h2 {
		font-weight: bold;
		font-size: 1.5rem;
	}

	button.danger {
		background-color: red;
		color: white;
	}

	button.danger:hover {
		background-color: darkred;
	}
</style>
