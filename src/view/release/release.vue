<template>
  <div class="release">
   <mt-field class="release-input" label="发布人" placeholder="请输入发布人" v-model="release_man"></mt-field>
   <mt-field class="release-input" label="标题" placeholder="请输入标题"  v-model="release_title"></mt-field>
   <mt-field class="release-input release-input-last" label="内容" placeholder="请输入内容" type="textarea" rows="4"  v-model="release_text"></mt-field>
   <mt-button class="release-button" size="large" type="primary" @click.native="handleRelease">发布</mt-button>
  </div>
</template>

<script>
import Vue from 'vue'
import {mapState} from 'vuex'
import * as api from '../../utils/api';
import { Field, Button, Toast, Indicator  } from 'mint-ui';

Vue.component(Button.name, Button);
Vue.component(Field.name, Field);
export default {
  data () {
    return {
    	release_man:'',
    	release_title:'',
    	release_text:''
    }
  },
  computed:mapState(['current_menu']),
  methods:{
  	handleRelease(){
  		if(this.release_man == ''){
  			Toast({
  			  message: '请输入发布人',
  			  position: 'middle',
  			  duration: 2000
  			});
  		}else if(this.release_title == ''){
  			Toast({
  			  message: '请输入标题',
  			  position: 'middle',
  			  duration: 2000
  			});
  		}else if(this.release_text == ''){
  			Toast({
  			  message: '请输入要发布的内容',
  			  position: 'middle',
  			  duration: 2000
  			});
  		}else{
        Indicator.open({
          text: '提交中...',
          spinnerType: 'fading-circle'
        });
        var  date = new Date()
        let year = date.getFullYear()
        let month = date.getMonth() + 1
        let day = date.getDate()
        let type = ''
        let data = {
          "name": this.release_man,
          "title": this.release_title,
          "text": this.release_text,
          "date": year+'-'+month+'-'+day,
          "type": this.current_menu.substring(0,4)
        }
        switch (this.current_menu.substring(0,4)){
          case '失物信息':
            api.createLost(data).then(
              response => {
                Indicator.close();
                Toast({
                  message: '发布成功',
                  position: 'middle',
                  duration: 2000
                });
                this.release_man = ''
                this.release_title = ''
                this.release_text = ''
              }
            ).catch(
              error => {
                Toast({
                  message: '发布失败',
                  position: 'middle',
                  duration: 2000
                });
              }
            )
            break;
          case '授课信息':
            api.createCourse(data).then(
              response => {
                Indicator.close();
                Toast({
                  message: '发布成功',
                  position: 'middle',
                  duration: 2000
                });
                this.release_man = ''
                this.release_title = ''
                this.release_text = ''
              }
            ).catch(
              error => {
                Toast({
                  message: '发布失败',
                  position: 'middle',
                  duration: 2000
                });
              }
            )
            break;
          case '活动信息':
            api.createActivity(data).then(
              response => {
                Indicator.close();
                Toast({
                  message: '发布成功',
                  position: 'middle',
                  duration: 2000
                });
                this.release_man = ''
                this.release_title = ''
                this.release_text = ''
              }
            ).catch(
              error => {
                Toast({
                  message: '发布失败',
                  position: 'middle',
                  duration: 2000
                });
              }
            )
            break;
          case '校园布局':
            console.log(this.current_menu)
            api.createLayout(data).then(
              response => {
                Indicator.close();
                Toast({
                  message: '发布成功',
                  position: 'middle',
                  duration: 2000
                });
                this.release_man = ''
                this.release_title = ''
                this.release_text = ''
              }
            ).catch(
              error => {
                Toast({
                  message: '发布失败',
                  position: 'middle',
                  duration: 2000
                });
              }
            )
            break;
          case '安全警示':
            console.log(this.current_menu)
            api.createWarn(data).then(
              response => {
                Indicator.close();
                Toast({
                  message: '发布成功',
                  position: 'middle',
                  duration: 2000
                });
                this.release_man = ''
                this.release_title = ''
                this.release_text = ''
              }
            ).catch(
              error => {
                Toast({
                  message: '发布失败',
                  position: 'middle',
                  duration: 2000
                });
              }
            )
            break;
        }
  			
  		}
  	}
  },
  components:{
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
  .release
  	height:100%
  	padding-top:.2rem
  	.release-input
  		border-top:1px solid #bfbfbf
  		box-sizing:border-box
	.release-input-last
		border-bottom:1px solid #bfbfbf
	.release-button
		margin-top:.3rem
  	
</style>
