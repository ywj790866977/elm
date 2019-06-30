<template>
  <div class="detail">
    <Header v-if="isShow" :sellers="sellers"></Header>
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
import Header from "../components/detail/Header";

export default {
  name: "Detail",
  data() {
    return {
      selected: "1",
      isFixed: false,
      sellers: {},
      isShow: false
    };
  },
  created() {
    this.getSeller("http://localhost:3000/product/seller");
    this.$store.commit("gootIsfalse");
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    this.$nextTick(() => {
      // 这里fixedHeaderRoot是吸顶元素的ID
      let header = document.getElementById("fixedHeaderRoot");
      // 这里要得到top的距离和元素自身的高度
      var that = this;
      setTimeout(function() {
        that.offsetTop = header.offsetTop + 100;
      }, 300);
      this.offsetHeight = header.offsetHeight;
      // console.log("offsetTop:" + this.offsetTop + "," + this.offsetHeight);
    });
  },
  destroyed() {
    this.$store.commit("gootIstrue");
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    async getSeller(url) {
      let res = await this.axios.get(url);
      if (res.data.code === 200) {
        console.log(res.data.data);
        this.sellers = res.data.data;
        this.isShow = true;
      }
    },
    handleScroll() {
      // 得到页面滚动的距离,兼容三个浏览器写法
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      // 判断页面滚动的距离是否大于吸顶元素的位置
      this.headerFixed = scrollTop > this.offsetTop - this.offsetHeight - 50;
      // console.log("offsetTop:" + this.offsetTop + "," + this.offsetHeight);
      // console.log(this.headerFixed);
      if (this.headerFixed) this.isFixed = true;
      else this.isFixed = false;
    }
  },
  components: {
    Seller,
    Ratings,
    Goods,
    Header
  },
  props: []
};
</script>

<style lang="scss" scoped>
.detail {
  background-color: #fff;
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