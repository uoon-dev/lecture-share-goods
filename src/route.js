import ProductControls from '@/components/ProductControls/ProductControls'
import Cart from '@/components/Cart/CartItems'
import Order from '@/components/Order/OrderLists'
import Login from '@/components/Login/Login'

const routes = [
  {path: '/', component: ProductControls},
  {path: '/cart', component: Cart},
  {path: '/order', component: Order},
  {path: '/login', component: Login}
];

export default routes;