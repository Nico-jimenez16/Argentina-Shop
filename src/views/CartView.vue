<script setup>
import IndexCartVue from '../components/container/IndexCart.vue';
import PurchaseDetail from '../components/pure/PurchaseDetail.vue'


</script>


<template>
    <div class="mt-16">
        <div class="w-full m-auto flex flex-col justify-center items-center p-4 mb-12">
            <div class="w-full h-24 md:h-32 flex justify-between items-center border-b border-cyan-300 mb-4">
                <h1 class="text-3xl font-bold">My Cart</h1>
                <router-link to="/shop" class="text-white bg-cyan-300 p-4 rounded-xl">
                    Ir a Productos       
                </router-link>
            </div>
            <div class="w-full block md:flex justify-center items-center">
                <div class="w-full md:w-2/3 flex flex-wrap justify-center items-center">
                    <IndexCartVue/>
                </div>
                <div class="w-full md:w-1/3 flex flex-wrap justify-center items-center">
                    <PurchaseDetail/>
                </div>
            </div>
        </div>
    </div>
</template>