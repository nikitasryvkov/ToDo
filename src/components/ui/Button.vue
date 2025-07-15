<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  label: String,
  color: {
    type: String,
    default: 'primary'
  },
  size: {
    type: String,
    default: 'normal'
  },
  disabled: Boolean,
  rounded: Boolean,
  icon: String,
  outlined: Boolean
});

const emit = defineEmits(['click']);

const clickOnButton = () => {
  if (!props.disabled) emit('click');
};
</script>

<template>
  <button
    :class="[
      'btn', 
      `btn-${color}`, 
      { 'btn-rounded': rounded, 'btn-outlined': outlined, 'btn-icon': icon },
      { 'btn-large': size === 'large', 'btn-disabled': disabled }
    ]"
    :disabled="disabled"
    @click="clickOnButton"
  >
    <slot name="icon" />
    <slot>{{ label }}</slot>
  </button>
</template>

<style lang="scss" scoped>
.btn {
  padding: 0.5rem 1rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  
  &-primary {
    background-color: #0d6efd;
    color: white;
    
    &:hover:not(:disabled) {
      background-color: #0b5ed7;
    }
  }
  
  &-secondary {
    background-color: #6c757d;
    color: white;
    
    &:hover:not(:disabled) {
      background-color: #5c636a;
    }
  }
  
  &-success {
    background-color: #198754;
    color: white;
    
    &:hover:not(:disabled) {
      background-color: #146c43;
    }
  }
  
  &-danger {
    background-color: #dc3545;
    color: white;
    
    &:hover:not(:disabled) {
      background-color: #bb2d3b;
    }
  }
  
  &-rounded {
    border-radius: 2rem;
  }
  
  &-outlined {
    background-color: transparent;
    border: 1px solid currentColor;
  }
  
  &-large {
    padding: 0.75rem 1.5rem;
    font-size: 1.25rem;
  }
  
  &-disabled {
    opacity: 0.65;
    cursor: not-allowed;
  }
  
  &-icon {
    padding: 0.5rem;
    border-radius: 50%;
  }
}
</style>