<script setup>
  import TodoItem from './TodoItem.vue'
  const { todos, name } = defineProps(['todos', 'name'])
</script>

<template>
  <ul>
    <TodoItem v-for="todo in todos" :key="todo.id" :todo="todo"/>
  </ul>
</template>
