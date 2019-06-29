<template>
  <div class="goods">
    <div class="test border-1px" v-for=" i in 40">{{i}}</div>
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

.test {
  @include border-1px(#000);
}
</style>