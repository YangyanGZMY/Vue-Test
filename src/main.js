// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import {appRouter} from './router'

import VueRouter from 'vue-router';
Vue.use(VueRouter)
// 路由配置
const RouterConfig = {
  // mode: 'history',
  routes: appRouter
};
const router = new VueRouter(RouterConfig);

import ElementUi from 'element-ui'
Vue.use(ElementUi);
import VueAxios from 'vue-axios'
import axios from 'axios'
Vue.use(VueAxios, axios)
import iView from 'iview';// 导入组件库
import 'iview/dist/styles/iview.css';// 导入样式  
Vue.use(iView);

// 引入vuex
import Vuex from 'vuex';
import store from './vuex/'
Vue.use(Vuex)

//引入下拉框套树状图
import Treeselect from '@riophae/vue-treeselect'
Vue.use(Treeselect);
import '@riophae/vue-treeselect/dist/vue-treeselect.css'

//引入excel表格table
// import HotTable from "handsontable-pro";
// Vue.use(HotTable);

// bootstrap--by zwy--start
import './assets/bootstrap/css/bootstrap.min.css'
// import '../static/lib/jquery.min.js'
import './assets/bootstrap/js/jquery.min.js'
import './assets/bootstrap/js/bootstrap.min.js'

//时间轴
import '../static/lib/jquery.SuperSlide2.1.2.js'
import '../static/lib/style.css'


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  store: store, 
  components: { App },
  template: '<App/>',
  // render: h => h(App),
  data: {
      currentPageName: ''
  },
  mounted () {
    this.currentPageName = this.$route.name;
    this.$store.commit('concatRouter', this.currentPageName);
  },
  created() {
    let tagsList = [];
    appRouter.map((item) => {
      if (item.children.length <= 1) {
        tagsList.push(item.children[0]);
      } else {
        tagsList.push(...item.children);
      }
    });
    this.$store.commit('setTagsList', tagsList);
  },
})
