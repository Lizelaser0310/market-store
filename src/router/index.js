import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Shop from '@/components/Shop'
import Product from '@/components/Product'
import Post from '@/components/Post'
import Cart from '@/components/Cart'
import Wishlist from '@/components/Wishlist'
import Cuenta from '@/components/Cuenta'
import Layout from '@/components/Layout'
import Suscripcion from '@/components/Suscripcion'
import GoogleMap from '@/components/GoogleMap'
import Register from '@/components/Register'
import QuienesSomos from '@/components/empresa/QuienesSomos'
import PreguntasFrecuentes from '@/components/empresa/PreguntasFrecuentes'
/*import { VNavigationDrawer } from 'vuetify/lib'*/

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Layout,
      children:[
        {
          path:'/',
          component:Home,
          name:'Home'
        },
        {
          path:'/registro',
          component:Register,
          name: 'Register'
        },
        {
          path:'/shop',
          component:Shop,
          name:'Shop'
        },
        {
          path:'/product',
          component:Product,
          name:'Product'
        },
        {
          path:'/post',
          component:Post,
          name:'Post'
        },
        {
          path:'/cart',
          component:Cart,
          name:'Cart'
        },
        {
          path:'/wishlist',
          component:Wishlist,
          name:'Wishlist'
        },
        {
          path:'/suscripcion',
          component:Suscripcion,
          name:'Suscripcion'
        },    
        {
          path:'/cuenta',
          component:Cuenta,
          name:'Cuenta'
        },
        {
          path:'/maps',
          component:GoogleMap,
          name:'GoogleMap'
        },
        {
          path:'/quienes-somos',
          component:QuienesSomos,
          name:'QuienesSomos'
        },
        {
          path:'/preguntas-frecuentes',
          component:PreguntasFrecuentes,
          name:'PreguntasFrecuentes'
        },
      ]

    }
  ],
    mode:'history'
})
