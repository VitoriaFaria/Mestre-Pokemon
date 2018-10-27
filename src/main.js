'use strict'

// importa configuracao de babel para IE 11
import 'babel-polyfill'

// importa dependencias
import Vue from 'vue'
import { sync } from 'vuex-router-sync'

// importa modulos
import BootstrapVue from 'bootstrap-vue'

// importa configuracoes
import router from './router'
import store from './store'

// importa componentes
import App from './App'

// importa internacionalizacao
import './i18n'

// importa estilos
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// aplica dependencias no vue
Vue.use(BootstrapVue)

// sincroniza a rota com a store
sync(store, router)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
