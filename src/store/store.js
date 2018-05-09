import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);	


const state = {
	current_menu:'首页',
    all_info_list:[
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
export default new Vuex.Store({
    state,
    mutations:{
    	current_menu(state,current_menu) {
	      state.current_menu = current_menu
	    },
        all_info_list(state,all_info_list) {
          state.all_info_list = all_info_list
        }
    }
})
