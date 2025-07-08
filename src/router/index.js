// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../view/Dashboard.vue'
import CctvForm from '../view/pages/CctvForm.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Dashboard
  },
  {
    path: '/cform',
    name: 'form',
    // Route level code-splitting
    // This generates a separate chunk (About.[hash].js) for this route
    component: () => import('../view/pages/CctvForm.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../view/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
// import.meta.env.BASE_URL
export default router