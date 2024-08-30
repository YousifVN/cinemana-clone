<script setup>
import { ref, onMounted, computed } from 'vue'

import api from '@/services/api'

import Card from '../common/Card.vue';
import SubCarousel from '../common/SubCarousel.vue';

const props = defineProps({
    sectionTitle: String,
    param: String
});

const movies = ref([])

const isMovie = computed(() => props.param.includes('movie'))

onMounted(async () => {
    try {
        const response = await api.get(`${props.param}`)
        movies.value = response.data.results
    } catch (error) {
        console.error('Error fetching movies:', error)
    }
})

const getTitle = (item) => {
    return isMovie.value ? item.original_title : item.original_name
}

const getReleaseYear = (item) => {
    const releaseDate = isMovie.value ? item.release_date : item.first_air_date
    return releaseDate ? releaseDate.substring(0, 4) : ''
}
</script>

<template>
    <section class="mt-10">
        <h2 class="mb-5 text-3xl capitalize">{{ sectionTitle }}</h2>
        <SubCarousel>
            <div v-for="movie in movies" :key="movie.id">
                <Card :title="getTitle(movie)" :img="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"
                    :year="getReleaseYear(movie)" />
            </div>
        </SubCarousel>
    </section>
</template>

<style scoped></style>