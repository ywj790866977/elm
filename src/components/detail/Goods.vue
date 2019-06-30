<template>
  <div class="goods">
    <div class="goods-header">
      <img src="../../img/detail/background2.webp" alt>
    </div>
    <div class="goods-body">
      <div class="menu-wrapper">
        <!-- <p v-for="i in 30">{{i}}</p> -->
      </div>
      <div class="foods-wrapper"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Goods",
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
@import "../../common/css/index.scss";

.goods {
  width: 100%;
  // display: flex;

  .goods-header {
    // flex: 1;
    img {
      width: 100%;
      // padding: 5px 10px;
      // margin: 5px 10px;
      margin-left: 10px;
      margin-right: 10px;
      border-radius: 5px;
    }
  }
  .goods-body {
    .menu-wrapper {
      flex: 0 0 80px;
      width: 80px;
      background: #f3f5f7;
    }
    .foods-wrapper {
      flex: 1;
    }
  }
}
</style>