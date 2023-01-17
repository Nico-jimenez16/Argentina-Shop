<script setup>
import { Icon } from '@iconify/vue';


</script>


<template>
    <div id="header" class="w-full fixed top-0 h-16 bg-black/60 z-50">
        <nav class="w-full h-full flex justify-start items-center px-2 md:px-4">
            <div class="w-2/3 md:w-1/2">
                <router-link class="mx-1 uppercase" to="/">Home</router-link>
                <router-link class="mx-2 uppercase" to="/shop">Shop</router-link>
                <router-link class="mx-1 uppercase" to="/about">About me</router-link>
            </div>
            <div class="w-1/3 md:w-1/2 flex justify-end items-center">
                <router-link to="/favorite" class="flex">
                    <Icon class="w-8 h-8 mx-1" icon="ph:heart" />
                </router-link>
                <router-link to="/cart" class="flex">
                    <Icon class="w-8 h-8 mx-1" icon="ph:shopping-cart-simple-thin" />
                </router-link>
            </div>
        </nav>
    </div>
</template>

<style scoped>

a{
    font-size: 1.2rem;
    color: white;
}
.router-link-exact-active{
    text-decoration: underline;
}

</style>