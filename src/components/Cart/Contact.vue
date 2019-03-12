<template>
  <section>
    <div>배송지 입력</div>
    주문고객 <input type="text" name="이름" id="name" placeholder="이름">
    <br>
    이메일 주소 <input type="text" name="이메일" id="email" placeholder="이메일">
    <br>
    받으실 분 
    <input type="text" name="수령자" id="recepient" placeholder="받으실 분">
    <br>
    연락처 <input type="text" name="연락처" id="phone" placeholder="연락처">
    <br>
    배송주소 <input type="text" name="주소" id="zip" placeholder="우편번호">
    <button>주소찾기</button>
    <br>
    수령장소 <input type="text" name="우편번호" id="zip" placeholder="우편번호">
    <br>
    <button>주문하기</button>
  </section>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
    section {
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
      border-radius: 10px;
      margin: 30px;
      padding: 20px;
      // display: flex;
      // justify-content: flex-start;
        
    }
</style>
