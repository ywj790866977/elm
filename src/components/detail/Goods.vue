<template>
  <div class="goods">
    <div class="goods-header">
      <img src="../../img/detail/background2.webp" alt>
    </div>
    <div class="goods-body">
      <div class="menu-wrapper"  ref="wrapper" >
        <ul  class="content">
          <li v-for="item in goods" class="menu-item">
            <img
              v-show="item.type === 2"
              src="https://fuss10.elemecdn.com/0/6a/05b267f338acfeb8bd682d16e836dpng.png?imageMogr/format/webp/thumbnail/26x/"
              alt
            >
            <img
              v-show="item.type === 1"
              src="https://fuss10.elemecdn.com/f/8d/dec5b7355581faa2bf4e24942dcc2png.png?imageMogr/format/webp/thumbnail/26x/"
              alt
            >
            {{item.name}}
          </li>
        </ul>
      </div>
      <div class="foods-wrapper" >
        <ul>
          <li v-for="item in goods" class="food-list">
            <h2 class="title">{{item.name}}</h2>
            <ul>
              <li v-for="food in item.foods" class="food-item">
                <div class="item-icon">
                  <img :src="food.icon" alt>
                </div>
                <div class="content">
                  <h2 class="name">{{food.name}}</h2>
                  <p class="desc">{{food.description}}</p>
                  <div class="extra">
                    <span class="count">月售{{food.sellCount}}</span>
                    <span>好评率{{food.rating}}</span>
                  </div>
                  <div class="price">
                    <span class="now">¥{{food.price}}</span>
                    <span class="old" v-show="food.oldPrice">¥{{food.oldPrice}}</span>
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from '@better-scroll/core'

export default {
  name: "Goods",
  data() {
    return {
      goods: [],
      // isFixed:false
    };
  },
  created() {
    this.getGoods("http://localhost:3000/product/goods");
    // window.addEventListener("scroll", this.handleScroll);
  },
  mounted() {},
  destroyed() {
    // window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    async getGoods(url) {
      let res = await this.axios.get(url);
      if (res.data.code === 200) {
        this.goods = res.data.data;
        this.$nextTick(()=>{
          let scroll = new BScroll(this.$refs.wrapper,{})
          console.log(scroll)
        })


        // let wrapper = document.querySelector()
        // console.log(wrapper)
        // let wrapper = document.getElementById("menuWrapper");
        // // 这里要得到top的距离和元素自身的高度
        // this.offsetTop = wrapper.offsetTop +190;
        // this.offsetHeight = wrapper.offsetHeight;
      }
    },
    // handleScroll() {
    //   // 得到页面滚动的距离,兼容三个浏览器写法
    //   let scrollTop =
    //     window.pageYOffset ||
    //     document.documentElement.scrollTop ||
    //     document.body.scrollTop;
    //   // 判断页面滚动的距离是否大于吸顶元素的位置
    //   this.wrapperFixed = scrollTop > this.offsetTop - this.offsetHeight;
    //   // console.log("offsetTop:" + this.offsetTop + "," + this.offsetHeight);
    //   // console.log(this.wrapperFixed);
    //   if (this.wrapperFixed) this.isFixed = true;
    //   else this.isFixed = false;
    //   console.log(this.isFixed);
    // }
  },
  props: [""]
};
</script>
<style lang="scss" scoped>
// @import "../../common/css/index.scss";

// .isfiexd{
//   position:fixed;
//   top:0;
//   left:0;
// }
.goods {
  .goods-header {
    margin: 0 10px;
    padding-top: 5px;
    img {
      width: 100%;
      border-radius: 4px;
    }
  }

  .goods-body {
    display: flex;
    .menu-wrapper {
      flex: 0 0 80px;
      width: 80px;
      background: #f8f8f8;
      .menu-item {
        font-size: 0.8rem;
        padding: 15px 7px;
        text-align: start;
        color: #666;
        img {
          width: 12px;
        }
      }
    }
    .foods-wrapper {
      flex: 1;
      .food-list {
        .title {
          font-size: 0.85rem;
          font-weight: bold;
          margin-left: 2.666667vw;
          padding: 5px 0;
          color: #333;
        }
      }
      .food-item {
        display: flex;
        padding: 10px;
        .item-icon {
          img {
            width: 100px;
            height: 100px;
            flex: 0 0 100px;
          }
        }
        .content {
          margin-left: 10px;
          position: relative;
          .name {
            font-size: 1rem;
            font-weight: bold;
            margin-bottom: 5px;
          }
          .desc,
          .extra {
            width: 160px;
            font-size: 0.7rem;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            margin-bottom: 2px;
            color: #999;
          }
          .extra {
            .count {
              margin-right: 12px;
            }
          }
          .price {
            font-weight: 500;
            // margin-bottom: -5px;
            // margin-top: 20px;
            position: absolute;
            bottom: -1px;
            .now {
              margin-right: 8px;
              font-size: 14px;
              color: rgb(255, 83, 57);
            }
            .old {
              text-decoration: line-through;
              font-size: 10px;
              color: #999;
            }
          }
        }
      }
    }
  }
}
</style>