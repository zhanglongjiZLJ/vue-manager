<template>
  <div class="welcome">
    <div class="welcome-container">
      <div class="welcome-title">欢迎回来</div>
      <div class="welcome-info">XX信息管理平台</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'welcome',
  data () {
    return {
      
    }
  },
  mounted(){
    setTimeout(()=>{
     this.$router.push('/main')
    },3000)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
  .welcome
    height:100%
    text-align:center
    position:relative
    .welcome-container
      width:100%
      position:absolute
      top:50%
      left:50%
      transform:translate(-50%,-55%)
      .welcome-title,
      .welcome-info
        padding:.2rem
      .welcome-title
        font-size:.4rem
        color:#1296db
      .welcome-info
        font-size:.3rem
        color:#13227a
</style>
