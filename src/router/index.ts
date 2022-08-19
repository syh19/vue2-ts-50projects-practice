/*
 * @Author: 
 * @Date: 2022-08-19 09:44:52
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-08-19 11:01:20
 * @Description: 
 */
import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

import ExpandingCards from "@/components/ExpandingCards.vue"

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
  }

]

const router = new VueRouter({
  routes
})

export default router
