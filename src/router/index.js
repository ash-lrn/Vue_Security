// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../view/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // Route level code-splitting
    // This generates a separate chunk (About.[hash].js) for this route
    component: () => import('../view/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
// import.meta.env.BASE_URL
export default router