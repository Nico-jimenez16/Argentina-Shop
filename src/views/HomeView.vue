<script setup>
import { Icon } from '@iconify/vue';

</script>


<template>
    <div class="w-full h-screen flex justify-center items-center relative">
        <div class="w-full h-auto p-8 lg:p-2 absolute flex flex-col justify-center items-center bg-black/30">
            <h1 class="text-2xl lg:text-5xl font-bold text-white"> CAMPEONES DEL MUNDO </h1>
            <p class="text-md lg:text-xl text-white">Celebrá con la colección que ya es parte de nuestra historia.</p>
            <router-link to="/shop">
                <button class="flex justify-center items-center text-black bg-white border border-white p-3 my-2 hover:text-cyan-600"> 
                    COMPRA AHORA 
                    <Icon class="w-8 h-8" icon="material-symbols:arrow-forward-rounded" />
                </button>
            </router-link>
        </div>
        <img class="w-full h-full object-cover" src="../assets/campeonesdelmundo.webp" alt="campeones del mundo">
    </div>
</template>