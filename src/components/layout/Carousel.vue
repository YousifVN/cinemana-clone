<!-- Ant Design Vue Component -->
<!-- https://antdv.com/components/carousel/ -->

<template>
    <a-carousel arrows autoplay>
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
        <div v-for="image in images" :key="image.src">
            <img :src="image.src" :alt="image.alt" class="object-cover object-top w-full h-full">
        </div>
    </a-carousel>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons-vue';

const images = ref([]);

onMounted(() => {
    const imageModules = import.meta.glob('/public/images/*.png', { eager: true });

    images.value = Object.entries(imageModules).map(([path, module]) => ({
        src: path.replace('/public', ''),
        alt: path.split('/').pop().replace('.png', '')
    }));
});
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