<template>
  <div class="item">
    <template v-if="!info.ifEdit && !info.ifAdd">
      <span>{{info.index}}. </span>
      <span>{{info.app.titleStr}} </span>
      <span v-if="info.pagetype === 'edit'">(appid: {{info.app.app}})</span>
      <!-- <router-link :to="{
      path: '/manage/edit',
      query: {
        appid: info.app.app
      } }">{{info.app.app}}</router-link> -->
      <div class="item-tool">
        <a href="javascript:;" v-if="info.pagetype === 'edit'" class="btn" @click="editClick(info.app.app, info.index)">Edit</a>
        <a href="javascript:;" class="url" @click="linkClick" v-html="`http://${urlHost}/#${urlStr}`"></a>
      </div>

      <!-- @keydown="cKeydown($event)" -->

    </template>
    <template v-else-if="info.ifAdd || info.ifEdit">
      <!-- <div>{{info}}</div> -->
      <div class="formDiv">
        <p v-if="info.ifAdd" class="form-tit">Add:</p>
        <p v-else-if="info.ifEdit" class="form-tit">Edit:</p>
        <span>{{info.index}}. </span>
        <span>{{info.app.titleStr.value}} </span>
        <span v-if="info.pagetype === 'edit'">(appid: {{info.app.app.value}})</span>
        <form-el
          :data="{
            data: info.app,
            formname: ''
          }"
          @formsubmit="formSubmit"
          @formcancel="formCancel">
        </form-el>
      </div>
    </template>
  </div>
</template>
<script lang="js">
import formEl from '@/components/common/form/form-el.vue'
export default {
  name: 'list-app-item',
  components: {
    formEl
  },
  data: function () {
    return {
      configAdd: {},
      urlStr: '',
      urlHost: ''
    }
  },
  props: {
    info: {
      type: [Object]
    }
  },
  methods: {
    formSubmit: function (_data) {
      let Vue = this
      let type = ''
      if (Vue.info.ifAdd) type = 'add'
      if (Vue.info.ifEdit) type = 'edit'
      Vue.$emit('formsubmit', {
        data: _data,
        type: type})
    },
    formCancel: function () {
      let Vue = this
      Vue.$emit('formcancel')
    },
    editClick: function (_appid, _index) {
      let Vue = this
      Vue.$emit('editclick', {
        appid: _appid,
        index: _index
      })
    },
    linkClick: function () {
      let Vue = this
      // Vue.urlStr = window.location.host + '/show/'
      Vue.$emit('linkclick', Vue.urlStr)
    },
    cKeydown: function (_event) {
      _event.stopPropagation()
      let Vue = this
      switch (_event.keyCode) {
        case 13:
          Vue.$emit('linkclick', Vue.urlStr)
          break
      }
    },
    setUrl: function () {
      let Vue = this
      // Vue.urlStr = window.location.host + '/show/'
      Vue.urlHost = window.location.host
      if (Vue.info && Vue.info.app && Vue.info.app.template && Vue.info.app.template !== '') {
        let templateStr
        let templateType = Object.prototype.toString.call(Vue.info.app.template)
        if (templateType === '[object Object]') {
          templateStr = Vue.info.app.template.value.toLowerCase()
          Vue.urlStr = `#`
        } else if (templateType === '[object String]') {
          templateStr = Vue.info.app.template.toLowerCase()
          Vue.urlStr += `/show/${templateStr}/${Vue.info.app.app}`
        }
        // return

        // let templateStr =
        // Vue.urlStr += `/show/${templateStr}/${Vue.info.app.app}`
      }
      // switch (Vue.info.app.template.toLowerCase()) {
      //   case 'a1':
      //     Vue.urlStr += 'a1/'
      //     break
      //   case 'a2':
      //     Vue.urlStr += 'a2/'
      //     break
      //   case 'a3':
      //     Vue.urlStr += 'a3/'
      //     break
      //   case 'a4':
      //     Vue.urlStr += 'a4/'
      //     break
      //   case 'a5':
      //     Vue.urlStr += 'a5/'
      //     break
      // }
      // console.log(Vue.urlStr)
    }
  },

  // updated: function () {
  //   let Vue = this
  //   Vue.setUrl()
  // },
  mounted: function () {
    // console.log('Vue.urlStr')
    let Vue = this
    Vue.setUrl()

    // // let Vue = this
    // // Vue.urlStr = window.location.host + '/show/'
    // Vue.urlHost = window.location.host
    // Vue.urlStr += '/show/'
    // switch (Vue.info.app.template.toLowerCase()) {
    //   case 'a1':
    //     Vue.urlStr += 'a1'
    //     break
    //   case 'a2':
    //     Vue.urlStr += 'a2'
    //     break
    //   case 'a3':
    //     Vue.urlStr += 'a3'
    //     break
    //   case 'a4':
    //     Vue.urlStr += 'a4'
    //     break
    //   case 'a5':
    //     Vue.urlStr += 'a5'
    //     break
    // }
    // Vue.urlStr += '/' + Vue.info.app.app
    // console.log(Vue.urlStr)

    // console.log('mounted item-list-app')
    // console.log(Vue.info)
    // console.log(Vue._global.configAppInfo)
  }
}
</script>
<style style="text/css" lang="scss" scoped>
.item {
  border: 1px solid #333;
  background: #222;
  padding: 10px;
  .form-tit {
    font-size: 32px;
    margin-bottom: 10px;
  }
}
</style>
