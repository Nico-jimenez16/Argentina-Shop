import { createApp } from 'vue'
import router from './router/routes'
import { createPinia } from 'pinia'
import { Icon } from '@iconify/vue';
import './style.css'
import App from './App.vue'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(router)
app.component('Icon' , Icon)
app.mount('#app')

