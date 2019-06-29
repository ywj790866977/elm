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
        <div class="content-name">
          <h4>
            {{sellers.name}}
            <a-icon @click="showModle(2)" type="caret-right"/>
          </h4>
          <mt-popup pop-transition="popup-fade" v-model="popupVisible2">
            <div class="modle2">
              <div class="title">
                <span>品牌</span>
                <h3>{{sellers.name}}</h3>
              </div>
              <ul class="ratings">
                <li class="rating-item">
                  <span class="item-title">{{sellers.foodScore}}</span>
                  <span class="item-text">评分</span>
                </li>
                <li class="rating-item">
                  <span class="item-title">{{sellers.sellCount}}</span>
                  <span class="item-text">月售</span>
                </li>
                <li class="rating-item">
                  <span class="item-title">商家配送</span>
                  <span class="item-text">{{sellers.deliveryTime}}</span>
                </li>
                <li class="rating-item">
                  <span class="item-title">{{sellers.deliveryPrice}}元</span>
                  <span class="item-text">配送费</span>
                </li>
                <li class="rating-item">
                  <span class="item-title">{{sellers.distance}}km</span>
                  <span class="item-text">距离</span>
                </li>
              </ul>
              <div class="bulletin-logo">
                <span>公告</span>
              </div>
              <div class="bulletin">{{sellers.bulletin}}</div>
            </div>
            <div @click="hiddenModle(2)" class="clickClose"></div>
          </mt-popup>
        </div>

        <div class="content-text">
          <span>评分{{sellers.foodScore}}</span>
          <span>月销售842单</span>
          <span>商家配送约{{sellers.deliveryTime}}分钟</span>
        </div>
      </div>
      <div class="announcement">
        <div class="top">
          <div v-if="this.sellers" class="top-left">
            <span
              :class="this.sellers.supports&&this.classMap[sellers.supports[0].type]"
            >{{sellers.supports[0].title}}</span>
            <span>{{sellers.supports[0].description}}</span>
          </div>
          <div class="top-right">
            <span @click="showModle(1)">{{sellers.supports.length}}个优惠</span>
            <a-icon type="caret-down"/>
            <mt-popup v-model="popupVisible1" position="bottom">
              <div class="modle">
                <h3>优惠活动</h3>
                <span @click="hiddenModle(1)" class="mui-icon mui-icon-closeempty"></span>
                <div v-for="item in sellers.supports">
                  <span class="modle-title" :class="classMap[item.type]">{{item.title}}</span>
                  <span class="modle-text">{{item.description}}</span>
                </div>
              </div>
            </mt-popup>
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
    return {
      popupVisible1: false,
      popupVisible2: false
    };
  },
  created() {
    this.classMap = ["tejia", "manjian", "shouchong", "piao", "bao"];
  },
  mounted() {
    //
  },
  methods: {
    hiddenModle(num) {
      if (num == 1) this.popupVisible1 = false;
      else if (num == 2) this.popupVisible2 = false;
    },
    showModle(num) {
      if (num == 1) this.popupVisible1 = true;
      else if (num == 2) this.popupVisible2 = true;
    },
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
      .content-name {
        h4 {
          font-weight: 600;
          font-size: 1.3rem;
          margin-bottom: 0.3rem;
        }
        .mint-popup {
          width: 80%;
          padding: 25px 15px;
          border-radius: 5px;

          .modle2 {
            .ratings {
              margin-top: 20px;
              display: flex;
              justify-content: space-between;
              .rating-item {
                display: flex;
                flex-direction: column;
                .item-title {
                  font-size: 0.9rem;
                  font-weight: bolder;
                }
                .item-text {
                  font-size: 0.75rem;
                  color: #999;
                }
              }
            }
            .bulletin-logo {
              background-image: linear-gradient(90deg, #fff, #333 50%, #fff);
              background-size: 100% 0.5px;
              background-repeat: no-repeat;
              background-position: 50%;
              margin: 10px 90px;
              text-align: center;
              span {
                background-color: #fff;
                padding: 5px;
                text-align: center;
              }
            }
            .title {
              span {
                background-image: linear-gradient(90deg, #fff100, #ffe339);
                color: #6a3709;
                padding: 3px;
                border-radius: 2px;
                font-size: 0.8rem;
                margin-right: 5px;
              }
              h3 {
                font-size: 1.5rem;
                display: inline-block;
                font-weight: bolder;
                margin-bottom: 0;
                vertical-align: top;
                word-wrap: break-word;
                word-break: normal;
              }
            }
          }
          .clickClose {
            position: absolute;
            bottom: -50px;
            left: 45%;
            width: 30px;
            height: 30px;
            background-image: url("http://fuss10.elemecdn.com/8/ba/bcfa8cc62b20e044bd2ea1c1c7f3dpng.png?imageMogr/format/webp/");
            background-repeat: no-repeat;
            background-size: cover;
          }
        }
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
          span:last-child {
            font-size: 0.8rem;
          }
        }
        .top-right {
          font-size: 0.8rem;
          color: #999;
          .mint-popup {
            width: 100%;
            height: 265px;
            .modle {
              padding: 20px;
              & > span {
                position: absolute;
                font-size: 2rem;
                top: 10px;
                right: 10px;
              }
              h3 {
                font-size: 1.1rem;
                font-weight: bold;
                margin-bottom: 10px;
              }
              div {
                text-align: start;
                font-size: 0.9rem;
                margin-top: 5px;
                .modle-title {
                  font-size: 0.8rem;
                }
                .modle-text {
                  color: #333;
                }
              }
            }
          }
        }
      }
      .bottom {
        font-size: 0.8rem;
        // 超出隐藏, ...
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin: 5px 45px;
      }
    }
  }
}

.tejia {
  @include bg-color(0);
}
.manjian {
  @include bg-color(1);
}
.shouchong {
  @include bg-color(2);
}
.piao {
  @include bg-color(3);
}
.bao {
  @include bg-color(4);
}
</style>