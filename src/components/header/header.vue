<template>
  <div class="header">
    {{ current_menu }}
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  data () {
    return {
      
    }
  },
  computed:mapState(['current_menu'])
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
  .header
  	height:.5rem
  	font-size:.18rem
  	text-align:center
  	line-height:.5rem
  	color:#fff
  	background-color:#1296db
</style>
