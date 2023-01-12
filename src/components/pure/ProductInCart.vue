<script setup>
import { useCartStore } from '../../store/cartStore.js';

defineProps({
    obj: Object.required,
})

const { removeProductInCart } = useCartStore()

</script>


<template>
    <div class="w-full h-full shadow-2xl bg-transparent text-black border-2 rounded-md mb-1">
        <a class="relative h-32 md:h-40 lg:h-40 m-auto w-fit">
            <img :src="obj.image" class="w-full h-70 m-auto" alt="aregtina 3 estrellas">
            <div class="absolute w-1/2 h-auto bottom-0 bg-white p-1 ml-2">
                <h2>{{ obj.price }}</h2>
            </div>
            <div @click="() => removeProductInCart(obj.id)" class="absolute flex justify-center items-center w-8 h-8 top-0 right-0 bg-red-600 p-2 cursor-pointer">
                <h2 class="text-white"> X </h2>
            </div>
        </a>
    </div>
</template>