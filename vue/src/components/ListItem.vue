<script setup lang="ts">
const props = defineProps({
  id: {
    required: true,
    type: Number
  },
  desc: {
    required: true,
    type: String
  },
  done: {
    required: true,
    type: Boolean
  },
  toggleDone: {
    required: true,
    type: Function
  },
  deleteTodo: {
    required: true,
    type: Function
  }
})
</script>

<template>
  <div class="list-item">
    <h2>{{ props.id }} - {{ props.desc }}</h2>
    <span>Done? {{ String(done) }}</span
    ><br />
    <div>
      <button type="button" @click="() => props.toggleDone(props.id)">Toggle done</button>
      <button type="button" class="danger" @click="() => props.deleteTodo(props.id)">
        Delete todo
      </button>
    </div>
  </div>
</template>

<style scoped>
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
