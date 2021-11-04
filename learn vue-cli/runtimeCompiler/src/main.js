import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

// const cpn = {
//   template: "<span>hello {{message}}!</span>",
//   data() {
//     return {message: 'cpn'}
//   }
// }

console.log(App);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
  // render(createElement) {
    // 1. 普通用法：createElement('tag', {tag.attributes}, [tag.content])
    // return createElement('h2',
    //   {class: 'box'},
    //   ['hello render!', createElement('button', ['btn-render'])])

    // 2. 传入组件对象： createElement(cpn)
    // return createElement(cpn)

    // 3. 传入 app 组件： createElement(app)
    // return createElement(App)
  // }
})



// runtime-compiler
// template -> ast -> render -> vdom -> UI(dom)

// runtime-only:
// render -> vdom -> UI(dom)
