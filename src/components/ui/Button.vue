<script setup>
import { defineProps, defineEmits } from 'vue';
import IconButton from './IconButton.vue';

const props = defineProps({
    lable: {
        type: String,
        default: "Buton"
    },
    color: {
        type: String,
        default: 'primary'
    },
    size: {
        type: String,
        default: 'normal'
    },
    disabled: {
        type: String,
        default: false
    },
    rounded: {
        type: Boolean,
        default: false
    },
    icon: {
        type: String,
        required: false
    },
    outlined: {
        type: String,
        required: false 
    }
})

const emit = defineEmits(['click'])

const clickOnButton = () => {
    emit('click')
}
</script>

<template>
    <button
    :class="['btn', `btn_&{color}`, {'btn_rounded': rounded}, {'btn_outlined': outlined}, {'btn_icon': icon}, {'btn_large': size === 'large'}]"
    :disabled="disabled"
    @click="clickOnButton">
        <slot name="icon">
            <IconButton />
        </slot>
        <slot name="title"></slot>
    </button>
</template>

<style lang="scss" scoped>
.btn {
    margin-right: 10px;
    margin-bottom: 10px;
    &_primary {

    }
    &_second {

    }
    &_disabled {

    }
    &_rounded {

    }
    &_outlined {

    }
    &_icon {

    }
    &_large {

    }
}
</style>