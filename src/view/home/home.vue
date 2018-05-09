<template>
  <div class="home">
    <div class="home-container">
      <div class="home-wrap">
        <mt-swipe :auto="4000">
          <mt-swipe-item><img class="homw-swiper" src="../../assets/image/lost.jpg"></mt-swipe-item>
          <mt-swipe-item><img class="homw-swiper" src="../../assets/image/search.jpg"></mt-swipe-item>
          <mt-swipe-item><img class="homw-swiper" src="../../assets/image/release.jpg"></mt-swipe-item>
        </mt-swipe>
      </div>
      <div class="home-info">
        <info @deleteInfo="deleteInfo" :showTitle="showTitle"></info>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import {mapState} from 'vuex'
import info from '../../components/info/info'
import * as api from '../../utils/api';
import { Swipe, SwipeItem, Indicator } from 'mint-ui';

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
export default {
  name: 'home',
  data () {
    return {
      showTitle:true,
      home_info_list:[
        {
          type:'',
          children:[]
        },
        {
          type:'',
          children:[]
        },
        {
          type:'',
          children:[]
        },
        {
          type:'',
          children:[]
        },
        {
          type:'',
          children:[]
        }
      ]
    }
  },
  computed:mapState(['all_info_list']),
  mounted(){
    let type
    Indicator.open({
      text: '加载中...',
      spinnerType: 'fading-circle'
    });
    api.getLost().then(
      response => {
        for(let i = 0;i < response.data.length;i++){
          this.home_info_list[0].type = '失物信息'
          this.home_info_list[0].children.unshift(response.data[i])
        }
        api.getCourse().then(
          response => {
            for(let i = 0;i < response.data.length;i++){
              this.home_info_list[1].type = '课程信息'
              this.home_info_list[1].children.unshift(response.data[i])
            }
            api.getLayout().then(
              response => {
                for(let i = 0;i < response.data.length;i++){
                  this.home_info_list[2].type = '校园布局'
                  this.home_info_list[2].children.unshift(response.data[i])
                }
                api.getWarn().then(
                  response => {
                    for(let i = 0;i < response.data.length;i++){
                      this.home_info_list[3].type = '安全警告'
                      this.home_info_list[3].children.unshift(response.data[i])
                    }
                    api.getActivity().then(
                      response => {
                        for(let i = 0;i < response.data.length;i++){
                          this.home_info_list[4].type = '活动信息'
                          this.home_info_list[4].children.unshift(response.data[i])
                        }
                        Indicator.close()
                        console.log(this.home_info_list)
                        this.$store.commit('all_info_list', this.home_info_list)
                      }
                    ).catch(
                      error => {
                        console.log(error)
                      }
                    )
                  }
                ).catch(
                  error => {
                    console.log(error)
                  }
                )
              }
            ).catch(
              error => {
                console.log(error)
              }
            )
          }
        ).catch(
          error => {
            console.log(error)
          }
        )
      }
    ).catch(
      error => {
        Indicator.close()
        Toast({
          message: '获取失败',
          position: 'middle',
          duration: 2000
        });
        return
      }
    )
  },
  methods:{
    deleteInfo(info_list){
      let home_info_list_active = [
        {
          type:'',
          children:[]
        },
        {
          type:'',
          children:[]
        },
        {
          type:'',
          children:[]
        },
        {
          type:'',
          children:[]
        },
        {
          type:'',
          children:[]
        }
      ]
      for(let i = 0;i < this.all_info_list.length;i++){
        for(let j = 0;j < this.all_info_list[i].children.length;j++){
          if(i == 0){
            home_info_list_active[0].children.unshift(info_list[i].children[j])
          }else if(i == 1){
            home_info_list_active[0].children.unshift(info_list[i].children[j])
          }else if(i == 2){
            home_info_list_active[0].children.unshift(info_list[i].children[j])
          }else if(i == 3){
            home_info_list_active[0].children.unshift(info_list[i].children[j])
          }else if(i == 4){
            home_info_list_active[0].children.unshift(info_list[i].children[j])

          }
        }
      }
      this.$store.commit('all_info_list', home_info_list_active)
    }
  },
  components:{info}
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
  .home
    height:100%
    font-size:.16rem
    .home-container
      height:100%
      position:relative
      .home-wrap
        height:2rem
        .homw-swiper
          width:100%
          height:100%
      .home-info
        width:100%
        position:absolute
        top:2rem
        bottom:0
        overflow-y:auto
        box-sizing:border-box
        
          
</style>
