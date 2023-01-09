<script setup>

</script>


<template>
    <div id="header" class="w-full fixed top-0 h-24 bg-black/60 z-50">
        <nav class="w-full h-full flex justify-start items-center px-4">
            <div class="w-1/2">
                <router-link to="/">Home</router-link>
                <router-link to="/shop">Shop</router-link>
                <router-link to="/about">About me</router-link>
            </div>
            <div class="w-1/2 flex justify-end">
                <router-link to="/cart" class="underline">Cart</router-link>
            </div>
        </nav>
    </div>
</template>

<style scoped>

a{
    font-size: x-large;
    color: white;
    margin: 5px;
}

</style>