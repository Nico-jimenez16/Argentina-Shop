<script setup>
import { useCartStore } from '../../store/cartStore.js'

const { priceFinal } = useCartStore()

</script>


<template>
    <div class="w-full">
        <div class="w-full flex flex-col justify-center items-center mb-2 h-16">
            <h2 class="text-2xl font-bold underline"> Gracias por su Compra</h2>
        </div>
        <div class="w-full flex flex-col justify-center items-center">
            <div class="w-4/5 flex justify-between items-center p-4">
                <h2 class="text-xl">Price</h2>
                <h2>$ {{ priceFinal }} </h2>
            </div>
        </div>
        <div class="w-full flex flex-col justify-center items-center">
            <router-link to="" class="w-4/5 bg-cyan-200 p-4 rounded-md mb-2" > Finalizar Compra </router-link>
            <router-link to="/shop" class="w-4/5 bg-cyan-200 p-4 rounded-md mb-2" > Seguir explorando Productos </router-link>
        </div>
    </div>
</template>