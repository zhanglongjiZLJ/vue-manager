<template>
  <div class="search">
   <div class="search-top">
      <input type="text" class="search-input" name="" placeholder="请输入要查询的内容" v-model="search_text"/>
      <mt-button class="search-button" type="primary" size="small" @click.native="handleSearch">查询</mt-button>
   </div>
   <div class="search-info-container">
     <info :showTitle="showTitle" :infoList="search_info_list"></info>
   </div>
  </div>
</template>

<script>
import Vue from 'vue'
import {mapState} from 'vuex'
import { Button, Toast, Indicator } from 'mint-ui';
import info from '../../components/info/info'

Vue.component(Button.name, Button);
export default {
  data () {
    return {
      showTitle:false,
      current_index:0,
      search_text:'',
      search_info_list:{}
    }
  },
  computed:mapState(['all_info_list','current_menu']),
  // computed:mapState(['lost_info_list','course_info_list','layout_info_list','warn_info_list','activity_info_list','current_menu']),
  watch:{
    current_menu(val,oldVal){
      let name = val.substring(0,4)
      switch(name){
        case '失物信息' :
          this.search_info_list = this.all_info_list[0]
          break;
        case '授课信息' :
          this.search_info_list = this.all_info_list[1]
          break;
        case '校园布局' :
          this.search_info_list = this.all_info_list[2]
          break;
        case '安全警示' :
          this.search_info_list = this.all_info_list[3]
          break;
        case '活动信息' :
          this.search_info_list = this.all_info_list[4]
          break;
      }
    }
  },
  mounted(){
    console.log(this.current_menu.substring(0,4))
    switch(this.current_menu.substring(0,4)){
        case '失物信息' :
          this.search_info_list = this.all_info_list[0]
          break;
        case '授课信息' :
          this.search_info_list = this.all_info_list[1]
          break;
        case '校园布局' :
          this.search_info_list = this.all_info_list[2]
          break;
        case '安全警示' :
          this.search_info_list = this.all_info_list[3]
          break;
        case '活动信息' :
          this.search_info_list = this.all_info_list[4]
          break;
      }
  },
  methods:{
    handleSearch(){
      let search_list = []
      if(this.search_text == ''){
        switch(this.current_menu.substring(0,4)){
          case '失物信息' :
            this.search_info_list = this.all_info_list[0]
            break;
          case '授课信息' :
            this.search_info_list = this.all_info_list[1]
            break;
          case '校园布局' :
            this.search_info_list = this.all_info_list[2]
            break;
          case '安全警示' :
            this.search_info_list = this.all_info_list[3]
            break;
          case '活动信息' :
            this.search_info_list = this.all_info_list[4]
            break;
        }
      }else{
        Indicator.open({
          text: '搜索中...',
          spinnerType: 'fading-circle'
        })
        for(let i = 0;i < this.search_info_list.children.length;i++){
          if(this.search_info_list.children[i].title.indexOf(this.search_text) != -1 || this.search_text.indexOf(this.search_info_list.children[i].title) != -1
            || this.search_info_list.children[i].name.indexOf(this.search_text) != -1 || this.search_text.indexOf(this.search_info_list.children[i].name) != -1
            || this.search_info_list.children[i].text.indexOf(this.search_text) != -1 || this.search_text.indexOf(this.search_info_list.children[i].text) != -1
            || this.search_info_list.children[i].date.indexOf(this.search_text) != -1 || this.search_text.indexOf(this.search_info_list.children[i].date) != -1){
            search_list.push(this.search_info_list.children[i])
          }
        }
        this.search_info_list = {
          type:this.current_menu.substring(0,4),
          children:search_list
        }
        setTimeout(()=>{
          Indicator.close()
        },5)
        if(search_list.length){
          Toast({
            message: '已为你找到以下收据',
            position: 'middle',
            duration: 2000
          });
        }else{
          Toast({
            message: '暂无搜索到内容',
            position: 'middle',
            duration: 2000
          });
        }
      }
    }
  },
  components:{info}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
  .search
    height:100%
    position:relative
    .search-top
      padding:.2rem .1rem
      .search-input
        width:82%
        height:.31rem
        outline:none
    .search-info-container
      width:100%
      // margin:.1rem
      position:absolute
      top:.71rem
      bottom:0
      box-sizing:border-box
      overflow-y:auto
</style>
