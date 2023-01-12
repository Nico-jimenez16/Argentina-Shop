<script setup>

import { useCartStore } from '../../store/cartStore.js'

defineProps({
    obj: Object.required,
})

const { addProductInCart } = useCartStore()

</script>


<template>
    <div class="w-full h-full shadow-2xl bg-transparent text-black border-2 rounded-md mb-1">
        <router-link class="relative h-32 md:h-40 m-auto w-fit" to="/">
            <img :src="obj.image" class="w-full h-full m-auto" alt="argentina">
            <div class="absolute w-1/3 h-auto bottom-0 bg-white p-1 ml-2">
                <h2>{{ obj.price }}</h2>
            </div>
        </router-link>
        <div class="w-full h-auto lg:h-10 p-2">
            <h2 class="">{{ obj.title }}</h2>
        </div>
        <div class="w-full flex h-auto md:h-10">
            <div @click="addProductInCart(obj)" class="w-1/2 flex justify-center items-center bg-cyan-400 cursor-pointer">
                <h2 class="p-1">add to cart</h2>
            </div>
            <div class="w-1/2 flex justify-center items-center bg-green-200 cursor-pointer">
                <h2 class="p-1">add to favorite</h2>
            </div>
        </div>
    </div>
</template>