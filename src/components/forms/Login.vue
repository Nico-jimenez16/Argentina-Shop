<script setup>

import { ref } from 'vue';

const username = ref('')
const password = ref('')


const HandleLogin = () => {
    const user = {
        username: username.value,
        password: password.value
    }
    console.log(user)
}
    
</script>

<template>
    <div class="login mt-24 h-screen">
        <div class="w-full flex justify-center items-center p-6">
            <form class="w-full flex flex-col justify-center items-center md:w-3/4 lg:w-3/5 border-2 rounded-xl">
                <h2 class="text-2xl text-black my-4">Login de Usuario</h2>
                <div class="flex justify-center w-full my-4">
                    <input ref="username" type="text" class="w-3/4 border-2 rounded-full p-4" placeholder="Ingrese usuario">
                </div>
                <div class="flex justify-center w-full my-4">
                    <input ref="password" type="password" class="w-3/4 border-2 rounded-full p-4" placeholder="Ingrese password">
                </div>
                <button @click.prevent="HandleLogin" class="w-3/4 my-4 p-2 text-white bg-[#dc2626] border-2 rounded-md">Ingresar</button>
                <router-link to="/">
                    <div class="flex justify-center">
                         Crear una cuenta
                    </div>
                </router-link>
                <div class="flex justify-end my-4">
                    ¿ Olvidaste tu contraseña ?
                </div>
            </form>
        </div>
    </div>
</template>