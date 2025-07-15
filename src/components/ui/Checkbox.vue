<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  value: Boolean
})
const emit = defineEmits(['update:value'])

const toggle = () => emit('update:value', !props.value)
</script>

<template>
  <input
    type="checkbox" 
    :checked="value" 
    @change="toggle"
  />
</template>

<style lang="scss" scoped>

</style>