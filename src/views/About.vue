<template>
  <div class="about">
    <div class="about-header">
      <!-- 登录 -->
      <a class="about-content">
        <div class="content-img">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAM1BMVEXE5/XI6fbT7fjW7/jl9fvw+f3////a8Pnt+PzL6vb7/v7i8/rP7Pf4/P7e8vn0+/3p9vvI4mwRAAACI0lEQVR4Ae3YBxbkIAgGYDCKgqbc/7LbS5hJexvMNr7Xp/0j9oBzzjnnnHPOuX8Qhq/wycwhJvopxQGfSM2F3pXcOZuj0DaJDN1gpSMRoY9B6Jhk6AALnSsI1tpIV0jrX+ZHyp3putwzN9XA8BmHmvolN1LGCWENp5GUADZYVGyGd1lFC4OJmVYqbKu0MoOFem22TPrv3cf004ywa6A1htvStdw2Go+vcC03C5EuzV3pSv/iQsqCllN4gj1tJmWC+342JV1dx8cGBuR8nEbznVHNkQW28UxKBeV+pRtsCrrMEsDGeLIIVlISgg08HqiYSIlgJRxWuoku8wA2VCU3dwVlZugQnE4PnYt+t05wR6FvysmeIPltrC8mC3U97t65bRQq9whO23uC6gRp9sFMa9NOJ8z2wWF3T1BvDfdXzLLb4oL7a1m9P53mq50PwSR42ltA2v6eEC2uFGH38Ja39wRVDUGDTSJudH+ETSg3G6wuESO8anxSpww3xF+aGvX+yWvQZ72rohQ0O+wFeI6q9QiPYr0cPGih31Rs1pfjBy2/KxnlYjJPtTYwNFy7CE5CnyzGxf4pMWzhQkTWyTjTWkV4hVW6PNhjIWUZdF+okgiDnSakSakhMHAItQhpAXom7xN+8nG1OnTawkRXJARzlc5V6KElOpYadJJH2jdm6CjPtG3O0FmL780eY4MncI5J6CtJMTM8iwODc84555xzzv0PPgKMKi2olgNo0QAAAABJRU5ErkJggg==" alt="">
        </div>
        <router-link to="/login" class="content-text">
          <p>{{this.$store.state.username != "" ? this.$store.state.username :'注册/登录'}}</p>
          <div>
            <span class="mui-icon-extra mui-icon-extra-phone"></span>
            <span>{{this.$store.state.username != "" ? this.$store.state.username :'登录后享受更多特权'}}</span>
          </div>
        </router-link>
        <span class="mui-icon mui-icon-arrowright" ></span>
      </a>
      <!-- 红包 -->
      <div class="money">
        <div class="hongbao money-item">
          <img class="item-msg" v-if="this.$store.getters.isLoginning" src="../img/about/hongbao.png">
          <p class="item-text" v-if="!this.$store.getters.isLoginning">0<span>个</span></p>
          <p>红包</p>
        </div>
        <div class="jinbi money-item">
          <img class="item-msg" v-if="this.$store.getters.isLoginning" src="../img/about/gold-coin.png">
          <p class="item-text" v-if="!this.$store.getters.isLoginning">0<span>个</span></p>
          <p>金币</p>
        </div>
      </div>
      <!-- 我的地址 -->
      <ul class="mui-table-view myMap">
        <li class="mui-table-view-cell">
          <a class="mui-navigate-right">
            <img src="../img/about/map-marked.png" alt="">
            我的地址
          </a>
        </li>
      </ul>
      <!--金币商城  -->
      <ul class="mui-table-view myMap">
        <li class="mui-table-view-cell">
          <a class="mui-navigate-right">
            <img src="../img/about/bag.png" alt="">
            金币商城
          </a>
        </li>
        <li class="mui-table-view-cell">
          <a class="mui-navigate-right">
            <img src="../img/about/point-gift.png" alt="">
            分享拿20元现金
          </a>
        </li>
      </ul>
      <!-- 客服 -->
            <ul class="mui-table-view myMap">
        <li class="mui-table-view-cell">
          <a class="mui-navigate-right">
            <img src="../img/about/service.png" alt="">
            我的客服
          </a>
        </li>
        <li class="mui-table-view-cell">
          <a class="mui-navigate-right">
            <img src="../img/about/ios-apps.png" alt="">
            下载APP
          </a>
        </li>
          <li class="mui-table-view-cell">
            <a class="mui-navigate-right">
              <img src="../img/about/article-fill.png" alt="">
              规则中心
            </a>
        </li>
      </ul>
      <!-- 隐私政策 -->
      <div class="yinsi">
        <a href="" >隐私政策</a>
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
  .about-content{
    display: flex;
    padding:20px 15px;
    height:110px;
    background-image: linear-gradient(90deg,#0af,#0085ff);
    align-items: center;
    position: relative;
  }
  .about-content>span{
    position: absolute;
    right: 5px;
    color:#fff;
  }
  .content-img img{
    border-radius: 50%;
    width:60px;
    height: 60px;
  }
  .content-text{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 20px;
    color:#fff;
  }
  .content-text p{
    color:#fff;
    font-size: 1.3rem;
    margin:0;
    margin-bottom:5px;
    font-weight: 600;
  }
  .content-text div span{
    font-size:.85rem;
  }

  // 红包
  .money{
    display: flex;
    height:85px;
    background-color:#fff;
    // align-items: center;
  }
  .money .money-item{
    width:50%;
    padding:15px;
    border-bottom: .8px solid #ddd;
  }
  .money .money-item p{
    font-size:.8rem;
    margin: 0;
  }
  .money .money-item .item-msg{
    width: 28px;
    height: 28px;
    // padding: 20px;
  }
  .hongbao{
    border-right: .8px solid #ddd;
  }
  .hongbao .item-text{
    color:red;
    font-size:1.4rem !important;
  }
  .jinbi .item-text{
    color:greenyellow;
    font-size:1.4rem !important;
    
  }
  .item-text span{
    font-size: .8rem;
  }

  // 列表
  .myMap{
    margin-top:10px;
  }
  .mui-table-view{
    text-align: start;
  }
  .mui-table-view img{
    width:20px;
    height:20px;
    padding-top:2px;
    margin-right: 5px;
  }

  .yinsi{
    margin-top:20px;
  }
</style>
