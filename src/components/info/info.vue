
<template>
  <div class="info-wrap">
  	<template v-if="showTitle">
  		<div v-for="(item,index) in all_info_list" :key="index">
	  		<h3 class="info-title">{{ item.type }}</h3>
	  		<div class="info-item" v-for="(item_children,index_children) in item.children" :key="index_children">
	  			<img class="info-delete" @click="deleteInfo(item_children.id,item.type,index_children)" src="../../assets/image/delete.svg">
		        <h4 class="info-title-2">{{ item_children.title }}</h4>
		        <p class="info-text">{{ item_children.text }}</p>
		        <p class="info-bottom">
		          <span>发布人 : {{ item_children.name }}</span>
		          <span class="info-date">时间 : {{ item_children.date }}</span>
		        </p>
		    </div>
	  	</div>
  	</template>
  	<template v-else>
  		<div class="info-item" :class="{'info-first-item':index == 0}" v-for="(item,index) in infoList.children" v-if="infoList.length != 0" :key="index">
  			<img class="info-delete" @click="deleteInfo(item.id,infoList.type,index)" src="../../assets/image/delete.svg">
	        <h4 class="info-title-2">{{ item.title }}</h4>
	        <p class="info-text">{{ item.text }}</p>
	        <p class="info-bottom">
	          <span>发布人 : {{ item.name }}</span>
	          <span class="info-date">时间 : {{ item.date }}</span>
	        </p>
	    </div>
	    <div v-if="infoList.length == 0" class="info-none">暂无搜索到数据</div>
  	</template>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import * as api from '../../utils/api';
import { Toast, MessageBox  } from 'mint-ui';

export default {
	props:['infoList','showTitle'],
  	data () {
	    return {
	    }
  	},
  	computed:mapState(['all_info_list']),
  	mounted(){
  	},
  	methods:{
  		deleteInfo(id,type,index){
  			MessageBox({
			  title: '删除操作',
			  message: '确定执行此操作?',
			  showCancelButton: true
			}).then(action => {
			  if(action == 'confirm'){
					switch(type){
			      	case '失物信息' :
			        	api.removeLost(id).then(
				      	response => {
				      		this.all_info_list[0].children.splice(index,1)
				      		Toast({
					          message: '删除成功',
					          position: 'middle',
					          duration: 2000
					        });
				      	}).catch(
				      	error => console.log(error.message)
				    	)
			        break;
			      case '授课信息' :
			        	api.removeCourse(id).then(
				      	response => {
			      			this.all_info_list[1].children.splice(index,1)
				      		Toast({
					          message: '删除成功',
					          position: 'middle',
					          duration: 2000
					        });
				      	}).catch(
				      	error => console.log(error.message)
				    	)
			        break;
			      case '校园布局' :
			        	api.removeLayout(id).then(
				      	response => {
			      			this.all_info_list[2].children.splice(index,1)
				      		Toast({
					          message: '删除成功',
					          position: 'middle',
					          duration: 2000
					        });
				      	}).catch(
				      	error => console.log(error.message)
				    	)
			        break;
			      case '安全警示' :
			        	api.removeWarn(id).then(
				      	response => {
			      			this.all_info_list[3].children.splice(index,1)
				      		Toast({
					          message: '删除成功',
					          position: 'middle',
					          duration: 2000
					        });
				      	}).catch(
				      	error => console.log(error.message)
				    	)
			        break;
			      case '活动信息' :
			        	api.removeActivity(id).then(
				      	response => {
			      			this.all_info_list[4].children.splice(index,1)
				      		Toast({
					          message: '删除成功',
					          position: 'middle',
					          duration: 2000
					        });
				      	}).catch(
				      	error => console.log(error.message)
				    	)
			        break;
			    }
			    this.$store.commit('all_info_list', this.all_info_list)
			  }
			})
  		}
  	}
}
</script>

<style scoped lang="stylus">
.info-wrap
	.info-title
		color:#1296db
		margin-top:.15rem
	.info-item
		margin-top:.15rem
		margin-bottom:.15rem
		border-radius:.05rem
		border:1px solid #bfbfbf
		.info-delete
			width:.25rem
			float:right
		.info-title-2
			text-align:center
		.info-text
			text-indent:.32rem
			padding:.05rem
		.info-bottom
			padding:.05rem
			border-top:1px solid #bfbfbf
			.info-date
				float:right
	.info-first-item
		margin-top:0
	.info-none
		text-align:center
		padding:.15rem
</style>
