<style scoped>
    video{
        width: 100%;
    }
    span{
        float: left;
    }
    .jindu{
        display: inline-block;
        width: 200px;
        position: relative;
        height: 2px;
        background-color: red;
        margin: 10px 10px 10px 10px;
       
    }
     .yibo{
            display: inline-block;
            position: absolute;
            top: 0;
            left: 0;
            width :0%;
            height: 2px;
            background-color: green;
        }
</style>

<template>
  <div>
      <video :src="item.src" :id = 'item.id'></video>
      <div class="contrl">
          <span @click = 'play'>{{item.cur}}</span>
          <span class="jindu" @click = 'goTime'>
              <span class="yibo" :style = '{width : currentTime / duration * 100 + "%"}'></span>
          </span>
      </div>
      <div class="time">
          {{currentTime |zhuanhuan}} / {{duration |zhuanhuan}}
      </div>
  </div>
</template>
<script>
    export default {
        props : ['item'],
        data(){
            return{
                duration : 0,
                currentTime : 0
            }
        },
         filters: {
        zhuanhuan(s) {
            var t;
            if (s > -1) {
                var hour = Math.floor(s / 3600);
                var min = Math.floor(s / 60) % 60;
                var sec = s % 60;
                if (hour < 10) {
                    t = '0' + hour + ":";
                } else {
                    t = hour + ":";
                }

                if (min < 10) { t += "0"; }
                t += min + ":";
                if (sec < 10) { t += "0"; }
                t += ~~(sec)
            }
            return t;
        }

    },
        methods : {
            play(){
                var self = this;
                var timer;
                this.duration = $("#" + this.item.id)[0].duration
                $("#" + this.item.id)[0].play();
                if(this.item.cur == '播放'){
                   timer =  setInterval(function(){
                        self.currentTime =$("#" + self.item.id)[0].currentTime;
                    },1000);
                    this.item.cur = '暂停';
                }
                else if(this.item.cur == '暂停'){
                    this.item.cur = '播放';
                    clearInterval(timer)
                 $("#" + this.item.id)[0].pause();
                    
                }
            },
            goTime(){
                this.duration = $("#" + this.item.id)[0].duration
                var x = event.offsetX / 200;
                this.currentTime = $("#" + this.item.id)[0].currentTime = x * $("#" + this.item.id)[0].duration;
                
                
            }
        }
    }
</script>
