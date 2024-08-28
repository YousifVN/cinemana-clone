<template>
    <section class="mt-10">
        <h2 class="text-3xl capitalize">{{ sectionTitle }}</h2>
        <SubCarousel>
            <div v-for="index in limit" :key="index">
                <Card :title="cardTitle" :year="year" :img="img" />
            </div>
        </SubCarousel>
    </section>
</template>

<script setup>
import Card from '../common/Card.vue';
import SubCarousel from '../common/SubCarousel.vue';

const props = defineProps({
    sectionTitle: String,
    limit: {
        type: Number,
        default: 10
    },
    cardTitle: String,
    year: String,
    img: String
});
</script>

<style scoped></style>