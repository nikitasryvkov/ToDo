<script setup>
import Header from "./components/layout/Header.vue"
import TaskItem from "@components/task/TaskItem.vue"
import { findAll } from "./api/api"
import TaskFrom from "./components/task/TaskFrom.vue"

</script> 

<template>
  <Header />
  <div class="container">
    <TaskFrom></TaskFrom>
  </div>

  <ul>
    <li v-for="task in findAll()" :key="task._id" class="list">
      <TaskItem :task></TaskItem>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.container {
  padding: 1rem;
    display: flex;
    justify-content: center;
    width: 100%;
}

.list {
  list-style-type: none;
  padding: 0 1rem 0 1rem
}

.task {
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem;
}

.task-input {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}

ul {
  padding: 0;
}
</style>
