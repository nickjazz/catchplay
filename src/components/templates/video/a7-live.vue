<template>
  <div
    id="keyBox"
    ref="keyBox"
    class="live-box clearfix"
    @keydown="contentKeydown($event)"
  >
    <div class="live-menus clearfix" id="live-menus" style="display:none">
      <ul class="live-menus clearfix" id="menulist" ref="menulist">
        <li
          v-for="(menu, index) in listData"
          :key="index"
          class="live-menuItem"
          :ref="'menu' + index"
          :id="'menu' + index"
          :tabindex="index"
          :href="menu.url"
          :style="index == 0 ? 'margin-top: 24px' : ''"
        >
          <div
            class="live-item-item"
            :style="index == listData.length - 1 ? 'border:none' : ''"
          >
            <div class="live-item-imgs">
              <img class="imgs" :src="menu.images" />
            </div>
            <div class="live-item-words">{{ menu.title }}</div>
          </div>
        </li>
      </ul>
    </div>
    <div class="videoBox" id="videoBox" ref="videoBox">
      <video id="MyVideo" ref="MyVideo" class="video-js vjs-default-skin">
        <source :src="playOptions.src" type="application/x-mpegURL" />
      </video>
    </div>
  </div>
</template>

<script lang="js">
import videojs from 'video.js/dist/video.min.js'
export default {
  name: 'Video-Live',
  components: {},
  data: function () {
    return {
      listData: [],
      stream: '',
      width: 1280,
      height: 720,
      pathFrom: '',
      videoindex: 0,
      playindex: 0,
      type: '',
      focusType: null,
      focusJqType: null,
      rolling: 200,
      myPlayer: '',
      playOptions: {
        controls: false,
        autoplay: true,
        width: document.documentElement.clientWidth,
        controlBar: {
          fullscreenToggle: false
        }
      }
    }
  },
  methods: {
    initVideo (src) {
      let Vue = this
      // Vue.playOptions.source[0].src = src;
      Vue.myPlayer = videojs('MyVideo', Vue.playOptions, function () {
        Vue.load()
        Vue.play()
      })
    },
    playVideo (src) {
      let Vue = this
      Vue.myPlayer.off('timeupdate') // 移除timeupdate事件
      Vue.myPlayer.reset() // 重置 video

      Vue.myPlayer.src([{
        src: src
      } ])
      Vue.myPlayer.load(src)
      Vue.myPlayer.play()
    },
    menusFun: function () {
      let display = $('#live-menus').css('display')
      if (display == 'none') {
        return true
      } else {
        return false
      }
    },
    getTypeFocus: function (getIdIndex) {
      let Vue = this
      // console.log(getIdIndex)
      Vue.focusType = Vue.$refs['menu' + getIdIndex][0]
      // console.log(Vue.focusType)
      Vue.focusType.focus()
      Vue.focusJqType = $('#menu' + getIdIndex).focus()
    },
    contentKeydown: function (_event) {
      let Vue = this
      switch (_event.keyCode) {
        case 13:
          _event.preventDefault()
          if (Vue.menusFun()) {
            Vue.showMenus()
          } else {
            let url = Vue.focusJqType.attr('href')
            Vue.playVideo(url)
          }
          // console.log('ok')
          // let options = {};
          // Vue.$video(MyVideo, options, function () {
          //   this.pause();
          // })
          // $('#MyVideo').pause();
          // Vue.moveOK()
          break
        case 37:
          // 左
          _event.preventDefault()
          // Vue.MoveLeft()
          if (Vue.menusFun()) {
            console.log('左')
          } else {
            console.log('菜单左')
          }
          break
        case 39:
          // 右
          _event.preventDefault()
          // Vue.MoveRight()
          console.log('右')
          break
        case 38:
          // 上
          _event.preventDefault()
          if (Vue.menusFun()) {
            // console.log('上')
          } else {
            let index = Vue.videoindex
            if (index == 0) {
              return
            } else {
              Vue.videoindex = index - 1
              Vue.getTypeFocus(Vue.videoindex)
            }
            if (Vue.videoindex === 1) {
              $('#live-menus')
                .stop()
                .animate({
                  scrollTop: 0
                },
                Vue.rolling
                )
            } else if (Vue.videoindex > 1) {
              Vue.Jump(Vue.videoindex)
            }
          }
          break
        case 40:
          // 下
          _event.preventDefault()
          if (Vue.menusFun()) {
            // console.log('下')
          } else {
            let index = Vue.videoindex
            if (index + 1 >= Vue.listData.length) {
              return
            } else {
              Vue.videoindex = index + 1
              Vue.getTypeFocus(Vue.videoindex)
            }
            if (Vue.videoindex >= 2 && Vue.videoindex < Vue.listData.length - 1) {
              Vue.Jump(Vue.videoindex)
            }
          }
          break
        case 8:
          // 返回  halrie 的返回键27
          _event.preventDefault()
          if (Vue.menusFun()) {
            let options = {}
            Vue.$video(MyVideo, options, function () {
              this.dispose()
            })
            // console.log(Vue.$route.fullPath)
            Vue.$store.commit('pathFrom', Vue.$route.fullPath)
            Vue.$router.replace({
              path: Vue.pathFrom
            })
          } else {
            Vue.showMenus()
          }
          break
        case 16:
          _event.preventDefault()
          // console.log('进来了')
          $('#live-menus')
            .stop()
            .animate({
              width: 'toggle'
            },
            function () {
              Vue.videoindex = Vue.playindex
              if (!Vue.menusFun()) {
                Vue.getTypeFocus(Vue.playindex)
              } else {
                let focusItem = Vue.$refs.MyVideo
                focusItem.focus()
              }
              Vue.getTypeFocus(Vue.playindex)
            }
            )
          break
      }
    },
    showMenus () {
      let Vue = this
      $('#live-menus')
        .stop()
        .animate({
          width: 'toggle'
        },
        function () {
          Vue.videoindex = Vue.playindex
          if (!Vue.menusFun()) {
            Vue.getTypeFocus(Vue.playindex)
          } else {
            let focusItem = Vue.$refs.MyVideo
            focusItem.focus()
          }
          Vue.getTypeFocus(Vue.playindex)
        }
        )
    },
    Jump: function (line) {
      let Vue = this
      let go = Vue.$refs['menu' + line][0]
      $('#menulist')
        .stop()
        .animate({
          scrollTop: go.offsetTop - $('#menulist').height() / 2 + 50
        },
        Vue.rolling
        )
    }
  },
  beforeCreate: function () {
    let Vue = this
    let clientWH = this._clientWH.clientWHInit()
    Vue.width = clientWH.width
    Vue.height = clientWH.height
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.pathFrom = from.fullPath
      vm.testDivCon = vm.pathFrom
    })
  },
  mounted: function () {
    let Vue = this

    Vue.stream = Vue.$route.query.stream
    // Vue.playOptions.scoped[0].src = Vue.stream;
    let video = Vue.$store.state.a7.videoIndex
    let data = Vue.$store.state.a7.data
    let index = video.line * 6 + video.index

    Vue.listData = [].concat.apply([], data)
    Vue.videoindex = index
    Vue.playindex = index

    // $("#MyVideo source").prop("src", Vue.stream);
    Vue.playOptions.src = Vue.stream
    // console.log(Vue.playOptions)
    // console.log(Vue.stream)
    Vue.myPlayer = videojs('MyVideo', Vue.playOptions, function () {
      // this.load();
      // this.play();
    })
    // console.log(Vue.stream)
    Vue.playVideo(Vue.stream)
    let focusItem = Vue.$refs.MyVideo
    focusItem.focus()
  },
  created: function () {
    // console.log('进来了', this.$route.query.stream)
    let stream = this.$route.query.stream
    this.playOptions.src = stream

    // this.player.src([{
    //   type: 'application/x-mpegURL',
    //   src: stream
    // }]);
  },
  beforeDestroy: function () {
    let Vue = this
    const videoDom = Vue.$refs.MyVideo // 不能用document 获取节点
    videojs(videoDom).dispose() // 销毁video实例，避免出现节点不存在 但是flash一直在执行，报 this.el.......is not function
  }
}
</script>

<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
}

body {
  margin: 0;
  padding: 0;
  width: 100%;
  // background:url("~@/assets/img/a4/bg.jpg");
  /*background: #ffffff;*/
  font-family: BrandonText;
}

/*清除浮动*/
.clearfix:before,
.clearfix:after {
  content: "";
  display: table;
}

.clearfix:after {
  clear: both;
}

.clearfix {
  *zoom: 1;
  /*IE/7/6*/
}

.live-menus {
  // width: 347px;
  // height: 720px;
  width: 520.5px;
  height: 1080px;
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  z-index: 10;
  left: 0;
  top: 0;
}

.live-box {
  // width: 1280px;
  // height: 720px;
  width: 1920px;
  height: 1080px;
  overflow: hidden;
}

.live-menus {
  // width: 320px;
  width: 480px;
  overflow: hidden;
}
.live-menuItem:focus {
  // margin-top: 24px;
  background-color: rgba(7, 81, 164, 1);
}

.live-menuItem {
  width: 100%;
}

.live-item-item {
  display: flex;
  // padding: 8px 0 7px 0;
  padding: 12px 0 10.5px 0;
  // border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  border-bottom: 1.5px solid rgba(255, 255, 255, 0.2);
  // margin-left: 32px;
  margin-left: 48px;

  .live-item-imgs > img {
    // width: 112px;
    // height: 85px;
    width: 168px;
    height: 127.5px;
  }

  .live-item-imgs {
    // box-shadow: 0px 0 20px rgba(0, 0, 0, 0.2);
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
  }

  .live-item-words {
    // padding-left: 16px;
    padding-left: 24px;
    color: rgba(251, 251, 251, 1);
    // font-size: 16px;
    font-size: 24px;
  }
}
</style>
