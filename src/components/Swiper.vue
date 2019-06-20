<template>
  <div  class="swiper">
    <mt-swipe  :auto="4000">
      <mt-swipe-item>
        <img src="../img/home/banner01.webp" alt="">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../img/home/banner02.webp" alt="">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../img/home/banner03.webp" alt="">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>


export default {
  name:"Swiper",
  data(){
    return { }
  }
}
</script>

<style lang="scss" scoped >
  .swiper .mint-swipe{
    height: 100px;
  }
  .swiper .mint-swipe img{
    width: 100%;
  }

</style>