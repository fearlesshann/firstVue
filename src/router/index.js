import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const routes = [
    {
        path:"/",
        component:Home
    },
    {
        path:"/blog/:id",
        //这是异步加载组件的方式，推荐使用
        component:() => import("@/views/Blog.vue"),
        props:true
    },
    {
        path:"/createBlog",
        component:() => import("@/views/CreateOrEditBlog.vue"),
    },
    {
        path:"/editBlog/:blogId",
        component:() => import("@/views/CreateOrEditBlog.vue"),
        props:true
    }
]

const router = createRouter({
    history:createWebHashHistory(),
    routes
})

export default router

