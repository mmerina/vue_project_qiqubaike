<style scoped>
    .jingxuan{
        background-color: #e1e1e1;
          overflow-y: scroll;
    }
    .box{
        padding: 10px 10px 0;
      background-color: #fff;
       background-origin: content-box;
      background-clip: content-box;
    }
   .header{
            box-sizing: border-box;
            padding: 16px 18px;
            width: 100%;
            color: #888;
            
            overflow: hidden;
   }
   .touxiang{
     width: 30px;
    height: 30px;
     border-radius: 999px;
     overflow: hidden;
               
   }
   .touxiang img{
     	width: 100%;
   }
   .fl{
     float: left;
   }
   .fr{
     float: right;
   }
   .ovh{
     overflow: hidden;
   }
   .nicheng{
      height: 30px;
                line-height: 30px;
                padding-left: 10px;
                font-size: 14px;
   }
   .jubao{
      border: 1px solid #888;
                border-radius: 3px;
                padding: 2px;
                font-size: 12px;
                margin-top: 4px;
   }
   .title {
            padding: 10px 18px;
        }
   .content {
     	width: 100%;
   }
   .content img{
     	width: 100%;
   }
   .footer{
     box-sizing: border-box;
      width: 100%;
      padding: 10px 20px;
           
   }
   .footer  div {
                margin-top: 2px;
                margin-right: 8px;
   }
   .footer i{
     display: inline-block;
    width: 20px;
     height: 20px;
     float: left;
   }
   .like i{
     background: url('../../assets/26_03.png') 0 0 /100% 100% no-repeat;
   }
   .dislike i{
     background: url('../../assets/26_05.png') 0 0 /100% 100% no-repeat;
   }
   .comment i{
     background: url('../../assets/26_07.png') 0 0 /100% 100% no-repeat;
   }
   .footer span{
                margin-left: 5px;
                height: 20px;
                line-height: 20px;
                float: left;
                font-size: 14px;
   }
</style>

<template>
  <div>
      <div class="jingxuan" v-height = '40'>
        <div class="box" v-for="item in mapList">
            <div class="header">
                <div class="touxiang fl">
              <img :src=item.avatar alt="">
            </div>
            <div class="nicheng fl"><span>{{item.user_name}}</span></div>
            <div class="jubao fr">举报</div>
           </div>
           <div class="title">
             <span>{{item.title}}</span>
           </div>
           <div class="content">
             <gif v-if="item.media_data[0].format == 'GIF'" :image = 'item.media_data[0]'></gif>  
             <jpeg v-if="item.media_data[0].format == 'JPEG'" :image = 'item.media_data[0]'></jpeg>  
             <png v-if="item.media_data[0].format == 'PNG'" :image = 'item.media_data[0]'></png>  
           </div>
           <div class="footer ovh">
             <div class="like fl ovh">
               <i></i>
                <span>{{item.dislike_start + item._incrs.dislike}}</span>
             </div>
             <div class="dislike fl ovh">
               <i></i>
               <span>{{item.like_start + item._incrs.like}}</span>
             </div>
             <div class="comment fr ovh">
               <i></i>
              <span>{{item.comment_total}}</span>
             </div>
           </div>
        </div>
      </div>
  </div>
</template>
<script>
  import gif from '../../components/gif.vue';
  import jpeg from '../../components/jpeg.vue';
  import png from '../../components/png.vue';
    export default{
      data(){
        return{
            mapList : []
        }
      },
      created(){
        var self = this;
        this.$http.get('../../../static/data.json').then(res => {
         self.mapList =  res.data.mapList;
          
        })
      },
      directives : {
          height : {
            inserted(el, binding){
              $(el).height($(window).height() - binding.value);
            }
          }
      },
      components: {
        gif,
        jpeg,
        png
    }
    }
</script>
