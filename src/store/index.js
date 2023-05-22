import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import nuserMenu from '../router/asyRouter/nuser'
Vue.use(Vuex)

const state = {
  collectList: '',
  tabbarList: nuserMenu(),
  isLogin: false,
  showToast: false,
  name:'',
  id: "",
  img: "",
  showTabbar: false,
  notify:[],
  result:'',
  role: 0
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

export default store
