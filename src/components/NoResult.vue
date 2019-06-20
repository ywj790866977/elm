<template>
  <div class="no-result">
    <img src="../img/home/noresult.png" alt="">
    <p class="title">没有结果</p>
    <p class="msg">登录后查看更多商家</p>
    <!-- <button type="button"  class="mui-btn mui-btn-success">登录</button> -->
    <mt-button class="myButton" @click="toLogin()" >登录</mt-button>
  </div>
</template>

<script>
export default {
  name:"NoResult",
  data(){
    return { }
  },
  methods: {
    toLogin(){
      this.$router.push('/login')
    }
  },
}
</script>
<style lang="scss" scoped>
  .no-result{
    height:400px;
  }
  .no-result .title{
    font-size: 1.1rem;
    color: #6a6a6a;
  }
  .no-result .msg{
    font-size: .7rem;
  }
  .no-result img{
    width: 200px;
    height:200px;
  }
  .myButton{
    padding:5px 40px;
    background-color:#56d176;
    color:#fff;
  }
</style>