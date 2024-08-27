<template>
    <a-carousel arrows>

        <template #prevArrow>
            <div class="custom-slick-arrow" style="left: 10px; z-index: 1">
                <left-circle-outlined />
            </div>
        </template>
        <template #nextArrow>
            <div class="custom-slick-arrow" style="right: 10px">
                <right-circle-outlined />
            </div>
        </template>

        <div>
            <img src="/images/All Quiet on the Western Front.png" alt="All Quiet on the Western Front"
                class="object-cover object-top w-full h-full">
        </div>
        <div>
            <img src="/images/Avatar The Way of Water.png" alt="Avatar The Way of Water"
                class="object-cover object-top w-full h-full">
        </div>
        <div>
            <img src="/images/Aftersun.png" alt="Aftersun" class="object-cover object-top w-full h-full">
        </div>
        <div>
            <img src="/images/Bullet Train.png" alt="Bullet Train" class="object-cover object-top w-full h-full">
        </div>
    </a-carousel>
</template>

<script lang="ts" setup>

import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons-vue';

</script>

<style scoped>
/* For demo */
:deep(.slick-slide) {
    text-align: center;
    height: 520px;
    line-height: 160px;
    background: #364d79;
    overflow: hidden;
}

:deep(.slick-arrow.custom-slick-arrow) {
    width: 25px;
    height: 25px;
    font-size: 25px;
    color: #fff;
    background-color: rgba(31, 45, 61, 0.11);
    transition: ease all 0.3s;
    opacity: 0.3;
    z-index: 1;
}

:deep(.slick-arrow.custom-slick-arrow:before) {
    display: none;
}

:deep(.slick-arrow.custom-slick-arrow:hover) {
    color: #fff;
    opacity: 0.5;
}

:deep(.slick-slide h3) {
    color: #fff;
}
</style>