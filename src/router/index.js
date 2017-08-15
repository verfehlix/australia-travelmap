import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'

Vue.use(Router)

export default new Router({
    routes: [
        /* Start route, currenty it still shows sydney, but this should show something like "please select a place on the map" on the photocomponent side*/
        {
            path: '/',
            name: 'Initial',
            component: Main
        },
        /* Route that map markers / temp-buttons will lead to --> change displayed photos depending on selected place*/
        {
            path: '/:place',
            name: 'Initial-With-Place',
            component: Main
        },

        {
            path: '/:place/:photoIndex',
            name: 'Initial-With-Place-And-Photo-Index',
            component: Main
        }
    ]
})
