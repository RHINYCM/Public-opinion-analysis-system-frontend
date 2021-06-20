import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


const manage = r => require.ensure([], () => r(require('@/page/manage')), 'manage');
const home = r => require.ensure([], () => r(require('@/page/home')), 'home');
const emotionAnaly = r => require.ensure([], () => r(require('@/page/emotionAnaly')), 'emotionAnaly');
const topicSpecify = r => require.ensure([], () => r(require('@/page/topicSpecify')), 'topicSpecify');
const logList = r => require.ensure([], () => r(require('@/page/logList')), 'logList');
const intelligentGuide = r => require.ensure([], () => r(require('@/page/intelligentGuide')), 'intelligentGuide');
const adminSet = r => require.ensure([], () => r(require('@/page/adminSet')), 'adminSet');
const explain = r => require.ensure([],()=>r(require('@/page/explain')),'explain')


const routes = [
	
	{
		path: '/manage',
		component: manage,
		name: '',
		children: [{
			path: '/home',
			component: home,

		},{
			path: '/emotionAnaly',
			component: emotionAnaly,

		},{
			path: '/topicSpecify',
			component: topicSpecify,
	
		},{
			path: '/logList',
			component: logList,

		},{
			path: '/intelligentGuide',
			component: intelligentGuide,

		},{
			path: '/adminSet',
			component: adminSet,

		},{
			path: '/explain',
			component: explain,

		}]
	},
	{
		path:'/*',
		redirect:'/home'
	}
	
]

export default new Router({
	routes,
	strict: process.env.NODE_ENV !== 'production',
})
