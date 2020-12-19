import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      layout: "main"
    },
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/Catalog',
    name: 'Catalog',
    meta: {
      layout: "main"
    },
    component: () => import('@/views/Catalog.vue')

  },
    {
    path: '/Delivery',
    name: 'Delivery',
    meta: {
      layout: "main"
    },
    component: () => import('@/views/Delivery.vue')
  },
    {
    path: '/Warranty',
    name: 'Warranty',
    meta: {
      layout: "main"
    },
    component: () => import('@/views/Warranty.vue')
  },
    {
    path: '/Contact',
    name: 'Contact',
    meta: {
      layout: "main"
    },
    component: () => import('@/views/Contact.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  //base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return {x: 0, y: 0}
  }
});

export default router
