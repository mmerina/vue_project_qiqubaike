<style>
    img{
        width: 100%;
    }
</style>
<template>
  <div>
     <img v-lazy="image.wifi_img_url" alt="">
  </div>
</template>
<script>
    export default {
        props : ['image']
    }
</script>
