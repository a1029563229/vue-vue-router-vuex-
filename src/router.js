import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import * as main from 'src/components/first/main.js'; //导入模块
import * as flex from 'src/components/flex/main.js'; //导入模块

const routes = [
    {path:'/',redirect: '/first'}, //重定向路由
    {
        path:'/first',
        component:main.first
    },
    {
        path:'/second',
        component:main.second
    },
    {
        path:'/flex',
        name:'flex',
        component:flex.flex
    },

    {
        path:'/other',
        name:'other',
        component:flex.other
    }
];



export const router = new VueRouter({
// mode: 'history',
    routes // （缩写）相当于 routes: routes
});