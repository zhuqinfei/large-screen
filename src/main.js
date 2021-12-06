import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import {createWebHashHistory,createRouter} from 'vue-router'
import Home from './components/Home.vue'

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
