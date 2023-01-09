import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/shop',
      component: () => import('../views/ShopView.vue'),
    },
    {
      path: '/about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/cart',
      component: () => import('../views/CartView.vue'),
    }
  ],
})