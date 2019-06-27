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
          <Goods></Goods>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <Seller></Seller>
        </mt-tab-container-item>
        <mt-tab-container-item id="3">
          <Ratings></Ratings>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>
</template>

<script>
import { Icon } from "ant-design-vue";
import Seller from "../components/detail/Seller";
import Ratings from "../components/detail/Ratings";
import Goods from "../components/detail/Goods";

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
  components: {
    Seller,
    Ratings,
    Goods
  },
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
</style>