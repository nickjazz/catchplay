
<template>
  <div class="mod-signup" @keydown="cKeydown($event)">
    <!-- <p class="test" style="font-size: 60px; line-height: 1.5;"> -->
      <!-- data.type: {{data && data.type? data.type: '..'}}<br> -->
        <!-- dataNew.type: {{dataNew && dataNew.type? dataNew.type: '..'}}<br> -->

    <!-- dataNew.signup.step: {{dataNew && dataNew.signup && dataNew.signup.step? dataNew.signup.step: '..'}}<br> -->
      <!-- </p> -->
    <div v-if="dataNew && dataNew.type !== undefined" :class="`mod-signup-in mod-signup-${dataNew.type}`">
      <div v-if="data.signup.step &&
        data.signup.steps[data.signup.step] &&
        data.signup.steps[data.signup.step].tit &&
        data.signup.steps[data.signup.step].tit !== ''" class="step-tit">
          <template>{{data.signup.steps[data.signup.step].tit}}</template>
          <!-- v-if="dataNew.signup.step === 'SignupStep1'" -->
      </div>
      <div v-if="data.signup.step &&
        data.signup.steps[data.signup.step] &&
        data.signup.steps[data.signup.step].titSub &&
        data.signup.steps[data.signup.step].titSub !== ''" class='step-tit-sub'>
          <template>{{data.signup.steps[data.signup.step].titSub}}</template>
          <!-- v-if="dataNew.signup.step === 'SignupStep1'" -->
      </div>
      <template v-if="dataNew.step === 'SignupWelcome'">

        <!--step-welcome-->
          <div class="step-welcome" v-if="dataNew.signup.step === 'SignupWelcome'">
            <slot name="SignupWelcome"></slot>
          </div>
          <!--/step-welcome-->
      </template>
      <template v-if="dataNew.step === 'SignupStep1'">
        <!--step1-->
        <div class="step-form">
          <!-- dataNew.signup.steps[dataNew.signup.step].data: {{dataNew.signup.steps[dataNew.signup.step].data}} -->
            <slot name="SignupStep1" v-if="dataNew.signup.step === 'SignupStep1'"></slot>
        </div>
        <!--/step1-->
      </template>
    </div>
  </div>
</template>
<script lang="js">
import formEl from '@/components/common/form/form-el.vue'
import funCommonMixin from '@/components/common/comps/funCompCommon.js'
import modAccount from '@/components/common/comps/account.vue'
export default {
  name: 'mod-signup',
  mixins: [funCommonMixin],
  components: {
    formEl,
    modAccount
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
      signup: {
      }
    }
  },
  methods: {
    cKeydown: async function (_event) {
      // // console.log('cKeydown fun signup **************************: ' + _event.keyCode)
      _event.stopPropagation()
      let Vue = this
      let $itemFocus = {}
      let $itemFocusNew = {}
      if (!Vue.data) return
      if (Vue.data) Vue.$set(Vue, 'dataNew', Vue.data)
      Vue.itemLast = Vue.dataNew.nav.itemFocus
      $itemFocus = await Vue.getItemFocusCurr({
        itemFocus: Vue.dataNew.nav.itemFocus
      })
      if (!$itemFocus || !$itemFocus.attributes) return
      _event.preventDefault()
      switch (_event.keyCode) {
        case 13:
          break
        case 37:
        case 39:
        case 38:
        case 40:
          // // console.log('moving')
          switch (_event.keyCode) {
            case 37:
              // // console.log('case 37 left')
              if (!$itemFocus.attributes.left || !$itemFocus.attributes.left.value) return
              Vue.itemFocus = $itemFocus.attributes.left.value
              // // console.log('Vue.itemFocus')
              // // console.log(Vue.itemFocus)
              break
            case 39:
              // // console.log('case 39 right')
              if (!$itemFocus.attributes.right || !$itemFocus.attributes.right.value) return
              Vue.itemFocus = $itemFocus.attributes.right.value
              // // console.log('Vue.itemFocus')
              // // console.log(Vue.itemFocus)
              break
            case 38:
              // // console.log('case 38 up')
              // // console.log(Vue.dataNew.btnAlign)
              if (!$itemFocus.attributes.up || !$itemFocus.attributes.up.value) return
              Vue.itemFocus = $itemFocus.attributes.up.value
              // // console.log('Vue.itemFocus')
              // // console.log(Vue.itemFocus)
              // // console.log('case 38 $itemFocus.attributes.left.value, Vue.itemFocus')
              // // console.log($itemFocus.attributes.left.value)
              // // console.log(Vue.itemFocus)
              break
            case 40:
              // // console.log('case 40 down')
              if (!$itemFocus.attributes.down || !$itemFocus.attributes.down.value) return
              Vue.itemFocus = $itemFocus.attributes.down.value
              // // console.log('Vue.itemFocus')
              // // console.log(Vue.itemFocus)
              // // console.log('case 40 $itemFocus.attributes.right.value, Vue.itemFocus')
              // // console.log($itemFocus.attributes.right.value)
              // // console.log(Vue.itemFocus)
              break
          }
          if (Vue.itemFocus.indexOf('compModSignup') >= 0) {
            // // console.log('inside $itemFocusNew')
            $itemFocusNew = await Vue.getItemFocusCurr({
              itemFocus: Vue.itemFocus
            })
            // // console.log($itemFocusNew)
            $($itemFocusNew).focus()
            Vue.focusOut = false
          } else {
            // // console.log('outside $itemFocus')
            // // console.log($itemFocus)
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
            refsElName: 'compModSignup' + Vue.dataNew.type
            // link: $itemFocus.attributes.link.value
          })
          break
      }
    },
    formSubmit: function () {},
    formCancel: function () {}
  },
  updated: function () {
    let Vue = this
    Vue.$set(Vue, 'dataNew', Vue.data)
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
