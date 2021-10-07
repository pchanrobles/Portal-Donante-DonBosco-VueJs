import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


const routes = [

  {
    path: '/footer',
    name: 'Footer',
    component: () => import(/* webpackChunkName: "Footer" */ '../components/Footer.vue'),

  },
  
  {
    path: '/releases',
    name: 'Releases',
    component: () => import(/* webpackChunkName: "releases" */ '../components/Releases.vue'),

  },
  {
    path: '/preguntas',
    name: 'Preguntas',
    component: () => import(/* webpackChunkName: "Preguntas" */ '../components/Preguntas.vue'),

  },

  {
    path: '/news',
    name: 'News',
    component: () => import(/* webpackChunkName: "News" */ '../components/News.vue'),

  },

  {
    path: '/profile',
    name: 'Profile',
    component: () => import(/* webpackChunkName: "Profile" */ '../components/Profile.vue'),


  },
  {

    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "Login" */ '../layout/Login.vue'),

  },

  {

    path: '/forgot',
    name: 'ForgotPassword',
    component: () => import(/* webpackChunkName: "ForgotPassword" */ '../layout/ForgotPassword.vue'),
  },

  {

    path: '/formulario',
    name: 'Formulario',
    component: () => import(/* webpackChunkName: "Formulario" */ '../layout/Formulario.vue'),

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