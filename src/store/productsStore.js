import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useProductsStore = defineStore('products', () => {
  const products = ref([
    {
        id: 0,
        image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/02f90f6570a148c1a136af7300dc1ac4_9366/Camiseta_titular_Argentina_3_estrellas_2022_Blanco_IB3593_21_model.jpg',
        title: 'Remera argentina 3 estrellas',
        price: 28999,
        featured: true
    },
    {
        id: 1,
        image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1796e5026a124cee989daef900e90b45_9366/Camiseta_Alternativa_Argentina_22_Azul_HF1490_01_laydown.jpg',
        title: 'Remera alternativa argentina 22',
        price: 20999,
        featured: false
    },
    {
        id: 2,
        image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1b491bb71a844f219594ae9901205ad3_9366/Short_Titular_Argentina_22_Blanco_HK8071_21_model.jpg',
        title: 'Short titular argentina 22',
        price: 12999,
        featured: false
    },
    {
        id: 3,
        image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7890ac1e01394d809763ae77010ffedd_9366/Pelota_Argentum_22_Club_Blanco_HE3791_01_standard.jpg',
        title: 'Pelota argentum 22 club',
        price: 18000,
        featured: false
    },
    {
        id: 4,
        image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b82bf7363bf14441bde4ae9b011594c4_9366/Botines_X_Speedportal.3_Terreno_Firme_Azul_GW8456_22_model.jpg',
        title: 'Botines X Speedportal.3 Terreno Firme',
        price: 30999,
        featured: false
    },
    {
        id: 5,
        image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/e25cb3a035e740f3a220aed201047ac1_9366/Medias_Uniforme_Titular_Argentina_22_Blanco_HB9207_03_standard.jpg',
        title: 'Medias Uniforme Titular Argentina 22',
        price: 4499,
        featured: false
    },
    {
        id: 6,
        image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/77dea8cfd9ee4d88832caf6b00f9d710_9366/Remera_Argentina_Campeon_2022_Blanco_IR0032_21_model.jpg',
        title: 'Remera Argentina Campeón 2022',
        price: 17499,
        featured: true
    },
    {
        id: 7,
        image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b532810d02e94cc09648aefa010d4eee_9366/Gorra_Argentina_Blanco_HM6663_01_standard.jpg',
        title: 'Gorra Argentina',
        price: 8499,
        featured: false
    }
])

  return { products }
})