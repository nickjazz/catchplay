<template>
  <div class="mod-account0" :class="`aaa${data.type}`" :datakey="`mod-account${data.type}`" @keydown="cKeydown($event)">
    <!-- :link="dataNew.data.btnSignup.link" -->
    <!-- :link="dataNew.data.btnSignup.link" -->
    <!-- <p>data.type: {{data.type}}</p> -->
    <a href="javascript:;" :ref="`compBtnSignup-compModAccount${data.type}`"
      :link="(dataNew && dataNew.data && dataNew.data['compBtnSignup'] && dataNew.data['compBtnSignup'].link)? dataNew.data['compBtnSignup'].link : ''"
      tabindex="2"
      :up="(dataNew.move && dataNew.move.up)? dataNew.move.up: undefined"
      :down="(dataNew.move && dataNew.move.down)? dataNew.move.down: undefined"
      :left="(dataNew.move && dataNew.move.left)? dataNew.move.left: undefined"
      :right="`compBtnSignin-compModAccount${data.type}`">注册</a>
    <a href="javascript:;" :ref="`compBtnSignin-compModAccount${data.type}`"
      :link="(dataNew && dataNew.data && dataNew.data['compBtnSignin'] && dataNew.data['compBtnSignin'].link)? dataNew.data['compBtnSignin'].link : ''"
      tabindex="2"
      :up="(dataNew.move && dataNew.move.up)? dataNew.move.up: undefined"
      :down="(dataNew.move && dataNew.move.down)? dataNew.move.down: undefined"
      :left="`compBtnSignup-compModAccount${data.type}`"
      :right="(dataNew.move && dataNew.move.right)? dataNew.move.right: undefined">登录</a>
  </div>
</template>
<script lang="js">
import funCommonMixin from '@/components/common/comps/funCompCommon.js'
export default {
  name: 'mod-account',
  mixins: [funCommonMixin],
  components: {},
  props: {
    data: {
      type: [Object, Number, String],
      default: 'index'
    }
  },
  // data: function () {
  //   return {
  //     dataNew: {},
  //     itemFocus: '',
  //     itemLast: '',
  //     itemLastId: 0,
  //     focusOut: false
  //   }
  // },
  methods: {
    cKeydown: async function (_event) {
      _event.stopPropagation()
      // console.log('cKeydown fun account **************************: ' + _event.keyCode)
      let Vue = this
      let $itemFocus = {}
      let $itemFocusNew = {}
      // console.log('Vue.dataNew.nav.itemFocus')
      // console.log(Vue.dataNew.nav.itemFocus)
      if (Vue.dataNew.nav.itemFocus.indexOf('compBtnSign') < 0) return
      // console.log('has btnSign')
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
      // console.log('start switch')
      switch (_event.keyCode) {
        case 13:
          // console.log('case 13')
          if (Vue.dataNew.nav.itemFocus.indexOf('compBtnSignup-compModAccount') ||
          Vue.dataNew.nav.itemFocus.indexOf('compBtnSignin-compModAccount')) {
            Vue.itemFocus = Vue.dataNew.nav.itemFocus
            // console.log('Vue.itemLast')
            // console.log(Vue.itemLast)
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
              link: $itemFocus.attributes.link.value,
              refsElName: 'compModAccount' + Vue.dataNew.type
            }
            // console.log(param)
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
              switch (Vue.dataNew.btnAlign) {
                case 'hori':
                  if (!$itemFocus.attributes.left || !$itemFocus.attributes.left.value) return
                  Vue.itemFocus = $itemFocus.attributes.left.value
                  break
              }
              break
            case 39:
              // console.log('case 39 right')
              switch (Vue.dataNew.btnAlign) {
                case 'hori':
                  if (!$itemFocus.attributes.right || !$itemFocus.attributes.right.value) return
                  Vue.itemFocus = $itemFocus.attributes.right.value
                  break
              }
              break
            case 38:
              // console.log('case 38 up')
              // console.log(Vue.dataNew.btnAlign)
              if (Vue.dataNew.nav.itemFocus.indexOf('compBtnSignup') >= 0) {
                if (!$itemFocus.attributes.up || !$itemFocus.attributes.up.value) return
                Vue.itemFocus = $itemFocus.attributes.up.value
              } else {
                switch (Vue.dataNew.btnAlign) {
                  case 'hori':
                    if (!$itemFocus.attributes.up || !$itemFocus.attributes.up.value) return
                    Vue.itemFocus = $itemFocus.attributes.up.value
                    break
                  case 'verti':
                    if (!$itemFocus.attributes.left || !$itemFocus.attributes.left.value) return
                    Vue.itemFocus = $itemFocus.attributes.left.value
                    // console.log('Vue.itemFocus: ' + Vue.itemFocus)
                    break
                }
              }

              // console.log('case 38 $itemFocus.attributes.left.value, Vue.itemFocus')
              // console.log($itemFocus.attributes.left.value)
              // console.log(Vue.itemFocus)
              break
            case 40:
              // console.log('case 40 down')
              if (Vue.dataNew.nav.itemFocus.indexOf('compBtnSignin') >= 0) {
                if (!$itemFocus.attributes.down || !$itemFocus.attributes.down.value) return
                Vue.itemFocus = $itemFocus.attributes.down.value
              } else {
                switch (Vue.dataNew.btnAlign) {
                  case 'hori':
                    if (!$itemFocus.attributes.down || !$itemFocus.attributes.down.value) return
                    Vue.itemFocus = $itemFocus.attributes.down.value
                    break
                  case 'verti':
                    if (!$itemFocus.attributes.right || !$itemFocus.attributes.right.value) return
                    Vue.itemFocus = $itemFocus.attributes.right.value
                    break
                }
              }
              // console.log('case 40 $itemFocus.attributes.right.value, Vue.itemFocus')
              // console.log($itemFocus.attributes.right.value)
              // console.log(Vue.itemFocus)
              break
          }
          //     // return
          // console.log('Vue.itemFocus -----------------------')
          // console.log(Vue.itemFocus)
          if (Vue.itemFocus.indexOf('compBtnSign') >= 0) {
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
          // console.log('Vue.itemFocus: ' + Vue.itemFocus)
          // console.log('Vue.dataNew.data.itemName: ' + Vue.dataNew.data.itemName)
          Vue.$set(Vue.dataNew.nav, 'itemFocus', Vue.itemFocus)
          // Vue.$set(Vue.dataNew.data, 'itemFocus', Number(Vue.itemFocus.slice(Vue.dataNew.data.itemName.length)))

          // console.log('Vue.dataNew.nav.itemFocus: ' + Vue.dataNew.nav.itemFocus)
          // console.log('Vue.dataNew.data.itemFocus: ' + Vue.dataNew.data.itemFocus)
          // if (Vue.focusOut) {
          // Vue.$emit('getfocus', {
          //   keyCode: _event.keyCode,
          //   itemFocus: Vue.itemFocus,
          //   itemFocusId: 0,
          //   itemLast: Vue.itemLast,
          //   itemLastId: 0,
          //   itemFocus: $itemFocusNew,
          //   focusOut: Vue.focusOut
          // })
          // console.log('ready for emit')
          Vue.$emit('getfocus', {
            keyCode: _event.keyCode,
            itemFocus: Vue.itemFocus,
            itemFocusId: undefined,
            itemLast: Vue.itemLast,
            itemLastId: undefined,
            itemFocusObj: $itemFocus,
            focusOut: false,
            refsElName: 'compModAccount' + Vue.dataNew.type
            // link: $itemFocus.attributes.link.value
          })
          // }

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
            refsElName: `${Vue.dataNew.nav.compLangItem}${Vue.dataNew.type}`
          })
          break
      }
    }
  },
  mounted: function () {
    // console.log('mounted fun')
    let Vue = this
    if (!Vue.data) return
    if (Vue.data) Vue.dataNew = Vue.data
    Vue.$nextTick(() => {
      // if (Vue.dataNew.nav.itemFocus.indexOf(Vue.dataNew.data.itemName) >= 0) {
      //   $(Vue.dataNew.nav.itemFocus).focus()
      // }
    })
  }
}
</script>
<style lang="scss" scoped>
@import "@/assets/css/common.scss";
.mod-account0 {
      display: inline-block;
      vertical-align: top;
      padding-top: 30px;
      a {
        color: #fff;
        font-size: 32px;
        line-height: 64px;
        margin: 0 20px;
        padding: 6px;
        color: #f8b500;
        @include canFocus;
      }
    }
</style>
