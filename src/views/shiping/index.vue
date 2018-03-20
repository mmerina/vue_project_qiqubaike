<style scoped>
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
      <div class="shiping" >
        <div class="box" v-for="item in videoList">
            <div class="header">
                <div class="touxiang fl">
                 <img src="http://image.uc.cn/s/uae/g/0q/product/q-v-a.jpg" alt="">
            </div>
            <div class="nicheng fl"><span>fsda</span></div>
            <div class="jubao fr">举报</div>
           </div>
           <div class="title">
             <span>《小木乃伊到我家》，真滴萌炸了！！</span>
           </div>
           <div class="content">
            <vui-video :item = 'item'></vui-video>
           </div>
           <div class="footer ovh">
             <div class="like fl ovh">
               <i></i>
                <span>123</span>
             </div>
             <div class="dislike fl ovh">
               <i></i>
               <span>345</span>
             </div>
             <div class="comment fr ovh">
               <i></i>
              <span>567</span>
             </div>
           </div>
        </div>
      </div>
  </div>
</template>
<script>
import VuiVideo from '../../components/VuiVideo.vue';
    export default {
      data(){
        return {
          videoList:[{

				title:"帕帕帮",
				src:"http://files.blueairplus.com/iqiyi/%E3%80%8A%E5%B8%95%E5%B8%95%E5%B8%AE%E3%80%8B%E7%AC%AC182%E6%9C%9F.mp4",
				cur:"播放",
				id:"video01",
				currentTime:0,
				volume:0.2
			},{
				title:"帕帕帮",
				src:"http://files.blueairplus.com/iqiyi/%E3%80%8A%E5%B8%95%E5%B8%95%E5%B8%AE%E3%80%8B%E7%AC%AC182%E6%9C%9F.mp4",
				cur:"播放",
				id:"video02",
				currentTime:0,
				volume:0.2
			}]
        }
      },
      components : {
        VuiVideo
      }
    }
</script>
