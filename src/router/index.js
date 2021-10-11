import Vue from 'vue'
import VueRouter from 'vue-router'
import DashboardLayout from '../layout/DashboardLayout.vue'
import DashboardMain from '../views/DashboardMain.vue'
import Login from '../layout/Login.vue'
import ForgotPassword from '../layout/ForgotPassword.vue'
import Register from '../layout/Register.vue'
import Privacy from '../layout/Privacy.vue'
import NotFound from '../views/NotFound.vue'


Vue.use(VueRouter)
const routes = [
  {

  path: '/login',
  name: 'Login',
  component: Login,
  
},

{

  path: '/:CatchAll(.*)',
  name: 'NotFound',
  component: NotFound,
  
},

{

  path: '/forgot',
  name: 'ForgotPassword',
  component: ForgotPassword,
},
{

  path: '/privacy',
  name: 'Privacy',
  component: Privacy,
},
{

  path: '/register',
  name: 'Register',
  component: Register,
},

{
  path: '/',
  name: 'DashboardLayout',
  component: DashboardLayout,

  children: [

    {
      path: '/',
      name: 'DashboardMain',
      component: DashboardMain,
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