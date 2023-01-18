import { ref, computed } from 'vue'
import { useProductsStore } from './productsStore'
import { defineStore } from 'pinia'

export const useSearchStore = defineStore('search', () => {
  const { products } = useProductsStore()
  const search = ref('')

  const searching = (valor) => {
    search.value = valor
  }

  const filterProducts = ref(null)
  filterProducts.value = computed (() => {
    return products.filter((product) => {
        return product.title.toLowerCase().includes(search.value.toLowerCase())
    });
  });

  return { searching, filterProducts }
})