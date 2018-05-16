import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '../pages/index'
import NowExpPage from '../pages/exp'
import HelloWorld from '../components/HelloWorld'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: IndexPage
    },
    {
      path: '/hello',
      component: HelloWorld
    },
    {
      path: '/exp',
      component: NowExpPage,
    }
  ]
})
