<template>
  <div class="layer" v-if="data && dataNew" @keydown="cKeydown($event)">
    <!-- <p class="testtip">
      <br>
      <br>
      <br>
      1 data.type: {{data.type}}<br>
      2 data.dialog: {{data.dialog}}<br>
      3 data.nav.itemLast: {{data && data.nav && data.nav.itemLast?data.nav.itemLast:'a'}}<br>
      4 data.nav.itemFocus: {{data && data.nav && data.nav.itemFocus?data.nav.itemFocus:'b'}}</p> -->
    <div :class="`${data.type}`">
      <template v-if="data.type === 'layer-welcome'">
        <slot name="welcome-con"></slot>
      </template>
      <template v-if="data.type === 'layer-loading'">
          <slot name="loading-con"></slot>
          <!-- <b class="layer-bg"></b> -->
      </template>
      <!-- && (dataNew.dialog === 'exit' || -->
        <!-- dataNew.dialog === 'contactus') -->
      <template v-if="data.type === 'layer-dialog' && data.nav && data.nav.itemFocus">
        <div class="layer-dialog-con" v-if="data.dialog === 'exit'">
          <div v-if="data.dialogFocus && data.dialogFocus !== ''"
            class="msg msg-focus" v-html="data.dialogFocus"></div>
          <!-- <p>dataNew.nav.itemFocus: {{dataNew.nav.itemFocus}}</p> -->
          <a
            class="btn btn-yes"
            :class="{'on': dataNew.nav.itemFocus === 'compBtnExitYes'}"
            href="javascript:;"
            tabindex="1"
            :ref="`compBtnExitYes`"
            down="compBtnExitNo"
          >yes</a>
          <a
            class="btn btn-no"
            :class="{'on': dataNew.nav.itemFocus === 'compBtnExitNo'}"
            href="javascript:;"
            tabindex="1"
            :ref="`compBtnExitNo`"
            up="compBtnExitYes"
          >no</a>
        </div>

        <div class="layer-dialog-con" v-if="data.dialog === 'contactus'">
          <div v-if="data.dialogTit && data.dialogTit !== ''"
            class="msg msg-tit" v-html="data.dialogTit">
          </div>
          <div v-if="data.dialogTxt && data.dialogTxt !== ''"
            class="msg msg-details" v-html="data.dialogTxt">
          </div>
          <a
            class="btn btn-ok"
            :class="{'on': dataNew.nav.itemFocus === 'compBtnContactOK'}"
            href="javascript:;"
            tabindex="1"
            :ref="`compBtnContactOK`"
          >ok</a>
        </div>
      </template>
      <template v-if="data.type === 'layer-msg'">
        <slot name="msg-con"></slot>
      </template>
    </div>
  </div>
</template>
<script lang="js">
import funCommonMixin from '@/components/common/comps/funCompCommon.js'
export default {
  name: 'mod-layer',
  mixins: [funCommonMixin],
  components: {},
  props: {
    data: {
      type: [Object, Number, String],
      default: 'index'
    }
  },
  data: function () {
    return {
      dataNew: {},
      itemFocus: '',
      itemLast: '',
      itemLastId: 0,
      $itemFocus: {}
      // itemFocus: ''
    }
  },
  methods: {
    cKeydown: async function (_event) {
      _event.stopPropagation()
      // // console.log('cKeydown fun layer')
      let Vue = this
      let $itemFocus = {}
      if (!Vue.data) return
      if (Vue.data) Vue.$set(Vue, 'dataNew', Vue.data)
      // // console.log('Vue.dataNew.nav')
      // // console.log(Vue.dataNew.nav)
      // return
      let $itemFocusNew = {}
      // // console.log('Vue.dataNew.nav.itemFocus')
      // // console.log(Vue.dataNew.nav.itemFocus)
      // // console.log('Vue.dataNew.nav.itemLast')
      // // console.log(Vue.dataNew.nav.itemLast)
      let targetCurr = _event.currentTarget
      // // console.log('targetCurr 1')
      // // console.log(targetCurr)
      // // console.log('Vue.dataNew.nav.itemFocus aaa')
      // // console.log(Vue.dataNew.nav.itemFocus)
      // // console.log()
      // Vue.$set(Vue.dataNew.nav, 'itemFocus', Vue.itemFocus)
      // return
      // if (Vue.dataNew.nav.itemFocus.indexOf('compBtn') < 0) return
      Vue.itemLast = Vue.dataNew.nav.itemFocus
      $itemFocus = await Vue.getItemFocusCurr({
        itemFocus: Vue.dataNew.nav.itemFocus
      })
      if (!$itemFocus || !$itemFocus.attributes) return
      // // console.log($itemFocus)
      // // console.log($itemFocus.attributes.dataid)
      // Vue.itemLastId = $itemFocus.attributes.dataid.value
      // // console.log('Vue.itemLastId')
      // // console.log(Vue.itemLastId)
      // return
      // // console.log($itemFocus)
      // // console.log($itemFocus.attributes)
      // return
      _event.preventDefault()
      switch (_event.keyCode) {
        case 13:
          // // console.log('case 13')
          let param = {}
          switch (Vue.dataNew.nav.itemFocus) {
            case 'compBtnContactOK':
            case 'compBtnExitNo':
            case 'compBtnExitYes':
              param = {
                itemFocus: Vue.dataNew.nav.itemFocus,
                itemLast: Vue.dataNew.nav.itemLast,
                keyCode: _event.keyCode,
                focusOut: false
              }
              // // console.log('param')
              // // console.log(param)
              Vue.$emit('keydown', param)
          }
          // switch (Vue.dataNew.nav.itemFocus) {
          //   case 'compBtnExitYes':
          //     Vue.$emit('keydown', Vue.dataNew.nav.itemFocus)
          //     Vue.appClose()
          //     break
          //   case 'compBtnExitNo':

          //     Vue.returnPage('index')
          //     // Vue.appClose()
          //     break
          //   case 'compBtnContactOK':
          //     Vue.returnPage('index')
          //     break
          // }
          break
        case 37:
        case 39:
        case 38:
        case 40:
          // // console.log('layer moving')
          switch (_event.keyCode) {
            case 37:
              if (!$itemFocus.attributes.left || !$itemFocus.attributes.left.value) return
              Vue.itemFocus = $itemFocus.attributes.left.value
              // Vue.$set(Vue.dataNew.nav, 'itemFocus', $itemFocus.attributes.left.value)
              break
            case 39:
              if (!$itemFocus.attributes.right || !$itemFocus.attributes.right.value) return
              Vue.itemFocus = $itemFocus.attributes.right.value
              // Vue.$set(Vue.dataNew.nav, 'itemFocus', $itemFocus.attributes.right.value)
              break
            case 38:
              // // console.log('38 up')
              // // console.log($itemFocus)

              if (!$itemFocus.attributes.up || !$itemFocus.attributes.up.value) return
              // // console.log($itemFocus.attributes.up.value)
              Vue.itemFocus = $itemFocus.attributes.up.value
              // // console.log('$itemFocus.attributes.up.value: ' + $itemFocus.attributes.up)
              // // console.log('Vue.itemFocus: ' + Vue.itemFocus)
              // Vue.$set(Vue.dataNew.nav, 'itemFocus', $itemFocus.attributes.up.value)
              break
            case 40:
              // // console.log('40 down')
              if (!$itemFocus.attributes.down || !$itemFocus.attributes.down.value) return
              // // console.log($itemFocus.attributes.down.value)
              Vue.itemFocus = $itemFocus.attributes.down.value
              // // console.log('$itemFocus.attributes.down.value: ' + $itemFocus.attributes.down)
              // // console.log('Vue.itemFocus: ' + Vue.itemFocus)
              // Vue.$set(Vue.dataNew.nav, 'itemFocus', $itemFocus.attributes.down.value)
              break
          }
          // // console.log('itemFocus aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
          // // console.log(Vue.itemFocus)
          // return
          if (Vue.itemFocus.indexOf('compBtn') >= 0) {
            // // console.log('in if btn')
            // // console.log('Vue.itemFocus: ' + Vue.itemFocus)
            // // console.log('Vue.dataNew.data.itemName: ' + Vue.dataNew.data.itemName)
            // // console.log('out false')
            $itemFocusNew = await Vue.getItemFocusCurr({
              itemFocus: Vue.itemFocus
            })
            // // console.log('after curr')
            // // console.log('$itemFocusNew')
            // // console.log($itemFocusNew)
            Vue.$set(Vue, 'itemFocus', Vue.itemFocus)
            // // console.log('after move')
            // // console.log(Vue.itemFocus)
            Vue.$set(Vue.dataNew.nav, 'itemFocus', Vue.itemFocus)

            // // console.log(Vue.dataNew.nav.itemFocus)
            $($itemFocusNew).focus()
            Vue.focusOut = false
          }
          break
      }
    }
  },
  mounted: function () {
    // // console.log('mounted layer')
    let Vue = this
    if (!Vue.data) return
    if (Vue.data) Vue.$set(Vue, 'dataNew', Vue.data)
    // // console.log('Vue.dataNew.nav.itemFocus: mounted')
    if (Vue.dataNew && Vue.dataNew.nav && Vue.dataNew.nav.itemFocus) {
      // // console.log(Vue.dataNew.nav.itemFocus)
      Vue.$set(Vue, 'itemFocus', Vue.dataNew.nav.itemFocus)
    } else {
      Vue.$set(Vue, 'itemFocus', 'compBtnExitYes') // why compModNavItem0
    }

    // Vue.dataNew = Vue.data
    Vue.$nextTick(() => {})
  }
}
</script>
<style lang="scss" scoped>
@import "@/assets/css/common.scss";
@mixin msgFocus {
  // background: #00f;
  padding: 106px 0 80px;
  font-size: 40px;
  line-height: 1.2;
}
@mixin msgTit {
  padding: 60px 0;
  font-size: 40px;
  line-height: 1.2;
  text-transform: uppercase;
}
@mixin msgDetails {
  margin-bottom: 50px;
  line-height: 34px;
}
.layer {
  display: block;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 701;
  &.layer-dialog {
    padding-top: 200px;
  }
  .layer-welcome {
    display: block;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    position: fixed;
    left: 0;
    top: 0;
    // border: 10px solid #faa;
    z-index: 900;
  }
  .layer-loading {
    display: block;
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 701;
    // .layer-bg {
    //   display: block;
    //   width: 100%;
    //   height: 100%;
    //   // background: url('~@/assets/img/a8/loading0.gif') no-repeat;
    //   background-size: 100% 100%;
    // }
  }
  .layer-dialog {
    width: 800px;
    height: 512px;
    // width: 818px;
    // height: 530px;
    margin: auto;
    background: #303030 url("~@/assets/img/a8/bg-818x530-0.png") no-repeat -9px -6px;
    background-size: 818px 530px;
    text-align: center;
    .msg {
      color: #fff;
      font-size: 28px;
      line-height: 2;
      padding: 0;
      text-align: center;
      &.msg-focus {
        @include msgFocus;
      }
      &.msg-tit {
        @include msgTit;
      }
      &.msg-details {
        @include msgDetails;
      }
    }
    .btn {
      display: block;
      width: 380px;
      height: 88px;
      margin: auto;
      line-height: 88px;
      border-radius: 12px;
      text-transform: uppercase;
      font-size: 48px;
      color: #fff;
      text-decoration: none;
      background: #a1a1a1;
      text-align: center;
      &.btn-yes {
        margin-bottom: 36px;
      }
      &.btn-ok {
        margin-top: 60px;
      }
      // &.on,
      &:focus {
        background: #a61514;
      }
    }
  }
  &.layer-msg {
    padding-top: 30px;
  }
  .layer-msg {
    width: 1500px;
    min-height: 300px;
    max-height: 960px;
    overflow: auto; 
    padding: 60px;
    box-sizing: border-box;
    background: #303030 url("~@/assets/img/a8/bg-818x530-0.png") no-repeat -9px -6px;
    background-size: 100% auto;
    margin: auto;
  }
}
</style>
