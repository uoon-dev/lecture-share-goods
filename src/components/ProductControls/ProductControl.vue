<template>
    <li>
        <img src="https://ik.imagekit.io/demo/img/image4.jpeg?tr=w-270,h-350" alt="">
        <p class="name">{{ product.name }}</p>
        <Input
            :value="selectedItem"
            type="select"
            :options="product.options"
            :updateValue="updateValue"
        />
        <p class="provider">{{ product.provider }}</p>
        <div class="bottom-price">
            <p class="price">{{ product.price }}원</p>
            <button class="cart-button" @click="$emit('addToCart', { product, options })">
                <v-icon name="cart-plus"/>
            </button>
        </div>
        <p class="shipping-price">+ 배송료 {{ product.shipping.price }}원</p>
    </li>
</template>

<script>
import Input from '@/components/UI/Input/Input'

export default {
    props: {
        product: {
            type: Object,
            default: {}
        },
        addToCart: {
            type: Function,
            default: () => {}
        }
    },
    components: {
        Input
    },
    data() {
        return { 
            selectedItem: '',
            options: ''
        }
    },
    created() {
        this.selectedItem = new String(this.product.options[0].id);
    },
    methods: {
        updateValue(event) {
            this.options = this.product.options.filter(option => option.id == event.target.value)[0];
        }
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
        .cart-button {
            border: none;
        }
    }
</style>