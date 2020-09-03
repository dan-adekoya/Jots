import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Jots from './components/Jots.vue'
import Manage from './components/Manage.vue'
import Dev from './components/Developer.vue'





let router = new VueRouter({
  routes : [
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
