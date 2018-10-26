'use strict'

import lazyLoading from './lazyLoading'

export default {
  name: 'mainPage',
  path: '/',
  component: lazyLoading('mainPage/MainPage'),
  meta: {
    default: true
  }
}
