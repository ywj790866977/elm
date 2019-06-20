<template>

  <div class="login">
    <!-- logo -->
    <div class="login-logo">
      <img src="../img/login/logo.ba876fd.png" alt="">
    </div>
    <!-- 表单 -->
    <div class="login-input"    >
      <input type="text" v-model="uname" placeholder="用户名" :class="this.isClass.In1?'active':''"  @focus="addClass(1)"  @blur="delClass(1)"/>
      <input type="password" v-model="upwd" placeholder="密码"  :class="this.isClass.In2?'active':''"  @focus="addClass(2)"  @blur="delClass(2)"/>
      <div class="caps">
        <input type="text" v-model="captcha" placeholder="验证码"  :class="this.isClass.In3?'active':''"   @focus="addClass(3)" @blur="delClass(3)" />
        <img :src="this.captchas">
      </div>
    </div>
    <!-- 提示 -->
    <div class="proto">
      <span>新用户登录即自动注册,并表示已同意<a href="">《用户服务协议》</a></span>
    </div>
    <!-- 登录按钮 -->
    <mt-button class="myBtn" size="large" @click="login()">登录</mt-button>


  </div>
</template>
<script>
import { MessageBox,Toast } from 'mint-ui';

export default {
  data(){
    return {
      captchas:"",
      isClass:{
        In1:false,
        In2:false,
        In3:false
      },
      uname:"",
      upwd:"",
      captcha:""
    }
  },
  methods: {
    addClass(num){
      if(num == 1) this.isClass.In1 = true;
      else if(num == 2) this.isClass.In2 = true;
      else if(num == 3) this.isClass.In3 = true;
    },
    delClass(num){
      if(num == 1) this.isClass.In1 = false;
      else if(num == 2) this.isClass.In2 = false;
      else if(num == 3) this.isClass.In3 = false;
    },
    login(){
      let uname = this.uname;
      let upwd = this.upwd;
      let cap = this.captcha;
      if(!uname) {
        MessageBox.alert('请输入用户名!');
        return;
      }
      else if(!upwd) {
        MessageBox.alert('请输入密码!');
        return;
      }
      else if(!cap) {
        MessageBox.alert("请输入验证码!");
        return;
      }
      this.axios.post('v2/login',{
        username:this.uname,
        password:this.upwd,
        captcha_code:this.captcha
        }).then(res=>{
          MessageBox.alert(res.data.message);
          this.$store.commit("isFalse")
          this.$store.commit("updateUsername",uname)
          console.log(this.$store.state.username)
          this.$router.go(-1);
        })
    }
  },
  created(){
    console.log(this.$store.getters.isLoginning);
    this.axios.post('v1/captchas').then(res=>{
        if(res.status == 200){
          this.captchas = res.data.code;
        }
      })
  }
}
</script>

<style lang="scss" scoped>
  .login{
    padding:40px 40px;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0px;
    background-color: #fff;
  }
  .login-logo{
    margin-bottom:20px;
  }
  .login-logo img{
    height:56px;
  }
  .login-input{
    text-align: start;
  }
  .login-input input{
    height:45px;
    font-size:.9rem;

  }

  .caps{
    position: relative;
  }
  .caps input{
    width:150px;
    text-align: start
  }
  .caps img{
    position: absolute;
    top:10px;
    right:30px;
  }
  // 高亮
  .active{
    border:1px solid #028DF0;
  }
  // 协议
  .proto{
    color:#aaa;
    font-size:.85rem;
  }

  .myBtn{
    background-color: #4CD96F;
    margin-top:20px;
  }
</style>