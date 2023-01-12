import { ref , computed } from 'vue'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', () => {
  const productsInCart = ref([])
  const priceTotal = ref(0)

  const price = computed(() => priceTotal.value )
  
  // Obtiene el precio total de los productos en carrito 
  // function getPriceTotal() {
  //   this.productsInCart.foreach(element => {
  //     this.priceTotal += element.priceTotal
  //   });
  // }

  // Agrega productos al carrito 
  function addProductInCart(product) {
    return this.productsInCart.push(product)
  }

  // Devuelve la cantidad de productos en el carrito 
  function getSizeProductInCart() {
    return productsInCart.length;
  }

  // Elimina un producto del carrito 
  function removeProductInCart(id) {
    console.log('remove')
  }

  return { productsInCart, priceTotal , addProductInCart , removeProductInCart , getSizeProductInCart , price }
})