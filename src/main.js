// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'animate.css'
import 'font-awesome/css/font-awesome.css'

import App from './App'
import router from './router'

Vue.config.productionTip = true

window.EventBus = new Vue()

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: {App}
})
