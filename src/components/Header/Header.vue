<template>
  <header class="header">
    <img alt="Logo" src="../../assets/new-logo.png" class="logo">
    <ul class="navigation-items">
      <router-link to="/" class="li">상품목록</router-link>
      <router-link to="/cart" class="li">장바구니</router-link>
      <router-link to="/order" class="li">주문목록</router-link>
      <router-link to="/login" class="li">로그인</router-link>
    </ul>
  </header>
</template>

<style lang="scss" scoped>
.logo {
  height: 40px;
}

.header {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  #naverIdLogin {
    display: flex;
    align-items: right;
  }

  .navigation-items {
    display: flex;
    
    .li {
      list-style: none;
      width: 80px;
      color: #000;
      height: 40px;
      padding: 10px;
      margin-right: 10px;
      text-align: center;
      line-height: 40px;
      text-decoration: none;
      border-radius: 5px;
    }
  }
}
</style>
