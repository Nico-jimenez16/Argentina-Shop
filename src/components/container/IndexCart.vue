<script setup>
import ProductInCart from '../pure/ProductInCart.vue';
import { useCartStore } from '../../store/cartStore';

const { productsInCart , getSizeProductInCart } = useCartStore()

</script>


<template>
    <div v-for="(obj, index) of productsInCart" :key="index">
        <ProductInCart
                :obj="obj"
                :key="obj.id"
        />
    </div>
</template>