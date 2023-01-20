import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/HomeView'
import AboutView from '@/views/AboutView'
import CatalogView from "@/views/CatalogView";
import LoginView from "@/views/LoginView";
import SeaProduct from "@/views/SeaProduct";
import BasketView from "@/views/BasketView";
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView
  },
  {
    path: '/catalog',
    name: 'Catalog',
    component: CatalogView
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView
  },
  {
    path: '/product/:id',
    props: true,
    name: 'Product',
    component: SeaProduct
  },
  {
    path: '/basket',
    name: 'Basket',
    component: BasketView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
