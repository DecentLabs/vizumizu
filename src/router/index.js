import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/home.vue'
import CreateModel from '../views/createModel.vue'
import Model from '../views/model.vue'
import ModelData from '../views/modelData.vue'
import Record from '../views/record.vue'
import ShapeEditor from '../views/shapeEditor.vue'
import { auth } from '../main'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        auth: true
      }
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
      path: '/record/:id',
      name: 'Record',
      component: Record,
      params: true
    },
    {
      path: '/modelData/:id',
      name: 'ModelData',
      component: ModelData,
      params: true
    },
    {
      path: '/shapeEditor/:id',
      name: 'ShapeEditor',
      component: ShapeEditor,
      params: true
    }
  ]
})

router.beforeEach((to, from, next) => {
  const currentUser = auth.currentUser
  console.log(currentUser)
  const requiresAuth = to.matched.some(record => record.meta.auth)
  if (!requiresAuth && !currentUser) {
    router.go('Home')
  } else {
    next()
  }
})

export default router
