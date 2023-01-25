import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useFavoriteStore = defineStore('favorite', () => {
  // !STATE //
  const favoriteProducts = ref([])

  // !GETTERS //
  const size = computed(() => favoriteProducts.value.length )

  // !ACTIONS //
  // devuelve si un producto es favorito no lo es.
  function isFavorite(id){
    const response = favoriteProducts.value.find((product) => product.id === id )
    if(response) return true
    return false
  }

  // Agrega productos a los favoritos 
  function addProductFavorite(product){
    favoriteProducts.value.push(product)
  }

  // Elimina un producto de los favoritos 
  function removeProductInFavorite(id) {
    const Indexproduct = favoriteProducts.value.findIndex((p) => p.id === id)
    favoriteProducts.value.splice(Indexproduct , 1)
  }

  return {
    favoriteProducts, 
    addProductFavorite, 
    removeProductInFavorite, 
    isFavorite, 
    size 
  }
})