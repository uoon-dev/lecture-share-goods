<template>
    <header class="header">
      <img alt="Vue logo" src="../../assets/logo.png" class="logo">
      <ul class="navigation-items">
        <router-link to="/" class="li">상품목록</router-link>
        <router-link to="/cart" class="li">장바구니</router-link>
        <router-link to="/order" class="li">주문목록</router-link>
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
    .navigation-items {
      display: flex;
        .li {
            list-style: none;
            width: 80px;
            background-color: #4d4d4d;
            color: #fff;
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
