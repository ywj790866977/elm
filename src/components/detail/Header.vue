<template>
  <div class="header">
    <nav class="detali-header">
      <!-- <img src="../img/detail/background1.webp" alt> -->
      <a class="mui-icon mui-icon-arrowleft" @click="gotoPrevious()"></a>
    </nav>
    <!-- 店招 -->
    <div class="detail-logo">
      <div class="logo">
        <span>品牌</span>
        <img :src="sellers.avatar">
      </div>
      <div class="detail-content">
        <h4>
          {{sellers.name}}
          <a-icon type="caret-right"/>
        </h4>
        <div class="content-text">
          <span>评分{{sellers.foodScore}}</span>
          <span>月销售842单</span>
          <span>商家配送约{{sellers.deliveryTime}}分钟</span>
        </div>
      </div>
      <div class="announcement">
        <div class="top">
          <div v-if="this.sellers" class="top-left">
            <span :class="classMap[sellers.supports[0].type]">{{sellers.supports[0].title}}</span>
            <span>{{sellers.supports[0].description}}</span>
          </div>
          <div class="top-right">
            <span>{{sellers.supports.length}}个优惠</span>
            <a-icon type="caret-down"/>
          </div>
        </div>
        <p class="bottom">公告：{{sellers.bulletin}}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {};
  },
  created() {
    this.classMap = ["tejia", "manjian", "shouchong", "cdefault"];
    // console.log(this.sellers.supports[0].type);
  },
  mounted() {
    //
  },
  methods: {
    gotoPrevious() {
      this.$router.go(-1);
    }
  },
  props: ["sellers"]
};
</script>
<style lang="scss" scoped>
@import "../../common/css/mixin.scss";

.header {
  .detali-header {
    background-image: url("../../img/detail/background1.webp");
    background-size: cover;
    height: 100px;
    background-position: 0 -12px;
    position: relative;
    // background-color: #fff;
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-image: linear-gradient(
        0deg,
        hsla(0, 0%, 100%, 0),
        rgba(0, 0, 0, 0.5)
      );
    }
    .mui-icon-arrowleft {
      position: absolute;
      left: 0;
      color: #fff;
    }
  }
  .detail-logo {
    background-color: #fff;
    .detail-content {
      padding-top: 30px;
      h4 {
        font-weight: 600;
        font-size: 1.3rem;
        margin-bottom: 0.3rem;
      }
      .content-text span {
        font-size: 0.65rem;
        margin-right: 10px;
        color: #666;
      }
    }
    .logo {
      position: absolute;
      top: 40px;
      left: 150px;
      span {
        position: absolute;
        color: #6f3f15;
        background-image: linear-gradient(90deg, #fff100, #ffe339);
        padding: 0 2px;
        font-size: 0.6rem;
        border-radius: 2px;
      }
      img {
        width: 75px;
        height: 75px;
        box-shadow: 0 0 0.4vw 0 rgba(0, 0, 0, 0.2);
        border-radius: 2px;
      }
    }
    .announcement {
      .top {
        display: flex;
        justify-content: space-around;
        .top-left {
          .tejia {
            @include bg-color(1);
          }
          .manjian {
            @include bg-color(2);
          }
          .shouchong {
            @include bg-color(3);
          }
          .cdefault {
            @include bg-color(4);
          }
          span:last-child {
            font-size: 0.8rem;
          }
        }
        .top-right {
          font-size: 0.8rem;
          color: #999;
        }
      }
      .bottom {
        font-size: 0.8rem;
        overflow: hidden;
        // 超出隐藏, ...
        text-overflow: ellipsis;
        white-space: nowrap;
        margin: 5px 45px;
      }
    }
  }
}
</style>