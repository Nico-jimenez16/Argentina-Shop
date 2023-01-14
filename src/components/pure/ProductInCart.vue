<script setup>
import { useCartStore } from '../../store/cartStore.js';

defineProps({
    obj: Object.required,
})

const { removeProductInCart } = useCartStore()

</script>


<template>
    <div class="w-full shadow-2xl bg-transparent text-black border rounded-md mb-1">
        <div class="relative w-auto h-auto md:h-48 lg:h-56">
            <img :src="obj.image" class="w-full h-full object-cover" alt="argentina 3 estrellas">
            <div class="absolute w-1/2 h-auto bottom-0 bg-white p-1 ml-2">
                <h2>{{ obj.price }}</h2>
            </div>
            <div @click="() => removeProductInCart(obj.id)" class="absolute flex justify-center items-center w-8 h-8 top-0 right-0 bg-red-600 p-2 cursor-pointer">
                <h2 class="text-white"> X </h2>
            </div>
        </div>
    </div>
</template>