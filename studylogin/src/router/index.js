import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import login from '@/components/login'

Vue.use(Router)

const router= new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
      meta:{
        requireAuth:true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: login,
    }
  ]
})
// 验证 token，存在才跳转
router.beforeEach((to, from, next) => {
	let token = localStorage.getItem('token')
	if(to.meta.requireAuth) {
		if(token) {
			next()
		} else {
			next({
				path: '/login',
				query: { redirect: to.fullPath }
			})
		}
	} else {
		next()
	}
})



export default router