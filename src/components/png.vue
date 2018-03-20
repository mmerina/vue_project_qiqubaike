<style>
    img{
        width: 100%;
    }
</style>
<template>
  <div>
     <span><img v-lazy="image.wifi_img_url" alt=""></span>
  </div>
</template>
<script>
    export default {
        props : ['image']
    }
</script>
