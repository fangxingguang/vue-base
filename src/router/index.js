import Vue from 'vue'
import Router from 'vue-router'
import layout from 'views/layout'

Vue.use(Router)

const index = resolve => require(['../views/index'], resolve)
const index2 = resolve => require(['../views/index/index2'], resolve)

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      component: layout,
      children: [
        { path: '/', component: index },
        { path: '/index2', component: index2 }
      ]
    }
  ]
})
