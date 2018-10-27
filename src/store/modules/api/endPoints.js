'use strict'

import * as api from '../../../api'

const actions = {
  // endereço
  getProfiles () {
    return api.endPoints.getProfiles().then(response => {
      return response.data
    })
  }
}

export default {
  actions
}
