// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'animate.css'
import * as VueGoogleMaps from 'vue2-google-maps'

import App from './App'
import router from './router'

Vue.config.productionTip = true

Vue.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyCYDsC1hsS1WuBBWceVWhba3OuatvZ79qI',
        libraries: 'places' // This is required if you use the Autocomplete plugin
        // OR: libraries: 'places,drawing'
        // OR: libraries: 'places,drawing,visualization'
        // (as you require)
    }
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: {App}
})
