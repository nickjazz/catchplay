<template>
  <div class="list" :ref="'list'">
    <p>dataNew.quickview: {{dataNew.quickview}}</p>
    <div
      v-if="
        dataNew &&
          dataNew.conType &&
          dataNew.conType !== '' &&
          dataNew.data &&
          dataNew.data.data.length > 0 &&
          dataNew.data.listWidth > 0
      "
      class="list-con"
      :class="`list-con-in list-${dataNew.type}`"
      :conType="`${dataNew.conType ? dataNew.conType : 'video'}`"
      :ref="`list-${dataNew.type}`"
      @keydown="cKeydown($event)"
      :style="
        `width: ${
          dataNew && dataNew.data && dataNew.data.listWidth
            ? dataNew.data.listWidth
            : 1280
        }px;`
      "
    >
      <div
        :style="
          `${
            dataNew.conType === 'video' ? 'width: 1920px;' : ''
          } overflow: hidden;`
        "
        :id="`list-${data.listId}`"
      >
        <div
          :style="
            `width: ${
              dataNew && dataNew.data && dataNew.data.listWidth
                ? dataNew.data.listWidth
                : 1280
            }px;`
          "
          id="wrapper-bscroll-wrapper"
        >
          <ul
            v-if="
              dataNew &&
                dataNew.data &&
                dataNew.data.data.length > 0 &&
                dataNew.data.listWidth > 0
            "
            class="list-in"
            :ref="`list-${dataNew.type}-in`"
            :style="
              `width: ${
                dataNew && dataNew.data && dataNew.data.listWidth
                  ? dataNew.data.listWidth
                  : 1280
              }px;`
            "
          >
            <li
              v-for="(item1, index1) in listColCount"
              :key="`col_${index1}`"
              class="col"
              :ref="`colConItem`"
            >
              <div
                v-for="(item2, index2) in dataNew.data.data.slice(
                  index1 * dataNew.data.col,
                  index1 * dataNew.data.col + dataNew.data.col
                )"
                :datakey="
                  `${dataNew.data.itemName}_${index1 * dataNew.data.col +
                    index2}-compList${dataNew.type}`
                "
                :dataid="`${index1 * dataNew.data.col + index2}`"
                :key="`item-${index1}-${index2}`"
                class="item"
                :class="{
                  on:
                    index1 * dataNew.data.col + index2 === dataNew.data.itemOnId
                }"
                :link="
                  dataNew.data.data[index1 * dataNew.data.col + index2].link
                "
                :url="dataNew.data.data[index1 * dataNew.data.col + index2].url"
                tabindex="1"
                :ref="
                  `${dataNew.data.itemName}_${index1 * dataNew.data.col +
                    index2}-compList${dataNew.type}`
                "
                :up="getVideoUpFun(index1, index2)"
                :down="getVideoDownFun(index1, index2)"
                :left="getVideoLeftFun(index1, index2)"
                :right="getVideoRightFun(index1, index2)"
                style="position: relative;"
                :id="item2.id ? item2.id : undefined"
              >
                <template v-if="dataNew.conType === 'video'">
                  <span class="pic">
                    <img :src="item2.image" />
                  </span>
                  <div class="txt">
                    <span
                      >{{ index1 * dataNew.data.col + index2 }}.
                      {{ item2.videoTitle }}</span
                    >
                  </div>
                  <div class="mask">
                    <span class="txt">
                      <span class="tit"
                        >{{ index1 * dataNew.data.col + index2 }}.
                        {{ item2.videoTitle }}</span
                      >
                      <span class="category">Romance</span>
                    </span>
                  </div>
                </template>
                <template v-else-if="dataNew.conType === 'tag'">
                  {{ item2.name }}
                </template>
                <template v-else-if="dataNew.conType === 'itemCustom'">
                  <slot
                    name="itemCustom"
                    :slotdata="{
                      item1: item1,
                      index1: index1,
                      item2: item2,
                      index2: index2,
                      col: dataNew.data.col
                    }"
                  >
                  </slot>
                </template>
                <div class="testmask">
                  <span>itemName: {{ dataNew.data.itemName }}</span>
                  <span class="tit">number:</span>
                  <!-- <br> -->
                  <!-- <span>{{`${dataNew.data.itemName}_${index1 * dataNew.data.col + index2}`}}</span> -->
                  <span
                    >move.up:
                    {{ dataNew.move.up ? dataNew.move.up : "?" }}</span
                  >
                  <br />
                  <span class="tit">u:</span>
                  <br />
                  <span
                    >{{ index1 }}, {{ index2 }} -
                    {{ getVideoUpFun(index1, index2) }}</span
                  >
                  <br />
                  <!-- <span class="tit">d:</span>
                <br>
                <span>{{index1}}, {{index2}} - {{getVideoDownFun(index1, index2)}}</span>
                <br>
                <span class="tit">l:</span>
                <br>
                <span>{{index1}}, {{index2}} - {{getVideoLeftFun(index1, index2)}}</span>
                <br>
                <span class="tit">r:</span>
                <br>
                <span>{{index1}}, {{index2}} - {{getVideoRightFun(index1, index2)}}</span> -->
                </div>
              </div>
            </li>
            <div class="clear"></div>
          </ul>
        </div>
      </div>
      <!-- <p>0-----------------: dataNew.conType: {{dataNew.conType}}</p> -->
    </div>
  </div>
</template>
<script lang="js">
// import Velocity from 'velocity-animate' // 在组件中引入
// import 'velocity-animate/velocity.ui.js'
// import BScroll from 'better-scroll'
import funCommonMixin from '@/components/common/comps/funCompCommon.js'
import BScroll from 'better-scroll'
// import Slide from '@better-scroll/slide'
export default {
  name: 'listScrollHorizontal',
  mixins: [funCommonMixin],
  components: {
    // Scroll
  },
  props: {
    data: {
      listId: 0,
      scroll: null,
      type: [Object, Number, String],
      default: 'index'
    }
  },
  data: function () {
    return {
      dataNew: {
        listColCount: 1
      },
      itemFocus: '',
      itemLast: '',
      itemLastId: 0,
      focusOut: false,
      centerPos: 3,
      listColCount: 0,
      $itemFocusNew: {},
      $itemFocus: {},
      quickviewValue: {
        index: 0,
        itemFocusLeft: 0,
        itemFocusTop: 0,
        itemFocusW: 0,
        itemFocusH: 0,
        layerX: 0,
        layerY: 0
      },
      keyvisualValue: {
        index: 0
      },
      itemFocusId1: 0,
      // itemLastId: 0
      // scroll: {
      //   scrollCount: 0,
      //   scrollVideo: false,
      //   scrollMax: 0,
      //   scrollLeftBase: 8,
      //   scrollRightBase: 2,
      //   colCurr: 0,
      //   colShowCurr: 0,
      //   colW: 0,
      //   colH: 0
      // }
    }
  },
  // watch: {
  //   '$itemFocusNew': function (_v) {
  //     let Vue = this
  //     // console.log('itemFocusNew changed')
      
  //   }
  // },
  methods: {
    _initCompScroll: function () {
      this.scroll = new BScroll(`#list-${this.data.listId}`, {
        scrollX: true,
        scrollY: false,
        listenFlick: false,
        bounce: false,
        momentum: false
      })
      // this.scroll.on('scrollEnd', (evt) => this.$emit('scrollEnd', evt))
      // // // console.log(this.scroll)
    },
    scrollBy: function (width) {
      if (typeof width === 'number') this.scroll.scrollBy(width, 0, 500)
    },
    scrollNext: function (width, func) {
      if (typeof width === 'number') this.scroll.scrollBy(-width, 0, 500)
    },
    scrollToElement: function (el) {
      this.scroll.scrollToElement(el, 500)
    },
    keyvisualFun: function () {
      let Vue = this
      if (Vue.dataNew.keyvisual === 'all') {
          // console.log("if Vue.dataNew.keyvisual === 'all")
          Vue.$set(Vue.keyvisualValue, 'index', Vue.itemFocusId1)
        } else {
          if (Object.prototype.toString.call(Vue.dataNew.keyvisual) === '[object Array]' &&
          Vue.dataNew.keyvisual.length > 0 &&
          Vue.dataNew.keyvisual.indexOf(Vue.itemFocusId1) >= 0) {
            console.log('if keyvisual array and indexOf >= 0')
            Vue.$set(Vue.keyvisualValue, 'index', Vue.itemFocusId1)
          } else {
            console.log('if keyvisual false')
            Vue.$set(Vue.keyvisualValue, 'index', 0)
          }
        }
    },
    quickviewFun: function () {
      console.log('quickviewFun fun')
      let Vue = this
      let itemTarget = {}
      if (!Vue.$itemFocusNew) {
        itemTarget = Vue.$itemFocus
      } else {
        itemTarget = Vue.$itemFocusNew
      }
      // console.log('itemTarget', itemTarget)
      // console.log('Vue.itemFocusId1', Vue.itemFocusId1)
      if (itemTarget.getBoundingClientRect) {
        let itemFocusTop = itemTarget.getBoundingClientRect().top
        let itemFocusLeft = itemTarget.getBoundingClientRect().left
        // let itemFocusWidth
        
        Vue.$set(Vue.quickviewValue, 'itemFocusTop', itemFocusTop)
        Vue.$set(Vue.quickviewValue, 'itemFocusLeft', itemFocusLeft)
        let posValue = Vue.setLayerInfoPos(Vue.quickviewValue)
        // // console.log('posValue', posValue)
        Vue.$set(Vue.quickviewValue, 'layerX', posValue.x)
        Vue.$set(Vue.quickviewValue, 'layerY', posValue.y)
        // console.log('Vue.dataNew.quickview', Vue.dataNew.quickview)
        if (Vue.dataNew.quickview === 'all') {
          // console.log("if Vue.dataNew.quickview === 'all")
          Vue.$set(Vue.quickviewValue, 'index', Vue.itemFocusId1)
        } else {
          if (Object.prototype.toString.call(Vue.dataNew.quickview) === '[object Array]' &&
          Vue.dataNew.quickview.length > 0 &&
          Vue.dataNew.quickview.indexOf(Vue.itemFocusId1) >= 0) {
            console.log('if quickview array and indexOf >= 0')
            Vue.$set(Vue.quickviewValue, 'index', Vue.itemFocusId1)
          } else {
            console.log('if quickview false')
            Vue.$set(Vue.quickviewValue, 'index', 0)
          }
        }
        // console.log('Vue.quickviewValue', Vue.quickviewValue)
        // // console.log('Vue.$refs[Vue.itemFocus]')
        // // console.log(Vue.$refs[Vue.itemFocus])
      }
    },
    cKeydown: async function (_event) {
      // console.log('cKeydown fun')
      // // // console.log(_event.keyCode)
      _event.stopPropagation()
      _event.preventDefault()
      let Vue = this
      // // console.log('Vue.$itemFocusNew', Vue.$itemFocusNew)
      // let $itemFocus = {}
      // let $itemFocusNew = {}
      if (Vue.dataNew.nav.itemFocus.indexOf(Vue.dataNew.data.itemName) < 0) return
      Vue.itemLast = Vue.dataNew.nav.itemFocus

      Vue.$itemFocus = await Vue.getItemFocusCurr({
        itemFocus: Vue.dataNew.nav.itemFocus
      })
      // // // console.log('$itemFocus fun')
      if (!Vue.$itemFocus || !Vue.$itemFocus.attributes) return
      Vue.itemLastId = Vue.$itemFocus.attributes.dataid.value
      switch (Number(_event.keyCode)) {
        case 13:
          let itemFocusId0 = Number(Vue.dataNew.nav.itemFocus.split('-')[0].split('_')[1])
          let itemLastId0 = Number(Vue.itemLastId)
          let param0 = {
            keyCode: _event.keyCode,
            itemFocus: Vue.dataNew.nav.itemFocus,
            itemFocusId: itemFocusId0,
            itemLast: Vue.itemLast,
            itemLastId: itemLastId0,
            itemFocusObj: Vue.$itemFocusNew,
            focusOut: false,
            refsElName: 'compList' + Vue.dataNew.type,
            link: Vue.$itemFocus.attributes.link.value
          }
          Vue.$emit('getfocus', param0)
          break
        case 37:
        case 39:
        case 38:
        case 40:
          // // // console.log('keyCodecase')
          
          switch (Number(_event.keyCode)) {
            case 37:
              // // // console.log('case 37')
              if (!Vue.$itemFocus.attributes.left || !Vue.$itemFocus.attributes.left.value) return
              if (Vue.dataNew.nav.itemFocus.indexOf(Vue.dataNew.data.itemName) >= 0) {
                Vue.getColCurr('left', Vue.$itemFocus)
                // // // console.log('case left')
                // Vue.getItemFocus(Vue.dataNew.nav.itemFocus)
                if (Vue.dataNew.data.colShowCurr <= 1) {
                  Vue.scrollCompFun('left', Vue.$itemFocus)
                  // Vue.scrollCompFun({
                  //   _type: 'left',
                  //   _container: Vue.$refs[`list`],
                  //   _con1: $itemFocus.attributes.left.value,
                  //   _con2: $itemFocus.attributes.right.value
                  // })
                } else {
                  Vue.itemFocus = Vue.$itemFocus.attributes.left.value
                }
              }

              // Vue.$set(Vue.dataNew.nav, 'itemFocus', $itemFocus.attributes.left.value)
              break
            case 39:
              // // // console.log('case 39')
              if (!Vue.$itemFocus.attributes.right || !Vue.$itemFocus.attributes.right.value) return
              if (Vue.dataNew.nav.itemFocus.indexOf(Vue.dataNew.data.itemName) >= 0) {
                Vue.getColCurr('right', Vue.$itemFocus)
                if (Vue.dataNew.data.colShowCurr > 1) {
                  // Vue.scrollCompFun({
                  //   _type: 'right',
                  //   _container: Vue.$refs[`list`],
                  //   _con1: $itemFocus.attributes.left.value,
                  //   _con2: $itemFocus.attributes.right.value
                  // })
                  Vue.scrollCompFun('right', Vue.$itemFocus, Vue.$itemFocus.attributes.right.value)
                } else {
                  // Vue.itemLastId = $itemFocus.attributes.dataid
                  Vue.itemFocus = Vue.$itemFocus.attributes.right.value
                  // Vue.$set(Vue.dataNew.nav, 'itemFocus', $itemFocus.attributes.right.value)
                  // Vue.itemFocus = $itemFocus.attributes.right.value
                }
                // Vue.itemFocus = $itemFocus.attributes.left.value
              }
              // Vue.$set(Vue.dataNew.nav, 'itemFocus', $itemFocus.attributes.right.value)
              break
            case 38:
              // // // console.log('case 39')
              if (!Vue.$itemFocus.attributes.up || !Vue.$itemFocus.attributes.up.value) return
              // Vue.itemLastId = $itemFocus.attributes.dataid
              Vue.itemFocus = Vue.$itemFocus.attributes.up.value
              // Vue.$set(Vue.dataNew.nav, 'itemFocus', $itemFocus.attributes.up.value)
              break
            case 40:
              // // // console.log('case 40')
              if (!Vue.$itemFocus.attributes.down || !Vue.$itemFocus.attributes.down.value) return
              Vue.itemFocus = Vue.$itemFocus.attributes.down.value
              break
          }
          // // console.log('after move 1')
          // // // console.log('after move Vue.itemFocus: ' + Vue.itemFocus)
          if (Vue.itemFocus.indexOf(Vue.dataNew.data.itemName) >= 0) {
            Vue.$itemFocusNew = await Vue.getItemFocusCurr({
              itemFocus: Vue.itemFocus
            })
            $(Vue.$itemFocusNew).focus()
            Vue.focusOut = false
          } else {
            if (Vue.itemFocus === Vue.dataNew.nav.compLangItem ||
            Vue.itemFocus === Vue.dataNew.nav.itemMail) {
            }
            Vue.$itemFocusNew = undefined
            Vue.dataNew.quickview = null
            $(Vue.$itemFocus).blur()
            Vue.focusOut = true
          }
          // console.log('after move 2')
          // // console.log('Vue.$itemFocus', Vue.$itemFocus)
          // // console.log('Vue.$itemFocusNew', Vue.$itemFocusNew)
          // // // console.log('$itemFocus.getBoundingClientRect().top', $itemFocus.getBoundingClientRect().top)
          // // // console.log('Vue.$itemFocusNew', Vue.$itemFocusNew)
          if (Vue.$itemFocusNew) {
            Vue.itemFocusId1 = Number(Vue.itemFocus.split('-')[0].split('_')[1])
            Vue.itemLastId1 = Number(Vue.itemLastId)
          } else {
            // console.log('if no itemfocusnew')
            // console.log(Vue.$itemFocus)
            // console.log(Vue.dataNew.nav)
            Vue.itemFocusId1 = (Vue.data && Vue.data.nav && Vue.data.nav.itemFocus && Vue.data.nav.itemFocus !== '')? Number(Vue.data.nav.itemFocus.split('-')[0].split('_')[1]): undefined
            Vue.itemLastId1 = (Vue.data && Vue.data.nav && Vue.data.nav.itemFocus && Vue.data.nav.itemFocus !== '')? Number(Vue.data.nav.itemFocus.split('-')[0].split('_')[1]): undefined
            // Vue.itemLastId1 = Number(Vue.dataNew.nav.itemLastId)
          }
          // console.log('Vue.itemFocusId1', Vue.itemFocusId1)
          // console.log('Vue.itemLastId1', Vue.itemLastId1)
          
          Vue.quickviewFun() // test
          Vue.keyvisualFun()
          let param1 = {
            keyCode: _event.keyCode,
            itemFocus: Vue.itemFocus,
            itemFocusId: Vue.itemFocusId1, // .slice(Vue.dataNew.data.itemName.length)),
            itemLast: Vue.itemLast,
            itemLastId: Vue.itemLastId1,
            itemFocusObj: Vue.$itemFocusNew,
            focusOut: Vue.focusOut,
            refsElName: 'compList' + Vue.dataNew.type,
            quickview: Vue.quickviewValue,
            keyvisual: Vue.keyvisualValue
          }
          // // // // console.log('param1', param1)
          Vue.$emit('getfocus', param1)
          break
        case 8:
        case 461:
          Vue.itemFocus = Vue.dataNew.nav.itemFocus
          let itemFocusId2 = Number(Vue.itemFocus.split('-')[0].split('_')[1])
          let itemLastId2 = Number(Vue.itemLastId)
          let param2 = {
            keyCode: _event.keyCode,
            itemFocus: Vue.itemFocus,
            itemFocusId: itemFocusId2, // slice(Vue.dataNew.data.itemName.length)
            itemLast: Vue.itemLast,
            itemLastId: itemLastId2,
            itemFocusObj: Vue.$itemFocusNew,
            focusOut: Vue.focusOut,
            refsElName: `compList${Vue.dataNew.type}`
          }
          Vue.$emit('getfocus', param2)
          break
      }
      // // // // console.log(this.dataNew, 'datanew')
    },
    sendItemFocusStr: function (_itemFocusStr) {
      // let Vue = this
      // Vue.$emit('getfocus', _itemFocusStr)
      return _itemFocusStr
    },
    getItemFocus: function (_itemFocusStr) {
      // // // // // console.log('getItemFocus nav fun')
      let Vue = this
      // // // // // console.log(_itemFocusStr)
      // // // // // console.log(Vue.$refs[_itemFocusStr])

      return Vue.$refs[_itemFocusStr]
    },
    getVideoUpFun: function (_index1, _index2) {
      let Vue = this
      if (Vue.dataNew.data.col > 1) {
        if ((_index1 * Vue.dataNew.data.col + _index2) % Vue.dataNew.data.col === 0) {
          return Vue.dataNew.move.up ? Vue.dataNew.move.up : undefined
        } else {
          if ((_index1 * Vue.dataNew.data.col + _index2) - (Vue.dataNew.data.col - 1) >= 0) {
            return `${Vue.dataNew.data.itemName}_${(_index1 * Vue.dataNew.data.col + _index2) - (Vue.dataNew.data.col - 1)}-compList${Vue.dataNew.type}`
          } else {
            // return undefined
          }
        }
      } else {
        if ((_index1 * Vue.dataNew.data.col + _index2) % Vue.dataNew.data.col === 0) {
          return Vue.dataNew.move.up ? Vue.dataNew.move.up : undefined
        }
      }
    },
    getVideoDownFun: function (_index1, _index2) {
      let Vue = this
      if (Vue.dataNew.data.col > 1) {
        if ((_index1 * Vue.dataNew.data.col + _index2) % Vue.dataNew.data.col === (Vue.dataNew.data.col - 1)) {
          return Vue.dataNew.move.down ? Vue.dataNew.move.down : undefined
        } else if ((_index1 * Vue.dataNew.data.col + _index2) % Vue.dataNew.data.col < (Vue.dataNew.data.col - 1) && ((_index1 * Vue.dataNew.data.col + _index2) + 1) < Vue.dataNew.data.data.length) {
          return `${Vue.dataNew.data.itemName}_${(_index1 * Vue.dataNew.data.col + _index2) + 1}-compList${Vue.dataNew.type}`
        }
      } else {
        if ((_index1 * Vue.dataNew.data.col + _index2) % Vue.dataNew.data.col === (Vue.dataNew.data.col - 1)) {
          return Vue.dataNew.move.down ? Vue.dataNew.move.down : undefined
        }
      }
      // switch (Vue.dataNew.type) {
      //   case 'video0':
      //     if (Vue.dataNew.data.col > 1 &&
      //       (_index1 * Vue.dataNew.data.col + _index2) % Vue.dataNew.data.col === (Vue.dataNew.data.col - 1)) {

      //     }  else {
      //       // return undefined
      //     }
      //     break
      //   case 'season0':
      //   case 'like0':
      //     // // // // // console.log('seasn and like')

      //     break
      // }
    },
    getVideoLeftFun: function (_index1, _index2) {
      let Vue = this
      if (((_index1 * Vue.dataNew.data.col + _index2) - Vue.dataNew.data.col) >= 0) {
        return `${Vue.dataNew.data.itemName}_${(_index1 * Vue.dataNew.data.col + _index2) - Vue.dataNew.data.col}-compList${Vue.dataNew.type}`
      } else if (Vue.dataNew.move && Vue.dataNew.move.left) {
        return Vue.dataNew.move.left
      }
    },
    getVideoRightFun: function (_index1, _index2) {
      let Vue = this
      if (((_index1 * Vue.dataNew.data.col + _index2) + Vue.dataNew.data.col) < Vue.dataNew.data.data.length) {
        return `${Vue.dataNew.data.itemName}_${(_index1 * Vue.dataNew.data.col + _index2) + Vue.dataNew.data.col}-compList${Vue.dataNew.type}`
      } else if (Vue.dataNew.move && Vue.dataNew.move.right) {
        return Vue.dataNew.move.right
      }
    },
    getColCurr: function (_type, _$itemCurrFocus) {
      // // // console.log('getColCurr fun')
      // return
      let Vue = this
      // Vue.colCurr
      if (_type === 'left') {
      } else if (_type === 'right') {
      }
      let str = Vue.dataNew.data.itemName
      // // // console.log('str: ', str)
      // // // console.log('Vue.dataNew.nav.itemFocus: ', Vue.dataNew.nav.itemFocus)
      let videoIndex = Number(Vue.dataNew.nav.itemFocus.split('-')[0].split('_')[1])
      // // let focusOffsetLeft = ($itemFocus[0].offsetLeft / 1920)
      // // // console.log('videoIndex: ', videoIndex)
      if (videoIndex % Vue.dataNew.data.col === 0) {
        Vue.dataNew.data.colCurr = videoIndex / Vue.dataNew.data.col
      } else if (videoIndex % Vue.dataNew.data.col === 1) {
        Vue.dataNew.data.colCurr = (videoIndex - (Vue.dataNew.data.col - 1)) / Vue.dataNew.data.col
      }
      Vue.dataNew.data.colShowCurr = Vue.dataNew.data.colCurr + Vue.dataNew.data.scrollCount
      // let countForCurr = videoIndex + Vue.dataNew.data.scrollCount
    },
    scrollCompFun: async function (_type, _$itemCurrFocus, itemTo) {
      // // // console.log('scrollCompFun fun')
      let Vue = this
      if (Vue.dataNew.data.scrollItem) return
      Vue.dataNew.data.scrollItem = true
      if (_type === 'left') {
        Vue.dataNew.data.scrollCount++
      } else if (_type === 'right') {
        Vue.dataNew.data.scrollCount--
      }
      let scrollLeftTarget = Vue.dataNew.data.colW * Vue.dataNew.data.scrollCount
      if (scrollLeftTarget > 0) scrollLeftTarget = 0
      if (scrollLeftTarget < -Vue.dataNew.data.scrollMax) scrollLeftTarget = -Vue.dataNew.data.scrollMax

      // let toElement = _$itemCurrFocus
      // let container = Vue.$refs[`list-${Vue.dataNew.type}`]
      // let container = Vue.$refs[`list`]
      if (_type === 'left') {
        Vue.itemFocus = _$itemCurrFocus.attributes.left.value
      } else if (_type === 'right') {
        Vue.itemFocus = _$itemCurrFocus.attributes.right.value
      }
      if (_type === 'left') {
        // this.scrollToElement(document.querySelector(`div[datakey='${toElement.getAttribute('left')}']`))
        this.scrollBy(Vue.dataNew.data.colW * Vue.centerPos)
      } else if (_type === 'right') {
        // this.scrollToElement(document.querySelector(`div[datakey='${toElement.getAttribute('right')}']`))
        this.scrollBy(-Vue.dataNew.data.colW * Vue.centerPos)
      }
      // this.$refs.scroll.scrollToElement(el)
      // toElement.scrollLeft = -100
      Vue.dataNew.data.scrollItem = false
    },
    setInitParam: function () {
      let { dataNew, dataNew: { conType = null, data = null } } = this
      if (dataNew) {
        if (!conType || conType === '') {
          this.$set(this.dataNew, 'conType', 'video')
        }
        if (data && (!data.listWidth || data.listWidth === '')) {
          this.$set(data, 'listWidth', 1280)
        }
      }
      this.startInit()
    },
    setLayerInfoPos: function (_param) {
      // if (!_param || !_param.quickview || !_param.quickview.index) return
      let Vue = this
      console.log('setLayerInfoPos fun', _param)
      let layerW = 600
      let layerH = 450
      let alphaW = 1920 - layerW
      let alphaH = 1080 - layerH

      let showPaddingL = 0
      let showPaddingR = 0
      let showPaddingT = 0
      let showPaddingB = 0

      let modW = 1920
      let modH = 1080
      let modX = 0
      let modY = 0
      let itemX = _param.itemFocusLeft
      let itemY = _param.itemFocusTop
      let layerX = 0
      let layerY = 0
      let options = {
        xPos: 0,
        yPos: 0
      }
      // layerX = modX - itemX + modW + options.xPos;
      // layerY = modY - itemY + modH + options.yPos;

      layerX = itemX - modX //  + modW + options.xPos;
      console.log('itemX - modX: ', `${itemX} - ${modX}`)
      console.log('layerX=', layerX)
      layerY = itemY - modY // + modH + options.yPos;
      console.log('itemY - modY: ', `${itemY} - ${modY}`)
      console.log('layerY=', layerY)
      if( layerX >= alphaW ){
        layerX = itemX - modX - layerW - showPaddingL - showPaddingR + options.xPos;
        console.log('itemX - modX - layerW: ', `${itemX} - ${modX} - ${layerW}`)
        console.log('layerX=', layerX)
      }
      if( layerY >= alphaH ){
        // layerY = itemY - modY - layerH - showPaddingT - showPaddingB + options.yPos;
        layerY = modH - 60 - layerH
        // console.log('itemY - modY - layerH: ', `${itemY} - ${modY} - ${layerH}`)
        console.log('modH - 60 - layerH: ', `${modH} - 60 - ${layerH}`)
        console.log('layerY=', layerY)
      }
      
      return {
        x: layerX,
        y: layerY
      }
    },
    startInit: function () {
      let Vue = this
      let { $refs, $refs: { colConItem = null } } = Vue
      Vue.centerPos = Vue.dataNew.data.centerPos
      Vue.listColCount = Math.ceil(Vue.dataNew.data.data.length / Vue.dataNew.data.col)
      Vue.$nextTick(() => {
        if (Vue.dataNew.nav.itemFocus.indexOf(Vue.dataNew.data.itemName) >= 0) {
          $(Vue.dataNew.nav.itemFocus).focus()
        }
        if (colConItem && colConItem.length) {
          if (colConItem[0].offsetWidth) {
            Vue.$set(Vue.quickviewValue, 'itemFocusW', colConItem[0].offsetWidth)
            Vue.dataNew.data.colW = colConItem[0].offsetWidth
          } 
          if (colConItem[0].offsetHeight) {
            Vue.$set(Vue.quickviewValue, 'itemFocusH', colConItem[0].offsetHeight)
            Vue.dataNew.data.colH = colConItem[0].offsetHeight
          } 
        }
        // // // console.log('Vue.dataNew.data.colW', Vue.dataNew.data.colW)
        // // // console.log('Vue.dataNew.data.colH', Vue.dataNew.data.colH)
        Vue.$set(Vue.dataNew.data, 'listWidth', Vue.dataNew.data.colW * (Vue.listColCount + 0))
        // Vue.scrollMax = Vue.dataNew.data.colW * (dataNew.data.listColCount + 0 - 7)
        if (Vue.$refs[`list-${Vue.dataNew.type}`] && Vue.$refs[`list-${Vue.dataNew.type}`].scrollWidth) Vue.dataNew.data.scrollMax = Vue.$refs[`list-${Vue.dataNew.type}`].scrollWidth
      })
    }
  },
  updated: async function () {
    // console.log('upated 111111111111')
    let Vue = this
    if (!Vue.data) return
    Vue.$set(Vue, 'dataNew', Vue.data)
    await Vue.setInitParam()
    // Vue.quickviewFun()
  },
  mounted: async function () {
    // console.log('mounted 22222222222')
    let Vue = this
    if (!Vue.data) return
    Vue.$set(Vue, 'dataNew', Vue.data)
    await Vue.setInitParam()
    this._initCompScroll()
  }
}
</script>
<style lang="scss" scoped>
@import "@/assets/css/common.scss";
.list {
  padding-left: 80px;
  padding-top: 40px;
  overflow: hidden;
  .list-con {
    display: block;
    width: 100%;
    // border: 1px solid #f00;
    // overflow: hidden;
    // overflow: scroll;
    overflow: visible;
    // padding-left: 80px;
    // padding-top: 40px;
    padding-left: 0;
    padding-top: 0;
    box-sizing: border-box;
    // height: 5000px;
    // border: 1px solid #f00;
    // height: 780px; /* test */
    .list-in {
      display: block;
      width: 100%;
      // height: 650px; /* test */
      overflow: visible;
    }
    .col {
      display: inline-block;
      width: 210px;
      padding-right: 40px;
      vertical-align: top;
      .item {
        width: 100%;
        margin-bottom: 36px;
        height: 353.5px;
        border-radius: 12px;
        // border: 1px solid #00f;
        position: relative;
        .pic {
          display: block;
          width: 100%;
          height: 310px; /* 260 test 310px original */
          margin-bottom: 10px;
          border-radius: 12px;
          overflow: hidden;
          img {
            width: 100%;
            height: 100%;
            vertical-align: top;
          }
        }
        .txt {
          // border: 1px solid #f00;
          width: 100%;
          height: 34px;
          line-height: 34px;
          font-size: 28px;
          color: #fff;
          padding: 0 10px;
          overflow: hidden;
          box-sizing: border-box;
          span {
            display: inline-block;
            font-size: 28px;
            line-height: 34px;
            height: 34px;
            width: auto;
          }
        }
        .mask {
          display: none;
          border: 5px solid #d02622;
          width: 100%;
          height: 100%;
          box-sizing: border-box;
          position: absolute;
          left: 0;
          top: 0;
          border-radius: 10px;
          .txt {
            display: block;
            // height: 64px;
            // background: #d02622;
            background: rgba(208, 38, 34, 0.9);
            position: absolute;
            left: 0;
            bottom: -4px;
            padding-top: 8px;
            height: 64px;
            .tit,
            .category {
              display: block;
            }
            .tit {
              font-size: 25px;
              line-height: 26px;
            }
            .category {
              font-size: 18px;
              line-height: 20px;
              margin-top: -6px;
              font-weight: 200;
            }
          }
        }
        // &.on,
        &:focus {
          .pic {
            // height: 300px;
          }
          .txt {
            display: none;
          }
          .mask {
            display: block;
            height: 330px;
            .txt {
              display: block;
            }
          }
          // border: 1px solid #f00;
        }
        // &.on,
        &:focus {
          // border: 5px solid #00f !important;
        }
      }
    }
    &.list-con-in {
      &[conType="video"] {
        .col {
          .item {
            .pic {
              img {
                border-radius: 12px;
              }
            }
            // &.on,
            &:focus {
              transform: scale(1.19);
              .pic {
                height: 289.5px;
                img {
                  height: 310px;
                }
              }
            }
          }
        }
      }
    }

    &.list-Like0,
    &.list-Season0 {
      .col {
        .item {
          height: 370px;
          .pic {
            .item {
              border-radius: 12px 12px 0 0;
            }
          }
          // &.on,
          &:focus {
            transform: scale(1.1);
            .pic {
              height: 310px;
            }
            .mask {
              height: 100%;
              .txt {
                background: rgba(208, 38, 34, 0.5);
              }
            }
          }
        }
      }
    }
  }
  &.list-a9-season,
  &.list-preview0,
  &.list-trailer0,
  &.list-video0,
  &.list-videobycate0 {
    position: relative;
    height: 290px;
    // border: 2px solid #faa;
    .list-con {
      &.list-con-in {
        // overflow: hidden;
        &[conType="video"] {
          // border: 2px solid #aaf;
          .col {
            width: 410px;
            padding-bottom: 38px;
            padding-top: 20px;
            .item {
              // border: 2px solid #f00;
              height: 290px;
              background: rgba(255, 255, 255, 0.1);
              margin-bottom: 0;
              .pic {
                height: 230px;
                border-radius: 12px 12px 0 0;
                margin-bottom: 0;
                img {
                  border-radius: 12px 12px 0 0;
                }
              }
              .txt {
                height: 60px;
                line-height: 60px;
                border-radius: 0 0 12px 12px;
              }
              // &.on,
              &:focus {
                background: rgba(208, 38, 34, 0.5);
                transform: scale(1.1);
                .txt {
                  display: block !important;
                }
                .mask {
                  display: block !important;
                  height: 290px;
                  .txt {
                    display: none !important;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  &.list-video0,
  &.list-videobycate0 {
    padding-top: 0;
    .list-con {
      &.list-con-in {
        &[conType="video"] {
          .col {
            .item {
              margin-bottom: 30px;
            }
          }
        }
      }
    }
  }
  &.list-actor0 {
    .list-con {
      &.list-con-in {
        &[conType="video"] {
          .col {
            .item {
              &:focus {
                border-color: #f8b500 !important;
                .txt {
                  display: block;
                }
                // background: #f8b500!important;
              }
            }
          }
        }
      }
    }
  }
  &.list-category1 {
    .list-Category1 {
      padding-bottom: 0;
    }
  }
  div,
  ul {
    &[conType="tag"] {
      .col {
        width: 350px !important;
        .item {
          border-radius: 0 !important;
          width: 338px !important;
          &.on {
            border-color: #f8b500;
            color: #f8b500;
          }
        }
      }
    }
  }
  &.list-a9-season {
    padding-top: 0!important;
    // border: 5px solid #ff0;
    height: auto;
    .list-con-in {
      padding: 30px;
      overflow: visible;
      > div {
        overflow: visible!important;
      }
    }
  }
  @at-root .template-a9-show {
    & {
      .list-con {
        &.list-con-in {
          &[conType="video"] {
            .col {
              .item {
                &:focus {
                  transform: scale(1.2)!important;
                }
              }
              &:nth-child(1) {
                .item {
                  &:focus {
                    transform: scale(1.2) translateX(50)!important;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
