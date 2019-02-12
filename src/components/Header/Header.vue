<template>
    <header class="header">
      <img alt="Vue logo" src="../../assets/logo.png" class="logo">
      <ul class="navigation-items">
        <li>상품목록</li>
        <li>장바구니</li>
        <li>주문목록</li>
      </ul>
    </header>
</template>

<style lang="scss" scoped>
  .logo {
    height: 40px;
  }

  .header {
    // width height값 설정 가능 inline block 
    display: flex;
    flex-direction: row;
    justify-content: space-around;//flex-start 
    align-items: center;
    //row; // default 값 
    .navigation-items {
      display: flex;
        li {
            list-style: none;
            width: 80px;
            background-color: #ccc;
            color: #fff;
            height: 40px;
            padding: 10px;
            margin-right: 10px;
            text-align: center;
            line-height: 40px;
        }
    }
  }

</style>
