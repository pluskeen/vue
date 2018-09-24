import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
//import load from "@/components/load.vue";
import asyncComponents from './utils/asyncComponents'

const About = () => asyncComponents(
  import('./views/About.vue'));

Vue.use(Router)

const router = new Router({
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about/:id',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      //component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
      component: About,
      props: true
    }
  ]
})


// router.beforeEach((to, from, next) => {

// })

export default router