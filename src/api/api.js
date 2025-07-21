import { Task } from "../models/task"
import { ref, watch } from "vue";

const initStore = JSON.parse(localStorage.getItem("store") || "[]")
const store = ref(initStore);

watch(store, (value) => {
  window.localStorage.setItem("store", JSON.stringify(value))
}, {
  deep: 1
})

export const addTask = (taskItem) => {
  const task = new Task(taskItem, false, new Date(), "", [])
  store.value.push(task);
}

export const deleteTask = (id) => {
  store.value = store.value.filter(task => task._id !== id)
}

export const updateTaskChecked = (id) => {
  store.value = store.value.map(task => 
    task._id === id ? { ...task, _checked: !task._checked } : task
  )
}

export const updateTaskContent = (id, content) => {
  store.value = store.value.map(task => {
    task._id === id ? { ...task, _content: content } : task
  })
}

export const findAll   = () => {
  return store.value;
}