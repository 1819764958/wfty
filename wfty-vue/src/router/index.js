import Vue from 'vue'
import Router from 'vue-router'
import MyHome from '@/components/MyHome'
import MyMusic from '@/components/MyMusic'
import register from '@/components/register'
import SongInfo from '@/components/SongInfo'
import Login from '@/components/Login'
import Musicinfo from '@/components/Musicinfo'
import DayMusic from '@/components/DayMusic'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MyHome',
      component: MyHome
    },
    {
      path: '/MyMusic',
      name: 'MyMusic',
      component: MyMusic
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/SongInfo',
      name: 'SongInfo',
      component: SongInfo	
    },
    {
      path: '/Musicinfo',
      name: 'Musicinfo',
      component: Musicinfo
    },
    {
      path: '/DayMusic/:id',
      name: 'DayMusic',
      component: DayMusic
    }
  ]
})
	