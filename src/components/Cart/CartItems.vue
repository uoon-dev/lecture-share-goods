<template>
    <section>
        <Title title="장바구니"/>
        <ul class="item">
            <CartItem
                v-for="(item, i) in items" :key="i"
                :item="item" 
            />
        </ul>
    </section> 
</template>

<script>
import Title from '@/components/Title/Title'
import CartItem from '@/components/Cart/CartItem'

export default {
    components: {
        Title,
        CartItem,
    },
    created() {
        this.$http
        .get('https://share-goods-2a8f1.firebaseio.com/cart.json')
        .then(res => this.items = res.data);
    },
    data() {
        return {
            items: null
        }
    }
}
</script>

