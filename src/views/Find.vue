<template>
  <div class="find">
    <!-- 头 -->
    <div class="find-header">
      <div class="header-left header-item">
        <p class="left-title">金币商城</p>
        <p>0元好物在这里</p>
        <img src="../img/find/jinbi.webp" alt="">
      </div>
      <div class="header-right header-item">
        <div class="right-top">
          <div class="content-text">
            <p class="top-title">推荐有奖</p>
            <p>20元现金拿不停</p>
          </div>
          <img src="../img/find/jiang.webp" alt="">
        </div>
        <div class="right-bottom">
          <div class="content-text">
            <p class="bottom-title">周边优惠</p>
            <p>领取口碑好券</p>
          </div>
          <img src="../img/find/youhui.webp" alt="">
        </div>
      </div>
    </div>
    <div class="find-bottom">
      <div class="xianshi">
        <span class="icon-right"></span>
        <span class="mui-icon-extra mui-icon-extra-outline Detime"></span>
        <span class="item-text">限时好礼</span>
        <span class="icon-left"></span>
        <p >金币换豪礼</p>
      </div>
      <!-- 豪礼 -->
      <div class="priList">
        <div class="list-item">
          <span class="item-title">限时优惠</span>
          <img src="../img/find/quan.webp" alt="">
          <p class="item-name">3元品质联盟红包</p>
          <div class="prices">
            <span class="item-price">90金币</span>
            <s  class="shan">¥3</s>
          </div>
        </div>
        <div class="list-item">
          <span class="item-title">特价换购</span>
          <img src="../img/find/anmo.webp" alt="">
          <p class="item-name">数码经络按摩椅</p>
          <div class="prices">
            <span class="item-price">9金币</span>
            <s  class="shan">¥239</s>
          </div>
        </div>
        <div class="list-item">
          <span class="item-title">特价换购</span>
          <img src="../img/find/jianpan.webp" alt="">
          <p class="item-name">悬浮机械手感套餐</p>
          <div class="prices">
            <span class="item-price">9金币</span>
            <s  class="shan">¥129</s>
          </div>
        </div>
      </div>
      <!-- 查看跟多 -->
      <div  class="find-footer">
        <a href="" >
          查看更多
        </a>
        <span  class="mui-icon mui-icon-arrowright"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{}
  }

}
</script>

<style lang="scss" scoped>
  p{
    margin:0;
    font-size: .8rem;
  }
  .find-header{
    height: 160px;
    display: flex;
    background-color: #fff;
    margin-bottom: 10px;
  }
  .header-item{
    width:50%
  }
  .header-left img{
    width:75px;
    height:75px;
  }
  .header-right img{
    width:40px;
    height:40px;
  }
  //左边
  .header-left{
    display:flex;
    flex-direction: column;
    align-items:flex-start;
    padding:20px 15px;
    position: relative;
    border-right: .8px solid #ddd;
    border-bottom: .8px solid #ddd;
  }
  .header-left img{
    position: absolute;
    bottom:15px;
    right:20px;
  }
  .left-title{
    font-size:1rem;
    color: rgb(255, 153, 0);
    margin-bottom: 2px;
  }

  //右边
  .header-right{
    display: flex;
    flex-direction:column;
  }
  .right-top,.right-bottom{
    display: flex;
    height:50%;
    padding:20px 15px;
    justify-content: space-between;
       border-bottom: .8px solid #ddd;
  }
  .right-top,.right-bottom p{
    text-align: start;
  }
  .top-title{
    color: rgb(27, 169, 225);
    font-size:1rem;
  }
  .bottom-title{
    color: rgb(237, 102, 96);
    font-size:1rem;
  }

  // 下面
  .find-bottom{
    background-color:#fff;

  }
  .xianshi{
    position: relative;
    font-size:1.1rem;
    padding-top:15px;
  }
  .item-text::before,.item-text::after{
    content: "";
    width: 15px;
    height:1px;
    background-color:#000;
    position: absolute;
    top:25px;
  }
  .item-text::before{
    left:119px;
  }
  .item-text::after{
    right:120px;
  }
  .Detime{
    font-size: 20px;
    margin-right:2px;
    color:red;
  }
  .icon-right::before{
    content:"";
    width:5px;
    height:5px;
    border-radius:50%;
    background-color: #000;
    position:absolute;
    top:23px;
    left:135px;
  }
  .icon-left::before{
    content:"";
    width:5px;
    height:5px;
    border-radius:50%;
    background-color: #000;
    position:absolute;
    top:23px;
  }
  .xianshi p{
    margin:0;
    font-size:0.65rem;
  }

  // 商品
  .priList{
    display: flex;
    justify-content: space-around;
    margin-top:20px;
  }
  .list-item{
    position: relative;
    display: flex;
    flex-direction:column;
    align-items: start;
  }
  .item-title{
    position: absolute;
    background: #000;
    color: #fff;
    font-size:.68rem;
    padding:0 3px;
  }
  .list-item img{
    width: 110px;
    height: 115px;
  }
  .item-name{
    color:#000;
  }
  .prices{
    margin-top:5px;
  }
  .item-price{
    color:red;
    font-size:.85rem;
    margin-right: 3px;
    // margin-top:20px;
  }
  .shan{

    font-size:.7rem;
    color:#aaa;
  }

  // 查看更多
  .find-footer{
    padding:20px 0;
  }
  .find-footer a,span{
    color:#aaa;
    font-size:.85rem;
  }
</style>