<template>
    <div>
        <h1 class="text-3xl font-bold text-cinemana-red">{{ title }}</h1>
        <p class="text-lg text-cinemana-red">{{ description }}</p>
    </div>
</template>

<script setup>
defineProps({
    title: {
        type: String,
        default: "Cinemana"
    },
    description: String
})
</script>
