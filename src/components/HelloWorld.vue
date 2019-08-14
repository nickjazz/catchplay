<template>
  <div class="hello" @keydown="contentKeydown($event)">
    <div class="info-basic">
      <h1 tabindex="1">Apps by Vue</h1>
      <!-- <a class="link-template" path-custom="true" data-count="1" tabindex="1">visit app page</a> -->
      <h3>Version Information</h3>
      <p>Ver: V1.0.0</p>
      <p>Time: 2019.7.12 update 1</p>
    </div>
    <!-- <p>Vue._global.configAppInfo: {{_global.configAppInfo.iconStr.value}}</p> -->
    <div class="map">
      <div class="map-item">
        <div class="item-title">Manage</div>
        <div class="item-con">
          <h2 class="link-template link-template-manage" tabindex="1" data-path="/manage/">Manage (app list)</h2>
          <h2 class="link-template link-template-manage" tabindex="1" data-path="/manage/edit/">Manage (app edit)</h2>
          <h2 class="link-template link-template-manage" tabindex="1" data-path="/manage/listapp/">List (app all)</h2>
        </div>
      </div>
      <div class="map-item">
        <div class="item-title">Templates</div>
        <div class="item-con">
            <!-- <a class="link-template" tabindex="1" data-path="/test/index">test</a> -->
            <a class="link-template" tabindex="1" data-path="/show/a1">Template-A1</a>
            <a class="link-template" tabindex="1" data-path="/show/a2">Template-A2</a>
            <a class="link-template" tabindex="1" data-path="/show/a3">Template-A3</a>
            <a class="link-template" tabindex="1" data-path="/show/a4">Template-A4</a>
            <a class="link-template" tabindex="1" data-path="/show/a5">Template-A5</a>
            <a class="link-template" tabindex="1" data-path="/show/a6">Template-A6</a>
            <a class="link-template" tabindex="1" data-path="/show/a7">Template-A7</a>
            <a class="link-template" tabindex="1" data-path="/show/a8">Template-A8 (WatanFlix)</a>
            <a class="link-template" tabindex="1" data-path="/show/a9">Template-A9 (CatchPlay)</a>
        </div>
      </div>
      <div class="map-item">
        <div class="item-title">Modules</div>
        <div class="item-con">
          <a class="link-template" disabled tabindex="1" data-path="#">Focus System (Bug Debugging)</a>
          <a class="link-template" disabled tabindex="1" data-path="#">Account (developing)</a>
          <a class="link-template" disabled tabindex="1" data-path="#">Customized Keyboard</a>
          <a class="link-template" disabled tabindex="1" data-path="#">Player</a>
          <a class="link-template" disabled tabindex="1" data-path="#">Dialog &amp; Msg</a>
          <a class="link-template" disabled tabindex="1" data-path="#">Video Player</a>
          <p>more... </p>
          <!-- <a class="link-template" disabled tabindex="1" data-path="#">Account (developing)</a>
          <a class="link-template" disabled tabindex="1" data-path="#">Customized Keyboard</a>
          <a class="link-template" disabled tabindex="1" data-path="#">Customized Keyboard</a>
          <a class="link-template" disabled tabindex="1" data-path="#">Customized Keyboard</a>
          <a class="link-template" disabled tabindex="1" data-path="#">Customized Keyboard</a>
          <a class="link-template" disabled tabindex="1" data-path="#">Customized Keyboard</a> -->
        </div>
      </div>
      <div class="map-tip map-tip-left">
        <div class="tip-con">
          <p>* To manage apps, like, add, delete, edit, etc.</p>
          <p>* Developers and Product Managers, or even other cooperaors see what apps there are, and also get some informations about those apps when they need.</p>
          <p>* About two kinds of manage page, different users can choose different one.<br>For example, RDs and PMs can choose the one with edit function, while others who only need to know what apps there are, can choose the list page.</p>
        </div>
      </div>
      <div class="map-tip map-tip-right">
        <div class="tip-con">
          <p>* Make templates' configurability better.</p>
        </div>
      </div>
    </div>

    <!-- <router-link ref="links" class="link-template" data-count='0' tabindex="1" :to="{ path: '/test/index' }">test</router-link>
    <router-link ref="links" class="link-template" data-count='1' tabindex="1" :to="{ path: '/show/a3' }">Template-A3</router-link>
    <router-link ref="links" class="link-template" data-count='2' tabindex="1" :to="{ path: '/show/a4' }">Template-A4</router-link>
    <router-link ref="links" class="link-template" data-count='3' tabindex="1" :to="{ path: '/show/a5' }">Template-A5</router-link>-->
    <!-- <formEl
      v-if="configAppReady"
      :data="configApp">
    </formEl>-->

  </div>
</template>

<script lang="js">
// import formEl from '@/components/common/form/form-el.vue'
export default {
  name: 'HelloWorld',
  components: {
    // formEl
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      thisPath: '',
      itemFocus: {},
      configApp: {},
      configAppReady: false,
      $link: [],
      linkLength: 0,
      focusIndex: 0,
      focusCurr: {}
    }
  },
  // beforeRouteLeave (to, from, next) {
  //   next(vm => {
  //     // console.log('before route leave hellow')

  //   })
  // },
  methods: {
    clientWHInit: function () {
      return {
        width: `${document.documentElement.clientWidth}`,
        height: `${document.documentElement.clientHeight}`
      } // document.body.clientWidth;
      // console.log(self.clientHeight);
      // window.onresize = function temp () {
      //   this.clientHeight = `${document.documentElement.clientHeight}`
      // }
    },
    countFilter: function (_count) {
      let Vue = this
      if (_count < 0) {
        _count = Vue.linkLength + _count
      } else if (_count > Vue.linkLength) {
        _count = _count - Vue.linkLength - 1
      }
      return _count
    },
    getFocus: function (_change) {
      // console.log('getFocus fun: ' + _change)
      let Vue = this
      if (Vue.focusIndex === undefined || Vue.focusIndex < 0) {
        // console.log('if none')
        Vue.focusIndex = 0
      } else {
        // console.log(' ======= no none Vue.$link[_count]')
        Vue.focusIndex = Vue.focusIndex + _change
        // console.log('Vue.focusIndex')
        // console.log(Vue.focusIndex)
        Vue.focusIndex = Vue.countFilter(Vue.focusIndex)
        // console.log('Vue.focusIndex after filter')
        // console.log(Vue.focusIndex)
        let itemTarget = Vue.$link[Vue.focusIndex]
        // console.log(itemTarget)

        let attrCheck = itemTarget.getAttribute('disabled')
        // console.log(attrCheck)
        while (attrCheck !== null) {
          Vue.focusIndex = Vue.focusIndex + _change
          if (_change > 0) {
            // Vue.focusIndex++
          } else if (_change > 0) {
            Vue.focusIndex--
          }
          Vue.focusIndex = Vue.countFilter(Vue.focusIndex)
          itemTarget = Vue.$link[Vue.focusIndex]
          attrCheck = itemTarget.getAttribute('disabled')
        }
      }
      // console.log('before setfocus')
      Vue.itemFocus = Vue.$link[Vue.focusIndex]
      Vue.focusCurr = Vue.itemFocus
      $('.focus').removeClass('focus')
      $(Vue.focusCurr).addClass('focus')
      // console.log('Vue.focusCurr')
      // console.log(Vue.focusCurr)
      // Vue.focusIndex = Vue.focusIndex
      // for (let n = 0; n < Vue.$link.length; n++) {
      //   let countId = Number(Vue.$link[n].getAttribute('data-count'))
      //   // console.log('countId')
      //   // console.log(countId)
      //   if (countId === _count) {
      //     Vue.itemFocus = Vue.$link[n]
      //   }
      // }
      // console.log('Vue.itemFocus')
      // console.log(Vue.itemFocus)
      // $(Vue.itemFocus).focus()
      $(Vue.focusCurr).focus()

      // console.log('aaa')
      // console.log(aaa)
      // data-count
      // let $curr = Vue.$refs.links
    },
    contentKeydown: function (_event) {
      // console.log('contentKeydown fun')
      let Vue = this
      // let countId = Vue.itemFocus.getAttribute('data-count')
      // console.log('_event.currentTarget')
      // console.log(_event.currentTarget)
      // console.log('aaa')
      // console.log(Vue.itemFocus)

      // console.log('Vue.itemFocus')
      // console.log(Vue.itemFocus)
      // console.log('Vue.focusIndex')
      // console.log(Vue.focusIndex)
      if (!Vue.itemFocus) Vue.itemFocus = Vue.$link[0]
      if (Vue.focusIndex < 0) Vue.focusIndex = 0
      Vue.focusCurr = Vue.itemFocus

      // Vue.focusIndex = Vue.$link.indexOf(Vue.itemFocus)

      // console.log('focusIndex')
      // console.log(Vue.focusIndex)
      // console.log('Vue.itemFocus')
      // console.log(Vue.itemFocus)
      // let countId = Number(Vue.focusCurr.getAttribute('data-count'))

      // // 设置遥控器监听
      // $(document).on('keydown', '#content', )
      // console.log('_event.keyCode')
      // console.log(_event.keyCode)
      switch (_event.keyCode) {
        case 13:
          let url = ''
          let pushObj = {}

          if (!Vue.focusCurr) Vue.focusCurr = Vue.$link[0]
          // console.log('Vue.focusCurr')
          // console.log(Vue.focusCurr)
          // return
          let pathCustom = Vue.focusCurr.getAttribute('path-custom')
          // console.log('Vue.focusCurr')
          // console.log(Vue.focusCurr)
          // console.log('pathCustom')
          // console.log(pathCustom)
          if (pathCustom) {
            url = '/show/' + Vue.configApp.template.value
            pushObj = {
              path: url,
              query: {
                app: Vue.configApp.app.value,
                playType: Vue.configApp.playType.value,
                iconStr: Vue.configApp.iconStr.value
              }
            }
          } else {
            url = Vue.focusCurr.getAttribute('data-path')
            pushObj = {
              path: url
            }
          }
          Vue.$store.commit('pathFrom', this.$route.fullPath)
          Vue.$router.push(pushObj)
          // test
          break
        case 37:
          // console.log('content left')
          _event.preventDefault()
          Vue.getFocus(-1)
          break
        case 39:
          // console.log('content right')
          _event.preventDefault()
          Vue.getFocus(+1)
          break
        case 38:
          // up
          // console.log('content up')
          _event.preventDefault()
          Vue.getFocus(-1)
          break
        case 40:
          // console.log('content down')
          // down
          _event.preventDefault()
          Vue.getFocus(+1)
          break
        case 8:
        case 461:
          // back
          if (Vue.cols >= 4) {
            _event.preventDefault()
            let rows = Vue.focus.attr('rows')
            Vue.rows = parseInt(rows)
            Vue.nextFocus(Vue.rows, 1)
          } else {
            window.localStorage.clear()
            // if (document.referrer) {
            //     window.localStorage.clear();
            //     window.location.href = document.referrer;
            // }
          }
          break
      }
    }
  },
  mounted: function () {
    let Vue = this
    // console.log('helloworld mounted')
    // console.log(this.$route.fullPath)
    Vue.configApp = Vue._global.cloneObj(Vue._global.configAppInfo)
    Vue.configApp.app.value = 'CNN - YouTube'
    Vue.configApp.template.value = 'a5'
    Vue.configApp.playType.value = 'youtube'

    Vue.configApp.iconStr.value = 'icon-cnn.jpg'
    Vue.configApp.config.noSubmit = true
    Vue.configAppReady = true
    Vue.$link = $('.link-template')
    Vue.linkLength = Vue.$link.length - 1
    Vue.itemFocus = Vue.$link[Vue.focusIndex]
    Vue.focusCurr = Vue.itemFocus
    $(Vue.focusCurr).addClass('focus')
    $(Vue.focusCurr).focus()
    // Vue.getFocus(+1)
    // console.log(this.clientWHInit())
  }
}
</script>
<style type="text/css" lang="scss">
@import "@/assets/css/clientWH.scss";
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "@/assets/css/test.scss";
.hello {
  padding: 20px;
  .info-basic {
    text-align: left;
  }
  .map {
    display: block;
    position: relative;
    .map-item {
      display: inline-block;
      width: 33%;
      vertical-align: top;
      text-align: center;
      &:nth-child(1) {
        text-align: left;
      }
      &:nth-child(3) {
        text-align: right;
      }
      .item-title {
        text-align: left;
        font-size: 32px;
        margin-bottom: 20px;
        line-height: 1.2;
        text-align: center;
      }
      .item-con {
        display: inline-block;
        width: 60%;
        margin-bottom: 10px;
      }
    }
    .map-tip {
      display: inline-block;
      position: absolute;
      top: 60px;
      width: 330px;
      // border: 1px solid #ff0;
      min-height: 260px;
      padding: 20px 20px 200px;
      // padding-bottom: 100px;
      box-sizing: border-box;
      background: url("~@/assets/img/common/arrow1.png") no-repeat center bottom;
      background-size: 260px 261px;
      .tip-con {
        display: inline-block;
        vertical-align: bottom;
        p {
          font-size: 20px;
          text-align: left;
          line-height: 1.5;
          color: #aaa;
          font-weight: 200;
          margin-bottom: 20px;
        }
      }
      &.map-tip-left {
        left: 390px;
        background-image: url("~@/assets/img/common/arrow1.png")
      }
      &.map-tip-right {
        right: 390px;
        background-image: url("~@/assets/img/common/arrow2.png")
      }
    }
  }
}

</style>
