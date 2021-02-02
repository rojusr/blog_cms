import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import VueMaterial from 'vue-material'
// import 'vue-material/dist/vue-material.min.css'
// import 'vue-material/dist/theme/default.css'
// Vue.use(VueMaterial)



import Vue2Editor from "vue2-editor";
Vue.use(Vue2Editor);

import "@/styles/app.sass"
import vuetify from './plugins/vuetify';


Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
