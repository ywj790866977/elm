<template>
  <div class="search">
    <div  class="search-header">
      <span @click="toPrevious()" class="mui-icon mui-icon-arrowleft"></span>
      <input v-model="keywords" @focus="addClass()"class="my-input" type="text"  placeholder="输入商家、商品名称">
      <span  class="mui-icon mui-icon-search "></span>
      <span @click="delKeyword()" :class="this.isClass?'show':'hidden'" class="mui-icon mui-icon-closeempty"></span>
      <button @click="searchPro()" class="myBtn">搜索</button>
    </div>
    <!-- 历史 and 热搜 -->
    <div class="search-body" v-if="this.list.length < 1" >
      <div class="body-item">
        <h4>历史搜索</h4><span @click="delMyhistory()" class="mui-icon mui-icon-trash"></span>
        <div class="search-tag">
          <span class="search-text" v-for="item in myhistory">{{item}}</span>
        </div>
      </div>
      <div class="body-item">
        <h4>热门搜索</h4>
        <div class="search-tag">
          <span @click="ClickLoad()" class="search-text">华莱士</span>
          <span @click="ClickLoad()" class="search-text">肯德基</span>
          <span @click="ClickLoad()" class="search-text">一点点</span>
          <span @click="ClickLoad()" class="search-text">coco</span>
          <span @click="ClickLoad()" class="search-text">奶茶</span>
          <span @click="ClickLoad()" class="search-text">凉皮</span>
          <span @click="ClickLoad()" class="search-text">麻辣香锅</span>
          <span @click="ClickLoad()" class="search-text">锅盔土豆</span>
        </div>
      </div>
    </div>
    <ProList v-if="this.list.length > 0" :myList="this.list"></ProList>


  </div>
</template>
<script>
import ProList from '../components/ProList'

export default {
  data(){
    return {
      isClass:false,
      keywords:"",
      list:[],
      myhistory:[]
    }
  },
  created(){
    this.$store.getters.myHistorying
  },
  methods: {
    addClass(){
      this.isClass = true
    },
    delKeyword(){
      this.keywords = "";
      this.isClass = false
    },
    searchPro(){
      if(this.keywords!=""){
          this.axios.get('https://elm.cangdu.org/shopping/restaurants?latitude=31.22967&longitude=121.4762')
          .then(res=>{
            this.list = res.data;
          })
          this.myhistory.push(this.keywords);
          // this.$store.commit('addHistory',ke)
          this.keywords = ""
      }

    },
    delMyhistory(){
      this.myhistory = []
    },
    toPrevious(){
      this.$router.go(-1)
    },
    ClickLoad(){
      this.axios.get('https://elm.cangdu.org/shopping/restaurants?latitude=31.22967&longitude=121.4762')
          .then(res=>{
            this.list = res.data;
          })
    }
  },
  components:{
    ProList
  }
}
</script>

<style lang="scss" scoped>
  .search{
    background-color:#fff;
    padding-bottom: 10px;
  //   position: fixed;;
  //   width: 100%;
  //   height: 100%;
  //   top: 0;
  }
  .search-header{
    display: flex;
    align-items: center;
  }
  .my-input{
    color:#000;
    background-color:#f8f8f8;
    border:none;
    // padding:5px;
    margin:10px 10px;
    font-size: .8rem;
    height:28px;
    position: relative;
    padding: 0 30px;
  }
  .mui-icon-search{
    position: absolute;
    left:40px;
    font-size:1rem;
  }
  .mui-icon-closeempty{
    position: absolute;
    right:70px;
    // display: none;
  }
  .hidden{
    display: none;
  }
  .show{
    display: block
  }
  .myBtn{
    border:none;
    color:1rem;
    font-weight:600;
  }

  //history
  .search-body{
    text-align: start;
    margin-top:20px;
  }
  .body-item{
    margin-bottom: 40px;
    // position:relative;
  }
  .body-item h4{
    margin:0 10px;
  }
  .search-tag{
    margin:20px 0;
    display: flex;
    flex-wrap: wrap
    
  }
  .search-text{
    margin:10px 0 10px 10px;
    border-radius: 3px;
    font-size:.9rem;
    padding:10px;
    background-color:#f8f8f8;
  }
  .mui-icon-trash{
    position:absolute;
    top:70px;
    right: 20px;
    font-size:.9rem;
  }
  


</style>
