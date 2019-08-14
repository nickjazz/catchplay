<template>
  <div class="mod-signin" @keydown="cKeydown($event)">
    <!-- <div class="test" style="font-size: 60px; top: 100px;"> -->
      <!-- mod signin: {{data && data.signin && data.signin.step? 'aa: ' + data.signin.step: '?'}}<br> -->
    <!-- mod signin New: {{dataNew && dataNew.signin && dataNew.signin.step? 'aaNew: ' + dataNew.signin.step: '?'}}<br> -->
    <!-- <br> -->
    <!-- signin.steps[signin.step].formname: {{dataNew.signin.steps[dataNew.signin.step].formname}}<br> -->
    <!-- signin.steps[signin.step].data: {{dataNew.signin.steps[signin.step].data}} -->
    <!-- </div> -->
    <!-- <p class="test" style="font-size: 60px; line-height: 1.5;">
      data.type: {{data && data.type? data.type: '..'}}<br>
        dataNew.type: {{dataNew && dataNew.type? dataNew.type: '..'}}<br>
    dataNew.signin.step: {{dataNew && dataNew.signin && dataNew.signin.step? dataNew.signin.step: '..'}}<br>
      </p> -->
    <div v-if="dataNew && dataNew.type !== undefined" :class="`mod-signin-in mod-signin-${data.type}`">
      <!-- data.step: {{data.step}} -->
      <div v-if="data.signin.step &&
        data.signin.steps[data.signin.step] &&
        data.signin.steps[data.signin.step].tit &&
        data.signin.steps[data.signin.step].tit !== ''" class="step-tit">
        <!-- v-if="data.signin.step === 'SigninMobileStep1'" -->
          <template>{{data.signin.steps[data.signin.step].tit}}</template>
      </div>
      <div v-if="data.signin.step &&
        data.signin.steps[data.signin.step] &&
        data.signin.steps[data.signin.step].titSub &&
        data.signin.steps[data.signin.step].titSub !== ''" class='step-tit-sub'>
        <!-- v-if="data.signin.step === 'SigninMobileStep1'" -->
          <template>{{data.signin.steps[data.signin.step].titSub}}</template>
      </div>
      <!-- <div class="step-tit">
          <template v-if="data.signin.step === 'SigninWelcome'">登入</template>
      </div> -->
      <!--step-welcome-->
      <div class="step-welcome" v-if="data.signin.step === 'SigninWelcome'">
        <!--mod-btn0-->
        <div class="mod-btn0 mod-btn0-signin">
          <a
            class="btn-signin btn-signin-mobile"
            href="javascript:;"
            :ref="`compBtnSigninMobile-compModSignin${dataNew.type}`"
            :down="`compBtnSigninFacebook-compModSignin${dataNew.type}`"
            link="linkSigninMobileStep1">111手机号码</a>
          <a
            class="btn-signin btn-signin-facebook"
            href="javascript:;"
            :ref="`compBtnSigninFacebook-compModSignin${dataNew.type}`"
            :up="`compBtnSigninMobile-compModSignin${dataNew.type}`"
            :down="`btnSigninLink-compModSignin${dataNew.type}`"
            link="linkSigninFacebookStepTypeSelect">Facebook</a>
        </div>
        <!--/mod-btn0-->
        <div class="mod-tip1">
          <p>还不是会员？
            <a href="havascript:;"
              :ref="`btnSigninLink-compModSignin${dataNew.type}`"
              :up="`compBtnSigninFacebook-compModSignin${dataNew.type}`"
              link="linkSignupPage">注册</a></p>
        </div>
      </div>
      <!--/step-welcome-->
      <!--step1-->
      <div class="step-form" v-if="data.step === 'SigninMobileStep1'">
        <slot name="SigninMobileStep1"></slot>
      </div>
      <!--/step1-->
      <slot name="SigninFacebookStepTypeSelect" v-if="data.step === 'SigninFacebookStepTypeSelect'"></slot>
      <slot name="SigninFacebookStep1" v-if="data.step === 'SigninFacebookStep1'"></slot>
      <slot name="SigninForgetPassword" v-if="data.step === 'SigninForgetPassword'"></slot>
    </div>
  </div>
</template>
<script lang="js">
import formEl from '@/components/common/form/form-el.vue'
import funCommonMixin from '@/components/common/comps/funCompCommon.js'
export default {
  name: 'mod-point',
  mixins: [funCommonMixin],
  components: {
    formEl
  },
  props: {
    data: {
      type: [Object, Number, String],
      default: 'index'
    }
  },
  data: function () {
    return {
      dataNew: {},
      signin: {
      }
    }
  },
  methods: {
    cKeydown: async function (_event) {
      // console.log('cKeydown fun signin **************************: ' + _event.keyCode)
      _event.stopPropagation()
      let Vue = this
      let $itemFocus = {}
      let $itemFocusNew = {}
      // console.log('Vue.dataNew.nav')
      // console.log(Vue.dataNew.nav)
      // console.log('Vue.dataNew.nav.itemFocus')
      // console.log(Vue.dataNew.nav.itemFocus)
      if (Vue.dataNew.nav.itemFocus.indexOf('compModSignin') < 0) return
      Vue.itemLast = Vue.dataNew.nav.itemFocus
      $itemFocus = await Vue.getItemFocusCurr({
        itemFocus: Vue.dataNew.nav.itemFocus
      })
      // console.log('$itemFocus')
      // console.log($itemFocus)
      // console.log($itemFocus.attributes)
      if (!$itemFocus || !$itemFocus.attributes) return
      if ($itemFocus && $itemFocus.attributes && $itemFocus.attributes.dataid && $itemFocus.attributes.dataid.value) {
        Vue.itemLastId = $itemFocus.attributes.dataid.value
      } else {
        Vue.itemLastId = undefined
      }
      switch (_event.keyCode) {
        case 13:
          // console.log('case 13')
          if (Vue.dataNew.nav.itemFocus.indexOf('compBtnSigninMobile-compModAccount') ||
          Vue.dataNew.nav.itemFocus.indexOf('compBtnSigninFacebook-compModAccount')) {
            Vue.itemFocus = Vue.dataNew.nav.itemFocus
            // console.log('$itemFocus.attributes.link.value')
            // console.log($itemFocus.attributes.link.value)
            // console.log('Vue.itemFocus: ' + Vue.itemFocus)
            // console.log('Vue.dataNew.type: ' + Vue.dataNew.type)
            // console.log('before enter emit')
            let param = {
              keyCode: _event.keyCode,
              itemFocus: Vue.itemFocus,
              itemFocusId: undefined,
              itemLast: Vue.itemLast,
              itemLastId: undefined,
              itemFocusObj: $itemFocus,
              focusOut: false,
              // refsElName: 'compModAccount' + Vue.dataNew.type
              refsElName: 'compModSignin' + Vue.dataNew.type
            }
            if ($itemFocus.attributes && $itemFocus.attributes.link && $itemFocus.attributes.link.value) param.link = $itemFocus.attributes.link.value
            Vue.$emit('getfocus', param)
          } else {
          }
          break
        case 37:
        case 39:
        case 38:
        case 40:
          // console.log('moving')
          switch (_event.keyCode) {
            case 37:
              // console.log('case 37 left')
              if (!$itemFocus.attributes.left || !$itemFocus.attributes.left.value) return
              Vue.itemFocus = $itemFocus.attributes.left.value
              // console.log('Vue.itemFocus')
              // console.log(Vue.itemFocus)
              break
            case 39:
              // console.log('case 39 right')
              if (!$itemFocus.attributes.right || !$itemFocus.attributes.right.value) return
              Vue.itemFocus = $itemFocus.attributes.right.value
              // console.log('Vue.itemFocus')
              // console.log(Vue.itemFocus)
              break
            case 38:
              // console.log('case 38 up')
              // console.log(Vue.dataNew.btnAlign)
              if (!$itemFocus.attributes.up || !$itemFocus.attributes.up.value) return
              Vue.itemFocus = $itemFocus.attributes.up.value
              // console.log('Vue.itemFocus')
              // console.log(Vue.itemFocus)
              // console.log('case 38 $itemFocus.attributes.left.value, Vue.itemFocus')
              // console.log($itemFocus.attributes.left.value)
              // console.log(Vue.itemFocus)
              break
            case 40:
              // console.log('case 40 down')
              if (!$itemFocus.attributes.down || !$itemFocus.attributes.down.value) return
              Vue.itemFocus = $itemFocus.attributes.down.value
              // console.log('Vue.itemFocus')
              // console.log(Vue.itemFocus)
              // console.log('case 40 $itemFocus.attributes.right.value, Vue.itemFocus')
              // console.log($itemFocus.attributes.right.value)
              // console.log(Vue.itemFocus)
              break
          }
          if (Vue.itemFocus.indexOf('compModSignin') >= 0) {
            // console.log('inside $itemFocusNew')
            $itemFocusNew = await Vue.getItemFocusCurr({
              itemFocus: Vue.itemFocus
            })
            // console.log($itemFocusNew)
            $($itemFocusNew).focus()
            Vue.focusOut = false
          } else {
            // console.log('outside $itemFocus')
            // console.log($itemFocus)
            $($itemFocus).blur()
            Vue.focusOut = true
          }
          Vue.$set(Vue.dataNew.nav, 'itemFocus', Vue.itemFocus)
          Vue.$emit('getfocus', {
            keyCode: _event.keyCode,
            itemFocus: Vue.itemFocus,
            itemFocusId: undefined,
            itemLast: Vue.itemLast,
            itemLastId: undefined,
            itemFocusObj: $itemFocus,
            focusOut: false,
            refsElName: 'compModSignin' + Vue.dataNew.type
            // link: $itemFocus.attributes.link.value
          })
          break
        case 8:
        case 461:
          // console.log()
          Vue.itemFocus = Vue.dataNew.nav.itemFocus
          Vue.$emit('getfocus', {
            keyCode: _event.keyCode,
            itemFocus: Vue.itemFocus,
            itemFocusId: Number(Vue.itemFocus.split('-')[0].split('_')[1]), // slice(Vue.dataNew.data.itemName.length)
            itemLast: Vue.itemLast,
            itemLastId: Number(Vue.itemLastId),
            itemFocusObj: $itemFocusNew,
            focusOut: Vue.focusOut,
            refsElName: 'compModSignin' + Vue.dataNew.type
          })
          break
      }
      // let Vue = this
      // let $itemFocus = {}
      // let $itemFocusNew = {}
    },
    formSubmit: function () {},
    formCancel: function () {}
  },
  mounted: function () {
    let Vue = this
    if (!Vue.data) return
    if (Vue.data) Vue.dataNew = Vue.data
    Vue.$nextTick(() => {})
  }
}
</script>
<style lang="scss" scoped>
@import "@/assets/css/common.scss";
@import "@/assets/css/account.scss";
</style>
