import Vue from 'vue'
import Router from 'vue-router'

import DetailView from './views/Detail.vue'
import BoardView from './views/Board.vue'
import WritingView from './views/Writing.vue'
import ModifyVue from './views/Modify.vue'

Vue.use(Router)

export default new Router({
    mode:'history',
    routes: [
        {
            path:'/',
            name:'board',
            component:BoardView
        },
        {
            path:'/detail',
            name:'detail',
            component:DetailView
        },
        {
            path:'/writing',
            name:'writing',
            component:WritingView

        },
        {
            path:'/modify',
            name:'modify',
            component:ModifyVue
        }
    ]
})