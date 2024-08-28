<script setup>

import Card from '../common/Card.vue'
import PageSection from '../common/PageSection.vue';
import SubCarousel from '../common/SubCarousel.vue'


</script>

<template>
    <div>
        Movie View

        <h2 class="text-3xl">Top Rated Movies</h2>

        <SubCarousel>
            <div v-for="card in 10">
                <Card title="The Batman" year="2022" img="/public/images/The Batman.png" />
            </div>
        </SubCarousel>

        <PageSection sectionTitle="Top Rated Series" :limit="10" cardTitle="Avatar The Way of Water" year="2014"
            img="/public/images/Avatar The Way of Water.png" />
    </div>
</template>

<style scoped>

</style>
