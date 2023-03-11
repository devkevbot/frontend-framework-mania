<script>
	import ListItem from './ListItem.svelte';

	const initialData = [
		{ id: 1, desc: 'Walk dog', done: false },
		{ id: 2, desc: 'Buy groceries', done: false },
		{ id: 3, desc: 'Wash dishes', done: false }
	];

	export let todos = [...initialData];

	export let todoCreationCount = initialData.length;

	export let createDesc = '';

	function toggleDone(id) {
		todos = todos.map((todo) => {
			if (todo.id === id) {
				return {
					...todo,
					done: !todo.done
				};
			}
			return todo;
		});
	}

	function onInputCreate(e) {
		createDesc = e.currentTarget.value;
	}

	function createTodo() {
		todoCreationCount += 1;
		todos.push({ id: todoCreationCount, desc: createDesc, done: false });
		todos = todos;
		createDesc = '';
	}

	function deleteTodo(id) {
		todos = todos.filter((todo) => todo.id !== id);
	}
</script>

<div>
	<h1>We have created {todoCreationCount} TODOS so far</h1>
	<form>
		<fieldset>
			<legend>Create a TODO!</legend>
			<label>
				Enter description:{' '}
				<input id="description" type="text" value={createDesc} on:input={onInputCreate} />
			</label>
			<button type="button" on:click={createTodo} disabled={createDesc.length === 0}>
				Create
			</button>
		</fieldset>
	</form>
	{#each todos as item}
		<ListItem {...item} {toggleDone} {deleteTodo} />
	{/each}
</div>

<style>
	:global(button) {
		padding: 0.5rem;
		text-transform: uppercase;
		font-weight: bold;
	}

	h1 {
		font-size: 2rem;
	}

	form {
		display: grid;
		place-content: center;
	}

	input {
		padding: 0.5rem;
	}

	legend {
		font-weight: bold;
		font-size: 1.5rem;
	}

	fieldset {
		padding: 1rem 4rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
</style>
