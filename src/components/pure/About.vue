<script setup>
import { Icon } from '@iconify/vue';

</script>
<template>
    <div class="bg-black p-12 overflow-hidden">
        <div class="contenedor">
            <table>
                <tr>
                    <td><div class="circulo n1"> 
                        <div class="absolute w-full h-full flex justify-center items-center">
                            <h1 class="text-3xl text-white">Proyectos</h1>
                        </div> 
                    </div></td>
                    <td><div class="circulo n2">
                        <a href="https://e-commerse-react.vercel.app/" target="_blank" rel="noreferrer" class="absolute w-full h-full flex justify-center items-center">
                            <h1 class="text-xl bg-white/50 font-bold text-black z-50">E-Commerce</h1>
                            <Icon class="w-1/3 h-1/3 absolute top-5 object-cover z-50" icon="logos:react" />
                            <!-- <img class="absolute w-full h-full opacity-50 overflow-hidden object-cover rounded-full" src="../../assets/E-commerce-React.jpg" alt="EcommerceReact"> -->
                        </a>
                    </div></td>
                </tr>
                <tr>
                    <td><div class="circulo n3">
                        <a href="https://github.com/Nico-jimenez16/backend-e-commerce-react" target="_blank" rel="noreferrer" class="absolute w-full h-full flex justify-center items-center">
                            <h1 class="text-xl bg-white/50 font-bold z-50">Backend</h1>
                            <Icon class="w-1/3 h-1/3 absolute top-5 object-cover z-50" icon="logos:nodejs" />
                            <!-- <img class="absolute w-full h-full opacity-50 overflow-hidden object-cover rounded-full" src="../../assets/Backend.png" alt=""> -->
                        </a>
                    </div></td>
                    <td><div class="circulo n4">
                        <a href="https://e-commerce-vuejs.vercel.app/#/" target="_blank" rel="noreferrer" class="absolute w-full h-full flex justify-center items-center">
                            <h1 class="text-xl bg-white/50 font-bold z-50">E-Commerce</h1>
                            <Icon class="w-1/3 h-1/3 absolute top-5 object-cover z-50" icon="logos:vue" />
                            <!-- <img class="absolute w-full h-full opacity-50 overflow-hidden object-cover rounded-full" src="../../assets/E-commerceVue.jpg" alt=""> -->
                        </a>
                    </div></td>
                </tr>
                <tr>
                    <td><div class="circulo n5">
                        <a href="https://argentina-shop.vercel.app/" target="_blank" rel="noreferrer" class="absolute w-full h-full flex justify-center items-center">
                            <h1 class="text-xl bg-white/50 font-bold z-50">Argentina Shop</h1>
                            <Icon class="w-1/3 h-1/3 absolute top-5 object-cover z-50" icon="logos:vitejs" />
                            <!-- <img class="absolute w-full h-full opacity-50 object-cover rounded-full" src="../../assets/campeonesdelmundo.webp" alt="ArgentinaShop"> -->
                        </a>
                    </div></td>
                </tr>
            </table>
        </div>
    </div>
</template>


<style scoped>

@media ( min-width:320px) and (max-width:768px ) {
    .contenedor{
        width: 500;
        height: 500px;
        border: 1px solid white;
        margin: auto;
        display: grid;
        grid-column: 2;
        border-radius: 50%;
        animation: rotacion 50s infinite linear;
    }
    .circulo{
        width: 200px;
        height: 200px;
        background: white;
        border-radius: 50%;
        margin: 0px 10px 0px 10px;
        position: relative;
        animation: rotar 50s infinite linear;
    }
}
.contenedor{
    width: 700px;
    height: 700px;
    border: 1px solid white;
    margin: auto;
    display: grid;
    grid-column: 2;
    border-radius: 50%;
    animation: rotacion 50s infinite linear;
}
.circulo{
    width: 200px;
    height: 200px;
    background: white;
    border-radius: 50%;
    margin: 0px 10px 0px 10px;
    position: relative;
    /* background: rgb(238, 207, 207); */
    animation: rotar 50s infinite linear;
}

@keyframes rotacion {
    from{
        transform: rotate(0deg);
    }
    to{
        transform: rotate(360deg);
    }
}
@keyframes rotar {
    from{
        transform: rotate(360deg);
    }
    to{
        transform: rotate(0deg);
    }
}

td{
    width: 100px;
    height: 100px;
}
.n1{
    float: center;
    margin-top: 10px;
    background: black;
    border: 1px solid white;
}
.n2{
    float: left;
    margin-top: 10px;
    margin-left: -30%;
}
.n3{
    float: left;
}
.n4{
    float: right;
}
.n5{
    float: right;
    margin-top: -20px;
    margin-right: -30%;
}
</style>