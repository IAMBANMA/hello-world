import Vue from 'vue';
import Router from 'vue-router';
import header from './components/header.vue';
import aside from './components/aside.vue';
import content from './components/content.vue';
import c1 from './components/content.vue';

Vue.use(VueRouter);


export default new Router({
	routes:[
		{
			path:'/',
			components:{
				header:header,
				aside:aside,
				content:content
			},
			children:[
				{
					path:'',component:home
				},
				{
					path:':index',component:c1
				}
			]
		}
	]
})
