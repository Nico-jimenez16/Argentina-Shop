<script setup>
import About from '../components/pure/About.vue'
import { Icon } from '@iconify/vue';
import { ref } from 'vue';


const openIngenieria = ref(false)
const openLeadbox = ref(false)
const openCreativosD = ref(false)
const openObjetivos = ref(false)

const handleIng = () => {
    openIngenieria.value = !openIngenieria.value
}
const handleLeadbox = () => {
    openLeadbox.value = !openLeadbox.value
}
const handleCreativos = () => {
    openCreativosD.value = !openCreativosD.value
}
const handleObjetivos = () => {
    openObjetivos.value = !openObjetivos.value
}

</script>

<template>
    <div class="mt-16">
        <div class="w-full h-auto block md:flex justify-center items-center">
            <div class="w-full md:w-2/6 flex flex-col justify-center items-center border-b-4 md:border-b-0 md:border-r-4 border-white py-4">
              <p class="text-3xl">Angel Nicolas Jimenez</p>
              <p class="text-xl">Frontend Developer</p>
            </div>
            <div class="w-full h-auto md:w-4/6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 md:m-4 my-4 px-2">
                <div>
                    <div @click="handleIng" class="w-full bg-gray-50 h-12 md:h-16 flex justify-center items-center border border-cyan-500 rounded-xl rounded-tl-none cursor-pointer">
                        <p class="w-5/6 text-center">Ingenieria en Sistemas de Informacion</p>
                        <Icon class="w-1/6 h-8 mt-1" icon="material-symbols:keyboard-arrow-down" />
                    </div>
                    <div v-if="openIngenieria" class="p-2">
                        <p>
                            Hola, Soy Estudiante de Ingenieria en Sistemas de Informacion en la Universidad Tecnológica Nacional de Cordoba, Argentina. Actualmente me encuentro cursando Tercer año.
                        </p>
                    </div>
                </div>
                <div>
                    <div @click="handleLeadbox" class="w-full bg-gray-50 h-12 md:h-16 flex justify-center items-center border border-cyan-500 rounded-xl rounded-tl-none cursor-pointer">
                        <p class="w-5/6 text-center">LeadboxHq</p>
                        <Icon class="w-1/6 h-8 mt-1" icon="material-symbols:keyboard-arrow-down" />
                    </div>
                    <div v-if="openLeadbox" class="p-2">
                        <p>
                            LeadboxHq es una empresa canadiense de la industria automotriz. El puesto quee me desempeñe es desarrolador frontend en el area de soporte, construyendo páginas y resolviendo los pedidos de los clientes.
                        </p>
                    </div>
                </div>
                <div>
                    <div @click="handleCreativos" class="w-full bg-gray-50 h-12 md:h-16 flex justify-center items-center border border-cyan-500 rounded-xl rounded-tl-none cursor-pointer">
                        <p class="w-5/6 text-center">Creativos Digitales</p>
                        <Icon class="w-1/6 h-8 mt-1" icon="material-symbols:keyboard-arrow-down" />
                    </div>
                    <div v-if="openCreativosD" class="p-2">
                        <p>
                            Creativos Digitales es un empresa de educacion, donde enseñamos programacion a niños a traves de videos juegos y en donde actuamente trabajo como profesor de programacion.             
                        </p>
                    </div>
                </div>
                <div>
                    <div @click="handleObjetivos" class="w-full bg-gray-50 h-12 md:h-16 flex justify-center items-center border border-cyan-500 rounded-xl rounded-tl-none cursor-pointer">
                        <p class="w-5/6 text-center">Objetivos</p>
                        <Icon class="w-1/6 h-8 mt-1" icon="material-symbols:keyboard-arrow-down" />
                    </div>
                    <div v-if="openObjetivos" class="p-2">
                        <p>
                            Actuamente me encuentro profundizando mis conocimientos en lo que hace al desarrollo Frontend y mi objetivo es seguir aprendiendo y enfrentarme a nuevos desafios
                            y poder comandar grupos de trabajos, desarrollar arquitecturas frontend. Ademas, recibirme de ingeniero en sistemas e involucrarme en lo que es el desarrollo FullStack.              
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <About />
    </div>
</template>