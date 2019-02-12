<template>
  <div id="app">
    <Header/>
    <Title title="상품목록"/>
    <ProductControls :products="products"/>
  </div>
</template>

<script>
import Header from '@/components/Header/Header'
import Title from '@/components/Title/Title'
import ProductControls from '@/components/ProductControls/ProductControls'

export default {
  name: 'app',
  components: {
    Header,
    Title, 
    ProductControls
  },
  created() {
    this.$http
    .get('https://share-goods-2a8f1.firebaseio.com/goods.json')
    .then(res => this.products = res.data);// get, post, put 
    console.log('created..', this.products);
  },
  mounted() {
  },
  data() {
    return {
      name: 'name',
      products: null
    }
  }
}
</script>

<style lang="scss" scoped>
  #app {
    font-family: 'helvetica';
  }
</style>
