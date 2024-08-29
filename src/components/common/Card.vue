<template>
    <div class="mb-10">
        <img :src="img" class="w-64 rounded-md h-70" :alt="title">
        <p class="mt-2 text-base font-semibold truncate-title">{{ title }}</p>
        <p class="text-sm text-gray-500">{{ year }}</p>
    </div>
</template>

<script setup>
defineProps({
    title: String,
    year: String,
    img: String
})
</script>

<style scoped>
.truncate-title {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
}

@media (min-width: 640px) {
    .truncate-title {
        white-space: normal;
        overflow: visible;
        text-overflow: clip;
    }
}
</style>