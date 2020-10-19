import Vue from 'vue'
import App from './App.vue'
import VueSimpleAlert from "vue-simple-alert"
import VueTelInput from 'vue-tel-input'

Vue.use(VueSimpleAlert);
Vue.use(VueTelInput)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
