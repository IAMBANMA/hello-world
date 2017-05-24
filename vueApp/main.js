import Vue from 'vue';
import app from './app.vue';
import router from './router';

new Vue({
	el:'#app',
	router,
	template:'<app/>',
	components:{app}
})



