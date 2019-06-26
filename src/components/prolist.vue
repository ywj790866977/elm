<template>
  <div class="ProList">
    <!-- 推荐 -->
    <div class="shopList">

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
      </div>

    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="item in myList" :key="item.id">
          <a href="javascript:;">
              <img class="mui-media-object mui-pull-left" src="../img/home/baozi.webp">
              <div class="mui-media-body">
                  <div class="row1 row-item">
                    <div class="row1-col1 ">
                      <span v-if="item.is_premium" class="title-icon">品牌</span><span class="title-text">{{item.name}}</span>
                    </div>
                    <div class="row1-col2">
                      <span v-for=" i in item.supports" :key="i.id">{{i.icon_name}}</span>
                    </div>
                  </div>
                  <div class="row2 row-item">
                    <div class="row2-col1">
                      
                      <div class="pingfen-bg">
                        <!-- 宽度由实际数据自行计算 如4.2/5*100% -->
                         <div :style="'width:'+item.rating/5*100+'%'" class="pingfen-show"></div>
                      </div>

                      <span>{{item.rating}}</span>&nbsp;<span>月销{{item.rating_count}}单</span>
                    </div>
                    <div class="row2-col2">
                      <span class="vip-song">蜂鸟转送</span><span class="vip-da">准时达</span>
                    </div>
                  </div>
                  <div class="row3 row-item">
                    <div class="row3-col1">
                      <span >¥20 起送</span><span>{{item.piecewise_agent_fee.tips}}</span>
                    </div>
                    <div class="row3-col2">
                      <span>{{item.distance}}</span><span>{{item.order_lead_time}}</span>
                    </div>
                  </div>
              </div>
          </a>
      </li>

    </ul>
  </div>
</template>

<script>
export default {
  name:"ProList",
  data(){
    return {}
  },
  created(){
    // console.log(this.myList)
  },
  props:["myList"]
}
</script>

<style lang="scss" scoped>
  // 推荐商家
  .shopList{
    margin-bottom:15px;
  }
  .filter-header{
    display: flex;
    justify-content: space-around
  }
  .filter-header a,.filter-header span{
    color:#666;
    font-size:14px;
  }
  .mui-table-view{
    margin-bottom:50px;
  }
  .row-item{
    display: flex;
    justify-content: space-between;
    font-size:.65rem;
    margin-bottom:4px;
  }
  .title-icon{
    font-size: .7rem;
    background-image: linear-gradient(-139deg,#fff100,#ffe339);
    padding:2px;
    border-radius: 3px;
    margin-right: 5px;
    font-weight: 600;
  }
  .row1-col1 .title-text{
    font-size:.9rem;
    font-weight: 800;
  }
  .row2{
    color:#666;
  }
  .row1-col2 span{
    padding:2px;
    border:.33px solid #aaa;
    color:#aaa;
    border-radius: 2px;
    margin-left: 2px;
  }
  .row2-col2{
    font-size:.6rem;
  }
  .vip-song{
    background-image: linear-gradient(45deg,#0085ff,#0af);
    color: #fff;
    padding:1px;
    border-radius: 1px;
    margin-right: 1px;
  }
  .vip-da{
    color:#0085ff;
    border:.5px solid #0085ff;
    padding:.5px;
    border-radius: 1px;
  }
  .row3{
    color:#666;
  }
  .row3 span+span::before{
    content:" | ";
    color: #aaa;
    padding:1px;
  }
  // 评分
  .row2-col1 div{
    float: left;
  }
  

  

  
</style>