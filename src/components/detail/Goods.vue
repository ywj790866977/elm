<template>
  <div class="goods">
    <div class="menu-wrapper">
      <p v-for="i in 30">{{i}}</p>
    </div>
    <div class="foods-wrapper"></div>
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
  // position: absolute;
  display: flex;
  // overflow: hidden;
  width: 100%;
  // top: 275px;
  // bottom: 46px;
  .menu-wrapper {
    flex: 0 0 80px;
    width: 80px;
    background: #f3f5f7;
  }
  .foods-wrapper {
    flex: 1;
  }
}
</style>