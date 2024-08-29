<script setup>

import { NCarousel } from 'naive-ui'

</script>

<template>

    <n-carousel :slides-per-view="5" :space-between="20" :loop="false" draggable show-arrow :show-dots="false" mousewheel>
        <slot />
    </n-carousel>

</template>

<style scoped>

</style>