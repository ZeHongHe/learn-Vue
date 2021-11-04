import Vue from 'vue'
import App from './App'
import router from './router/index'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // 在 Vue 实例中挂载 router 实例
  router: router,
  render: h => h(App)
})
