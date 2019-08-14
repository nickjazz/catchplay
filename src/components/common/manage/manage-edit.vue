<template>
  <div class="page-manage">
    <form-el
                  :ref="`aaa`"
                    :data="{
                      data: dddTest,
                      formname: 'FormManageEdit'
                    }"
                    @formsubmit="formSubmit"
                    @formcancel="formCancel">
                </form-el>
    <div class="mod-con0" v-if="pagetype === 'edit'">
      <!-- <h2 class="mod-con0-tit">App Edit</h2> -->
      <!-- <p>Vue._global.configAppInfo: {{_global.configAppInfo.iconStr.value}}</p> -->
      <div class="mod-con0-con">
        <ul class="list-tool0">
          <!-- <li><router-link :to="{ path: '/manage/list' }">App List All</router-link></li> -->
          <!-- <li><router-link :to="{ path: '/manage/add' }">App Add</router-link></li> -->
          <li @click="showAdd">
            <template v-if="ifAdd">Cancel Add</template>
            <template v-else>Add New App</template>
          </li>
        </ul>
      </div>
    </div>
    <div class="mod-con0">
      <h2 class="mod-con0-tit">App List</h2>
      <div class="mod-con0-con">
        <ul class="mod-con0-con list-app0">
          <li v-if="ifAdd">
            <itemListApp
              :info="{
              app: appInfo,
              index: listCount + 1,
              ifAdd: true,
              pagetype: pagetype
              }"
              @formsubmit="formSubmit"
              @formcancel="formCancel"
            ></itemListApp>
          </li>
          <li v-for="(app, index) in listApp" :key="app.appid">
            <!-- <p>{{app}}</p> -->
            <itemListApp
              v-if="(appidEdit === app.app) && (ifEdit === true)"
              :info="{
              app: appInfo,
              index: index,
              ifEdit: true,
              pagetype: pagetype
              }"
              @formsubmit="formSubmit"
              @formcancel="formCancel"
            ></itemListApp>
            <itemListApp
              v-else
              :info="{
              app: app,
              index: index,
              ifEdit: false,
              pagetype: pagetype
              }"
              @linkclick="linkClick"
              @editclick="editClick"
            ></itemListApp>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script lang="js">
// import appList from '@/assets/storage/app-list.json'
import itemListApp from '@/components/common/list/item-list-app.vue'
import FileSaver from 'file-saver'
import { storageGet } from '@/components/common/ajax/ajax.js'
import formEl from '@/components/common/form/form-el.vue'
export default {
  name: 'manage-edit-comp',
  components: {
    itemListApp,
    formEl
    // fileSaver
  },
  props: {
    pagetype: {
      type: String
    }
  },
  data: function () {
    return {
      listApp: [],
      listAppNew: [],
      listApp10: [],
      listCount: 0,
      ifEdit: false,
      appidEdit: '',
      indexEdit: false,
      ifAdd: false,
      appInfo: {},
      dddTest: {
        'config': {
          'noCancel': true
        },
        'validCode': {
          'value': '22',
          'title': false,
          'titleHidden': true,
          'type': 'text',
          'valid': {
            'required': true
          },
          'validTip': ''
        }
      }
    }
  },
  methods: {
    listShowSet: function (_listapp) {
      let Vue = this
      Vue.listCount = _listapp.length - 1
      let listTemp = _listapp.slice(0, 10)
      // Vue.listApp10 = Vue._global.cloneObj(listTemp)
      Vue.$set(Vue, 'listApp10', Vue._global.cloneObj(listTemp))
    },
    showEdit: function (_appid, _index) {
      // console.log('showEdit fun')
      let Vue = this
      let count = 0
      while (Vue.listApp[count].app !== _appid) {
        count++
      }
      let info = Vue.listApp[count]
      // console.log('info')
      // console.log(info)
      Vue.appidEdit = _appid
      Vue.appInfo = Vue._global.cloneObj(Vue._global.configAppInfo)
      Vue.appInfo.app.value = info.app
      Vue.appInfo.template.value = info.template
      Vue.appInfo.playType.value = info.playType
      Vue.appInfo.iconStr.value = info.iconStr
      Vue.appInfo.titleStr.value = info.titleStr
      Vue.appInfo.maxResults.value = info.maxResults
      Vue.appInfo.customizedKeyboard.value = info.customizedKeyboard
      Vue.$nextTick(() => {
        Vue.appidEdit = _appid
        Vue.indexEdit = _index
        Vue.ifEdit = true
        Vue.ifAdd = false
      })
    },
    showAdd: function () {
      // // // // console.log('showAdd fun')
      let Vue = this
      Vue.ifEdit = false
      Vue.appInfo = Vue._global.cloneObj(Vue._global.configAppInfo)
      // // console.log('Vue._global.configAppInfo')
      // // console.log(Vue._global.configAppInfo.iconStr.value)
      // // console.log(Vue.appInfo.iconStr.value)
      // return
      // Vue.appInfo.app.value = '222'
      Vue.$nextTick(() => {
        // // // // console.log('Vue.appInfo')
        // // // // console.log(Vue.appInfo)
        // Vue.ifEdit = false
        if (Vue.ifAdd) {
          Vue.ifAdd = false
        } else {
          Vue.ifAdd = true
        }
      })
    },
    formSubmit: function (_data) {
      let Vue = this
      // // console.log('formSubmit fun index _data')
      // // console.log(_data)
      let data = _data.data
      let type = _data.type
      if (data.valid.length > 0) {
        // // console.log('Vue.appInfo')
        // // console.log(Vue.appInfo)
        for (let n = 0; n < data.valid.length; n++) {
          let validTipCon = ''
          for (let m = 0; m < data.valid[n].length; m++) {
            if (validTipCon !== '') validTipCon += ', '
            validTipCon += data.valid[n][0].resValid
          }
          Vue.$set(Vue.appInfo[data.valid[n][0].key], 'validTip', validTipCon)
        }
        // Vue.$set(Vue.appInfo.app, 'validTip', 'aaaaaa')
        return
      }
      if (type === 'add') {
        Vue.addAppList(Vue.dataFormat(data.data))
      } else {
        Vue.editAppList(Vue.dataFormat(data.data))
      }
      // do submit
    },
    formCancel: function () {
      let Vue = this
      Vue.appInfo = Vue._global.cloneObj(Vue._global.configAppInfo)
      Vue.ifAdd = false
      Vue.ifEdit = false
    },
    dataFormat: function (_data) {
      // console.log('dataFormat fun')
      let dataFormatted = {}
      for (let key in _data) {
        if (key !== 'config') {
          dataFormatted[key] = _data[key].value
        }
      }
      return dataFormatted
    },
    fileSave: function (_data) {
      // console.log('fileSave fun')
      // // console.log('fileSaver ab')
      // // // console.log(fileSaver.saveAs)
      // // console.log(FileSaver.saveAs)
      // console.log('_data')
      // console.log(_data)
      const data = JSON.stringify(_data)
      const blob = new Blob([data], {type: ''})
      FileSaver.saveAs(blob, 'app-list.json')
    },
    linkClick: function (_url) {
      // console.log('linkClick fun index.page')
      let Vue = this
      // console.log('_url')
      // console.log(_url)
      // let _url2 = '/show/a5/cnn_news_app'
      Vue.$router.push({
        path: _url
      })
    },
    editClick: function (_data) {
      // console.log('editClick fun _appid')
      // console.log(_data)
      let Vue = this
      Vue.showEdit(_data.appid, _data.index)
    },
    // useJson: function () {
    //   var jsonfile = require('jsonfile')
    //   var file = '/tmp/data.json'
    //   jsonfile.readFile(file, function(err, obj) {
    //     console.dir(obj)
    //   })
    // },
    editAppList: function (_data) {
      // console.log('editAppList fun')
      // console.log(_data)
      let Vue = this
      if (Vue.listAppNew[Vue.indexEdit].app === _data.app) {
        Vue.listAppNew[Vue.indexEdit] = _data
        Vue.fileSave({
          'list': Vue.listAppNew
        })
        Vue.tipShow('Edited Successfully!')
      } else {
        alert('error')
      }
    },
    addAppList: function (_data) {
      let Vue = this
      // return
      let count = (Vue.listAppNew.length - 1)
      while (count >= 0 && Vue.listAppNew[count].app && _data.app !== Vue.listAppNew[count].app) {
        count--
      }
      if (count >= 0 && count <= (Vue.listAppNew.length - 1)) {
        Vue.tipShow('This appid already exists.', false)
        return
      }
      Vue.listAppNew.push(_data)
      // let p = new Promise(async function (resolve, reject) {
      //   resolve(tipCon)
      // })
      // return p
      Vue.fileSave({
        'list': Vue.listAppNew
      })
      Vue.tipShow('Added Successfully!')
      // res.list.push(_data)
      // let Vue = this
      // // // console.log('_data')
      // // // console.log(_data)
      // Vue.listApp.push(_data)
      // // appList.commit('setlistApp', Vue.listApp)
      // // appList.commit('addItem', _data)
      // // // console.log('after add')
      // // writeJson(params)// 执行一下;
      // // // // console.log(appList.state.listApp)
      // // Vue.$set(Vue, 'listApp', appList.state.listApp)
      // Vue.listShowSet()
    },
    tipShow: function (_msg, _status = true) {
      let Vue = this
      Vue.ifAdd = false
      Vue.ifEdit = false
      Vue.$set(Vue, 'listApp', Vue.listAppNew)
      Vue.listShowSet(Vue.listApp)
      let msg = _msg
      if (_status) msg += '\n\n Config data has been saved and downloaded as the name "app-list.json"\n\n Replace the file (assets/storage/app-list.json) width the new file please.'
      alert(`${msg}`)
    }
  },
  mounted: async function () {
    // console.log('mounted index manage')

    let Vue = this
    let res = await storageGet('storage/app-list.json')
    // console.log('res')
    // console.log(res)
    // return
    Vue.listApp = res.list
    Vue.listAppNew = Vue._global.cloneObj(Vue.listApp)
    // '@/assets/storage/app-list.json'
    // let fs = require('fs')
    // var data = fs.readFileSync('@/assets/storage/app-list.json')
    // // // console.log('data')
    // // // console.log(data)
    // // // console.log('appList')
    // // // console.log(appList)
    // Vue.listApp = appList.state.listApp
    // // // console.log('Vue.listApp')
    // // // console.log(Vue.listApp)
    Vue.listShowSet(Vue.listApp)

    // Vue.$nextTick(() => {
    //

    //   // // // console.log('Vue.listApp10')
    //   // // // console.log(Vue.listApp10)
    //   // // // console.log('Vue.listCount')
    //   // // // console.log(Vue.listCount)
    //   // Vue.$nextTick(() => {
    //   // Vue.listApp = appList.list
    //   // Vue.listApp10 = appList.list.splice(0, 10)
    //   // // // // // console.log('Vue.listApp')
    //   // // // // // console.log(Vue.listApp)
    //   // // // // // console.log('Vue.listApp10')
    //   // // // // // console.log(Vue.listApp10)
    //   // // // // // console.log('appList.list.length')
    //   // // // // // console.log(appList.list.length)
    //   //

    //   // // })
    // })
  }
}
</script>
<style type="text/css" lang="scss">
@import "@/assets/css/manage/common.scss";
.page-manage {
  padding: 10px;
}
</style>
