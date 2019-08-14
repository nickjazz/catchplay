<template>
  <div class="videoBox" @keydown="contentKeydown($event)">
    <!-- <video id='MyVideo' ref='MyVideo' data-video='example_video_1' class='video-js vjs-default-skin' width='width'
      :height='height'>
      <source src='' type='application/x-mpegURL'>
    </video>-->
    <video id="MyVideo" ref="MyVideo" class="video-js vjs-default-skin">
      <source :src="playOptions.src" type="application/x-mpegURL" />
    </video>
    <!-- <video-player id='videoPlayer' class='video-player vjs-custom-skin' ref='videoPlayer' :playsinline='false'
      :options='playerOptions' @play='onPlayerPlay($event)' @pause='onPlayerPause($event)'>
    </video-player>-->
  </div>
</template>
<script>
// import {
//   videoPlayer
// } from 'vue-video-player';
import videojs from "video.js/dist/video.min.js";
export default {
  name: "Video-Live",
  // components: {
  //   videoPlayer
  // },
  data() {
    return {
      playState: false,
      stream: "",
      width: 1280,
      height: 720,
      pathFrom: "",
      videoindex: "",
      type: "",
      playOptions: {
        controls: false,
        autoplay: true,
        // width: 1280,
        // height: 720,
        width: document.documentElement.clientWidth,
        controlBar: {
          fullscreenToggle: false
        }
      }
    };
  },
  // components: {
  //   videoPlayer
  // },
  methods: {
    playVideo(src) {
      let Vue = this;
      Vue.myPlayer.off("timeupdate"); // 移除timeupdate事件
      Vue.myPlayer.reset(); // 重置 video

      Vue.myPlayer.src([
        {
          src: src
        }
      ]);
      Vue.myPlayer.load(src);
      Vue.myPlayer.play();
    },
    initVideo(src) {
      let Vue = this;
      console.log(Vue.player.sources);
    },
    contentKeydown: function(_event) {
      let Vue = this;
      switch (_event.keyCode) {
        case 13:
          _event.preventDefault();
          console.log("进来了");
          // console.log(Vue.myPlayer.paused)
          if (Vue.myPlayer.paused) {
            Vue.myPlayer.play();
          } else {
            Vue.myPlayer.pause();
          }
          break;
        case 37:
          // 左
          _event.preventDefault();
          // Vue.MoveLeft()
          console.log("左");
          break;
        case 39:
          // 右
          _event.preventDefault();
          // Vue.MoveRight()
          console.log("右");
          break;
        case 38:
          // 上
          _event.preventDefault();
          console.log("上");
          break;
        case 40:
          // 下
          _event.preventDefault();
          console.log("下");
          break;
        case 8:
        case 27:
        case 461:
          // 返回  halrie 的返回键27
          _event.preventDefault();
          let options = {};
          // eslint-disable-next-line no-undef
          Vue.$video(MyVideo, options, function() {
            this.dispose();
          });
          console.log(Vue.pathFrom);
          console.log(Vue.$store.state.a6);
          Vue.$store.commit("pathFrom", Vue.$route.fullPath);
          Vue.$router.replace({
            path: Vue.pathFrom
          });
          break;
      }
    },
    onPlayerPlay(player) {
      this.playState = true;
      console.log("player play!", player);
    },
    onPlayerPause(player) {
      this.playState = false;
      console.log("player pause!", player);
    }
  },
  computed: {
    // player() {
    //   return this.$refs.MyVideo;
    // }
  },
  beforeCreate: function() {
    let Vue = this;
    let clientWH = this._clientWH.clientWHInit();
    Vue.width = clientWH.width;
    Vue.height = clientWH.height;
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.pathFrom = from.fullPath;
      vm.testDivCon = vm.pathFrom;
    });
  },
  mounted: function() {
    let Vue = this;
    Vue.stream = Vue.$route.query.stream;
    Vue.videoindex = Vue.$route.query.videoindex;
    Vue.type = Vue.$route.query.type;
    // console.log(Vue.$route.query.type)
    // Vue.player.src([{
    //   type: 'application/x-mpegURL',
    //   src: Vue.stream
    // }]);
    Vue.myPlayer = videojs("MyVideo", Vue.playOptions, function() {
      // this.load();
      // this.play();
    });
    Vue.playVideo(Vue.stream);
    let focusItem = Vue.$refs.MyVideo;
    focusItem.focus();
    // console.log(Vue.player)
  },
  created: function() {
    // console.log('进来了', this.$route.query.stream)
    let stream = this.$route.query.stream;
    this.playOptions.src = stream;

    // this.player.src([{
    //   type: 'application/x-mpegURL',
    //   src: stream
    // }]);
  },
  beforeDestroy: function() {
    let Vue = this;
    const videoDom = Vue.$refs.MyVideo; // 不能用document 获取节点
    videojs(videoDom).dispose(); // 销毁video实例，避免出现节点不存在 但是flash一直在执行，报 this.el.......is not function
  }
};
</script>
<style lang="scss">
.ytp-pause-overlay .ytp-scroll-min {
  visibility: hidden !important;
}

.videoBox {
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
    // border-radius: 70px !important;
    // width: 70px !important;
    // height: 70px !important;
    border-radius: 105px !important;
    width: 105px !important;
    height: 105px !important;
    transform: translate(-50%, -50%) !important;
    margin: 0 !important;
  }
}
</style>
<style lang="scss" scoped>
// @import 'vue-video-player/src/custom-theme.css';

// @import 'video.js/dist/video-js.css';

body {
  background: #333;
}

.videoBox {
  width: 100%;
  height: 100%;
  position: relative;
}
</style>
