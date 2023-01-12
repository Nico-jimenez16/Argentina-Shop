import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useFavoriteStore = defineStore('favorite', () => {
  const favoriteProducts = ref([])

  function isFavorite(id){
    const response = favoriteProducts.value.find((product) => product.id === id )
    console.log(response)
  }

  function addProductFavorite(product){
    favoriteProducts.value.push(product)
  }

  return { favoriteProducts, addProductFavorite , isFavorite }
})