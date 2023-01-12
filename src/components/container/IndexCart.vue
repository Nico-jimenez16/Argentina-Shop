<script setup>
import ProductInCart from '../pure/ProductInCart.vue';
import { useCartStore } from '../../store/cartStore';

const { productsInCart , getSizeProductInCart } = useCartStore()

</script>


<template>  
    <div v-for="(obj, index) of productsInCart" :key="index" class="w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 flex justify-center items-center">
        <ProductInCart
                :obj="obj"
                :key="obj.id"
        />
    </div>
</template>