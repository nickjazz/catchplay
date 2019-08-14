<template>
  <div id="zeasnPlay">
    <div class="container">
      <div class="player" id="player" @keydown="contentKeydown($event)">
        <video-player id="videoPlayer" class="video-player vjs-custom-skin" ref="videoPlayer" :playsinline="false"
          :options="playerOptions" @play="onPlayerPlay($event)" @pause="onPlayerPause($event)" @statechanged="playerStateChanged($event)">
        </video-player>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    videoPlayer
  } from "vue-video-player";
  export default {
    props: {
      videoUrl: String,
      videoType: String
    },
    components: {
      videoPlayer
    },
    data() {
      return {
        idObj: null,
        playState: false,
        width: 1280,
        height: 720,
        playerOptions: {
          //  playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
          language: "en",
          autoplay: true, //如果true,浏览器准备好时开始回放。
          muted: false, // 默认情况下将会消除任何音频。
          //   loop: false, // 导致视频一结束就重新开始。
          //   preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
          // width: 1280,
          // height: 720,
          // aspectRatio: '16:9',
          fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
          controls: false, //是否拥有控制条
          // youtube: {
          //   ytControls: 2,
          //   iv_load_policy: 3, //视频注释 3不显示 1显示
          //   fs: 0, //全屏
          //   autoplay: 1,
          //   loop: 1,
          //   modestbranding: 1,
          //   rel: 0,
          //   showinfo: 0
          // }
          // sources: [{
          //   type: this.videoUrl,
          //   src: this.videoType //你的m3u8地址（必填）
          // }],
          // controlBar: {
          //   timeDivider: false, //时间分割线
          //   durationDisplay: false, //总时间
          //   remainingTimeDisplay: false,
          //   fullscreenToggle: false, //全屏按钮
          //   progressControl:false //进度条
          // }
          // width: document.documentElement.clientWidth,
          //   notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        }
      };
    },
    watch: {
      videoUrl: function (val) {
        let Vue = this;
        console.log("videoUrl进来了", val);
        if (val !== "") {
          if (this.videoType !== 'video/youtube') {
            // this.playerOptions.techOrder = ["youtube"];
            // this.playerOptions.youtube = {
            //   controls:0,
            //   iv_load_policy: 3, //视频注释 3不显示 1显示
            //   fs: 0, //全屏
            //   autoplay: 1,
            //   modestbranding: 1,
            //   rel: 0,
            //   showinfo: 0
            // }
          }

          // console.log(this.$refs.videoPlayer.player)
          // this.$refs.videoPlayer.player.src(val)
          // if (this.videoType !== 'video/youtube')
          // this.playerOptions.techOrder = ["youtube"];
          // this.$refs.videoPlayer.player.techOrder = ["youtube"]
          Vue.player.src([{
            type: Vue.videoType,
            src: val
          }]);
          Vue.idObj.focus();
          // console.log(Vue.idObj)
        }
      }
      // videoType: function (val) {
      //   console.log(val)
      //   if (val === 'video/youtube') {
      //     this.playerOptions.techOrder = ["youtube"];
      //     this.playerOptions.sources = [{
      //       type: this.videoType,
      //       src: this.videoUrl
      //     }];
      //   } else {
      //     this.playerOptions.sources = [{
      //       type: this.videoType,
      //       src: this.videoUrl
      //     }];
      //   }
      // }
    },
    methods: {
      onPlayerPlay(player) {
        this.playState = true;
        console.log("player play!", player);
      },
      onPlayerPause(player) {
        this.playState = false;
        console.log("player pause!", player);
      },
      playerStateChanged(player) {},
      contentKeydown: function (_event) {
        let Vue = this;
        switch (_event.keyCode) {
          case 13: //OK Enter
            _event.preventDefault();
            if (Vue.playState) {
              Vue.player.pause();
            } else {
              Vue.player.play();
            }
            // Vue.player.pause();
            // if (Vue.$refs.videoPlayer.player.paused) {
            //   Vue.play();
            // } else {
            //   Vue.pause()
            // }

            break;
          case 38: //up
            _event.preventDefault();
            let upLoudIsIt = Vue.player.volume();
            // console.log(upLoudIsIt)
            if (upLoudIsIt === 1) {
              return;
            } else {
              Vue.player.volume((upLoudIsIt + 0.1).toFixed(1));
            }
            // Vue.player.pause();
            break;
          case 40: //down
            _event.preventDefault();
            // Vue.player.play();
            let downLoudIsIt = Vue.player.volume();
            // console.log(downLoudIsIt)
            if (downLoudIsIt === 0) {
              return;
            } else {
              Vue.player.volume((downLoudIsIt - 0.1).toFixed(1));
            }

            break;
          case 37: //left
            _event.preventDefault();
            break;
          case 39: //right
            _event.preventDefault();
            break;
          case 8: //back
            _event.preventDefault();
            break;
        }
      },
      getFocus: function () {
        let Vue = this;
        // console.log(Vue.$refs.playBox)
        Vue.$refs.playBox.focus();
      }
    },
    computed: {
      player() {
        return this.$refs.videoPlayer.player;
      }
    },
    mounted: function () {
      let Vue = this;
      Vue.idObj = document.getElementById("player");
      Vue.idObj.focus();
    },
    updated: function () {},
    beforeDestroy: function () {
      // this.$refs.videoPlayer.player.dispose();
    }
  };
  // import '../../node_modules/video.js/dist/video-js.css'
  // import '../../node_modules/vue-video-player/src/custom-theme.css'

</script>
<style lang="scss">
  @import "../../node_modules/video.js/dist/video-js.css";
  @import "../../node_modules/vue-video-player/src/custom-theme.css";

  .ytp-pause-overlay .ytp-scroll-min {
    visibility: hidden !important;
  }

  .player {
    .video-js {
      .vjs-big-play-button {
        top: 50% !important;
        left: 50% !important;
        transform: translate(-50%, -50%) !important;
        border-radius: 50% !important;
        width: 2.5em !important;
        height: 2.5em !important;
        line-height: 2.5em !important;
        font-size: 3.5em !important;
        margin-top: 0em !important;
        margin-left: 0em !important;
      }
    }


    .vjs-loading-spinner {
      border-radius: 70px !important;
      width: 70px !important;
      height: 70px !important;
      transform: translate(-50%, -50%) !important;
      margin: 0 !important;
    }
  }

</style>

<style scoped lang="scss">
  * {
    margin: 0;
    padding: 0;
  }

  body {
    margin: 0;
    padding: 0;
    width: 100%;
    font-family: BrandonText;
  }

</style>
