import Vue from 'vue'
import Router from 'vue-router'
import index from '@/scripts/components/index'
import board from '@/scripts/components/board'
import search from '@/scripts/components/search'
import user from '@/scripts/components/user'
import cart from '@/scripts/components/cart'

import Index1 from '@/scripts/components/index-board/index1'
import Dogfood from '@/scripts/components/index-board/dogfood'
import Sales from '@/scripts/components/index-board/sales'
import Classes from '@/scripts/components/index-board/classes'
import Experts from '@/scripts/components/index-board/experts'


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

        {path:'board',
        component:board,
        children:[
          {path:'',component:Index1},
          {path:'index1',component:Index1},
          {path:'dogfood',component:Dogfood},
          {path:'sales',component:Sales},
          {path:'classes',component:Classes},
          {path:'experts',component:Experts}
        ]
      },
        {path:'search',component:search},
        {path:'cart',component:cart},
        {path:'user',component:user}
      ]
    }
  ]
})
