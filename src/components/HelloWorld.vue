<script setup>
import { useCounterStore } from '../store/countStore'

defineProps({
  msg: String,
})

const counter = useCounterStore()

const HandleCount = () => {
  counter.increment()
}

</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="HandleCount" >count is {{ counter.count }}</button>
  </div>
</template>

<style scoped>
</style>
