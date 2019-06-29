<template>
  <div class="ratings">
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
  </div>
</template>
<script>
export default {
  name: "Ratings",
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
// 商家
.ratings {
  background-color: #f5f5f5;
}
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
</style>