import Vue from 'vue'
import Router from 'vue-router'
import index from '@/scripts/components/index'
import board from '@/scripts/components/board'
import search from '@/scripts/components/search'
import user from '@/scripts/components/user'
import cart from '@/scripts/components/cart'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      component: index,
      // 方法1： 首页加载子路由作为首页的一部分
      redirect:'board',
      children:[
      // 方法2： 首页加载子路由作为首页的一部分
      //  {path:'',component:board},

        {path:'board',component:board},
        {path:'search',component:search},
        {path:'cart',component:search},
        {path:'user',component:user}
      ]
    }
  ]
})
