import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Career from '@/components/Career'
import Family from '@/components/Family'
import Culture from '@/components/Culture'
import Gallery from '@/components/Gallery'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: "/career",
      name: 'Career',
      component: Career
    },
    {
      path: "/family",
      name: 'Family',
      component: Family
    },    
    {
      path: "/culture",
      name: 'Culture',
      component: Culture
    },
    {
      path: "/gallery",
      name: 'Gallery',
      component: Gallery
    }
  ]
})
