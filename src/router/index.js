import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/jingxuan',
      name :'精选',
      component(){
        return System.import('../views/jingxuan/index.vue')
      }
    },
    {
      path: '/duanzi',
      name :'段子',
      
      component(){
        return System.import('../views/duanzi/index.vue')
      }
    },
    {
      path: '/shiping',
      name :'视频',
      
      component(){
        return System.import('../views/shiping/index.vue');
      }
    },
    {
      path: '/faxian',
      name :'发现',
      
      component(){
        return System.import('../views/faxian/index.vue')
      }
    },
    { path: '*', redirect: '/jingxuan' }
  ]
})
