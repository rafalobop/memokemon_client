import Vue from 'vue'
import Vuex from 'vuex'

// Modules
import appConfig from './app-config'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    appConfig,
  },
  strict: process.env.DEV,
})
