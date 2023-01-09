<script setup>
import Product from '../pure/Product.vue';
import { useCartStore } from '../../store/cartStore';

const { productsInCart , getSizeProductInCart } = useCartStore()

</script>


<template>  
    <div v-for="(obj, index) of productsInCart" :key="index" class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 flex justify-center items-center">
        <Product 
                :obj="obj"
                :key="obj.id" 
        />
    </div>
</template>