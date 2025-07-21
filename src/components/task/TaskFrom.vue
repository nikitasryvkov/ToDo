<script setup>
import { ref } from 'vue';
import { addTask } from '../../api/api';
import Button from "@components/ui/Button.vue"
import Input from "@components/ui/Input.vue"

const inputValue = ref("")

const defaultInput = () => {
  inputValue.value = ""
}
</script>

<template>
  <form @submit.prevent="addTask(inputValue)" @submit="defaultInput" class="task-input">
    <Input v-model="inputValue" />
    <Button type="submit" :rounded="true" :disabled="!inputValue.length > 0">Добавить</Button>
  </form>
</template>

<style lang="scss" scoped>

</style>