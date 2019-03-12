import ProductControls from '@/components/ProductControls/ProductControls'
import Cart from '@/components/Cart/CartItems'
import Order from '@/components/Order/OrderLists'

const routes = [
  {path: '/', component: ProductControls},
  {path: '/cart', component: Cart},
  {path: '/order', component: Order}
];

export default routes;