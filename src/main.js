import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'

import './plugins/bootstrap-vue'
import './plugins/bootstrap-vue'
import './plugins/axios'
import './plugins/fb'

import App from './App.vue'
import { sync } from 'vuex-router-sync'
import router from './router'
import store from './store'
import $ from 'jquery'
// import './plugins/moment.js'
import moment from 'moment'
Vue.prototype.$moment = moment;
sync(store, router)

Vue.config.productionTip = false

window.$ = $;
Vue.use(moment);
// Vue.component('moment',moment)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
