<script setup>
import { ref, watch, onMounted } from "vue"
import Header from "./components/layout/Header.vue"
import Button from "@components/ui/Button.vue"
import Input from "@components/ui/Input.vue"

const localStore = ref([]);
const newTask = ref("")

watch(newTask, (value) => {
  localStorage.setItem("newTask", value)
})

watch(localStore, (value) => {
  localStorage.setItem("localStore", JSON.stringify(value))
}, {
  deep: true
})

const addTask = () => {
    const task = newTask.value.trim()
    if (task) {
        localStore.value.push({
            text: task,
            checked: false,
            createdAt: Date.now(),
            description: "",
            tags: []
        })
        newTask.value = ""
    }
}

const deleteTask = (createdAt) => {
    localStore.value = localStore.value.filter(task => task.createdAt !== createdAt)
}

const toggleTask = (createdAt) => {
    localStore.value = localStore.value.map(task => 
        task.createdAt === createdAt ? { ...task, checked: !task.checked } : task
    )
}

onMounted(() => {
  newTask.value = localStorage.getItem("newTask") || ""
  localStore.value = JSON.parse(localStorage.getItem('localStore')) || []
})
</script> 

<template>
  <Header />
  <div class="container">
    <form @submit.prevent="addTask" class="task-input">
      <Input v-model="newTask" />
      <div v-if="newTask.length > 0">
        <Button type="submit" :rounded="true">Добавить</Button>
      </div>
      <div v-else>
        <Button type="submit" :disabled=true :rounded="true">Добавить</Button>
      </div>
    </form>
  </div>

  <ul>
    <li v-for="task in localStore" :key="task.createdAt" class="list">
      <div class="task">
        <input 
        type="checkbox" 
        :checked="task.checked" 
        @change="toggleTask(task.createdAt)"
        />
        <div v-if="task.checked">
          <span class="check" :class="{ completed: task.checked }">{{ task.text }}</span>
        </div>
        <div v-else>
          <span :class="{ completed: task.checked }">{{ task.text }}</span>
        </div>
        <Button @click="deleteTask(task.createdAt)">Удалить</Button>
      </div>
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

.check {
    text-decoration: line-through;
}

.list {
  list-style-type: none;
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
</style>
