<script setup>

import { useCartStore } from '../../store/cartStore.js'
import { useFavoriteStore } from '../../store/favoriteStore.js'

defineProps({
    obj: Object.required,
})

const { addProductInCart, isInCart } = useCartStore()
const { addProductFavorite } = useFavoriteStore()

</script>


<template>
    <div class="w-full h-full shadow-2xl bg-transparent text-black border-2 rounded-md mb-1">
        <a class="relative w-full h-32 md:h-40">
            <img :src="obj.image" class="w-full h-full" alt="argentina">
            <div class="absolute w-1/3 h-auto bottom-0 bg-white p-1 ml-2">
                <h2>{{ obj.price }}</h2>
            </div>
        </a>
        <div class="w-full h-auto lg:h-10 p-2">
            <h2 class="">{{ obj.title }}</h2>
        </div>
        <div class="w-full flex h-auto md:h-10">
            <div v-if="isInCart(obj.id)" class="w-1/2 flex justify-center items-center bg-red-400">
                <h2 class="text-white p-1">In cart</h2>
            </div>
            <div v-else @click="addProductInCart(obj)" class="w-1/2 flex justify-center items-center bg-cyan-400 cursor-pointer">
                <h2 class="p-1">add to cart</h2>
            </div>
            <div @click="addProductFavorite(obj)" class="w-1/2 flex justify-center items-center bg-green-200 cursor-pointer">
                <h2 class="p-1">add to favorite</h2>
            </div>
        </div>
    </div>
</template>