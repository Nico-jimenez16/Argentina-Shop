<script setup>
import { ref } from 'vue';
import { useSearchStore } from '../../store/searchStore'

const { search } = useSearchStore()

</script>

<template>
    <input v-model="search" class="w-5/6 md:w-3/4 p-4 rounded-xl border border-cyan-600 " type="text" placeholder="Busca tu protucto">
</template>



<style scope>
input:focus {
    outline-style: none;
    box-shadow: none;
}
</style>