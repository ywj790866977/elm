<template>
  <div class="detail">
    <nav class="detali-header">
      <!-- <img src="../img/detail/background1.webp" alt> -->
      <a class="mui-icon mui-icon-arrowleft" @click="gotoPrevious()"></a>
    </nav>
    <!-- 店招 -->
    <div class="detail-logo">
      <div class="logo">
        <span>品牌</span>
        <img src="../img/detail/logo.webp" alt>
      </div>
      <div class="detail-content">
        <h4>
          肯德基宅急送 (双桥店)
          <a-icon type="caret-right"/>
        </h4>
        <div class="content-text">
          <span>评分4.6</span>
          <span>月销售842单</span>
          <span>商家配送约30分钟</span>
        </div>
      </div>
      <div class="announcement">
        <div class="top">
          <div class="top-left">
            <span class="tejia">特价</span>
            <span>特价商品23元起</span>
          </div>
          <div class="top-right">
            <span>3个优惠</span>
            <a-icon type="caret-down"/>
          </div>
        </div>
        <p class="bottom">公告：本餐厅不使用饿了么配送，由肯德基宅急送官方品牌配送，会员用户无法享受免配送费服务</p>
      </div>
    </div>

    <!-- 选项卡 -->
    <div class="navbar">
      <mt-navbar :fixed="isFixed" id="fixedHeaderRoot" v-model="selected">
        <mt-tab-item id="1">点评</mt-tab-item>
        <mt-tab-item id="2">评价</mt-tab-item>
        <mt-tab-item id="3">商家</mt-tab-item>
      </mt-navbar>

      <!-- tab-container -->
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
          <div class="dianping">
            <div class="dp-header">
              <img src="../img/detail/background2.webp" alt>
            </div>
            <!-- 锚点 -->
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
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
                      <img src="../img/detail/ping-img.webp" alt>
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
        </mt-tab-container-item>
        <mt-tab-container-item id="3">
          <div class="shangjia">
            <h4>配送信息</h4>
            <span>由商家配送提供配送，约30分钟送达，距离2.4km</span>
            <div>配送费￥9</div>
          </div>
          <div class="shangjia">
            <h4>商家服务</h4>
            <span class="piao-icon">票</span>
            <span>由商家配送提供配送，约30分钟送达，距离2.4km</span>
          </div>
          <div class="sj-content">
            <mt-cell title="商家信息" label="肯德基宅急送"></mt-cell>
            <mt-cell title="品类" value="汉堡薯条,炸鸡炸串"></mt-cell>
            <mt-cell title="商家电话" value="4009208801" is-link></mt-cell>
            <mt-cell title="地址" value="四川省成都市成华区经华北路2号"></mt-cell>
            <mt-cell title="营业时间" value="05:45-04:00"></mt-cell>
          </div>
          <div class="sj-bottom">
            <mt-cell title="商业性质" is-link></mt-cell>
          </div>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>
</template>

<script>
import { Icon } from "ant-design-vue";
export default {
  name: "Detail",
  data() {
    return {
      selected: "1",
      isFixed: false,
      ckColor: "#e8e8e8"
    };
  },
  mounted() {
    this.$store.commit("gootIsfalse");
    window.addEventListener("scroll", this.handleScroll);
    this.$nextTick(function() {
      // 这里fixedHeaderRoot是吸顶元素的ID
      let header = document.getElementById("fixedHeaderRoot");
      // 这里要得到top的距离和元素自身的高度
      this.offsetTop = header.offsetTop + 100; //不知道为什么刚好差100
      this.offsetHeight = header.offsetHeight;
      // console.log("offsetTop:" + this.offsetTop + "," + this.offsetHeight);
    });
  },
  destroyed() {
    this.$store.commit("gootIstrue");
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    gotoPrevious() {
      this.$router.go(-1);
    },

    iconColor() {
      this.ckColor = "#76d572";
    },

    handleScroll() {
      // 得到页面滚动的距离
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      // 判断页面滚动的距离是否大于吸顶元素的位置
      this.headerFixed = scrollTop > this.offsetTop - this.offsetHeight - 50;
      // console.log(this.headerFixed);
      if (this.headerFixed) this.isFixed = true;
      else this.isFixed = false;
    }
  },
  components: {},
  props: []
};
</script>

<style lang="scss" scoped>
.detail {
  background-color: #fff;
}
.detali-header {
  background-image: url("../img/detail/background1.webp");
  background-size: cover;
  height: 100px;
  background-position: 0 -12px;
  position: relative;
  // background-color: #fff;
  .mui-icon-arrowleft {
    position: absolute;
    left: 0;
    color: #fff;
  }
}
.detali-header::before {
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
.detail-logo {
  background-color: #fff;
  .logo {
    position: absolute;
    top: 37px;
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
      width: 80px;
      height: 80xp;
      box-shadow: 0 0 0.4vw 0 rgba(0, 0, 0, 0.2);
      border-radius: 2px;
    }
  }
}
.detail-content {
  padding-top: 35px;
  h4 {
    font-weight: 600;
    font-size: 1.3rem;
  }
  .content-text span {
    font-size: 0.65rem;
    margin-right: 10px;
    color: #666;
  }
}
.announcement {
  .top {
    display: flex;
    justify-content: space-around;
    .top-left {
      .tejia {
        background-color: rgb(241, 136, 79);
        color: #fff;
        font-size: 0.6rem;
        padding: 1px 5px;
        margin-right: 5px;
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
    text-overflow: ellipsis;
    white-space: nowrap;
    margin: 5px 45px;
  }
}
// 选项卡样式bug
.mint-navbar {
  .mint-tab-item {
    color: #000;
  }
  .mint-tab-item.is-selected {
    margin-bottom: 0;
    color: #000;
    font-weight: 600;
    // font-size: 1.3rem !important;
  }
}
.navbar {
  text-align: start;
  .dianping {
    .dp-header {
      padding: 5px 10px;
      img {
        width: 100%;
      }
    }
  }
}
// 商家
.shangjia {
  padding: 20px 10px;
  background-color: #fff;
  margin-bottom: 10px;
  h4 {
    font-weight: 600;
  }
  .piao-icon {
    color: rgb(153, 153, 153);
    border: 0.5px solid rgb(153, 153, 153);
    padding: 1px 5px;
    font-size: 0.8rem;
    margin-right: 10px;
  }
}
.mint-tab-container-item {
  background-color: #f5f5f5;
}

.sj-content {
  .mint-cell:first-child {
    // color: green;
    font-weight: 600;
    padding: 10px 0;
  }
}
.sj-bottom {
  margin-top: 10px;
  font-weight: 600;
}

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
      background: url("../img/detail/profile.png");
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