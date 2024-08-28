<script setup>
import PageSection from '../common/PageSection.vue';
import Hero from '../layout/Hero.vue';

</script>

<template>
    <div class="mb-20">

        <Hero />

        <div class="mx-3">
            <PageSection sectionTitle="Top Rated Movies" :limit="10" cardTitle="The Batman" year="2022"
                img="/images/The Batman.png" />
            <PageSection sectionTitle="Top Rated Series" :limit="10" cardTitle="Avatar The Way of Water" year="2015"
                img="/images/Avatar The Way of Water.png" />
            <PageSection sectionTitle="Popular Tv Series" :limit="10" cardTitle="All Quiet on the Western Front"
                year="2007" img="/images/All Quiet on the Western Front.png" />
        </div>

    </div>
</template>
