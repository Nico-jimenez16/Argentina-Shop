<script setup>
import Product from '../pure/Product.vue';

defineProps({
    products: Array.required,
})

</script>


<template>  
    <div v-for="(obj, index) of products"
        :key="index"
        :class="obj.featured ? 'featured' : '' " 
        class="w-full h-70 md:w-1/2 lg:w-1/3 xl:w-1/4"
    >
            <Product 
                :obj="obj"
                :key="obj.id" 
            />
    </div>
</template>

<style scoped>
</style>