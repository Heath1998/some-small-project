import Vue from 'vue'
import Router from 'vue-router'
import insert from '@/components/insert'
import deliver from '@/components/deliver'
import goodsSearch from '@/components/goodsSearch'
import goodsChange from '@/components/goodsChange'
import menu from '@/components/menu'

Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/',
        name: 'menu',
        component: menu
    },   
    {
      path: '/insert',
      name: 'insert',
      component: insert
    },
    {
        path: '/deliver',
        name: 'deliver',
        component: deliver
    },
    {
        path: '/goods',
        name: 'goodsSearch',
        component: goodsSearch
    },
    {
        path: '/change',
        name: 'goodsChange',
        component: goodsChange
    }
  ]
})
