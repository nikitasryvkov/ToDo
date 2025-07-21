<script setup>
import Button from "@components/ui/Button.vue"
import Input from "@components/ui/Input.vue"
import Checkbox from "@components/ui/Checkbox.vue"
import { deleteTask, updateTaskChecked, updateTaskContent } from "../../api/api";
import { ref } from "vue";

const { task } = defineProps(['task'])

const inputNewContent = ref("")
</script>

<template>
  <div class="task">
    <Checkbox
    :value="task._checked"
    @change="updateTaskChecked(task._id)"
    ></Checkbox>
    <span @click="updateTaskChecked(task._id)" :class="{ completed: task._checked, check: task._checked }">{{ task._content }}</span>
    <div>
      <select>
        <option value="">option1</option>
        <option value="">option2</option>
        <option value="">option3</option>
        <option value="">option3</option>
      </select>
      &nbsp;
      <!-- <Input class="input" v-model="inputNewContent"/> -->
      <Button @click="updateTaskContent(task._id, inputNewContent)">Изменить</Button>
      &nbsp;
      <Button @click="deleteTask(task._id)">Удалить</Button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.check {
    text-decoration: line-through;
}

.task {
  display: flex;
  width: 100%;
  justify-content: space-between;
}
</style>