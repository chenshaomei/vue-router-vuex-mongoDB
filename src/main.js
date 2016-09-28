import Vue from 'vue'
import App from './App'
import { timeFormat, spliceIntro } from './filters'
import Home from './views/Home'
import Search from './views/Search'
import List from './views/List'
import Details from './views/Details'
import My from './views/My'
import Login from './views/Login'
import Collect from './views/Collect'

import vueRouter from 'vue-router'
import vueResource from 'vue-resource'



Vue.use(vueRouter);
Vue.use(vueResource);

// Vue.filter('marked', marked);
Vue.filter('formatTime', timeFormat);
Vue.filter('formatIntro', spliceIntro);


const router = new vueRouter();


router.map({
	'/index': {
		component: Home
	},
	'/search':{
		component: Search
	},
	'/list':{
		component: List
	},
	'/list/details/:id':{
		component: Details,
		name:'details'
	},
	'/my':{
		component: My,
	},
	'/login':{
		component: Login
	},
	'/collect':{
		component: Collect
	}
})

router.start(App, '#app');




