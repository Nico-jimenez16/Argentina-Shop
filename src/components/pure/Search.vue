<script setup>
import { ref, watchEffect } from 'vue'
import { useSearchStore } from '../../store/searchStore'

// ESTADO LOCAL DEL COMPONENTE 
const productToSearch = ref('')

// ESTADO GLOBAL CON PINIA
const { searching } = useSearchStore()

// SE EJECUTA UNA VEZ AL MONTAR LA VISTA && SIEMPRE QUE CAMBIE LA VARIABLE --ProductsToSearch
watchEffect(() => {
    searching(productToSearch.value)
})

</script>

<template>
    <input v-model="productToSearch" class="w-5/6 md:w-3/4 p-4 rounded-xl border border-cyan-600 " type="text" placeholder="Busca tu protucto">
</template>

<style scope>
input:focus {
    outline-style: none;
    box-shadow: none;
}
</style>