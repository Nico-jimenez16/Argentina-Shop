import { ref , computed } from 'vue'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', () => {
  const productsInCart = ref([])
  const priceTotal = ref(0)

  const priceFinal =  computed(() => priceTotal.value )

  function increment(valor){
    priceTotal.value += valor
  }

  // Agrega productos al carrito 
  function addProductInCart(product) {
    productsInCart.value.push(product)
  }

  // Devuelve la cantidad de productos en el carrito 
  function getSizeProductInCart() {
    return productsInCart.length;
  }

  // Elimina un producto del carrito 
  function removeProductInCart(id) {
    console.log('remove')
  }

  return { productsInCart, priceTotal , addProductInCart , removeProductInCart , getSizeProductInCart, priceFinal }
})