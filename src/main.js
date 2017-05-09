// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

// import App from './App'
// import router from './router'

Vue.config.productionTip = false
require ('./styles/app.scss')
import Vue from 'vue'
import router from './scripts/router'
//import index from './scripts/components/index.vue'



new Vue({
  el: '#app',
  router,
  template: '<router-view></router-view>'
})
