<script setup>

defineProps({
    obj: Object.required,
})

</script>


<template>
    <div class="w-full h-full shadow-2xl bg-transparent text-black border-2 rounded-md mb-1">
        <router-link class="relative h-32 md:h-40 lg:h-40 m-auto w-fit" to="/">
            <img :src="obj.image" class="w-full h-70 m-auto" alt="aregtina 3 estrellas">
            <div class="absolute w-1/2 h-auto bottom-0 bg-white p-1 ml-2">
                <h2>{{ obj.price }}</h2>
            </div>
        </router-link>
    </div>
</template>