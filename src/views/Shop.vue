<template>
  <div class="shop">
    <div class="noResult">
      <NoResult v-if="this.$store.getters.isLoginning"></NoResult>
    </div>
    
  </div>
</template>

<script>
import NoResult from '../components/NoResult';

export default {
  data(){
    return {}
  },
  components:{
    NoResult
  },
  created(){
    // console.log(this.$store.state.username)
  }
}
</script>

<style lang="scss" scoped>
  .noResult{
    position:absolute;
    top:100px;
    left:0;
    right: 0;
    bottom:0;
  }
</style>