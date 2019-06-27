<template>
  <div class="seller">
    <div class="pingjia">
      <div class="pingfen">
        <div class="pf-left">4.6</div>
        <div class="pf-center">
          <span>商家评分</span>
          <div class="ping-bg">
            <!-- 星星 -->
            <!-- :style="'width:'+item.rating/5*100+'%'" -->
            <div class="pingfen-show"></div>
          </div>
        </div>
        <div class="pf-right">
          <div class="right-1">
            <div>
              <span>味道</span>
              <p>4.6</p>
            </div>
            <div>
              <span>包装</span>
              <p>4.6</p>
            </div>
          </div>
        </div>
        <div class="right-2">
          <span>配送</span>
          <p>4.7</p>
        </div>
      </div>
      <!-- 评论 -->
      <div class="pinglun">
        <div class="pl-header">
          <div class="header-top">
            <mt-button @click="iconColor()" type="primary" size="small">
              全部
              <span>11</span>
            </mt-button>
          </div>
          <div class="checkon">
            <a-icon theme="twoTone" :twoToneColor="ckColor" type="check-circle"/>只看有内容的评价
          </div>
        </div>
        <!-- 评论内容 -->
        <div class="pl-content">
          <div class="pl-item">
            <div class="touxiang">
              <span></span>
              <!-- <img src="http://shadow.elemecdn.com/faas/h5/static/sprite.3ffb5d8.png" alt> -->
            </div>
            <div class="item-right">
              <div class="profile">
                <span>老****哥</span>
                <span>2019-6-25</span>
              </div>
              <div class="pingfen-bg">
                <!-- 评分 -->
                <div class="pingfen-show"></div>
              </div>
              <div class="ping-img">
                <!-- 评论图 -->
                <img src="../../img/detail/ping-img.webp" alt>
              </div>
              <div class="ping-tag">
                <span class="mui-icon-extra mui-icon-extra-like"></span>
                <span>老北京鸡肉卷T</span>
                <span>红豆派T</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Seller",
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
//评价
.pingjia {
  .pingfen {
    background-color: #fff;
    display: flex;
    padding: 15px;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 10px;
    .pf-left {
      color: #ff6000;
      font-size: 2.2rem;
    }
    .pf-right {
      p {
        margin: 0;
      }
      display: flex;
      align-items: center;
      .right-1 {
        display: flex;
        font-size: 1rem;
        border-right: 0.5px solid #aaa;
        margin-left: 10px;
        :first-child {
          margin-right: 15px;
        }
        :last-child {
          margin-right: 5px;
        }
      }
    }
    .right-2 {
      p {
        margin: 0;
      }
    }
  }
}
// 评论
.pinglun {
  background-color: #fff;
  padding: 10px;
  .pl-header {
    .header-top {
      padding-bottom: 10px;
      border-bottom: 0.5px solid #eee;
      .mint-button {
        font-size: 0.8rem;
        height: 27px;
      }
    }
    .checkon {
      padding: 10px;
      border-bottom: 0.5px solid #eee;
    }
  }
}
// .pl-content {
//   ;
// }
.pl-item {
  display: flex;
  margin: 10px 0;
  .item-right {
    width: 100%;
    margin-left: 10px;
    .ping-tag {
      .mui-icon-extra-like {
        font-size: 0.9rem;
        color: #aaa;
        margin-right: 5px;
      }
      :not(:first-child) {
        background-color: #ebf5ff;
        margin-right: 5px;
        font-size: 0.75rem;
        padding: 5px;
        border-radius: 3px;
      }
    }
    .pingfen-bg {
      // display: flex;
      margin: 5px 0;
    }
    .profile {
      display: flex;
      justify-content: space-between;
    }
    .ping-img {
      margin: 5px 0;
      img {
        width: 150px;
        height: 150px;
      }
    }
  }

  .touxiang {
    width: 30px;
    height: 30px;
    span {
      display: block;
      background: url("../../img/detail/profile.png");
      background-size: 30px;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      //切换头像
      // background-position: 0px 120.107px;
      // background-position: 0px 240.213px;
      //  background-size: 30px;
    }
  }
}
</style>