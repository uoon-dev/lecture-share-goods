<template>
  <div id="app">
    <Header/>
    <router-view></router-view>
    <notifications group="foo" position="bottom left" />
  </div>
</template>

<script>
import Header from '@/components/Header/Header'

export default {
  name: 'app', 
  components: {
    Header
  },
  created() {
   
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
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
</style>
