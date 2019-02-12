<template>
    <section class="products">
      <ul class="item">
        <ProductControl v-for="(product, i) in products" :key="i"
        :product="product"/>
      </ul>
    </section>
</template>

<script>
import ProductControl from './ProductControl';

export default {
    props: {
        products: {
            type: Array,
            default: []
        }
    },
    components: {
        ProductControl
    },
    data() {
        return {
            items: 5
        };
    },
    mounted() {
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