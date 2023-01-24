import { ref , computed } from 'vue'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', () => {

   ///////////////
  // STATE //
  ////////////
  const productsInCart = ref([])


   ///////////////
  // GETTERS //
  ////////////

  // Devuelve el price total del carrito
  const priceTotal = computed(() => {
    let total = 0
    productsInCart.value.map((product) => {
      total += parseInt(product.price)
    })
    return total
  });

  // Devuelve la cantidad de productos en el carrito 
  const size = computed(() => productsInCart.value.length )


  ///////////////
  // ACTIONS //
  ////////////

  // Devuelve si un producto esta en el carrito 
  const isInCart = (id) => {
    const response = productsInCart.value.find((product) => product.id === id )
    if(response) return true 
    return false
  }

  // Agrega productos al carrito 
  const addProductInCart = (product) => {
    productsInCart.value.push(product)
  }

  // Elimina un producto del carrito 
  const removeProductInCart = (id) => {
    const Indexproduct = productsInCart.value.findIndex((product) => product.id === id)
    productsInCart.value.splice(Indexproduct , 1)
  }

  return { productsInCart, priceTotal, addProductInCart, removeProductInCart, size, isInCart }
})