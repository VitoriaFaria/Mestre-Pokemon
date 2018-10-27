'use strict'

import axios from 'axios'

class ConnectionProxy {
  constructor () {
    this.http = axios.create({
      baseURL: 'http://localhost:3000',
      timeout: 10000
    })
    this.configure()
  }

  configure = () => {
    this.http.interceptors.request.use(
      config => {
        config.headers.common['Cache-Control'] = 'no-cache'
        config.headers.common['Content-Type'] = 'application/json'
        config.headers.common['Accept'] = 'application/json'
        config.headers.get = {}
        config.headers.get['If-Modified-Since'] = '0'
        config.cache = false
        config.validateStatus = status => status >= 200 && status <= 300
        return config
      },
      error => {
        return Promise.reject(error)
      })
  }
}

const connectionProxy = new ConnectionProxy()

export default connectionProxy
