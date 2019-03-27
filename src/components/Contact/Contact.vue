<template>
<!-- eslint -->
  <section>
    <form @submit="submitForm" class="orderForm">
      <h4>배송지 입력</h4>
      <div class="form-wrapper">
      <p>
        <label>주문고객</label>
        <input type="text" name="name" id="name" v-model="name" placeholder="이름">
      </p>
      <p>
        <label>이메일 주소</label>
        <input type="text" name="email" id="email" v-model="email" placeholder="이메일">
        <select>
          <option>직접입력</option>
          <option>@gmail.com</option>
          <option>@naver.com</option>
          <option>@hotmail.com</option>
        </select>
      </p>
      <p>
        <label>받으실 분</label> 
        <input type="text" name="recipient" id="recipient" v-model="recipient" placeholder="받으실 분">
      </p>
      <p>
        <label>연락처</label>
        <input type="text" name="phone" id="phone" v-model="phone" placeholder="연락처">
      </p>
      <div class="addr-col">
        <label>배송주소</label>
        <p class="addr-label">
          <input type="text" id="sample4_postcode" placeholder="우편번호">
          <input type="button" v-on:click="sample4_execDaumPostcode" value="우편번호 찾기"><br>
        </p>
        <p class="addr">
          <input type="text" id="sample4_roadAddress" placeholder="도로명주소">
          <input type="text" id="sample4_jibunAddress" placeholder="지번주소">
          <span id="guide" style="color:#999;display:none"></span>
          <input type="text" name="detail" v-model="detail" id="sample4_detailAddress" placeholder="상세주소">
          <input type="text" id="sample4_extraAddress" placeholder="참고항목">      
        </p>
      </div>

      <p>
        <label>수령장소</label>
        <select name="reception" v-model="reception">
          <option>부재시 경비실에 맡겨주세요.</option>
          <option>부재시 휴대폰으로 연락바랍니다.</option>
          <option>집 앞에 놓아주세요.</option>
          <option>택배함에 넣어주세요.</option>
        </select>
      </p>
      </div>
      <button type="submit"
        :disabled="!myInput" 
        :class="[{disabledButton: !myInput}, 'order']" 
        id="order" value="주문하기">주문하기 
      </button>
      {{ zip }}
    </form>
    
  </section>
</template>

<script>
import { mapState } from 'vuex'
import Input from '@/components/UI/Input/Input'

export default {
  components: {
		Input
  },
  data() {
    return {
      name: '',
      email: '',
      recipient: '',
      phone: '',
      detail: '',
      myInput: false,
      zip: null,
      reception: ''
    }
  },
  watch: {
    name: 'btnStatus',
    email: 'btnStatus',
    recipient: 'btnStatus',
    phone: 'btnStatus',
    detail: 'btnStatus',
  },
  computed: {
    ...mapState({
			cartItems(state) { 
				return state.items;
			},
			totalPrice(state) { 
				return state.price;
			}
		})
  },
  methods: {
    btnStatus() {
      if(this.name && this.email && this.recipient && this.phone
         && this.detail) {
        this.myInput = true;
      } else {
        this.myInput = false;
      } 
    },
    submitForm() {
      const data = {
        name: this.name,
        email: this.email,
        recipient: this.recipient,
        phone: this.phone,
        addr_detail: this.detail,
        // cartItems: this.cartItems,
        price: this.totalPrice,
        reception: this.reception 
      };
      debugger;
      this.$http.post('https://shopping-goods.firebaseio.com/order.json', data);
    },
    onblur(e) {
      console.log("zip: " + this.zip);
      if(event && this.zip !== event.target.value) this.zip = event.target.value
    },
    sample4_execDaumPostcode: function() {
      new daum.Postcode({
        oncomplete: function(data) {
          // let that = this;
          var roadAddr = data.roadAddress; // 도로명 주소 변수
          var extraRoadAddr = ''; // 참고 항목 변수
          if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){
              extraRoadAddr += data.bname;
          }
          if(data.buildingName !== '' && data.apartment === 'Y'){
              extraRoadAddr += (extraRoadAddr !== '' ? ', ' + data.buildingName : data.buildingName);
          }
          if(extraRoadAddr !== ''){
              extraRoadAddr = ' (' + extraRoadAddr + ')';
          }

          document.getElementById('sample4_postcode').value = data.zonecode;
          // this.phone = '12345';
          // this.zip = data.zonecode;
          // this.zip=this.$refs.zip.$el.value;
          // this.$set(this.zip, document.getElementById('sample4_postcode').value);
          // this.zip = event.target.value;
          console.log("zip: " + this.zip);
          document.getElementById("sample4_roadAddress").value = roadAddr;
          document.getElementById("sample4_jibunAddress").value = data.jibunAddress;

          if(roadAddr !== ''){
            document.getElementById("sample4_extraAddress").value = extraRoadAddr;
          } else {
            document.getElementById("sample4_extraAddress").value = '';
          }

          var guideTextBox = document.getElementById("guide");
          // 사용자가 '선택 안함'을 클릭한 경우, 예상 주소라는 표시를 해준다.
          if(data.autoRoadAddress) {
            var expRoadAddr = data.autoRoadAddress + extraRoadAddr;
            guideTextBox.innerHTML = '(예상 도로명 주소 : ' + expRoadAddr + ')';
            guideTextBox.style.display = 'block';
          } else if(data.autoJibunAddress) {
            var expJibunAddr = data.autoJibunAddress;
            guideTextBox.innerHTML = '(예상 지번 주소 : ' + expJibunAddr + ')';
            guideTextBox.style.display = 'block';
          } else {
            guideTextBox.innerHTML = '';
            guideTextBox.style.display = 'none';
          }

          // return this.zipcode;
        }
      }).open();
    }
	}
}
</script>

<style lang="scss" scoped>
  section {
    width: 70%;
    text-align: center;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    margin: 30px;
    padding: 20px;
    
    .orderForm {
      text-align: center;
      margin: 0 auto;

    }
    .form-wrapper {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      // justify-content: flex-start;
      p, .addr-col {
        padding: 5px;
        font-size: 0.9rem;
        
        .addr-label {
          display: flex;
          // flex-direction: column;
          justify-content: flex-start;
          // align-items: flex-start;
        }
        .addr {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          // align-items: flex-start;
        }
        input, select {
          padding: 5px; 
          margin: 5px;
          border:1px solid #ccc; 
          -webkit-border-radius: 5px;
          border-radius: 5px;
          outline: none;
        }
        input:focus {
          border-color:#333;
          outline: none;
        }
      }
    }
    
    button {
      padding:5px 15px; 
      background: #000; 
      color: #fff;
      border:0 none;
      width: 80px;
      height: 25px;
      cursor:pointer;
      -webkit-border-radius: 5px;
      border-radius: 5px; 
    }
    .disabledButton {
      background: #d8d8d8 !important;
    }
  }
</style>
