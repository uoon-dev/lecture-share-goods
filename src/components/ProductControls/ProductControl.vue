<template>
    <li>
        <img src="https://ik.imagekit.io/demo/img/image4.jpeg?tr=w-270,h-350" alt="">
        <p class="name">{{ product.name }}</p>
        <Options :product="product.options"/>
        <p class="provider">{{ product.provider }}</p>
        <div class="bottom-price">
            <p class="price">{{ product.price }}원</p>
            <v-icon name="cart-plus"/>
        </div>
        <p class="shipping-price">+ 배송료 {{ product.shipping.price }}원</p>
    </li>
</template>

<script>
import Options from './Options';

export default {
    props: {
        product: {
            type: Object,
            default: {}
        }
    },
    components: {
        Options
    }
}
</script>

<style lang="scss" scoped>
    li {
      list-style: none;
      margin-right: 40px;
      p {
        margin: 5px;
      }
      .name {
        font-size: 1.2rem; 
        font-weight: 500;
      }
      .provider {
        font-size: 1.15rem; 
      }
    }
  
    .bottom-price {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .price {
            font-size: 1.15rem; 
        }
    }
</style>