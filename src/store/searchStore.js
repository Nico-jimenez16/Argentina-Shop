import { ref, computed } from 'vue'
import { useProductsStore } from './productsStore'
import { defineStore } from 'pinia'

export const useSearchStore = defineStore('search', () => {
  // todos los productos
  const { products } = useProductsStore()

  // estados globales del Search
  const search = ref('')
  const filterProducts = ref(null)

  const searching = (valor) => {
    search.value = valor
  }

  filterProducts.value = computed (() => {
    return products.filter((product) => {
        return product.title.toLowerCase().includes(search.value.toLowerCase())
    });
  });

  return { searching, filterProducts }
})