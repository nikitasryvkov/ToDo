<script setup>
import { defineProps, defineEmits } from "vue"

const props = defineProps({
    type: {
        type: String,
        default: "text"
    }
})

const emit = defineEmits(["update:value"])

const updateValue = (e) => {
    emit("update:Value", e.target.value)
}
</script>

<template>
    <input
    :type="type"
    @input="updateValue">
</template>

<style lang="scss" scoped>

</style>