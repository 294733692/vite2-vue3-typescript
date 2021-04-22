import { createStore } from 'vuex'
import state from './state'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

// create a new store instance
export default createStore({
  state,
  mutations,
  actions,
  getters
})
