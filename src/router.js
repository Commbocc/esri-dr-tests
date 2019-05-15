import Vue from 'vue'
import Router from 'vue-router'
import EndpointForm from './views/Form.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      props: true,
      component: EndpointForm
    },
    {
      path: '/:id',
      name: 'tester',
      props: true,
      component: EndpointForm
    }
  ]
})
