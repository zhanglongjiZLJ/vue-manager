<template>
  <div class="main">
  	<Top></Top>
  	<div class="main-container">
  		<router-view/>
  	</div>
    <tabbar></tabbar>
  </div>
</template>

<script>
import Top from '@/components/header/header' 
import tabbar from '@/components/tabbar/tabbar' 


export default {
  data () {
    return {
      
    }
  },
  components:{Top,tabbar}
}
</script>

<style scoped lang="stylus">
	.main
		height:100%
		font-size:.16rem
		position:relative
		.main-container
			width:100%
			position:absolute
			top:.5rem
			left:0
			bottom:.5rem
		.tabbar
			position:absolute
			bottom:0
			left:0
			right:0
</style>
