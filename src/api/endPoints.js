'use strict'

import connectionProxy from './connectionProxy'

// busca de perfils
export const getProfiles = () => {
  return connectionProxy.http.get(`/profiles`)
}
