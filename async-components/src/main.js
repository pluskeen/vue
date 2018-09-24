import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import lodash from 'vue-lodash'

Vue.config.productionTip = false

Vue.use(lodash, {
  name: 'lodash'
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')