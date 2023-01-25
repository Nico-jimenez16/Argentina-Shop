<script setup>
import { computed } from 'vue';
import IndexCart from '../components/container/IndexCart.vue';
import PurchaseDetail from '../components/pure/PurchaseDetail.vue'

import { useCartStore } from '../store/cartStore'

const storeCart = useCartStore()
const size = computed(() => storeCart.size )

</script>


<template>
    <div class="mt-16">
        <div class="w-full m-auto flex flex-col justify-center items-center p-4 mb-12">
            <div class="w-full h-24 md:h-32 flex justify-between items-center border-b border-cyan-300 mb-4">
                <h1 class="text-3xl font-bold">Mi Carrito</h1>
                <router-link to="/shop" class="md:w-60 text-center text-black uppercase bg-cyan-300 p-4 rounded-xl">
                    Ir a Productos       
                </router-link>
            </div>
            <div class="w-full block md:flex justify-center items-center">
                <div v-if="size === 0" class="w-full md:w-2/3 flex flex-wrap justify-center items-center">
                    <h1 class="text-2xl"> Su carrito esta vacio !  </h1>
                </div>
                <div v-else class="w-full md:w-3/5 lg:w-2/3 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1 p-0 md:p-2 lg:p-4">
                    <IndexCart />
                </div>
                <div v-show="size !== 0" class="w-full md:w-2/5 lg:w-1/3 flex flex-wrap justify-center items-center">
                    <PurchaseDetail />
                </div>
            </div>
        </div>
    </div>
</template>