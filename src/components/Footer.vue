<template>
  <div id="footer">
    <nav class="mui-bar mui-bar-tab">
      <router-link to="/home" class="mui-tab-item">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item" to="/find">
        <span class="mui-icon mui-icon-extra mui-icon-extra-find"></span>
        <span class="mui-tab-label">发现</span>
      </router-link>
      <router-link class="mui-tab-item" to="/shop">
        <span class="mui-icon mui-icon-extra mui-icon-extra-order">
          <span class="mui-badge">9</span>
        </span>
        <span class="mui-tab-label">订单</span>
      </router-link>
      <router-link class="mui-tab-item" to="/about">
        <span class="mui-icon mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">设置</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {};
  }
};
</script>

<style scoped lang="scss">
.mui-bar {
  background-color: white;
}
.mui-tab-item .mui-tab-label {
  font-size: 10px !important;
}
</style>