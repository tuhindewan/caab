require('./bootstrap');

window.Vue = require('vue').default;



// vue router
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Profile from './components/admin/Profile'
import Employees from './components/admin/Employees'

const routes = [
    { path: '/profile', component: Profile },
    { path: '/employees', component: Employees },
]

const router = new VueRouter({
    mode: 'history',
    routes // short for `routes: routes`
})


// vForm
import Vue from 'vue'
import { Form, HasError, AlertError } from 'vform'

Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)
window.Form = Form




const app = new Vue({
    el: '#app',
    router
});
