import Vue from 'vue'
import Router from 'vue-router'
import NotFound from '@/views/404'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home')
    },
    {
      path: '/blogs',
      name: 'blogs',
      component: () => import('@/views/Blogs')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/About')
    },
    {
      path: '/404',
      name: '404',
      component: NotFound
    },
    {
      path: '*',
      redirect: {path: '/404'}
    }
  ]
})

