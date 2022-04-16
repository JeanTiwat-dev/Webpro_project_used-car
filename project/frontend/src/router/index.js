import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue')
  },
    {
    path: '/shop',
    name: 'shop',
    component: () => import('../views/shop.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login/login.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/Login/register.vue')
  },
]


const router = new VueRouter({
  routes
})

export default router
