<template>
    <div id="header">
        <div class="addr">
            <span class="mui-icon mui-icon-location dingwei">未知地址</span>
            <span class="mui-icon mui-icon-arrowdown dingwei"></span>
        </div>
        <div @click="gotoSearch()" class="myInput">
            <span class="mui-icon mui-icon-search ">搜索商家、商品名称</span>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    methods: {
        gotoSearch(){
            console.log(this.$store.state.isLogin)
            if(!this.$store.state.isLogin){
                this.$router.push('/search')
            }else{
                this.$router.push('/login')
            }
        }
    },
}
</script>

<style lang="scss" scoped>
#header{
    background-image: -webkit-linear-gradient(left,#0af,#0085ff);
    padding:10px 15px;
    display: flex;
    flex-direction: column;
}
.addr{
    align-self: flex-start;
    margin:10px 0;
}
.dingwei{
    font-size: 16px;
    font-weight: 600;
    color:#fff;
}
.myInput{
    background: #fff;
    padding:8px ;
}
.myInput span{
    font-size:16px;
    color:#999;
}
</style>