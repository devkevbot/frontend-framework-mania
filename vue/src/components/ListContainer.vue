<script setup lang="ts">
import { ref } from 'vue'
import ListItem from './ListItem.vue'

const todos = ref([
  { id: 1, desc: 'Walk dog', done: false },
  { id: 2, desc: 'Buy groceries', done: false },
  { id: 3, desc: 'Wash dishes', done: false }
])

const todoCreationCount = ref(3)
const createDesc = ref('')

function toggleDone(id: number) {
  todos.value = todos.value.map((todo) => {
    if (todo.id === id) {
      return {
        ...todo,
        done: !todo.done
      }
    }
    return todo
  })
}

function createTodo() {
  todoCreationCount.value += 1
  todos.value.push({ id: todoCreationCount.value, desc: createDesc.value, done: false })
  createDesc.value = ''
}

function deleteTodo(id: number) {
  todos.value = todos.value.filter((todo) => todo.id !== id)
}
</script>

<template>
  <div>
    <h1>We have created {{ todoCreationCount }} TODOS so far</h1>
    <form>
      <fieldset>
        <legend>Create a TODO!</legend>
        <label>
          Enter description:{{ '' }}
          <input type="text" id="description" v-model="createDesc" />
        </label>
        <button type="button" @click="createTodo">Create</button>
      </fieldset>
    </form>
    <ListItem
      v-for="item in todos"
      v-bind="item"
      :toggle-done="toggleDone"
      :delete-todo="deleteTodo"
      :key="item.id"
    >
    </ListItem>
  </div>
</template>

<style>
button {
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
