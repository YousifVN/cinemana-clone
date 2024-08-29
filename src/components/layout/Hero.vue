<script setup>
import { ref, onMounted, computed } from 'vue'
import api from '@/services/api'
import { NCarousel, NCarouselItem } from 'naive-ui'

const movies = ref([])
const currentMovieIndex = ref(0)

onMounted(async () => {
    try {
        const response = await api.get('/movie/now_playing')
        movies.value = Array.isArray(response.data.results)
            ? response.data.results.map(movie => ({
                id: movie.id,
                title: movie.original_title,
                poster_path: movie.poster_path,
                overview: movie.overview,
                vote_average: movie.vote_average
            }))
            : []
    } catch (error) {
        console.error('Error fetching movies:', error)
    }
})

const handleCarouselChange = (index) => {
    currentMovieIndex.value = index
}

const getRatingColor = computed(() => {
    const rating = movies.value[currentMovieIndex.value]?.vote_average
    if (rating >= 7) return 'bg-green-500'
    if (rating >= 5) return 'bg-yellow-500'
    return 'bg-red-500'
})

const truncateOverview = (text, maxLength = 150) => {
    if (text.length <= maxLength) return text
    return text.slice(0, maxLength) + '...'
}
</script>

<template>
    <div class="relative">
        <n-carousel :loop="true" :show-dots="false" mousewheel autoplay class="h-[580px] md:h-[620px]"
            @update:current-index="handleCarouselChange">
            <n-carousel-item v-for="movie in movies" :key="movie.id">
                <img class="object-cover object-top w-full h-full"
                    :src="movie.poster_path ? `https://image.tmdb.org/t/p/original${movie.poster_path}` : '/placeholder-image.jpg'"
                    :alt="movie.title">
            </n-carousel-item>
        </n-carousel>
        <div
            class="absolute inset-0 z-10 flex flex-col justify-between h-[580px] md:h-[620px] p-8 pointer-events-none bg-gradient-to-r from-black/50 to-transparent sm:p-4">
            <div class="w-full md:w-[50%] space-y-4 text-left text-white pointer-events-auto mt-5">
                <p class="ml-5 text-lg tracking-wide text-red-500 uppercase sm:ml-2">New Release</p>
                <div class="flex items-center ml-5 space-x-4 sm:ml-2">
                    <span class="text-3xl font-bold">{{ movies[currentMovieIndex]?.title }}</span>
                    <span
                        :class="['flex items-center px-3 py-1 text-lg text-black rounded-lg sm:text-sm', getRatingColor]">
                        <i class="fa-solid fa-star me-2"></i>{{ movies[currentMovieIndex]?.vote_average?.toFixed(1) }}
                    </span>
                </div>
                <div class="ml-5 sm:ml-2">
                    <p class="text-base leading-relaxed">
                        {{ truncateOverview(movies[currentMovieIndex]?.overview || '') }}
                    </p>
                    
                    <!-- This is disabled for now -->
                    <button class="text-sm text-blue-400 hover:text-blue-300 focus:outline-none">
                        Read More
                    </button>
                </div>
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

<style scoped></style>