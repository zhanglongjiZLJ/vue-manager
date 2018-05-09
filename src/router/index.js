import Vue from 'vue'
import Router from 'vue-router'
import main from '@/view/main'
import welcome from '@/view/welcome'
import home from '@/view/home/home'
import release from '@/view/release/release'
import search from '@/view/search/search' 

Vue.use(Router)

export default new Router({
  routes: [
  	{
  		path: '/',
	    name: 'welcome',
	    component: welcome,
  	},
    {
      path: '/main',
      name: 'main',
      component: main,
      children:[
      	{
      		path: '/',
		    name: 'home',
		    component: home,
      	},
      	{
      		path: '/release',
		    name: 'release',
		    component: release,
      	},
      	{
      		path: '/search',
		    name: 'search',
		    component: search,
      	}
      ]
    }
  ]
})
