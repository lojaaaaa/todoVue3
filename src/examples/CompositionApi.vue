<!-- Composition API -->

<script setup>
  import { ref, onMounted } from 'vue'
  import TodosList from './components/TodosList.vue';
  import { getTodosFromApi } from './api';

  const todoValue = ref('');
  const todos = ref([]);

  onMounted(async () => {
    console.log(`the component is now mounted.`)
    const data = await getTodosFromApi()
    todos.value = data
  })

  const createTodo = () => {
    const todo = {
      id: todos.value.length + 1,
      title: todoValue.value
    }
    todos.value = [...todos.value, todo]
    todoValue.value = ''
  }
</script>

<template>
  <div class="content">
    <div>Todos</div>
    <input v-model="todoValue" class="input" type="text" placeholder="Todo">
    <button @click="createTodo" class="button">Create todo</button>

    <TodosList 
      v-if="todos.length !== 0" 
      :todos="todos" 
      :name="'Виктор'"
    />
    <p v-else>Пока здесь пусто</p>
  </div>
</template>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding-top: 150px;
}
.input {
  background-color: transparent;
  border: 0;
  color: white;
  outline: none;
  padding: 5px 10px;
  border-bottom: 1px solid rgb(49, 49, 49);
}
.button{
  background-color: rgb(27, 27, 27);
  border: 0;
  padding: 10px;
  color: rgb(154, 154, 154);
}
</style>


<!--  -->