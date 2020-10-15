import Vue from 'vue'
import  Router from 'vue-router'
//导入编写的组件
import Appindex from "@/components/home/Appindex";
import Login from "@/components/Login";

Vue.use(Router)

export default new Router({
    // routes: [
    //     {
    //         path: '/login',
    //         name: 'Login',
    //         component: Login
    //     },
    //     {
    //         path: '/index',
    //         name: 'AppIndex',
    //         component: Appindex
    //     }
    // ]
    routes: [
        { path: '/', redirect: '/login' },
        { path: '/login', name: 'Login', component: Login },
        { path: '/index', name: 'AppIndex', component: Appindex }
    ]
    // routes: [
    //   {
    //     path: '/',
    //     name: 'AppIndex',
    //     redirect: '/Login',
    //     component: Appindex
    //   },
    //   {
    //     path: '/Login',
    //     name: 'Login',
    //     component: Login
    //   }
    // ]
})
