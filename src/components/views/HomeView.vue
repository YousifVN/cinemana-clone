<script setup>
import Carousel from '../layout/Carousel.vue';
</script>

<template>
    <div class="relative">
        <!-- Carousel with relative positioning -->
        <Carousel />

        <!-- Floating content with absolute positioning and improved styling -->
        <div
            class="absolute inset-0 z-10 flex flex-col justify-between h-full p-8 pointer-events-none bg-gradient-to-r from-black/50 to-transparent">
            <!-- Top content -->
            <div class="w-[50%] text-left text-white space-y-4 pointer-events-auto">
                <!-- New Release Tag -->
                <p class="ml-5 text-lg tracking-wide text-red-500 uppercase">New Release</p>

                <!-- Title and Rating on the same line -->
                <div class="flex items-center ml-5 space-x-4">
                    <span class="text-3xl font-bold">Avatar The Way of Water</span>
                    <span class="flex items-center px-3 py-1 text-lg text-black bg-yellow-500 rounded-lg">
                        <i class="fa-solid fa-star me-2"></i>6.029
                    </span>
                </div>

                <!-- Movie Description -->
                <p class="ml-5 text-lg leading-relaxed">
                    "Avatar: The Way of Water" follows Jake Sully and Neytiri as they fight to protect their family
                    while exploring the breathtaking and dangerous aquatic world of Pandora. Stunning visuals and
                    intense battles bring new challenges to their evolving journey.
                </p>


            </div>

            <!-- Button pushed to the bottom -->
            <div class="w-[50%] pointer-events-auto ml-5">
                <button
                    class="px-6 py-3 text-lg font-semibold transition duration-300 bg-red-600 rounded-lg hover:bg-red-700">Watch
                    Now</button>
            </div>
        </div>
    </div>
</template>
