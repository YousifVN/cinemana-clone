<script setup>
import { RouterView } from 'vue-router'

import Sidebar from './components/layout/Sidebar.vue';
import SearchBox from './components/layout/SearchBox.vue';

import Button from './components/common/Button.vue';
import PageFooter from './components/layout/PageFooter.vue';
</script>

<template>
    <div class="">
        <div class="flex space-x-3">
            <Sidebar class="w-[80px] relative sm:mr-[200px]" />
            <SearchBox class="flex-grow mt-3" />
            <div><Button title="Log In" icon="<i class='fa-solid fa-user'></i>" class="mt-3 mr-5" /></div>
            
        </div>
        <div class="text-white sm:ml-[260px]">
            <RouterView />
        </div>

        <PageFooter class="sm:ml-[260px]"/>
    </div>
</template>