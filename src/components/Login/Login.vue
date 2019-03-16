<template>
  <section>
    <Title title="로그인"/>
    <div class="login-page">
    <div class="col-1">아이디 *
      <input type="text" name="" id="loginId">
    </div>
    <br>
    <div class="col-1">비밀번호 *
      <input type="password" name="" id="password">
    </div>
    <br>
    <input type="submit" value="로그인">
    <br>
    <br>
    <div id="naverIdLogin"></div>
    </div>
    
  </section>
</template>

<script>
import Title from '@/components/Title/Title'

export default {
  components: {
		Title
  },
  mounted() {
    let naverLogin = new naver.LoginWithNaverId({
			callbackUrl: "http://localhost:8080/cart",
      isPopup: true, /* 팝업을 통한 연동처리 여부 */
      callbackHandle: true,
			loginButton: {color: "green", type: 3, height: 30} /* 로그인 버튼의 타입을 지정 */
		});
	
    /* 설정정보를 초기화하고 연동을 준비 */
    naverLogin.init();
    /* (4) Callback의 처리. 정상적으로 Callback 처리가 완료될 경우 main page로 redirect(또는 Popup close) */
    window.addEventListener('load', function () {
      naverLogin.getLoginStatus(function (status) {
        if (status) {
          /* (5) 필수적으로 받아야하는 프로필 정보가 있다면 callback처리 시점에 체크 */
          let email = naverLogin.user.getEmail();
          if( email == undefined || email == null) {
            alert("이메일은 필수정보입니다. 정보제공을 동의해주세요.");
            /* (5-1) 사용자 정보 재동의를 위하여 다시 네아로 동의페이지로 이동함 */
            naverLogin.reprompt();
            return;
          }

          window.location.replace("http://" + window.location.hostname + ( (location.port==""||location.port==undefined)?"":":" + location.port) + "/sample/main.html");
        } else {
          console.log("callback 처리에 실패하였습니다.");
        }
      });
    });
  }
}
</script>

<style lang="scss" scoped>
.login-page {
  text-align: center;
  margin: 0 auto;

  input {
    padding:5px; 
    border:1px solid #ccc; 
    -webkit-border-radius: 5px;
    border-radius: 5px;
    outline: none;
  }

  input:focus {
    border-color:#333;
    outline: none;
  }

  input[type=submit] {
    padding:5px 15px; 
    background:#333; 
    color: #fff;
    border:0 none;
    cursor:pointer;
    -webkit-border-radius: 5px;
    border-radius: 5px; 
  }
}  
</style>
