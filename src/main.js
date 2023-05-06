import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLazyLoad from 'vue-lazyload'
import './mock/index.js'
import Vant from 'vant';
import 'vant/lib/index.css';
import request from './network/axios'

Vue.use(Vant);
Vue.config.productionTip = false
Vue.prototype.request = request
Vue.use(VueLazyLoad, {
  preLoad: 1,
  loading: require('assets/img/common/placeholder.png')
})
let EventBus = new Vue()
Vue.prototype.$bus = EventBus
new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
