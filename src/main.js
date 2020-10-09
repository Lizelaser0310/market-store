// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import vuetify from '@/plugins/vuetify' // path to vuetify export
import App from './App'
import router from './router'
import * as VueGoogleMaps from "../node_modules/vue2-google-maps";
import Axios from 'axios'
// import 'material-design-icons-iconfont/dist/material-design-icons.css'


Vue.config.productionTip = false
// A nivel global inserte axios o disponible
Vue.prototype.$axios = Axios

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyDWNKHCv_oE2uIKKDHCv1sVBAqUihESM8E",
    libraries: "places" // necessary for places input
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  vuetify,
  components: { App },
  template: '<App/>'
})
