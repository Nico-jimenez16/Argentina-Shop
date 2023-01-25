<script setup>
import { useSearchStore } from '../store/searchStore'

// importacion de componentes 
import IndexProducts from '../components/container/IndexProducts.vue';
import Search from '../components/pure/Search.vue';
import Loading from '../components/pure/Loading.vue';
   

const { filterProducts } = useSearchStore()

</script>


<template>
    <div class="mt-16">
        <div class="w-full flex flex-col justify-center items-center mb-12">
            <div class="w-5/6 h-auto md:h-48 block md:flex justify-center items-center">
                <div class="w-full md:w-1/2 mt-4 md:mt-0">
                    <h1 class="text-4xl font-bold">Products</h1>
                    <h3 class="w-full">Compra tus Productos Aqui! La mejor tienda con la selección de productos más grande en Argentina.</h3>
                </div>
                <div class="w-full md:w-1/2 my-4 md:mt-0 flex justify-center md:justify-end items-center">
                    <Search />
                </div>
            </div>
            <div v-if="filterProducts === null" class="w-full h-32 flex justify-center items-center">
                <Loading />
            </div>
            <div v-if="filterProducts.length === 0" class="w-full h-32 flex justify-center items-center">
                <h1 class="text-2xl text-cyan-700"> not found Products ! </h1>
            </div>
            <div v-else class="w-5/6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1">
                <IndexProducts 
                    :products="filterProducts"
                />
            </div>
        </div>
    </div>
</template>