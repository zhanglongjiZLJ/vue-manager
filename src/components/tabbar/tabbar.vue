<template>
  <!-- 底部导航菜单栏开始 -->
  <div class="tabbar">
    <div class="tab-container" v-for="(item,index) in menu_list" @click="handleMenuClick(index)">
      <transition name="slide-trans">
        <div class="tab-item" v-show="item.show" v-if="item.children.length>0">
          <div v-for="(children,index_c) in item.children" @click.stop="handleSelectClick(index,index_c)">{{ children.name }}</div>
        </div>
      </transition>
      <div class="tab-name" :class="{'fontColor':item.select == true,'tab-name-last':index == 2}">
        <img v-if="item.select == false" class="tab-name-logo" :src="item.image">
        <img v-else class="tab-name-logo" :src="item.image_select">
        {{ item.name }}
      </div>
    </div>
    <!-- 底部导航菜单栏结束 -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      menu_list:[
        {
          path:'/main',
          name:'首页',
          show:true,
          select:true,
          image:require('../../assets/image/home.svg'),
          image_select:require('../../assets/image/homeSelect.svg'),
          children:[]
        },
        {
          path:'',
          name:'发布',
          show:false,
          select:false,
          image:require('../../assets/image/upload.svg'),
          image_select:require('../../assets/image/uploadSelect.svg'),
          children:[
            {
              path:'/release',
              name:'校园布局'
            },
            {
              path:'/release',
              name:'授课信息'
            },
            {
              path:'/release',
              name:'活动信息'
            },
            {
              path:'/release',
              name:'失物信息'
            },
            {
              path:'/release',
              name:'安全警示'
            }
          ]
        },
        {
          path:'',
          name:'查询',
          show:false,
          select:false,
          image:require('../../assets/image/search.svg'),
          image_select:require('../../assets/image/searchSelect.svg'),
          children:[
            {
              path:'/search',
              name:'校园布局'
            },
            {
              path:'/search',
              name:'授课信息'
            },
            {
              path:'/search',
              name:'活动信息'
            },
            {
              path:'/search',
              name:'失物信息'
            },
            {
              path:'/search',
              name:'安全警示'
            }
          ]
        }
      ]
    }
  },
  mounted(){
    
  },
  methods:{
    handleMenuClick(index){
      for(let i = 0;i < this.menu_list.length;i++){
        if(this.menu_list[index].show == false && this.menu_list[index].select == true){
          this.menu_list[index].show = true
          return
        }else if(i == index && this.menu_list[index].select == true){
          this.menu_list[i].show = false
          return
        }else if(i == index && this.menu_list[index].show == false){
          for(let i = 0;i < this.menu_list.length;i++){
            this.menu_list[i].show = false
            this.menu_list[i].select = false
            if(i == index && this.menu_list[index].show == false){
              this.menu_list[index].show = true
              this.menu_list[i].select = true
              this.$router.push(this.menu_list[index].path)
              if(this.menu_list[index].name == '首页'){
                this.$store.commit('current_menu', this.menu_list[index].name)
              }
            }
          }
          return
        }
      }
      console.log(this.menu_list[index].show)
      console.log(this.menu_list[index].select)
      
    },
    handleSelectClick(index,index_c){
      this.$router.push(this.menu_list[index].children[index_c].path)
      if(this.menu_list[index].name == '发布'){
        this.$store.commit('current_menu', this.menu_list[index].children[index_c].name+'发布')
      }else if(this.menu_list[index].name == '查询'){
        this.$store.commit('current_menu', this.menu_list[index].children[index_c].name+'查询')
      }
      for(let i = 0;i < this.menu_list.length;i++){
        this.menu_list[i].show = false
      }
    }
  }
}
</script>

<style scoped lang="stylus">
  .slide-trans-enter-active {
    transition: all .3s;
  }
  .slide-trans-enter {
    transform: translateY(300px);
  }
  .slide-trans-old-leave-active {
    transition: all .3s;
    transform: translateY(-300px);
  }
  .tabbar
    .tab-container
      position:relative
      float:left
      width:33.33333333333%
      height:.5rem
      .tab-item
        width:100%
        height:2.5rem
        position:absolute
        bottom:.5rem
        top:-2rem
        z-index:0
        background-color:#fff
        div
          font-size:.14rem
          padding:.1rem
          border:1px solid #bfbfbf
          border-bottom:none
      .fontColor{
        color:#1296db
      }
      .tab-name
        position:absolute
        bottom:0
        width:100%
        height:.5rem
        line-height:.2rem
        font-size:.15rem
        text-align:center
        box-sizing:border-box
        border:1px solid #bfbfbf
        border-right:none
        background-color:#fff
        z-index:0
        .tab-name-logo
          display:block
          margin:.025rem auto
          width:.2rem
      .tab-name-last
        border-right:1px solid #bfbfbf
        
</style>
