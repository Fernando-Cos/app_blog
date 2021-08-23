import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import firstPage from './components/pages/teste'
import newRoutePage from './components/pages/newRoutePage'
import hooks from './components/pages/basic/hooks'


const routes = [
    {
        path: '/teste',
        component: firstPage
    },
    {
        path: '/new-route',
        component: newRoutePage
    },

    //  vue hooks...
    {
        path: '/hooks',
        component: hooks
    },
    
]

export default new Router({
    mode: 'history', 
    routes
})
