import { createApp } from 'vue'
import App from './App.vue'
import './index.scss'
import {createWebHashHistory,createRouter} from 'vue-router'
import Home from './view/Home.vue'


const history=createWebHashHistory()
const router=createRouter({
    history:history,
    routes:[
        {path:'/',component:Home}  //路由路径和组件
    ]
})
const app=createApp(App)
app.use(router)
app.mount('#app')
