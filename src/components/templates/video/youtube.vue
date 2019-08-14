<template>
  <div v-keydownoutside="keydownoutside">
    <div
      tabindex="1"
      style="display: none; border: 2px solid #ff0; width: 70%; height: 70%;
          background: rgba(0, 0, 0, .3); color: #fff;
          position: fixed; left: 200px; top: 100px;
          z-index: 1000"
      v-html="testDiv"
    >
      <!-- <input @keydown="aaa('aaa111')"> -->
    </div>
    <!-- <div class="testDiv1 testDiv2">
        <p>{{pathFrom}}</p>
        <p>{{videoStatusNew}}</p>
    </div>-->
    <div id="player">
      <!-- <youtube :video-id="videoId" ref="youtube" @playing="playing"></youtube> -->

      <!-- <div class="testDiv1" v-html="testDivCon"></div> -->
      <youtube
        tabindex="1"
        :fitParent="true"
        :width="width"
        :height="height"
        :video-id="videoId"
        :player-vars="playerVars"
        @playing="playing"
        ref="youtube"
      ></youtube>
    </div>
  </div>
</template>
<script lang="js">
import keydownoutside from '../../../assets/js/keydownoutside.js'
export default {
  name: 'Video-Youtube',
  components: {},
  data: function () {
    return {
      // player: {},
      videoId: '', // 'lG0Ys-2d4MA'
      playerVars: {
        autoplay: 1
      },
      width: 1280,
      height: 720,
      videoDuration: 'videoDuration',
      videoDurationNew: '',
      videoStatus: 0,
      videoStatusNew: 0,
      pathFrom: '',
      testDiv: '',
      testDivCon: 'testDivCon' // ,
      // search: undefined
    }
  },
  methods: {
    playVideo: function () {
      this.player.playVideo()
    },
    playing: function () {
      // // console.log('\\o/ we are watching!!!')
    },
    keydownoutside: function () {
      let Vue = this
      this.testDivCon += '<p>keydownoutside fun' + event.which + '</p>'
      switch (event.which) {
        case 13:
          break
        case 37:
          break
        case 39:
          break
        case 8:
        case 461:
          Vue.$store.commit('pathFrom', Vue.$route.fullPath)
          Vue.$router.push({ path: Vue.pathFrom })
          // Vue.testDiv += '<p>contentKeydown case 13 back after 3 sec aa</p>'
          // let tt = setTimeout(function () {

          //   clearTimeout(tt)
          // }, 3000)

          break
      }
    }
  },
  directives: {
    keydownoutside
  },
  computed: {
    player: function () {
      return this.$refs.youtube.player
    }
  },
  watch: {
    videoDuration: function () {
      // console.log('videoDuration changed')
      this.videoDurationNew = this.videoDuration
    },
    videoStatus: function () {
      // console.log('videoStatus changed')
      this.videoStatusNew = this.videoStatus
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.pathFrom = from.fullPath
      vm.testDivCon = vm.pathFrom
      // console.log('vm.pathFrom')
      // console.log(vm.pathFrom)
    })
  },
  beforeCreate: function () {
    let Vue = this
    let clientWH = this._clientWH.clientWHInit()
    Vue.width = clientWH.width
    Vue.height = clientWH.height
  },
  mounted: function () {
    let Vue = this
    Vue.videoId = Vue.$route.query.videoId
    console.log('mounted youtube')
    // Vue.search = Vue.$route.query.search
    // // console.log(this.pathFrom)
    // console.log('window.localStorage')
    // console.log(window.localStorage)
    this.videoDuration = this.$refs.youtube.player.getDuration()
    this.videoStatus = this.$refs.youtube.player.getPlayerState()
    this.testDivCon += `<p>${this.pathFrom}</p>`
  }
}
</script>
<style lang="scss" scoped>
body {
  background: #333;
}
#player {
  width: 100%;
  height: 100%;
  position: relative;
}
</style>
<style lang="scss">
.mask-for-youtube {
  display: block;
}
</style>
<style type="text/css" scoped>
.testDiv1 {
  width: 90%;
  height: 90%;
  /* border: 2px solid #f00; */
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  /* font-size: 16px; */
  font-size: 24px;
  position: fixed;
  left: 5%;
  top: 15%;
  z-index: 999;
  display: none;
}

.testDiv2 {
  height: 5%;
  top: 2%;
  display: none;
  border-color: #00f;
  z-index: 9999;
  /* padding: 10px; */
  padding: 15px;
}
</style>
