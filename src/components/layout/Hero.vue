<script setup>
import Carousel from './Carousel.vue';
</script>

<template>
    <div class="relative">

        <Carousel />

        <div
            class="absolute inset-0 z-10 flex flex-col justify-between h-full p-8 pointer-events-none bg-gradient-to-r from-black/50 to-transparent sm:p-4">

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
            </div>

            <div class="w-full sm:w-[50%] pointer-events-auto ml-5 sm:ml-2 mb-10">
                <button
                    class="px-3 py-2 text-sm font-semibold transition duration-300 bg-red-600 rounded-lg hover:bg-red-700">Watch
                    Now</button>
            </div>
        </div>
    </div>
</template>

<style scoped></style>