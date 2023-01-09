<script setup>
import IndexProducts from '../components/container/IndexProducts.vue';
import Search from '../components/pure/Search.vue';
</script>


<template>
    <div class="mt-16">
        <div class="flex flex-col justify-center items-center mb-12">
            <div class="w-5/6 h-auto md:h-48 flex justify-center items-center">
                <div class="w-1/2">
                    <h1 class="text-4xl font-bold">Productos</h1>
                    <h3 class="w-full">Compra tus Productos Aqui! La mejor tienda con la selección de productos más grande en Argentina.</h3>
                </div>
                <div class="w-1/2 flex justify-end items-center">
                    <Search/>
                </div>
            </div>
            <div class="w-5/6 flex flex-wrap justify-center items-center">
                <IndexProducts/>
            </div>
        </div>
    </div>
</template>