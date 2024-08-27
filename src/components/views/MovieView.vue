<script setup>

import InputText from 'primevue/inputtext';

import { ref } from 'vue';

const value = ref('');

</script>

<template>
    <div>
        Movie View
        <p>test</p>
        <InputText type="text" v-model="value" /> {{ value }}
    </div>
</template>


