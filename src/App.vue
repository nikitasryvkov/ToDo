<script setup>
import Header from "@components/layout/Header.vue"
import Button from "@components/ui/Button.vue"
import Input from "@components/ui/Input.vue"
</script>

<template>
    <div class="container">
        <Header />
        <Button>
            <template #title>
                Кнопка
            </template>
        </Button>
        <Input />
    </div>
</template>

<style scoped>

</style>
