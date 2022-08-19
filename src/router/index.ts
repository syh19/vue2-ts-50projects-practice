/*
 * @Author: 
 * @Date: 2022-08-19 09:44:52
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-08-19 15:29:45
 * @Description: 
 */
import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

import ExpandingCards from "@/components/ExpandingCards.vue"
import ProgressSteps from "@/components/ProgressSteps.vue"
import GithubProfiles from "@/components/GithubProfiles.vue"
import ImageCarousel from "@/components/ImageCarousel.vue"

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/expanding-cards',
    component: ExpandingCards
  },{
    path:'/progress-steps',
    component:ProgressSteps
  },{
    path:'/github-profiles',
    component:GithubProfiles
  },{
    path:'/image-carousel',
    component:ImageCarousel
  }

]

const router = new VueRouter({
  routes
})

export default router
