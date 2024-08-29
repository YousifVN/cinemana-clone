<script setup>
import { ref, onMounted } from 'vue'
import api from '@/services/api'

const movies = ref([])

onMounted(async () => {
    try {
        const response = await api.get('/movie/popular')
        movies.value = response.data.results
    } catch (error) {
        console.error('Error fetching movies:', error)
    }
})
</script>

<template>
    <div>
        <h1 class="text-3xl text-center">Movie View</h1>
        <div v-for="movie in movies" :key="movie.id">
            <ul>
                <li>{{ movie.original_title }}</li>
            </ul>
        </div>
    </div>
</template>

<style scoped></style>