<template>
    <li>
        <router-link :to="dest"
            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <img :src="imgSrc" class="white-svg">
            <span class="ms-3">{{ title }}</span>
        </router-link>
    </li>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    title: {
        type: String,
        required: true
    },
    imgSrc: {
        type: String,
    },
    dest: {
        type: String,
        default: '#',
    }
});
</script>

<style scoped>
.white-svg {
    filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%);
}
</style>