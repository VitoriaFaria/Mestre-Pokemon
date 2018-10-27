'use strict'

// importa configuracao de babel para IE 11
import 'babel-polyfill'

// importa dependencias
import Vue from 'vue'
import VeeValidate from 'vee-validate'
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
import ptBr from './locale/ptBr'

// importa estilos
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Configuracoes do VeeValidate
const config = {
  errorBagName: 'errors', // change if property conflicts.
  fieldsBagName: 'inputs ', // Default is fields
  delay: 0,
  locale: 'ptBr',
  dictionary: null,
  strict: true,
  enableAutoClasses: false,
  classNames: {
    touched: 'touched', // the control has been blurred
    untouched: 'untouched', // the control hasn't been blurred
    valid: 'valid', // model is valid
    invalid: 'invalid', // model is invalid
    pristine: 'pristine', // control has not been interacted with
    dirty: 'dirty' // control has been interacted with
  },
  events: 'input|blur',
  inject: true
}

// VeeValidate
Vue.use(VeeValidate, {
  fieldsBagName: 'formFields',
  locale: 'ptBr',
  dictionary: {
    ptBr: { messages: ptBr.messages }
  },
  config
})

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
