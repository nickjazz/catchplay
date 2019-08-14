<template>
  <div class="mod-language">
    <template v-if="
      data.type === '0' &&
      data &&
      dataNew &&
      dataNew.nav &&
      languageForEdit &&
      languageForEdit !== null">
      <!-- <p>{{dataNew.nav.compListVideoFocus}}</p> -->
    <!-- <p>up: {{(dataNew.move && dataNew.move.up)? dataNew.move.up: undefined}}</p> -->
    <!-- <p>down: {{(dataNew.move && dataNew.move.down)? dataNew.move.down: undefined}}</p> -->
    <!-- <p>left: {{(dataNew.move && dataNew.move.left)? dataNew.move.left: undefined}}</p> -->
    <!-- <p>right: {{(dataNew.move && dataNew.move.right)? dataNew.move.right: undefined}}</p> -->
      <div
        :class="['mod-language-in', className, classFun]"
        tabindex="1"
        :ref="`${dataNew.nav.compLangItem}-${dataNew.nav.compLangItem}${dataNew.type}`"
        :datakey="`${dataNew.nav.compLangItem}-${dataNew.nav.compLangItem}${dataNew.type}`"
        :up="(dataNew.move && dataNew.move.up)? dataNew.move.up: undefined"
        :down="(dataNew.move && dataNew.move.down)? dataNew.move.down: undefined"
        :left="(dataNew.move && dataNew.move.left)? dataNew.move.left: undefined"
        :right="(dataNew.move && dataNew.move.right)? dataNew.move.right: undefined"
        @keydown="cKeydown($event)"
        >
        <div class="mod-language0-in" v-if="dataNew && dataNew.data && languageForEdit">
          <div
            class="item-selected"
            v-if="!languageForEdit.listSelectOpen"
            tabindex="1"
            :ref="`languageSelected-${dataNew.nav.compLangItem}${dataNew.type}`"
            :datakey="`languageSelected-${dataNew.nav.compLangItem}${dataNew.type}`"
          >
            <span class="txt">{{languageForEdit.languageSelected.language}}</span>
            <b class="arrow"></b>
          </div>
          <ul class="list-language0" v-if="languageForEdit.listSelectOpen">
            <li
              v-for="(item, index) in languageForEdit.data"
              :data-link="item.key"
              :data-value="item.language"
              :data-id="index"
              :class="dataNew.nav.itemFocus === `${languageForEdit.itemName}_${index}-${dataNew.nav.compLangItem}${dataNew.type}`? 'on':''"
              :key="`language_${index}`"
              tabindex="1"
              :ref="`${languageForEdit.itemName}_${index}-${dataNew.nav.compLangItem}${dataNew.type}`"
              :datakey="`${languageForEdit.itemName}_${index}-${dataNew.nav.compLangItem}${dataNew.type}`"
              :up="(index - 1 >= 0)? `${languageForEdit.itemName}_${index - 1}-${dataNew.nav.compLangItem}${dataNew.type}`:undefined"
              :down="(index + 1) < languageForEdit.data.length? `${languageForEdit.itemName}_${index + 1}-${dataNew.nav.compLangItem}${dataNew.type}`:undefined"
              :left="undefined"
              :right="undefined"
            >
              <span class="tit">{{item.language}}</span>
              <b class="arrow" v-if="dataNew.nav.itemFocus === `${languageForEdit.itemName}_${index}-${dataNew.nav.compLangItem}${dataNew.type}`"></b>
            </li>
          </ul>
        </div>
      </div>
    </template>
  </div>
</template>
<script lang="js">
import funCommonMixin from '@/components/common/comps/funCompCommon.js'
export default {
  name: 'mod-language',
  mixins: [funCommonMixin],
  components: {},
  props: {
    data: {
      type: [Object, Number, String],
      default: 'index'
    }
  },
  methods: {
    cKeydown: async function (_event) {
      _event.stopPropagation()
      // console.log('cKeydown fun language **************************: ' + _event.keyCode)
      // return
      let Vue = this
      let $itemFocus = {}
      let $itemFocusNew = {}

      // // console.log('Vue.dataNew.nav.itemFocus')
      // // console.log(Vue.dataNew.nav.itemFocus)
      // // console.log('Vue.languageForEdit.itemName')
      // // console.log(Vue.languageForEdit.itemName)
      // // console.log('Vue.dataNew.nav.compLangItem')
      // // console.log(Vue.dataNew.nav.compLangItem)
      if (Vue.dataNew.nav.itemFocus.indexOf(Vue.languageForEdit.itemName) < 0 &&
        Vue.dataNew.nav.itemFocus.indexOf(Vue.dataNew.nav.compLangItem) < 0) return
      Vue.itemLast = Vue.dataNew.nav.itemFocus
      // // console.log('Vue.itemLast')
      // // console.log(Vue.itemLast)

      $itemFocus = await Vue.getItemFocusCurr({
        itemFocus: Vue.dataNew.nav.itemFocus
      })
      if (!$itemFocus || !$itemFocus.attributes) return
      if ($itemFocus && $itemFocus.attributes && $itemFocus.attributes.dataid && $itemFocus.attributes.dataid.value) {
        Vue.itemLastId = $itemFocus.attributes.dataid.value
      } else {
        Vue.itemLastId = undefined
      }
      // // console.log('before switch')
      switch (_event.keyCode) {
        case 13:
          // console.log('case 13')
          // // console.log('Vue.dataNew.nav.itemFocus: ' + Vue.dataNew.nav.itemFocus)
          // // console.log('Vue.languageForEdit.itemName')
          // // console.log(Vue.languageForEdit.itemName)
          if (Vue.dataNew.nav.itemFocus.indexOf(`${Vue.languageForEdit.itemName}`) >= 0) {
            // console.log('if has Vue.languageForEdit.itemName')
            // let strOri = `${Vue.languageForEdit.itemName}-${Vue.dataNew.nav.compLangItem}${Vue.dataNew.type}`
            let strOri = Vue.dataNew.nav.itemFocus
            let str = strOri.split('-')[0]
            // let strL = str.length
            // let languageIndex = Number(str.slice(strL - 1))
            let languageIndex = str.split('_')[1]
            // let strOri = `${Vue.languageForEdit.itemName}-${Vue.dataNew.nav.compLangItem}${Vue.dataNew.type}`

            // let languageIndex = Vue.languageForEdit.itemFocus
            Vue.$set(Vue.languageForEdit, 'languageSelected', Vue.languageForEdit.data[languageIndex])
            Vue.$set(Vue.languageForEdit, 'listSelectOpen', false)
            Vue.$set(Vue.dataNew.nav, 'itemFocus', `${Vue.dataNew.nav.compLangItem}-${Vue.dataNew.nav.compLangItem}${Vue.dataNew.type}`)
            let itemFocus = await Vue.getItemFocusNew({
              itemFocus: Vue.dataNew.nav.itemFocus,
              refsElName: `${Vue.dataNew.nav.compLangItem}${Vue.dataNew.type}`
            })
            $(itemFocus).focus()
            // // console.log('itemFocus')
            // // console.log(itemFocus)
            // // console.log('Vue.languageForEdit.data')
            // // console.log(Vue.languageForEdit.data)
            // // console.log('Vue.languageForEdit.languageSelected')
            // // console.log(Vue.languageForEdit.languageSelected)
            let languageSelectedIndex = Vue.languageForEdit.data.indexOf(Vue.languageForEdit.languageSelected)
            // // console.log(languageSelectedIndex)
            Vue.itemFocus = Vue.dataNew.nav.itemFocus
            // // console.log('Vue.itemFocus: ' + Vue.itemFocus)
            Vue.itemLast = `${Vue.languageForEdit.itemName}_${languageSelectedIndex}-${Vue.dataNew.nav.compLangItem}${Vue.dataNew.type}`
            Vue.itemLastId = languageSelectedIndex
            // // console.log('before emit')
            // // console.log('Vue.focusOut')
            // // console.log(Vue.focusOut)
            Vue.$emit('getfocus', {
              keyCode: _event.keyCode,
              itemFocus: Vue.itemFocus,
              itemFocusId: undefined,
              itemLast: Vue.itemLast,
              itemLastId: Number(Vue.itemLastId),
              itemFocusObj: $itemFocusNew,
              focusOut: Vue.focusOut,
              refsElName: `${Vue.dataNew.nav.compLangItem}${Vue.dataNew.type}`
            })
          } else {
            // console.log('if need open select list ')
            // console.log('Vue.dataNew.nav.itemFocus')
            // console.log(Vue.dataNew.nav.itemFocus)
            // console.log(`${Vue.dataNew.nav.compLangItem}-${Vue.dataNew.nav.compLangItem}${Vue.dataNew.type}`)
            switch (Vue.dataNew.nav.itemFocus) {
              case `${Vue.dataNew.nav.compLangItem}-${Vue.dataNew.nav.compLangItem}${Vue.dataNew.type}`:
                let languageSelectedIndex = Vue.dataNew.data.data.indexOf(Vue.dataNew.data.languageSelected)
                // console.log(languageSelectedIndex)
                // Vue.$emit('getfocus', {
                //   keyCode: _event.keyCode,
                //   itemFocus: Vue.itemFocus,
                //   itemFocusId: undefined,
                //   itemLast: Vue.itemLast,
                //   itemLastId: Number(Vue.itemLastId),
                //   itemFocusObj: $itemFocusNew,
                //   focusOut: Vue.focusOut,
                //   refsElName: `${Vue.dataNew.nav.compLangItem}${Vue.dataNew.type}`
                // })
                Vue.$set(Vue.languageForEdit, 'listSelectOpen', true)
                Vue.$nextTick(async () => {
                  // console.log('nextTick aa')
                  Vue.$set(Vue.dataNew.nav, 'itemFocus', `${Vue.dataNew.data.itemName}_${languageSelectedIndex}-${Vue.dataNew.nav.compLangItem}${Vue.dataNew.type}`)
                  let itemFocus = await Vue.getItemFocusNew({
                    itemFocus: Vue.dataNew.nav.itemFocus,
                    itemLast: `${Vue.dataNew.nav.compLangItem}-${Vue.dataNew.nav.compLangItem}${Vue.dataNew.type}`,
                    keyCode: 13,
                    refsElName: `${Vue.dataNew.nav.compLangItem}${Vue.dataNew.type}`
                  }) // await
                  // return
                  // console.log('itemFocus')
                  // console.log(itemFocus)
                  // console.log('aaa')
                  $(itemFocus).focus()
                })
                // // console.log('Vue.dataNew.nav.itemFocus 2')
                // // console.log(Vue.dataNew.nav.itemFocus)
                break
            }
          }
          break
        case 37:
        case 39:
        case 38:
        case 40:
          // // console.log('moving language')
          // return
          switch (_event.keyCode) {
            case 37:
              if (!$itemFocus.attributes.left || !$itemFocus.attributes.left.value) return
              Vue.itemFocus = $itemFocus.attributes.left.value
              // // console.log('$itemFocus.attributes.left.value')
              // // console.log($itemFocus.attributes.left.value)
              // Vue.$set(Vue.dataNew.nav, 'itemFocus', $itemFocus.attributes.left.value)
              break
            case 39:
              if (!$itemFocus.attributes.right || !$itemFocus.attributes.right.value) return
              Vue.itemFocus = $itemFocus.attributes.right.value
              // Vue.$set(Vue.dataNew.nav, 'itemFocus', $itemFocus.attributes.right.value)
              break
            case 38:
              if (!$itemFocus.attributes.up || !$itemFocus.attributes.up.value) return
              // // console.log('$itemFocus.attributes.up.value')
              // // console.log($itemFocus.attributes.up.value)
              Vue.itemFocus = $itemFocus.attributes.up.value
              // Vue.$set(Vue.dataNew.nav, 'itemFocus', $itemFocus.attributes.up.value)
              break
            case 40:
              if (!$itemFocus.attributes.down || !$itemFocus.attributes.down.value) return
              // // console.log('$itemFocus.attributes.down.value')
              // // console.log($itemFocus.attributes.down.value)
              Vue.itemFocus = $itemFocus.attributes.down.value
              // Vue.$set(Vue.dataNew.nav, 'itemFocus', $itemFocus.attributes.down.value)
              break
          }
          // return
          // // console.log('Vue.itemFocus')
          // // console.log(Vue.itemFocus)
          // let strOri = `${Vue.languageForEdit.itemName}-${Vue.dataNew.nav.compLangItem}${Vue.dataNew.type}`
          let str = Vue.itemFocus.split('-')[0]
          // // console.log('str')
          // // console.log(str)
          // let languageIndex = Number(Vue.dataNew.nav.itemFocus.slice(str.length))
          Vue.$set(Vue.languageForEdit, 'itemFocus', Number(Vue.dataNew.nav.itemFocus.slice(str.length)))
          // // console.log()
          if (Vue.itemFocus.indexOf(Vue.dataNew.data.itemName) >= 0) {
            // // console.log('inside')
            $itemFocusNew = await Vue.getItemFocusCurr({
              itemFocus: Vue.itemFocus
            })
            $($itemFocusNew).focus()
            Vue.focusOut = false
          } else {
            // // console.log('outside')
            $($itemFocus).blur()
            Vue.focusOut = true
          }
          // console.log('Vue.itemFocus language before emit')
          // console.log(Vue.itemFocus)
          Vue.$set(Vue.dataNew.nav, 'itemFocus', Vue.itemFocus)
          Vue.$set(Vue.dataNew.data, 'itemFocus', Number(Vue.itemFocus.slice(Vue.dataNew.data.itemName.length)))
          // // console.log('Vue.focusOut')
          // // console.log(Vue.focusOut)
          let param = {
            keyCode: _event.keyCode,
            itemFocus: Vue.itemFocus,
            itemFocusId: Number(Vue.itemFocus.slice(Vue.dataNew.data.itemName.length)),
            itemLast: Vue.itemLast,
            itemLastId: Number(Vue.itemLastId),
            itemFocusObj: $itemFocusNew,
            focusOut: Vue.focusOut, // Vue.focusOut
            refsElName: `${Vue.dataNew.nav.compLangItem}${Vue.dataNew.type}`
          }
          // // console.log(param)
          if (Vue.focusOut) {
            // // console.log('if Vue.focusOut true param')
            // // console.log(param)
            Vue.$emit('getfocus', param)
          }

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
    let Vue = this
    if (!Vue.data) return
    if (Vue.data) Vue.dataNew = Vue.data
    Vue.className = `mod-language${Vue.data.type}`
    Vue.classFun = (Vue.dataNew.nav.itemFocus === Vue.dataNew.nav.compLangItem ||
          Vue.dataNew.nav.itemFocus.indexOf(`${Vue.dataNew.data.itemName}`) >= 0) ? 'on' : ''
    // Vue.dataNew.data = _.cloneDeep(Vue.dataNew.data)
    // // console.log('Vue.dataNew.data mounted')
    // // console.log(Vue.dataNew.data)
    Vue.languageForEdit = Vue._global.cloneObj(Vue.dataNew.data)
    // // console.log('Vue.dataNew.data')
    // // console.log(Vue.dataNew.data)
    Vue.$nextTick(() => {
      if (Vue.dataNew.nav.itemFocus.indexOf(Vue.dataNew.data.itemName) >= 0) {
        $(Vue.dataNew.nav.itemFocus).focus()
      }
    })
  }
}
</script>
<style lang="scss" scoped>
.mod-language {
  font-size: 30px!important;
  .mod-language-in {
    display: inline-block;
    width: 200px;
    min-height: 54px;
    margin-right: 72px;
    padding-top: 8px;
    .mod-language0-in {
      border: 1px solid #fff;
      font-size: 30px;
      border-radius: 12px;
      min-height: 54px;
      position: relative;
    }
    .item-selected {
      display: block;
      position: absolute;
      left: 0;
      top: 0;
      z-index: 5;
      padding-right: 60px;
      width: 100%;
      box-sizing: border-box;
      .txt {
        display: block;
        line-height: 54px;
        height: 54px;
        text-align: left;
        font-size: 30px;
        padding-left: 26px;
      }
      .arrow {
        display: block;
        width: 0;
        height: 0;
        border: 12px solid transparent;
        border-color: #fff transparent transparent transparent;
        position: absolute;
        right: 22px;
        top: 22px;
      }
    }
    .list-language0 {
      display: block;
      position: relative;
      z-index: 10;
      // position: absolute;
      // left: 0;
      // top: 0;
      border-radius: 12px;
      width: 100%;
      li {
        display: block;
        height: 54px;
        line-height: 54px;
        padding-right: 60px;
        position: relative;
        .tit {
          display: block;
          font-size: 30px;
          height: 54px;
          line-height: 54px;
          text-align: left;
          padding-left: 26px;
        }
        .arrow {
          display: block;
          width: 0;
          height: 0;
          border: 12px solid transparent;
          border-color: transparent #b02522 transparent transparent;
          position: absolute;
          right: 22px;
          top: 18px;
        }
        // &.on,
        &:focus {
          .tit {
            color: #b02522;
          }
        }
      }
    }
    // &.on,
    &:focus {
      .mod-language0-in {
        border: 1px solid #b02522;
        background: #000;
      }
      .item-selected {
        .arrow {
          border-color: #b02522 transparent transparent transparent;
        }
      }
    }
  }
}
</style>
