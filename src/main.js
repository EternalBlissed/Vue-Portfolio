import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import Home from './views/Home.vue'
import Projects from './views/Projects.vue'
import NotFound from './views/NotFound.vue'
import Blog from './views/Blog.vue'

import './assets/styles/base.css'

Vue.config.productionTip = false
Vue.use(VueRouter)

import VueNavigationBar from 'vue-navigation-bar'
Vue.component('vue-navigation-bar', VueNavigationBar)

import axios from 'axios'
Vue.prototype.axios = axios 

// NProgress
import NProgress from 'nprogress'
import './assets/styles/nprogress.css'
NProgress.configure({ easing: 'ease', speed: 500, showSpinner: false })

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', component: Home },
    { path: '/projects', component: Projects },
    { path: '/blog', component: Blog },
    /*{ path: '/blog/:slug', component: () => import('@/components/BlogPost.vue'), name: 'blog-post' }, ???*/

    // Not found
    { path: '/*', component: NotFound }
  ]
})

router.beforeEach((to, from, next) => {
  if (from.name !== null) {
    NProgress.start()
  }
  next()
})
// eslint-disable-next-line no-unused-vars
router.afterEach((to, from) => {
  NProgress.done()
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
