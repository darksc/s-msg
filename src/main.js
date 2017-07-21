
import Vue from 'vue'
import App from './App'

import sMsg from '../package/'

Vue.config.productionTip = false
Vue.use(sMsg)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
