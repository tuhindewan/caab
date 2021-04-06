require('./bootstrap');

window.Vue = require('vue').default;



// vue router
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Profile from './components/admin/Profile'
import Users from './components/admin/Users'

const routes = [
    { path: '/admin/profile', component: Profile },
    { path: '/admin/users', component: Users },
]

const router = new VueRouter({
    mode: 'history',
    routes // short for `routes: routes`
  })




const app = new Vue({
    el: '#app',
    router
});
