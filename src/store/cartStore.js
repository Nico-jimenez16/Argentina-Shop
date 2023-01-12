import { ref , computed } from 'vue'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', () => {
  const productsInCart = ref([])
  const priceTotal = ref(0)

  const priceFinal =  computed(() => priceTotal.value )
  const size = computed(() => productsInCart.value.length )

  // Devuelve si un producto esta en el carrito 
  function isInCart(id){
    const response = productsInCart.value.find((product) => product.id === id )
    if(response) return true 
    return false
  }

  // Agrega productos al carrito 
  function addProductInCart(product) {
    productsInCart.value.push(product)
  }

  // Elimina un producto del carrito 
  function removeProductInCart(id) {
    const Indexproduct = productsInCart.value.findIndex((p) => p.id === id)
    productsInCart.value.splice(Indexproduct , 1)
  }

  return { productsInCart, priceTotal, addProductInCart, removeProductInCart, size, priceFinal, isInCart }
})