<script setup>
import { ref, onMounted } from 'vue'
import api from '@/services/api'
import { NCarousel, NCarouselItem } from 'naive-ui'

const movies = ref([])

onMounted(async () => {
    try {
        const response = await api.get('/movie/now_playing')
        movies.value = Array.isArray(response.data.results)
            ? response.data.results.map(movie => ({
                id: movie.id,
                title: movie.title,
                poster_path: movie.poster_path
            }))
            : []
    } catch (error) {
        console.error('Error fetching movies:', error)
    }
})
</script>

<template>
    <div class="relative">
        <n-carousel :loop="true" :show-dots="false" mousewheel autoplay class="h-[500px]">
            <n-carousel-item v-for="movie in movies" :key="movie.id">
                <img class="object-cover object-top w-full h-full"
                    :src="movie.poster_path ? `https://image.tmdb.org/t/p/original${movie.poster_path}` : '/placeholder-image.jpg'"
                    :alt="movie.title">
            </n-carousel-item>
        </n-carousel>

        <div
            class="absolute inset-0 z-10 flex flex-col justify-between h-[500px] p-8 pointer-events-none bg-gradient-to-r from-black/50 to-transparent sm:p-4">
            <div class="w-full md:w-[50%] space-y-4 text-left text-white pointer-events-auto">
                <p class="ml-5 text-lg tracking-wide text-red-500 uppercase sm:ml-2">New Release</p>
                <div class="flex items-center ml-5 space-x-4 sm:ml-2">
                    <span class="text-3xl font-bold">Avatar The Way of Water</span>
                    <span class="flex items-center px-3 py-1 text-lg text-black bg-yellow-500 rounded-lg sm:text-sm">
                        <i class="fa-solid fa-star me-2"></i>6.029
                    </span>
                </div>
                <p class="ml-5 text-lg leading-relaxed sm:ml-2">
                    "Avatar: The Way of Water" follows Jake Sully and Neytiri as they fight to protect their family
                    while exploring the breathtaking and dangerous aquatic world of Pandora.
                </p>
                <button
                    class="px-3 py-2 mb-3 text-sm font-semibold text-white transition duration-300 bg-red-600 rounded-lg hover:bg-red-700">
                    Watch Now
                </button>
            </div>
            <div class="w-full pointer-events-auto">
                <n-carousel v-if="movies.length" :slides-per-view="5" :space-between="20" :loop="true"
                    :show-dots="false" mousewheel autoplay>
                    <n-carousel-item v-for="movie in movies" :key="movie.id">
                        <div class="mt-3">
                            <img :src="movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : '/placeholder-image.jpg'"
                                class="object-cover w-32 h-48 rounded-xl" :alt="movie.title">
                        </div>
                    </n-carousel-item>
                </n-carousel>
                <p v-else class="text-white">No movies available</p>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>
