require('./bootstrap');

window.Vue = require('vue').default;



// vue router
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Profile from './components/admin/Profile'
import Employees from './components/admin/Employees'

const routes = [
    { path: '/admin/profile', component: Profile },
    { path: '/admin/employees', component: Employees },
]

const router = new VueRouter({
    mode: 'history',
    routes // short for `routes: routes`
  })




const app = new Vue({
    el: '#app',
    router
});
