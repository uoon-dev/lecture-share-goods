import Vue from 'vue'
import App from './App.vue'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
import axios from 'axios'
import Notifications from 'vue-notification'
import VueRouter from 'vue-router'
import routes from './route';
import store from './store';

Vue.component('v-icon', Icon);
Vue.config.productionTip = false;
Vue.prototype.$http = axios;
Vue.use(Notifications);
Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
