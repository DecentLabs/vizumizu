import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/home.vue'
import CreateModel from '../views/createModel.vue'
import Model from '../views/model.vue'
import Record from '../views/record.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/editModel/:id',
      name: 'editModel',
      component: CreateModel,
      params: true
    },
    {
      path: '/model/:id',
      name: 'Model',
      component: Model,
      params: true
    },
    {
      path: '/record',
      name: 'Record',
      component: Record,
      params: true
    }
  ]
})
