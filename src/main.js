// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
// 懒加载
import VueLazyload from 'vue-lazyload'
// 移动端touch事件
// https://github.com/vuejs/vue-touch/tree/next
import VueTouch from 'vue-touch'
Vue.use(VueTouch, { name: 'v-touch' })
// 懒加载配置
Vue.use(VueLazyload, {
  preLoad: 1.3,
  loading: './assets/12345.gif',
  attempt: 3
});
// 安装请求插件
Vue.use(VueAxios, axios);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
