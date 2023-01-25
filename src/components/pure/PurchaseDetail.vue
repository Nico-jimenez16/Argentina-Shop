<script setup>
import { useCartStore } from '../../store/cartStore.js'

const storeCart = useCartStore()

const handleClearCard = () => {
    storeCart.removeAllProductsInCart()
}

</script>


<template>
    <div class="w-full">
        <div class="w-full flex flex-col justify-center items-center mb-2 h-16">
            <h2 class="text-2xl font-bold underline"> Gracias por su Compra</h2>
        </div>
        <div class="w-full flex flex-col justify-center items-center">
            <div class="w-full flex justify-between items-center text-2xl p-4">
                <h2>Precio</h2>
                <h2>$ {{ storeCart.priceTotal }} </h2>
            </div>
        </div>
        <div class="w-full flex flex-col justify-center items-center">
            <router-link @click="handleClearCard" to="/" class="w-full text-center bg-violet-500 p-4 rounded-md uppercase mb-2 text-white"> Finalizar Compra </router-link>
            <router-link to="/shop" class="w-full text-center bg-violet-500 p-4 rounded-md uppercase mb-2 text-white"> Seguir explorando Productos </router-link>
        </div>
    </div>
</template>