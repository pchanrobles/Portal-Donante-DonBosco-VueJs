import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../layout/Login.vue'
import ForgotPassword from '../layout/ForgotPassword.vue'
import Formulario from '../layout/Formulario.vue'
import Releases from '../components/Releases.vue'
import Profile from '../components/Profile.vue'





Vue.use(VueRouter)


const routes = [

  {
    path: '/releases',
    name: 'Releases',
    component: Releases,

  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,

  },
  {

    path: '/login',
    name: 'Login',
    component: Login,

  },

  {

    path: '/forgot',
    name: 'ForgotPassword',
    component: ForgotPassword,
  },

  {

    path: '/formulario',
    name: 'Formulario',
    component: Formulario,
  },

  {
    path: '/',
    name: 'DashboardLayout',
    component: () => import(/* webpackChunkName: "DashboardLayout" */ '../layout/DashboardLayout.vue'),

    children: [
      {
        path: '/',
        name: 'Inicio',
        component: () => import(/* webpackChunkName: "DashboardMain" */ '../views/DashboardMain.vue'),

      },

      {
        path: '/releases',
        name: 'Releases',
        component: () => import(/* webpackChunkName: "DashboardMain" */ '../layout/DashboardLayout.vue'),

      },


    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router