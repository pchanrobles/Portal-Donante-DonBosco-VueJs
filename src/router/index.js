import Vue from 'vue'
import VueRouter from 'vue-router'
<<<<<<< HEAD

Vue.use(VueRouter)


const routes = [

  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "Login" */ '../views/Login.vue'),
  },

  {
    path: '/forgot',
    name: 'ForgotPassword',
    component: () => import(/* webpackChunkName: "ForgotPassword" */ '../views/ForgotPassword.vue'),
  },


  {
    path: '/',
    name: 'DashboardLayout',
    component: () => import(/* webpackChunkName: "DashboardLayout" */ '../layout/DashboardLayout.vue'),
    children: [
      {
        path: '/',
        name: 'News',
        component: () => import(/* webpackChunkName: "News" */ '../views/News.vue'),
      },
      {
        path: '/comunicados',
        name: 'Comunicados',
        component: () => import(/* webpackChunkName: "Comunicados" */ '../views/Comunicados.vue'),
      },
      {
        path: '/notificaciones',
        name: 'Notificaciones',
        component: () => import(/* webpackChunkName: "Notificaciones" */ '../views/Notificaciones.vue'),
      },

      {
        path: '/donaciones',
        name: 'Donaciones',
        component: () => import(/* webpackChunkName: "Donaciones" */ '../views/Donaciones.vue'),
      },


      {
        path: '/preguntas',
        name: 'Preguntas',
        component: () => import(/* webpackChunkName: "Preguntas" */ '../views/Preguntas.vue'),

      },

      {
        path: '/profile',
        name: 'Profile',
        component: () => import(/* webpackChunkName: "Profile" */ '../views/Profile.vue'),
      },

=======
import Login from '../layout/Login.vue'
import NotFound from '../views/NotFound.vue'


Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Login',
    component: Login,
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../layout/Register.vue'),
  },
  {
    path: '/forgot',
    name: 'ForgotPassword',
    component: () => import('../layout/ForgotPassword.vue'),
  },
  {
    path: '/:CatchAll(.*)',
    name: 'NotFound',
    component: NotFound, 
  },
  {
    path: '/dashboard',
    name: 'DashboardLayout',
    component: () => import('../layout/DashboardLayout.vue'),

    children: [{
        path: '/dashboard',
        name: 'DashboardMain',
        component: () => import('../views/DashboardMain.vue'),
      },
>>>>>>> 69ffd250361aea424016bd7f22ecfff0c1536090
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router