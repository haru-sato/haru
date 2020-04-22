import Vue from 'vue'
import App from './App.vue'
// npm install --save axios vue-axios を実行してデータにアクセスできるようにする
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store'
Vue.use(VueAxios, axios)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
}).$mount('#app')
import smoothScroll from 'vue-smoothscroll'
Vue.use(smoothScroll)
