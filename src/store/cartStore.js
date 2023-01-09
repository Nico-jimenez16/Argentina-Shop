import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', () => {
  const productsInCart = ref([])
  const priceTotal = ref(0)
  
  // Obtiene el precio total de los productos en carrito 
  const getPriceTotal = () => {
    productsInCart.map(element => {
      console.log(element)
    });
  }

  // Agrega productos al carrito 
  const addProductInCart = (product) => {
    return productsInCart.push(product)
  }

  // Devuelve la cantidad de productos en el carrito 
  const getSizeProductInCart = () => {
    return productsInCart.length;
  }

  // Elimina un producto del carrito 
  const removeProductInCart = (id) => {
    console.log('remove')
  }

  return { productsInCart, priceTotal , getPriceTotal , addProductInCart , removeProductInCart , getSizeProductInCart }
})