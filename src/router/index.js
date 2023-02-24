import { createRouter, createWebHistory } from 'vue-router'
import ForecastView from '../views/ForecastView.vue'
import cities from '../data/cities'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: `/city/${Object.keys(cities)[0]}`
    },
    {
      path: '/city/:nameId',
      name: 'cityForecast',
      component: ForecastView
    }
  ]
})

export default router
