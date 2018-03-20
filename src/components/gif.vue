<style scoped>
    div{
        position: relative;
    }
    span{
    	width: 50px;height: 50px;position: absolute;text-align: center;line-height: 50px;color: #fff;
    	top: 50%;left: 50%;transform: translate(-50%,-50%);background: rgba(0,0,0,0.8);border-radius: 999px;
    }
    img{
        width: 100%;
    }
</style>

<template>
  <div>
     <v-touch tag="span"  @tap="play" v-show="showPlay">play</v-touch>
     <img v-lazy="image.wifi_img_url">
  </div>
</template>
<script>
    export default {
        props : ['image'],
        data(){
            return {
                showPlay : true
            }
        },
        methods : {
            play(){
                this.image.wifi_img_url = this.image.origin_img_url.origin_pic_url;
                this.showPlay = false;
            }
        }
    }
</script>
