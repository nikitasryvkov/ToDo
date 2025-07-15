<script setup>
import { defineProps, defineEmits } from "vue"

const props = defineProps({
  modelValue: String,
  type: { type: String, default: "text" }
})

const emit = defineEmits(["update:modelValue"])

const updateValue = (e) => {
  emit("update:modelValue", e.target.value)
}
</script>

<template>
  <div class="container">
    <input
      class="inner"
      :type="type"
      :value="modelValue"
      @input="updateValue"
    />
  </div>
</template>

<style lang="scss" scoped>
.container {
    width: 100%;
    min-width: 300px;
    max-width: 600px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}

.inner {
    width: 100%;
    height: 2rem;
    border-radius: 1rem;
}
</style>