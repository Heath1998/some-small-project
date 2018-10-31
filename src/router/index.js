import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Aboutme from '@/pages/Aboutme'
import Share from '@/pages/Share'
import Detail from '@/pages/Detail'


Vue.use(Router)

export default new Router({
    scrollBehavior(to, from, savePosition) { // 在点击浏览器的“前进/后退”，或者切换导航的时候触发。
      if (savePosition) {
        return savePosition;
      } else {
              var top;
              if (window.innerWidth >= 700) {
                   top = 676
              } else {
                   top = 267
              }
        return {
          x: 0,
          y: top
        }
      }
    },
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Aboutme',
      name:'Aboutme',
      component:Aboutme
    },
    {
      path: '/Share',
      name:'Share',
      component:Share
    },
    {
      path: '/Detail',
      name:'Detail',
      component:Detail
    }
  ]
})
