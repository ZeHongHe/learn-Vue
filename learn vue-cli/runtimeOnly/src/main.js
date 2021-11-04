import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

console.log(App);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})


// runtime-compiler
// template -> ast -> render -> vdom -> UI(dom)

// runtime-only: more effective and smaller
// render -> vdom -> UI(dom)
