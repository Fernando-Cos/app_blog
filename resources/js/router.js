import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import firstPage from './components/pages/teste'


const routes = [
    {
        path: '/teste',
        component: firstPage
    }
]

export default new Router({
    mode: 'history', 
    routes
})