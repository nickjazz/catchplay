<template>
  <div @keydown="cKeydown($event)" class="formDiv" :class="'form-' + dataNew.formname" :ref="'ahaha'" v-if="dataNewReady">
    <!-- <p>{{dataNew}}</p> -->
    <!-- dataNew.formname -->
    <!-- v-if="!dataNew.data.config.noSubmit" -->
    <!-- <div style="border: 1px solid #f00;">
        {{item}}
      </div> -->
      <!-- dataArr: <br>
      <p v-for="(item, index) in dataArr" :key="`test${index}`">
        item.key: {{item.key}}
      </p> -->
    <template v-for="(item, key, index) in dataNew.data">
      <div class="form-item" :key="key" v-if="key !== 'config'"
        :selfref="`${key}-${dataNew.formname}`"
        :selfindex="`${index}-: ${dataArr && dataArr.length > 0 && dataArr[index] ? dataArr[index].key : '??'}`"
        >
        <!--
          :up="dataArr && dataArr.length > 0 && dataArr[index - 1] && dataArr[index - 1].key ? dataArr[index - 1].key : 'top?'"
        :down="dataArr && dataArr.length > 0 && dataArr[index - 1] && dataArr[index + 1].key ? dataArr[index + 1].key : 'down?'"
          -->
        <label class="item-label">
          <span class="icon-required" v-if="key !== 'config' && item.valid && item.valid.required && !item.titleHidden">*</span>
          <span class="title" v-if="item.title !== undefined && item.title !== false && !item.titleHidden" v-html="`${item.title}: `"></span>
          <template v-if="item.type === 'text'">
            <input
              type="text"
              :dataref="`${key}-${dataNew.formname}`"
              :ref="`${key}-${dataNew.formname}`"
              :up="getElUpFun(item, key, index)"
              :down="getElDownFun(item, key, index)"
              v-model="item.value">
          </template>
          <template v-if="item.type === 'select'">
            <select
              v-model="item.value"
              :dataref="`${key}-${dataNew.formname}`"
              :ref="`${key}-${dataNew.formname}`"
              :up="getElUpFun(item, key, index)"
              :down="getElDownFun(item, key, index)">
              <option v-for="opt in item.selectOpts" :key="opt.key">{{opt.value}}</option>
              <!-- <option value="youtube">youtube</option> -->
            </select>
          </template>
          <template v-if="item.type === 'number'">
            <input
              :dataref="`${key}-${dataNew.formname}`"
              :ref="`${key}-${dataNew.formname}`"
              :up="getElUpFun(item, key, index)"
              :down="getElDownFun(item, key, index)"
              type="number"
              v-model="item.value">
          </template>
          <span class="validTip" v-if="item.validTip && item.validTip !== ''">{{item.validTip}}</span>
        </label>
      </div>
    </template>

    <!-- v-if="dataNew.data.config.noSubmit !== false" -->
    <!-- <p>{{dataNew}}</p><br>
    <p>{{dataNew.data.config}}</p> -->
    <template v-if="!dataNew.data.config || (dataNew.data.config && !dataNew.data.config.noSubmit)">
      <div class="form-item form-item-submit">
        <a :ref="`btnSubmit-${dataNew.formname}`"
          class="primary"
          href="javascript:;"
          @click="formSubmit"
          :up="getElSubmitUpFun()"
          :down="getElSubmitDownFun()">{{dataNew.data && dataNew.data.config && dataNew.data.config.submitTxt ? dataNew.data.config.submitTxt : 'Submit'}}</a>
        <a :ref="`btnCancel-${dataNew.formname}`"
          v-if="!dataNew.data.config ||
            (dataNew.data.config && !dataNew.data.config.noCancel)"
          href="javascript:;"
          @click="formCancel"
          :up="getElCancelUpFun()"
          :down="getElCancelDownFun()">Cancel</a>
      </div>
    </template>

      <!-- <p>
        <label>
          <span class="title">titleStr: </span>
          <input ref="titleStr" value="CNN - YouTube aaa">
        </label>
      </p> -->
      <!-- <a class="link-template" path-custom="true" data-count="1" tabindex="1">visit app page</a> -->
    </div>
</template>
<script lang="js">
import { formValid } from '@/components/common/valid.js'
import funCommonMixin from '@/components/common/comps/funCompCommon.js'
/* item class */
/*
data = {
  'app': {
      'value': '',
      'title': 'app',
      'type': 'text',
      'valid': {
      'required': true
      },
      'validTip': ''
  },
}
*/
/* /item class */
export default {
  name: 'form-el',
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
      dataNewReady: false,
      formname: 'FormDefault',
      dataArr: []
    }
  },
  watch: {
    dataNew: function () {
      // // // console.log('dataNew new')
      // // // console.log(this.dataNew)
    }
  },
  methods: {
    getElSubmitUpFun: function () {
      let Vue = this
      if (Vue.dataArr.length > 0 &&
        Vue.dataArr[Vue.dataArr.length - 1].key !== 'config') {
        return `${Vue.dataArr[Vue.dataArr.length - 1].key}-${Vue.dataNew.formname}`
      }
    },
    getElSubmitDownFun: function () {
      let Vue = this
      if (!Vue.dataNew.data.config ||
        (Vue.dataNew.data.config && !Vue.dataNew.data.config.noCancel)) {
        return `btnCancel-${Vue.dataNew.formname}`
      } else if (Vue.dataNew && Vue.dataNew.move && Vue.dataNew.move.down && Vue.dataNew.move.down !== '') {
        return Vue.dataNew.move.down
      }
    },
    getElCancelUpFun: function () {
      let Vue = this
      return `btnSubmit-${Vue.dataNew.formname}`
    },
    getElCancelDownFun: function () {
      let Vue = this
      if (Vue.dataNew && Vue.dataNew.move && Vue.dataNew.move.down && Vue.dataNew.move.down !== '') {
        return Vue.dataNew.move.down
      }
    },
    getElUpFun: function (_item, _key, _index) {
      let Vue = this
      if (Vue.dataArr &&
        Vue.dataArr.length > 0 &&
        Vue.dataArr[_index - 1] &&
        Vue.dataArr[_index - 1].key &&
        Vue.dataArr[_index - 1].key !== 'config') {
        return `${Vue.dataArr[_index - 1].key}-${Vue.dataNew.formname}`
      }
    },
    getElDownFun: function (_item, _key, _index) {
      let Vue = this
      if (Vue.dataArr &&
        Vue.dataArr.length > 0 &&
        Vue.dataArr[_index + 1] &&
        Vue.dataArr[_index + 1].key) {
        return `${Vue.dataArr[_index + 1].key}-${Vue.dataNew.formname}`
      } else if (_index + 1 >= Vue.dataArr.length) {
        return `btnSubmit-${Vue.dataNew.formname}`
      }
    },
    formSubmit: function () {
      // // // console.log('formSubmit fun form el')
      let Vue = this
      // // // console.log(Vue.dataNew)
      // // // console.log()
      let resValid = formValid(Vue.dataNew)
      // // // console.log('resValid')
      // // // console.log(resValid)
      // if (!resValid) {
      //   alert('')
      // }

      Vue.$emit('formsubmit', {
        data: Vue.dataNew,
        valid: resValid
      })
    },
    formCancel: function () {
      let Vue = this
      Vue.$emit('formcancel')
    },
    cKeydown: async function (_event) {
      _event.stopPropagation()
      // console.log('cKeydown fun')
      // console.log(_event.keyCode)
      let Vue = this
      let $itemFocus = {}
      let $itemFocusNew = {}
      // // // console.log(Vue.dataNew)
      // return
      if (Vue.dataNew.nav.itemFocus.indexOf(Vue.dataNew.formname) < 0) return
      // // console.log()
      Vue.itemLast = Vue.dataNew.nav.itemFocus
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
      // return
      switch (_event.keyCode) {
        case 37:
        case 39:
        case 38:
        case 40:
          switch (_event.keyCode) {
            case 37:
              if (!$itemFocus.attributes.left || !$itemFocus.attributes.left.value) return
              // Vue.itemLastId = $itemFocus.attributes.dataid
              Vue.itemFocus = $itemFocus.attributes.left.value
              break
            case 39:
              if (!$itemFocus.attributes.right || !$itemFocus.attributes.right.value) return
              // Vue.itemLastId = $itemFocus.attributes.dataid
              Vue.itemFocus = $itemFocus.attributes.right.value
              break
            case 38:
              if (!$itemFocus.attributes.up || !$itemFocus.attributes.up.value) return
              // Vue.itemLastId = $itemFocus.attributes.dataid
              Vue.itemFocus = $itemFocus.attributes.up.value
              break
            case 40:
              if (!$itemFocus.attributes.down || !$itemFocus.attributes.down.value) return
              // Vue.itemLastId = $itemFocus.attributes.dataid
              Vue.itemFocus = $itemFocus.attributes.down.value
              break
          }
          if (Vue.itemFocus.indexOf(Vue.dataNew.data.itemName) >= 0) {
            $itemFocusNew = await Vue.getItemFocusCurr({
              itemFocus: Vue.itemFocus
            })
            $($itemFocusNew).focus()
            Vue.focusOut = false
          } else {
            if (Vue.itemFocus === Vue.dataNew.nav.compLangItem ||
            Vue.itemFocus === Vue.dataNew.nav.itemMail) {
              // // console.log('lang or email')
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
            itemFocusObj: $itemFocusNew,
            focusOut: Vue.focusOut,
            refsElName: 'compList' + Vue.dataNew.type
          })
          break
        case 8:
        case 461:
          // // // console.log()
          Vue.itemFocus = Vue.dataNew.nav.itemFocus
          Vue.$emit('getfocus', {
            keyCode: _event.keyCode,
            itemFocus: Vue.itemFocus,
            itemFocusId: Number(Vue.itemFocus.split('-')[0].split('_')[1]), // slice(Vue.dataNew.data.itemName.length)
            itemLast: Vue.itemLast,
            itemLastId: Number(Vue.itemLastId),
            itemFocusObj: $itemFocusNew,
            focusOut: Vue.focusOut,
            refsElName: `${Vue.dataNew.formname}`
          })
          break
      }
    },
    obj2Arr: function (_obj) {
      let arrTemp = []
      for (let key in _obj) {
        // if (key !== 'config') {
          arrTemp.push({
            key: key,
            value: _obj[key]
          })
        // }
      }
      return arrTemp
    }
  },
  mounted: function () {
    let Vue = this
    // // // console.log('mounted form comp')
    // // // console.log(Vue.data)
    if (!Vue.dataNew) return
    Vue.dataNew = Vue.data
    // if (Vue.dataNew.formname && Vue.dataNew.formname !== '') Vue.formname = Vue.dataNew.formname
    Vue.dataArr = Vue.obj2Arr(Vue.dataNew.data)
    Vue.dataNewReady = true
  }
}
</script>
<style type="text/css" lang="scss">
@import '@/assets/css/form.scss';
</style>
