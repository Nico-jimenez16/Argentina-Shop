import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useSearchStore = defineStore('search', () => {
  const search = ref('')

  function searching(value){
    search.value = value
  }

  return { search, searching }
})