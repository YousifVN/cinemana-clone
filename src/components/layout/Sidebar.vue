<template>
    <div>
        <button @click="toggleSidebar" data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar"
            aria-controls="logo-sidebar" type="button"
            class="inline-flex items-center p-2 mt-2 text-sm text-gray-500 rounded-lg ms-3 sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
            <span class="sr-only">Open sidebar</span>
            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path clip-rule="evenodd" fill-rule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z">
                </path>
            </svg>
        </button>

        <aside id="logo-sidebar" :class="[
            'fixed top-0 left-0 z-40 w-64 h-screen transition-transform sm:translate-x-0',
            isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        ]" aria-label="Sidebar">
            <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                <router-link to="/" class="flex items-center ps-2.5 mb-5">
                    <img src="/icons/cinemana.svg" class="h-6 me-3 sm:h-7" alt="cinemana Logo" />
                    <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                        Cinemana Clone
                    </span>
                </router-link>
                <ul class="space-y-2 font-medium">
                    <SidebarItem title="Home" dest="/" imgSrc="/icons/home.svg" />
                    <SidebarItem title="Movies" imgSrc="/icons/movies.svg" />
                    <SidebarItem title="Series" imgSrc="/icons/series.svg" />
                    <SidebarItem title="Watch List" imgSrc="/icons/watch-list.svg" />
                    <SidebarItem title="Favorites" imgSrc="/icons/favorites.svg" />
                </ul>
            </div>
        </aside>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import SidebarItem from './SidebarItem.vue';

const isSidebarOpen = ref(false);

const toggleSidebar = () => {
    isSidebarOpen.value = !isSidebarOpen.value;
};

const closeSidebar = (event) => {
    // Check if the click is outside the sidebar and the sidebar is open
    if (isSidebarOpen.value && !event.target.closest('#logo-sidebar') && !event.target.closest('button[data-drawer-toggle="logo-sidebar"]')) {
        isSidebarOpen.value = false;
    }
};

onMounted(() => {
    document.addEventListener('click', closeSidebar);
});

onUnmounted(() => {
    document.removeEventListener('click', closeSidebar);
});
</script>