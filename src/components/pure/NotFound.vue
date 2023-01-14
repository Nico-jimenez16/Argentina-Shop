<script setup>
import { Icon } from '@iconify/vue';

</script>
<template>
    <div class="w-full h-screen  flex justify-center items-center">
        <div class="flex flex-col justify-center items-center">
            <h1 class="text-black text-3xl"> Not Found Page </h1>
            <Icon class="w-48 h-48" icon="clarity:sad-face-line" />
            <router-link class="text-2xl border border-cyan-400 p-4" to="/">
                Go to Home
            </router-link>
        </div>
    </div>
</template>