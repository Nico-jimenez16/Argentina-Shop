import { ref, computed } from 'vue'
import { useProductsStore } from './productsStore'
import { defineStore } from 'pinia'

export const useSearchStore = defineStore('search', () => {
  // todos los productos
  const { products } = useProductsStore()

  // !STATE //
  const search = ref('')
  const filterProducts = ref(null)

  // !GETTERS //
  filterProducts.value = computed (() => {
    return products.filter((product) => {
        return product.title.toLowerCase().includes(search.value.toLowerCase())
    });
  });

  // !ACTIONS //
  const searching = (valor) => {
    search.value = valor
  }

  return {
    searching, 
    filterProducts 
  }
})