<template>
    <div class="mb-14">
        <img :src="img" class="w-64 rounded-md h-70">
        <p class="mt-2 text-base">{{ title }}</p>
        <p class="text-sm">{{ year }}</p>
    </div>
</template>

<script setup>

defineProps({
    title: String,
    year: String,
    img: String
})

</script>

<style scoped></style>