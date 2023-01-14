<script setup>
import IndexProducts from '../components/container/IndexProducts.vue';
import Search from '../components/pure/Search.vue';

const products = [
    {
        id: 0,
        image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/02f90f6570a148c1a136af7300dc1ac4_9366/Camiseta_titular_Argentina_3_estrellas_2022_Blanco_IB3593_21_model.jpg',
        title: 'Remera argentina 3 estrellas',
        price: '$ 28.999',
        featured: true
    },
    {
        id: 1,
        image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1796e5026a124cee989daef900e90b45_9366/Camiseta_Alternativa_Argentina_22_Azul_HF1490_01_laydown.jpg',
        title: 'Remera alternativa argentina 22',
        price: '$ 20.999',
        featured: false
    },
    {
        id: 2,
        image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1b491bb71a844f219594ae9901205ad3_9366/Short_Titular_Argentina_22_Blanco_HK8071_21_model.jpg',
        title: 'Short titular argentina 22',
        price: '$ 12.999',
        featured: false
    },
    {
        id: 3,
        image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7890ac1e01394d809763ae77010ffedd_9366/Pelota_Argentum_22_Club_Blanco_HE3791_01_standard.jpg',
        title: 'Pelota argentum 22 club',
        price: '$ 18.000',
        featured: false
    },
    {
        id: 4,
        image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b82bf7363bf14441bde4ae9b011594c4_9366/Botines_X_Speedportal.3_Terreno_Firme_Azul_GW8456_22_model.jpg',
        title: 'Botines X Speedportal.3 Terreno Firme',
        price: '$ 30.999',
        featured: false
    },
    {
        id: 5,
        image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/e25cb3a035e740f3a220aed201047ac1_9366/Medias_Uniforme_Titular_Argentina_22_Blanco_HB9207_03_standard.jpg',
        title: 'Medias Uniforme Titular Argentina 22',
        price: '$ 4.499',
        featured: false
    },
    {
        id: 6,
        image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/77dea8cfd9ee4d88832caf6b00f9d710_9366/Remera_Argentina_Campeon_2022_Blanco_IR0032_21_model.jpg',
        title: 'Remera Argentina Campeón 2022',
        price: '$ 17.499',
        featured: true
    },
    {
        id: 7,
        image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b532810d02e94cc09648aefa010d4eee_9366/Gorra_Argentina_Blanco_HM6663_01_standard.jpg',
        title: 'Gorra Argentina',
        price: '$ 8.499',
        featured: false
    }
]


</script>


<template>
    <div class="mt-16">
        <div class="w-full flex flex-col justify-center items-center mb-12">
            <div class="w-5/6 h-auto md:h-48 block md:flex justify-center items-center">
                <div class="w-full md:w-1/2 mt-4 md:mt-0">
                    <h1 class="text-4xl font-bold">Products</h1>
                    <h3 class="w-full">Compra tus Productos Aqui! La mejor tienda con la selección de productos más grande en Argentina.</h3>
                </div>
                <div class="w-full md:w-1/2 my-4 md:mt-0 flex justify-center md:justify-end items-center">
                    <Search/>
                </div>
            </div>
            <div class="w-5/6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-1">
                <IndexProducts 
                    :products="products" 
                />
            </div>
        </div>
    </div>
</template>