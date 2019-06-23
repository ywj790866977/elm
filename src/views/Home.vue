
<template>
  <div class="home">
    <Header></Header>
    <div class="home-container">
      <mt-swipe :auto="0" class="shopList">
        <mt-swipe-item>
          <!-- 第一页 -->
          <div class="proList">
            <router-link to="/prolist" class="proItem" v-for="item in list.list1" :key="item.id">
              <img :src="'http://129.28.178.213:8002'+item.image_url" alt>
              <p class="itemText">{{item.title}}</p>
            </router-link>
          </div>
          <div class="proList">
            <a class="proItem" v-for="item in list.list2" :key="item.id">
              <img :src="'http://129.28.178.213:8002'+item.image_url" alt>
              <p class="itemText">{{item.title}}</p>
            </a>
          </div>
        </mt-swipe-item>
        <!-- 第二页 -->
        <mt-swipe-item>
          <div class="proList">
            <a class="proItem" v-for="item in list.list3" :key="item.id">
              <img :src="'http://129.28.178.213:8002'+item.image_url" alt>
              <p class="itemText">{{item.title}}</p>
            </a>
          </div>
        </mt-swipe-item>
      </mt-swipe>

      <div class="banner">
        <div class="bText">
          <p class="Qtitle">品质套餐</p>
          <p>搭配齐全</p>
          <span class="qianggou">立即抢购</span>
          <span class="mui-icon mui-icon-arrowright rightIcon"></span>
        </div>
        <img src="../img/home/qianggou.webp" alt>
      </div>

      <!-- 轮播 -->
      <Swiper></Swiper>

      <!-- 推荐 -->
      <div class="proTitle">推荐商家</div>
    </div>
    <!-- 没登录显示 -->
    <NoResult v-if="this.$store.getters.isLoginning"></NoResult>
    <!-- 登录显示商家 -->
    <ProList v-if="!this.$store.getters.isLoginning" :myList="proList"></ProList>
  </div>
</template>

<script>
// @ is an alias to /src

import Header from "../components/Header";
import Swiper from "../components/Swiper";
import NoResult from "../components/NoResult";
import ProList from "../components/ProList";

export default {
  name: "home",
  data() {
    return {
      list: {
        lsit1: [],
        list2: [],
        list3: []
      },
      isLogin: null,
      proList: null
    };
  },
  methods: {},
  created() {
    this.isLogin = this.$store.state.isLogin; //每次加载页面都讲状态赋值给变量,后面好监听
    //加载页面时,获取商品分类
    this.axios.get("v2/index_entry").then(res => {
      this.list.list1 = res.data.slice(0, 5);
      this.list.list2 = res.data.slice(5, 10);
      this.list.list3 = res.data.slice(10, 15);
      // console.log(this.list)
    });
  },
  computed: {
    f1() {
      return this.isLogin;
    }
  },
  watch: {
    f1(curVal, oldVal) {
      //这里的curVal就是需要监听的值
      // console.log(curVal,oldVal)
      if (!curVal) {
        this.axios
          .get(
            "https://elm.cangdu.org/shopping/restaurants?latitude=31.22967&longitude=121.4762"
          )
          .then(res => {
            // console.log(res.data)
            this.proList = res.data;
          });
      }
    }
  },
  components: {
    Header,
    Swiper,
    NoResult,
    ProList
  }
};
</script>

<style lang="scss" scpoed>
.home-container {
  padding: 10px;
}
// prolist
.home {
  background: #fff;
}
.proList {
  display: flex;
  justify-content: space-around;
  // height: 160px;
}
.home-container .mint-swipe {
  height: 175px;
}
.proItem .itemText {
  font-size: 12px;
}
.proItem img {
  width: 45px;
}

// 抢购
.banner {
  display: flex;
  justify-content: space-between;
  height: 110px;
  background-image: linear-gradient(0deg, #f4f4f4 5%, #fafafa 95%);
  padding: 10px;
  margin-bottom: 5px;
}
.banner .bText {
  margin-top: 10px;
  margin-left: 5px;
  text-align: start;
}
.banner .bText p {
  margin: 0;
}
.banner img {
  width: 150px;
  height: 90px;
}
.bText .Qtitle {
  font-size: 18px;
  color: #000;
  font-weight: 600;
}
.banner .bText span {
  font-size: 12px;
  color: #af8260;
  font-weight: 600;
}

// 推荐
.proTitle {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
  font-size: 15px;
}
.proTitle::before {
  content: "";
  display: block;
  width: 20px;
  background-color: #000;
  height: 1px;
  margin: 0 10px;
}
.proTitle::after {
  content: "";
  display: block;
  width: 20px;
  background-color: #000;
  height: 1px;
  margin: 0 10px;
}
</style>
