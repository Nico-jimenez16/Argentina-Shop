<script setup>
import IndexProducts from '../components/container/IndexProducts.vue';

import { useFavoriteStore } from '../store/favoriteStore'

const { size, favoriteProducts } = useFavoriteStore()

</script>


<template>
    <div class="mt-16">
        <div class="w-full m-auto flex flex-col justify-center items-center p-4 mb-12">
            <div class="w-full h-24 md:h-32 flex justify-around items-center border-b border-cyan-300 mb-4">
                <div class="w-1/2">
                    <h1 class="text-3xl font-bold">Productos Favoritos</h1>
                </div>
                <div class="w-1/2 flex flex-col md:flex-row justify-end items-center">
                    <router-link to="/shop" class="text-center text-black uppercase w-full md:w-60 bg-cyan-300 p-2 md:p-4 rounded-xl md:mr-2 mb-1 md:mb-0">
                        Ir a Productos       
                    </router-link>
                    <router-link to="/cart" class="text-center text-black uppercase w-full md:w-60 bg-cyan-300 p-2 md:p-4 rounded-xl">
                        Ir a Carrito    
                    </router-link>
                </div>
            </div>
            <div class="w-full block md:flex justify-center items-center">
                <div v-if="size === 0" class="w-full md:w-2/3 flex flex-wrap justify-center items-center">
                    <h1 class="text-2xl"> No tiene productos Favoritos! </h1>
                </div>
                <div v-else class="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-1">
                    <IndexProducts
                        :products="favoriteProducts"
                    />
                </div>
            </div>
        </div>
    </div>
</template>