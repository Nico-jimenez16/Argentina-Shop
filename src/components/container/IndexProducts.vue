<script setup>
import Product from '../pure/Product.vue';

defineProps({
    products: Array.required,
})

</script>


<template>  
    <div v-for="(obj, index) of products"
        :key="index"
        :class="obj.featured ? '' : '' " 
        class="w-full h-70"
    >
            <Product 
                :obj="obj"
                :key="obj.id" 
            />
    </div>
</template>

<style scoped>
</style>