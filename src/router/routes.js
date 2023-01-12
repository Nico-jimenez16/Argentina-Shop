import { createRouter, createWebHistory } from 'vue-router'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('../views/HomeView.vue'),
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
    },
    { 
      path: '/:pathMatch(.*)',
      component: () => import('../components/pure/NotFound.vue')
    }
  ],
})