import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useFavoriteStore = defineStore('favorite', () => {
  const favoriteProducts = ref([])

  const size = computed(() => favoriteProducts.value.length )

  function isFavorite(id){
    const response = favoriteProducts.value.find((product) => product.id === id )
    if(response) return true
    return false
  }

  function addProductFavorite(product){
    favoriteProducts.value.push(product)
  }

  return { favoriteProducts, addProductFavorite , isFavorite, size }
})