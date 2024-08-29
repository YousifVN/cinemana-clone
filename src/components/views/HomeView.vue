<script setup>

import Hero from '../layout/Hero.vue';
import PageSection from '../common/PageSection.vue';

</script>

<template>
    <div class="mb-20">

        <Hero />

        <div class="mx-3">
            <PageSection sectionTitle="Top Rated Movies" param="/movie/popular" />

            <PageSection sectionTitle="Top Rated Series" param="/tv/top_rated" />

            <PageSection sectionTitle="Trending Movies" param="/trending/movie/week?language=en-US" />

            <PageSection sectionTitle="Trending Tv Series" param="/trending/tv/week?language=en-US" />

        </div>

    </div>
</template>
