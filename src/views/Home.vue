
<template>
  <div class="home">
    <Header></Header>
    <div class="home-container">
      <div class="shopList">
        <div class="proList">
          <a class="proItem">
            <img src="../img/home/shangchao.webp" alt="">
            <p class="itemText">商超便利</p>
          </a>
          <a class="proItem">
            <img src="../img/home/yiyao.webp" alt="">
            <p class="itemText">医药健康</p>
          </a>
          <a class="proItem">
            <img src="../img/home/xianhua.webp" alt="">
            <p class="itemText">浪漫鲜花</p>
          </a>
          <a class="proItem">
            <img src="../img/home/shengxian.webp" alt="">
            <p class="itemText">厨房生鲜</p>
          </a>
          <a class="proItem">
            <img src="../img/home/hanbao.webp" alt="">
            <p class="itemText">快餐汉堡</p>
          </a>
        </div>
        <div class="proList">
          <a class="proItem">
            <img src="../img/home/shuiguo.webp" alt="">
            <p class="itemText">天天水果</p>
          </a>
          <a class="proItem">
            <img src="../img/home/xiaochi.webp" alt="">
            <p class="itemText">名品小吃</p>
          </a>
          <a class="proItem">
            <img src="../img/home/baozi.webp" alt="">
            <p class="itemText">包子馒头  </p>
          </a>
          <a class="proItem">
            <img src="../img/home/zhaji.webp" alt="">
            <p class="itemText">香辣炸鸡</p>
          </a>
          <a class="proItem">
            <img src="../img/home/paotui.webp" alt="">
            <p class="itemText">代买跑腿</p>
          </a>
        </div>
      </div>

      <div class="banner">
        <div class="bText">
          <p class="Qtitle">品质套餐</p>
          <p>搭配齐全</p>
          <span class="qianggou">立即抢购</span>
          <span class="mui-icon mui-icon-arrowright rightIcon"></span>
        </div>
        <img src="../img/home/qianggou.webp" alt="">
      </div>

      <!-- 轮播 -->
      <Swiper></Swiper>

      <!-- 推荐 -->
      <div class="shopList">
        <div class="proTitle">
          推荐商家
        </div>
        <div class="filter-header">
          <a href="">
            综合排序
            <span class="mui-icon mui-icon-arrowdown"></span>
          </a>
          <a href="">
            距离最近
          </a>
          <a href="">
            品质联盟
          </a>
          <a href="">
            筛选
            <span class="mui-icon-extra mui-icon-extra-filter"></span>
          </a>
        </div>
        <NoResult v-if="this.$store.getters.isLoginning"></NoResult>
      </div>
      

      
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import Header from '../components/Header';
import Swiper from '../components/Swiper';
import NoResult from '../components/NoResult'

export default {
  name: "home",
  components: {
    Header,
    Swiper,
    NoResult
  }
};
</script>

<style lang="scss" scpoed>
  .home-container{
    padding:10px;
  }
  // prolist
  .home{
    background: #fff;
  }
  .proList{
    display: flex;
    justify-content: space-around;
    // height: 160px;
  }
  .proItem .itemText{
    font-size: 12px;
  }
  .proItem img{
    width:45px;

  }

  // 抢购
  .banner{
    display: flex;
    justify-content: space-between;
    height:110px;
    background-image: linear-gradient(0deg,#f4f4f4 5%,#fafafa 95%);
    padding:10px ;
    margin-bottom:5px;
  }
  .banner .bText{
    margin-top:10px;
    margin-left: 5px;
    text-align: start;
  }
  .banner .bText p{
    margin: 0;
  }
  .banner img{
    width:150px;
    height: 90px;
  }
  .bText .Qtitle{
    font-size: 18px;
    color:#000;
    font-weight: 600;
  }
  .banner .bText span{
    font-size: 12px;
    color:#af8260;
    font-weight: 600;
  }

// 推荐
  .proTitle{
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px 0;
    font-size:15px;
  }
  .proTitle::before{
    content:"";
    display: block;
    width:20px;
    background-color: #000;
    height: 1px;
    margin: 0  10px;

  }
  .proTitle::after{
    content:"";
    display: block;
    width:20px;
    background-color: #000;
    height: 1px;
     margin: 0  10px;
  }
  // 推荐商家
  .filter-header{
    display: flex;
    justify-content: space-between
  }
  .filter-header a,.filter-header span{
    color:#666;
    font-size:14px;
  }
</style>
