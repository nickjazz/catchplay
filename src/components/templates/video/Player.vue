<template>
  <div class="live-box">
    <zeasn-play :video-url="play.url" :video-type="Videotype"></zeasn-play>
  </div>
</template>
<script>
  import zeasnPlay from '@/component/zeasn-play.vue'

  export default {
    name: 'play',
    components: {
      zeasnPlay
    },
    data: function () {
      return {
        play: {
          url: null
        },
        Videotype: 'application/x-mpegURL',
        width: 1280,
        height: 720,
      }
    },
    methods: {

    },

    beforeCreate: function () {
      let Vue = this
      let clientWH = this._clientWH.clientWHInit()
      Vue.width = clientWH.width
      Vue.height = clientWH.height
    },
    mounted: function () {
      let Vue = this
      Vue.play = Vue.$route.query
      if (Vue.$route.query.type == 'youtube') {
        Vue.Videotype = 'video/youtube'
      } else {
        Vue.Videotype = 'application/x-mpegURL'
      }
    },
  }

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  * {
    margin: 0;
    padding: 0;
  }

  .live-box {
    /* width: 1280px; */
    /* height: 720px; */
    overflow: hidden;
  }


  body {
    margin: 0;
    padding: 0;
    /* width: 100%; */
    font-family: BrandonText;
  }

</style>
