<template>
    <section class="products">
        <Title title="상품목록"/>
        <ul class="item">
            <ProductControl
                v-for="(product, i) in products" :key="i"
                :product="product"
                @addToCart="addToCart"
            />
        </ul>
    </section>
</template>

<script>
import Title from '@/components/Title/Title'
import ProductControl from './ProductControl';

export default {
    props: {
        products: {
            type: Array,
            default: []
        }
    },
    components: {
        Title,
        ProductControl
    },
    data() {
        return {
            items: 5,
        };
    },
    methods: {
        notified() {
            this.$notify({
                group: 'foo',
                title: '성공',
                text: '장바구니에 추가되었습니다!'
            });
        },
        addToCart({product, options}) {
            const data = { ...product };
            data.options = options;
            this.$http.post('https://share-goods-2a8f1.firebaseio.com/cart.json', data);
            this.notified();
        }
    }
}
</script>

<style lang="scss" scoped>
    .item {
        display: flex;
        justify-content: start;
        flex-wrap: wrap;
    }
</style>