<script setup>

import { NCarousel } from 'naive-ui'

</script>

<template>

    <n-carousel :slides-per-view="5" :space-between="20" :loop="false" draggable show-arrow dot-type="line" mousewheel>
        <slot />
    </n-carousel>

</template>

<style scoped>
.n-card {
    max-width: 300px;
}
</style>