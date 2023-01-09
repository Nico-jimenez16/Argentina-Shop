<script setup>
import ProductCart from '../pure/ProductCart.vue';
import { useCartStore } from '../../store/cartStore';

const { productsInCart , getSizeProductInCart } = useCartStore()

</script>


<template>  
    <div v-for="(obj, index) of productsInCart" :key="index" class="w-full md:w-1/2 lg:w-1/4 xl:w-1/4 flex justify-center items-center">
        <ProductCart 
                :obj="obj"
                :key="obj.id"
        />
    </div>
</template>