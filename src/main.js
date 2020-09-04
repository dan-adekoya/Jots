import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
//routed components
import Jots from './components/Jots.vue'
import Manage from './components/Manage.vue'
import Dev from './components/Developer.vue'
import On from './components/Onboarding.vue'



//global components
import nav from './components/nav.vue'
Vue.component('Nav', nav)



let router = new VueRouter({
  routes : [
    {path: '/o', component: On},
    {path: '/', component: Jots},
    {path: '/manage', component: Manage},
    {path: '/dev', component: Dev}
  ],
  mode: 'history'
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
