'use strict'

// importa modulo de alerts
import swal from 'sweetalert2'

// tipos de erro
let errors = {
  404: 'not_found',
  500: 'default'
}

var alerts = {
  methods: {
    // funcao responsavel por analisar tipo de erro e chamar alerta de erro
    handleError (error) {
      let a = errors
      return a[error.status] ? this.sweetAlertError(a[error.status]) : this.sweetAlertError()
    },

    // alerta de erros
    sweetAlertError (attr = 'default') {
      return swal({
        type: 'error',
        title: this.$t(`mixins.alert.errors.${attr}.title`),
        html: this.$t(`mixins.alert.errors.${attr}.message`),
        confirmButtonColor: '#007268',
        confirmButtonText: this.$t(`mixins.alert.errors.${attr}.button`)
      })
    },

    // alerta de sucesso
    successfulOperation (attr = 'default') {
      return swal({
        type: 'success',
        title: this.$t(`mixins.alert.success.${attr}.title`),
        text: this.$t(`mixins.alert.success.${attr}.text`),
        confirmButtonColor: '#007268',
        confirmButtonText: this.$t(`mixins.alert.success.${attr}.button`)
      })
    }
  }
}

export { alerts as default }
