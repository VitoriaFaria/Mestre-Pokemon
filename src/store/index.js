'use strict'

// importa dependencias
import Vue from 'vue'
import Vuex from 'vuex'
import VuexI18n from 'vuex-i18n'

// importa modulos de rotas
import routes from './modules/routes/'

// getters
import * as getters from './getters'

// aplica dependencias no vue
Vue.use(Vuex)

const Store = new Vuex.Store({
  strict: true,
  getters,
  modules: {
    // rotas
    routes
  }
})

Vue.use(VuexI18n.plugin, Store)

export default Store
