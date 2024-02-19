<script setup>
  const { todo } = defineProps(['todo'])
</script>

<template>
  <li>{{ todo.title }}</li>
</template>
