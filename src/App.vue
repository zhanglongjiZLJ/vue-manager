<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="stylus">
  *{
    margin:0
    padding:0
  }
  html 
    font-size:100px
    font-family:'微软雅黑'
  html,
  body,
  #app{
    width: 100%
    height:100%
  }
  body
    font-size:.16rem
</style>
