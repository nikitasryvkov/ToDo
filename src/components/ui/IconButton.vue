<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  icon: String
});
</script>

<template>
  <button class="icon-button">
    <i :class="icon"></i>
  </button>
</template>

<style lang="scss" scoped>
.icon-button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
  
  i {
    font-size: 1.25rem;
  }
}
</style>