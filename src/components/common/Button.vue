<template>
    <button type="button"
        class="flex items-center justify-center
         text-white bg-cinemana-red hover:bg-red-800 focus:ring-4 focus:ring-red-300
         rounded-lg text-sm px-2 py-2.5 mb-2 whitespace-nowrap">
        <span v-html="icon" class="mr-1"></span>
        {{ title }}
    </button>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    title: {
        type: String,
        required: true
    },
    icon: {
        type: String,
        default: ''
    }
});
</script>
