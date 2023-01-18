import { ref , computed, watchEffect } from 'vue'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', () => {
  const productsInCart = ref([])
  const priceTotal = ref(0)

  // Devuelve el price total del carrito
  const priceFinal = computed(() => priceTotal.value )

  watchEffect(() => {
    // recorre los productos del array y calcula el precio final 
    const calcularPrice = () => {
      priceTotal.value = 0
      return productsInCart.value.forEach((element) => {
        priceTotal.value += parseFloat( element.price )
      })
    }
    calcularPrice()
  })

  // Devuelve la cantidad de productos en el carrito 
  const size = computed(() => productsInCart.value.length )

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

  return { productsInCart, priceTotal, addProductInCart, removeProductInCart, size, priceFinal, isInCart }
})