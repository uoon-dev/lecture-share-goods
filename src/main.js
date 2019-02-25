import Vue from 'vue'
import App from './App.vue'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
import axios from 'axios'
import Notifications from 'vue-notification'
import VueRouter from 'vue-router'
import ProductControls from '@/components/ProductControls/ProductControls'
import Cart from '@/components/Cart/CartItems'
import Order from '@/components/Order/OrderLists'

Vue.component('v-icon', Icon);
Vue.config.productionTip = false;
Vue.prototype.$http = axios;
Vue.use(Notifications);
Vue.use(VueRouter);

const routes = [
  {path: '/', component: ProductControls},
  {path: '/cart', component: Cart},
  {path: '/order', component: Order}
];

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
