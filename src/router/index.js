import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue')
  },
  {
    path: '/FridayDetail',
    name: 'FridayDetail',
    component: () => import('../views/FridayDetail.vue')
  },
  {
    path: '/Blog',
    name: 'Blog',
    component: () => import('../views/Blog.vue')
  },
  {
    path: '/BlogDetail',
    name: 'BlogDetail',
    component: () => import('../views/BlogDetail.vue')
  },
  {
    path: '/PrayerTime',
    name: 'PrayerTime',
    component: () => import('../views/PrayerTime.vue')
  },
  {
    path: '/Hadislar',
    name: 'Hadislar',
    component: () => import('../views/Hadislar.vue')
  },
  {
    path: '/HadisDetail',
    name: 'HadisDetail',
    component: () => import('../views/HadisDetail.vue')
  },
  {
    path: '/Gallery',
    name: 'Gallery',
    component: () => import('../views/Gallery.vue')
  },
  {
    path: '/Gallery2',
    name: 'Gallery2',
    component: () => import('../views/Gallery2.vue')
  },
  {
    path: '/Gallery3',
    name: 'Gallery3',
    component: () => import('../views/Gallery3.vue')
  },
  {
    path: '/AudioListening',
    name: 'AudioListening',
    component: () => import('../views/AudioListening.vue')
  },
  {
    path: '/Contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
