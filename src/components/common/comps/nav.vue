<template>
  <div class="mod-nav">
    <div
      v-if="dataNew && dataNew.data && dataNew.type !== undefined"
      :class="`mod-nav-in mod-nav${dataNew.type}`"
      @keydown="cKeydown($event)"
    >
      <!-- dataNew.nav.itemFocus: {{dataNew.nav.itemFocus}}, dataNew.move.up: {{dataNew.move.up}} -->
      <!-- dataNew.nav.compModNavFocus: {{dataNew.nav.compModNavFocus}} -->
      <!-- dataNew.nav: {{dataNew.nav}} -->
      <template v-if="dataNew.type === 'Main0' || dataNew.type === 'Season0'">
        <!-- :tabindex="`${dataNew.data.itemName}_${index}`" -->
        <!-- <input class="testinput" tabindex="2" @focus="aaa('focus a')"> -->
        <!-- <input class="testinput" tabindex="2"> -->
        <!-- v-focus="(data.type === 0 && dataNew.nav.itemFocus === `${dataNew.data.itemName}_${index}`)? true: false" -->
        <!-- autofocus="autofocus" -->
        <!-- v-focus="(dataNew.type === 0 && dataNew.nav.itemFocus === `${dataNew.data.itemName}0`)? true: false" -->

        <template v-for="(item, index) in dataNew.data.data">
          <!-- a: {{`${dataNew.data.itemName}_${index}`}} -->
          <!-- @focus="getFocus(`${dataNew.data.itemName}_${index}`)" -->
          <a
            v-if="index === 0"
            :key="`nav-item_${index}`"
            :datakey="`${dataNew.data.itemName}_${index}-compModNav${dataNew.type}`"
            :dataid="`${index}`"
            autofocus="autofocus"
            :class="[
            {
              'focus': (dataNew.type === 'Main0' && dataNew.nav.compModNavFocus === index) ||
              (dataNew.type === 'Season0' && dataNew.nav.compModNavSeasonFocus === index)
            }]"
            :link="item.link"
            tabindex="2"
            :ref="`${dataNew.data.itemName}_${index}-compModNav${dataNew.type}`"
            href="javascript:;"
            :up="getNavUpFun(index)"
            :down="getNavDownFun(index)"
            :left="getNavLeftFun(index)"
            :right="getNavRightFun(index)"
          ><span>{{item.tit}}</span></a>
          <!-- @focus="getFocus(`${dataNew.data.itemName}_${index}`)" -->
          <a
            v-else
            :key="`nav-item_${index}`"
            :datakey="`${dataNew.data.itemName}_${index}-compModNav${dataNew.type}`"
            :dataid="`${index}`"
            :class="[
            {
              'focus': (dataNew.type === 'Main0' && dataNew.nav.compModNavFocus === index) ||
              (dataNew.type === 'Season0' && dataNew.nav.compModNavSeasonFocus === index)
            }]"
            :link="item.link"
            tabindex="2"
            :ref="`${dataNew.data.itemName}_${index}-compModNav${dataNew.type}`"
            href="javascript:;"
            :up="getNavUpFun(index)"
            :down="getNavDownFun(index)"
            :left="getNavLeftFun(index)"
            :right="getNavRightFun(index)"
          ><span>{{item.tit}}</span></a>
        </template>

        <!-- <input class="testinput" tabindex="2"> -->
        <!-- <input class="testinput" tabindex="2"> -->
        <!-- <input class="testinput" tabindex="2"> -->
      </template>
    </div>
  </div>
</template>
<script lang="js">
import funCommonMixin from '@/components/common/comps/funCompCommon.js'
export default {
  name: 'mod-nav',
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
      console.log('cKeydown fun nav _event.keyCode: ' + _event.keyCode)
      // return
      let Vue = this
      let $itemFocus = {}
      let $itemFocusNew = {}
      if (Vue.dataNew.nav.itemFocus.indexOf(Vue.dataNew.data.itemName) < 0) return
      Vue.itemLast = Vue.dataNew.nav.itemFocus
      // console.log('Vue.dataNew.nav.itemFocus')
      // console.log(Vue.dataNew.nav.itemFocus)
      $itemFocus = await Vue.getItemFocusCurr({
        itemFocus: Vue.dataNew.nav.itemFocus
      })
      // console.log('$itemFocus')
      // console.log($itemFocus)
      if (!$itemFocus || !$itemFocus.attributes) return
      // console.log($itemFocus)
      // console.log($itemFocus.attributes.dataid)
      Vue.itemLastId = $itemFocus.attributes.dataid.value
      // console.log('Vue.itemLastId')
      // console.log(Vue.itemLastId)
      // return

      // console.log($itemFocus.attributes)
      // return
      switch (_event.keyCode) {
        case 13:
          // console.log('case 13 nav')
          break
        case 37:
        case 39:
        case 38:
        case 40:
          // console.log('moving')
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
              if (!$itemFocus.attributes.up || !$itemFocus.attributes.up.value) return
              Vue.itemFocus = $itemFocus.attributes.up.value
              // Vue.$set(Vue.dataNew.nav, 'itemFocus', $itemFocus.attributes.up.value)
              break
            case 40:
              // console.log($itemFocus)
              // console.log($itemFocus.attributes)
              // console.log($itemFocus.attributes.down)
              // console.log($itemFocus.attributes.down.value)
              if (!$itemFocus.attributes.down || !$itemFocus.attributes.down.value) return
              Vue.itemFocus = $itemFocus.attributes.down.value
              // Vue.$set(Vue.dataNew.nav, 'itemFocus', $itemFocus.attributes.down.value)
              break
          }
          if (Vue.itemFocus.indexOf(Vue.dataNew.data.itemName) >= 0) {
            // console.log('Vue.itemFocus: ' + Vue.itemFocus)
            // console.log('Vue.dataNew.data.itemName: ' + Vue.dataNew.data.itemName)
            // console.log('out false')
            $itemFocusNew = await Vue.getItemFocusCurr({
              itemFocus: Vue.itemFocus
            })
            $($itemFocusNew).focus()
            Vue.focusOut = false
          } else {
            // console.log('out true')
            $($itemFocus).blur()
            Vue.focusOut = true
          }
          Vue.$emit('getfocus', {
            keyCode: _event.keyCode,
            itemFocus: Vue.itemFocus,
            itemFocusId: Number(Vue.itemFocus.split('-')[0].split('_')[1]), // slice(Vue.dataNew.data.itemName.length)
            itemLast: Vue.itemLast,
            itemLastId: Number(Vue.itemLastId),
            itemFocusObj: $itemFocusNew,
            focusOut: Vue.focusOut,
            refsElName: 'compModNav' + Vue.dataNew.type
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
            refsElName: 'compModNav' + Vue.dataNew.type
          })
          break
      }
    },
    getNavUpFun: function (_index) {
      let Vue = this
      return Vue.dataNew.move.up ? Vue.dataNew.move.up : undefined
    },
    getNavDownFun: function (_index) {
      let Vue = this
      if (_index === 1) {
        // console.log('----------********** getNavDownFun fun ==')
        // console.log(Vue.dataNew.move.down ? Vue.dataNew.move.down : '?')
      }
      // console.log('Vue.dataNew.move.down')
      // console.log(Vue.data.move.down)
      // console.log(Vue.data.move.down ? Vue.data.move.down : '')
      return Vue.data.move.down ? Vue.data.move.down : undefined
    },
    getNavLeftFun: function (_index) {
      // console.log('getNavLeft fun')
      let Vue = this
      if ((_index - 1) >= 0) {
        return `${Vue.dataNew.data.itemName}_${_index - 1}-compModNav${Vue.dataNew.type}`
      } else {
        return Vue.dataNew.move.left ? Vue.dataNew.move.left : undefined
      }
    },
    getNavRightFun: function (_index) {
      // console.log('getNavRight fun')
      let Vue = this
      if ((_index + 1) < Vue.dataNew.data.data.length) {
        return `${Vue.dataNew.data.itemName}_${_index + 1}-compModNav${Vue.dataNew.type}`
      } else {
        return (Vue.dataNew.move.right ? Vue.dataNew.move.right : undefined)
      }
    }
  },
  updated: function () {
    // console.log('updated fun nav 11111111111111111111111111111111')
    let Vue = this
    if (Vue.data) Vue.dataNew = Vue.data
  },
  mounted: async function () {
    // console.log('mounted nav')
    let Vue = this
    if (!Vue.data) return
    if (Vue.data) Vue.dataNew = Vue.data

    // let bbb = await Vue.$refs['compModNavItem0']
    Vue.$nextTick(() => {
      if (Vue.dataNew.nav.itemFocus.indexOf(Vue.dataNew.data.itemName) >= 0) {
        $(Vue.dataNew.nav.itemFocus).focus()
      }
    })
  }
}
</script>
<style lang="scss" scoped>
// @import "@/assets/css/mixin.scss";
.mod-nav {
  .mod-nav-in {
    display: block;
    // padding-top: 40px;
    margin-bottom: 30px;
    padding-left: 80px;
    height: 70px;
    a {
      display: inline-block;
      position: relative;
      text-decoration: none;
      min-width: 118px;
      // width: 162px;
      width: 186px;
      height: 54px;
      text-align: left;
      // margin-right: 72px;
      margin-right: 32px;
      padding-bottom: 7px;
      span {
        display: inline-block;
        border-bottom: 6px solid transparent;
        font-size: 40px;
        color: #fff;
        line-height: 54px;
        text-align: center;
      }
      // &.on,
      &:focus {
        span {
          font-weight: 700;
          border-color: #b02522;
          // border-color: #ff0; /* test */
          font-size: 44px;
        }
      }
      &.focus {
        span {
          font-weight: 700;
          font-size: 44px;
        }

      }
    }
    &.mod-navMain0 {
    // height: 44px;
      a {
        font-size: 40px;
        // &.on,
        &:focus {
          font-size: 44px;
        }
      }
    }
    &.mod-navSeason0 {
    // height: 40px;
      a {
        font-size: 38px;
        width: 211.2px;
        // width: 222px;
        // &.on,
        &:focus {
          font-size: 40px;
        }
      }
    }
  }
}
</style>
