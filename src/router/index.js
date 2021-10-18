import Vue from 'vue'
import VueRouter from 'vue-router'
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
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router