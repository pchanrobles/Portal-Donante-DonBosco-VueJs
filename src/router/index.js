import Vue from 'vue'
import VueRouter from 'vue-router'

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
    path: '/register',
    name: 'Register',
    component: () => import('../layout/Register.vue'),
  },

  {
    path: '/',
    name: 'DashboardLayout',
    component: () => import(/* webpackChunkName: "DashboardLayout" */ '../layout/DashboardLayout.vue'),
    meta: { requiresAuth: true },
    children: [
      {
        path: '/',
        name: 'News',
        component: () => import(/* webpackChunkName: "News" */ '../views/News.vue'),
        meta: { requiresAuth: true },
      },
      {
        path: '/comunicados',
        name: 'Comunicados',
        component: () => import(/* webpackChunkName: "Comunicados" */ '../views/Comunicados.vue'),
        meta: { requiresAuth: true },
      },
      {
        path: '/notificaciones',
        name: 'Notificaciones',
        component: () => import(/* webpackChunkName: "Notificaciones" */ '../views/Notificaciones.vue'),
        meta: { requiresAuth: true },
      },

      {
        path: '/donaciones',
        name: 'Donaciones',
        component: () => import(/* webpackChunkName: "Donaciones" */ '../views/Donaciones.vue'),
        meta: { requiresAuth: true },
      },

      {
        path: '/preguntas',
        name: 'Preguntas',
        component: () => import(/* webpackChunkName: "Preguntas" */ '../views/Preguntas.vue'),
        meta: { requiresAuth: true },
      },

      {
        path: '/profile',
        name: 'Profile',
        component: () => import(/* webpackChunkName: "Profile" */ '../views/Profile.vue'),
        meta: { requiresAuth: true },
      },
    ]
  },
  {
    path: '/:CatchAll(.*)',
    name: 'NotFound',
    component: () => import(/* webpackChunkName: "NotFound" */ '../views/NotFound.vue'),
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  const loggedIn = !localStorage.getItem('user') || !localStorage.getItem('token')

  if (to.matched.some(record => record.meta.requiresAuth) && loggedIn) {
    console.log('deberia redirigirte a login despues de esta linea')
    next('/login')
  }
  console.log('no funciona el IF')
  next()
})
export default router