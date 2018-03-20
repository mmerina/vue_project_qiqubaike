<style scoped>
    ul {
        display: flex;
        flex-wrap: wrap;
        background-color: #ffb000;
    }
    li{
      list-style: none;
      width: 25%;
      height: 50px;
      line-height: 50px;
      text-align: center;
    }
     li.cur {
            color: red;
            font-weight: bold;
        }
</style>
<template>
  <div id="app">
      <ul>
        <li v-for="item in tabNav" :class="{cur :item.title == $route.name}" @click = 'routerGo(item.url)'>{{item.title}}</li>  
      </ul>   
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  data(){
    return {
      tabNav : [
        {
          title : '精选',
          url :'/jingxuan'
        },
        {
          title : '视频',
          url :'/shiping'
        },
        {
          title : '段子',
          url :'/duanzi'
        },
        {
          title : '发现',
          url :'/faxian'
        },
      ]
    }
  },
  methods : {
    routerGo(url){
      this.$router.push({path : url});
    }
  }
}
</script>


