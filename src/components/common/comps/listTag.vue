<template>
  <div class="list-tag" @keydown="cKeydown($event)">
    <!-- class="list-category0" -->
    <ul :class="`list-${data.type}`" conType="tag" v-if="data && dataNew && dataNew.data">
      <li class="item" tabindex="1"
        v-for="(item, index) in dataNew.data.data"
        :ref="`${dataNew.data.itemName}_${index}-compList${dataNew.type}`"
        :key="`${dataNew.data.itemName}_${index}-compList${dataNew.type}`"
        :link="item.link"
        :id="item.id">{{item.name}}</li>
    </ul>
  </div>
</template>
<script lang="js">
import funCommonMixin from '@/components/common/comps/funCompCommon.js'
export default {
  name: 'listTag',
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
      colCount: 4,
      focusFilter: 0,
      $itemFocus: {},
      itemFocus: '',
      itemLast: '',
      focusIndex: 0,
      itemFocusRefsElName: '',
      itemLength: 0,
      $item: []
    }
  },
  methods: {
    countFilter: function (_param) {
      let Vue = this
      // console.log('countFilter fun: ' + _param.count)
      // console.log('Vue.focusFilter: ' + Vue.focusFilter)
      // console.log('Vue.colCount: ' + Vue.colCount)
      if (_param.count < 0) {
        _param.count = Vue.itemLength + _param.count // + 1
        // console.log('< 0, if 1 ')
        // console.log(_param.count)
        // console.log()
        if (Vue.focusFilter > 0 && Number(_param.keyCode) === 38) {
          // console.log('if Vue.focusFilter > 0 && _param.keyCode === 38')
          _param.count = _param.count - Vue.focusFilter
          if (_param.count + Vue.colCount < Vue.itemLength) _param.count = _param.count + Vue.colCount
          //     // _param.count = _param.count + Vue.focusFilter - Vue.colCount // + Vue.colCount - Vue.focusFilter
          //     _param.count = _param.count - Vue.focusFilter + Vue.colCount
          //     // console.log('< 0, if 2')
          //     // console.log(_param.count)
          //     Vue.countFilter(_param)
        }
      } else if (_param.count >= Vue.itemLength) {
        _param.count = _param.count - Vue.itemLength // - 1
        // console.log('> length, if 1')
        // console.log(_param.count)
        if (Vue.focusFilter > 0 && Number(_param.keyCode) === 40) {
          // console.log('if Vue.focusFilter > 0 && _param.keyCode === 40')
          _param.count = _param.count + Vue.focusFilter
          if (_param.count - Vue.colCount >= 0) _param.count = _param.count - Vue.colCount
          // if (_param.count - Vue.colCount >= 0) _param.count = _param.count - Vue.colCount
          //     _param.count = _param.count + Vue.focusFilter - Vue.colCount //  + Vue.focusFilter - Vue.colCount
          // console.log('> length, if 2')
          // console.log(_param.count)
          //     Vue.countFilter(_param)
        }
      }
      // console.log('_param.count')
      // console.log(_param.count)
      return _param.count
    },
    getFocus: function (_param) {
      // console.log('getFocus fun: ' + _param.change)
      // console.log('keyCode: ' + _param.keyCode)
      let Vue = this
      if (Vue.focusIndex === undefined || Vue.focusIndex < 0) {
        // console.log('if none')
        Vue.focusIndex = 0
      } else {
        // console.log(' ======= no none Vue.dataNew.data.data[_count]')
        Vue.focusIndex = Vue.focusIndex + _param.change
        // console.log('Vue.focusIndex')
        // console.log(Vue.focusIndex)
        Vue.focusIndex = Vue.countFilter({
          count: Vue.focusIndex,
          keyCode: _param.keyCode
        })
        // console.log('Vue.focusIndex after filter')
        // console.log(Vue.focusIndex)
        // console.log('Vue.dataNew.data.data')
        // console.log(Vue.dataNew.data.data)
        let itemTarget = Vue.dataNew.data.data[Vue.focusIndex]
        // console.log(itemTarget)
        // return
        let disabledCheck = false
        if (itemTarget && itemTarget.disabled) disabledCheck = itemTarget.disabled
        // console.log(disabledCheck)
        while (disabledCheck) {
          Vue.focusIndex = Vue.focusIndex + _param.change
          if (_param.change > 0) {
            // Vue.focusIndex++
          } else if (_param.change > 0) {
            Vue.focusIndex--
          }
          Vue.focusIndex = Vue.countFilter({
            count: Vue.focusIndex,
            keyCode: _param.keyCode
          })
          itemTarget = Vue.dataNew.data.data[Vue.focusIndex]
          disabledCheck = itemTarget.disabled
        }
      }
      // console.log('before setfocus')
      Vue.$itemFocusData = Vue.dataNew.data.data[Vue.focusIndex]
      Vue.itemFocusRefsElName = `${Vue.dataNew.data.itemName}_${Vue.focusIndex}-compList${Vue.dataNew.type}`
      return {
        $itemFocusData: Vue.$itemFocusData,
        itemFocusRefsElName: Vue.itemFocusRefsElName
      }
      // $('.focus').removeClass('focus')
      // $(Vue.itemFocusRefsElName).addClass('focus')
      // $(Vue.itemFocusRefsElName).focus()
    },
    cKeydown: async function (_event) {
      // console.log('contentKeydown fun listtag')
      _event.stopPropagation()
      let Vue = this
      // console.log('Vue.dataNew.nav.itemFocus')
      // console.log(Vue.dataNew.nav.itemFocus)
      let $itemFocus = {}
      let $itemFocusNew = {}
      Vue.itemLast = Vue.dataNew.nav.itemFocus
      $itemFocus = await Vue.getItemFocusCurr({
        itemFocus: Vue.dataNew.nav.itemFocus
      })
      // console.log('Vue.itemLast')
      // console.log(Vue.itemLast)
      // console.log('$itemFocus')
      // console.log($itemFocus)
      // let countId = Vue.itemFocus.getAttribute('data-count')
      if (!Vue.$itemFocusData) Vue.$itemFocusData = Vue.dataNew.data.data[0]
      if (Vue.focusIndex < 0) Vue.focusIndex = 0
      // Vue.itemFocusRefsElName = Vue.$itemFocusData.name
      Vue.$set(Vue, 'itemFocusRefsElName', Vue.dataNew.nav.itemFocus)
      // console.log('Vue.focusIndex')
      // console.log(Vue.focusIndex)
      // console.log('Vue.$itemFocusData')
      // console.log(Vue.$itemFocusData)
      // console.log('Vue.itemFocusRefsElName')
      // console.log(Vue.itemFocusRefsElName)
      let res = {}
      switch (_event.keyCode) {
        case 13:
          // console.log('case 13')
          let param = {
            keyCode: _event.keyCode,
            itemFocus: Vue.dataNew.nav.itemFocus,
            itemFocusId: Number(Vue.dataNew.nav.itemFocus.split('-')[0].split('_')[1]),
            itemLast: Vue.itemLast,
            itemLastId: Number(Vue.itemLastId),
            itemFocusObj: $itemFocusNew,
            focusOut: false,
            refsElName: 'compList' + Vue.dataNew.type,
            link: Vue.$itemFocusData.link
          }
          // console.log('param')
          // console.log(param)
          Vue.$emit('getfocus', param)
          break
        case 37:
        case 39:
        case 38:
        case 40:
          switch (_event.keyCode) {
            case 37:
              // console.log('content left')
              _event.preventDefault()
              res = Vue.getFocus({
                change: -1,
                keyCode: _event.keyCode
              })
              break
            case 39:
              // console.log('content right')
              _event.preventDefault()
              res = Vue.getFocus({
                change: +1,
                keyCode: _event.keyCode
              })
              break
            case 38:
              // up
              // console.log('content up')
              _event.preventDefault()
              res = Vue.getFocus({
                change: -Vue.colCount,
                keyCode: _event.keyCode
              })
              break
            case 40:
              // console.log('content down')
              // down
              _event.preventDefault()
              res = Vue.getFocus({
                change: +Vue.colCount,
                keyCode: _event.keyCode
              })
              break
          }
          // console.log('res')
          // console.log(res)
          // console.log('Vue.dataNew.data.itemName')
          // console.log(Vue.dataNew.data.itemName)
          Vue.$set(Vue, 'itemFocus', res.itemFocusRefsElName)
          // console.log('Vue.itemFocus')
          // console.log(Vue.itemFocus)
          if (Vue.itemFocus.indexOf(Vue.dataNew.data.itemName) >= 0) {
            $itemFocusNew = await Vue.getItemFocusCurr({
              itemFocus: Vue.itemFocus
            })
            // console.log('$itemFocusNew')
            // console.log($itemFocusNew)
            $($itemFocusNew).focus()
            Vue.focusOut = false
          } else {
            if (Vue.itemFocus === Vue.dataNew.nav.compLangItem ||
            Vue.itemFocus === Vue.dataNew.nav.itemMail) {
              // console.log('lang or email')
            }
            $($itemFocus).blur()
            Vue.focusOut = true
          }
          Vue.$emit('getfocus', {
            keyCode: _event.keyCode,
            itemFocus: Vue.itemFocus,
            itemFocusId: Number(Vue.itemFocus.split('-')[0].split('_')[1]), // .slice(Vue.dataNew.data.itemName.length)),
            itemLast: Vue.itemLast,
            itemLastId: Number(Vue.itemLastId),
            itemFocusObj: Vue.$itemFocusNew,
            focusOut: Vue.focusOut,
            refsElName: 'compList' + Vue.dataNew.type
          })
          break

        case 8:
        case 461:
          // back
          Vue.itemFocus = Vue.dataNew.nav.itemFocus
          Vue.$emit('getfocus', {
            keyCode: _event.keyCode,
            itemFocus: Vue.itemFocus,
            itemFocusId: Number(Vue.itemFocus.split('-')[0].split('_')[1]), // slice(Vue.dataNew.data.itemName.length)
            itemLast: Vue.itemLast,
            itemLastId: Number(Vue.itemLastId),
            itemFocusObj: $itemFocusNew,
            focusOut: Vue.focusOut,
            refsElName: `compList${Vue.dataNew.type}`
          })
          break
      }
    }
  },
  mounted: function () {
    let Vue = this
    if (!Vue.data) return
    if (Vue.data) {
      Vue.$set(Vue, 'dataNew', Vue.data)
      // console.log('Vue.dataNew.data.data.length')
      // console.log(Vue.dataNew.data.data.length)
      // console.log('Vue.colCount')
      // console.log(Vue.colCount)
      Vue.$set(Vue, 'itemLength', Vue.dataNew.data.data.length)
      Vue.$set(Vue, 'focusFilter', Vue.itemLength % Vue.colCount)
    }

    Vue.$nextTick(() => {})
  }
}
</script>
<style lang="scss">

</style>
