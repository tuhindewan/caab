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



//vue-progress bar
import VueProgressBar from 'vue-progressbar'

Vue.use(VueProgressBar, {
  color: 'rgb(143, 255, 199)',
  failedColor: 'red',
  height: '2px',
})



//sweet alert
import Swal from 'sweetalert2'
window.Swal = Swal

const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
})

window.Toast = Toast




const app = new Vue({
    el: '#app',
    router
});
