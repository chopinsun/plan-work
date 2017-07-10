// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import jQuery from 'jquery'
import Vue from 'vue'
import App from './App'
import router from './router'

// import '../static/js/bootstrap.min.js'
import '../static/css/bootstrap.min.css'
// import '../static/js/flat-ui.js'
import '../static/css/flat-ui.css'

Vue.config.productionTip = false

Vue.use({router: router})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
jQuery.apply()

