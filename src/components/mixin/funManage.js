export default {
  methods: {
    countFilter: function (_param) {
      let Vue = this
      console.log('countFilter fun: ' + _param.count)
      console.log('Vue.linkLength: ' + Vue.linkLength)
      console.log('Vue.focusFilter: ' + Vue.focusFilter)
      console.log('Vue.colCount: ' + Vue.colCount)
      if (_param.count < 0) {
        _param.count = Vue.linkLength + _param.count // + 1
        //   console.log('< 0, if 1 ')
        //   console.log(_param.count)
        if (Vue.focusFilter > 0 && _param.keyCode === 38) {
          _param.count = _param.count - Vue.focusFilter
          if (_param.count + Vue.colCount < Vue.linkLength) _param.count = _param.count + Vue.colCount
          //     // _param.count = _param.count + Vue.focusFilter - Vue.colCount // + Vue.colCount - Vue.focusFilter
          //     _param.count = _param.count - Vue.focusFilter + Vue.colCount
          //     console.log('< 0, if 2')
          //     console.log(_param.count)
          //     Vue.countFilter(_param)
        }
      } else if (_param.count >= Vue.linkLength) {
        _param.count = _param.count - Vue.linkLength // - 1
        console.log('> length, if 1')
        console.log(_param.count)
        if (Vue.focusFilter > 0 && _param.keyCode === 40) {
          _param.count = _param.count + Vue.focusFilter
          if (_param.count - Vue.colCount >= 0) _param.count = _param.count - Vue.colCount
          // if (_param.count - Vue.colCount >= 0) _param.count = _param.count - Vue.colCount
          //     _param.count = _param.count + Vue.focusFilter - Vue.colCount //  + Vue.focusFilter - Vue.colCount
          // console.log('> length, if 2')
          // console.log(_param.count)
          //     Vue.countFilter(_param)
        }
      }
      return _param.count
    },
    getFocus: function (_param) {
      console.log('getFocus fun: ' + _param.change)
      let Vue = this
      if (Vue.focusIndex === undefined || Vue.focusIndex < 0) {
        // console.log('if none')
        Vue.focusIndex = 0
      } else {
        // console.log(' ======= no none Vue.$link[_count]')
        Vue.focusIndex = Vue.focusIndex + _param.change
        console.log('Vue.focusIndex')
        console.log(Vue.focusIndex)
        Vue.focusIndex = Vue.countFilter({
          count: Vue.focusIndex,
          keyCode: _param.keyCode
        })
        console.log('Vue.focusIndex after filter')
        console.log(Vue.focusIndex)
        let itemTarget = Vue.$link[Vue.focusIndex]
        // console.log(itemTarget)

        let attrCheck = itemTarget.getAttribute('disabled')
        // // console.log(attrCheck)
        while (attrCheck !== null) {
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
          itemTarget = Vue.$link[Vue.focusIndex]
          attrCheck = itemTarget.getAttribute('disabled')
        }
      }
      // console.log('before setfocus')
      Vue.itemFocus = Vue.$link[Vue.focusIndex]
      Vue.focusCurr = Vue.itemFocus
      $('.focus').removeClass('focus')
      $(Vue.focusCurr).addClass('focus')
      $(Vue.focusCurr).focus()
    },
    contentKeydown: function (_event) {
      console.log('contentKeydown fun')
      let Vue = this
      // let countId = Vue.itemFocus.getAttribute('data-count')
      if (!Vue.itemFocus) Vue.itemFocus = Vue.$link[0]
      if (Vue.focusIndex < 0) Vue.focusIndex = 0
      Vue.focusCurr = Vue.itemFocus

      // Vue.focusIndex = Vue.$link.indexOf(Vue.itemFocus)
      // let countId = Number(Vue.focusCurr.getAttribute('data-count'))

      // // 设置遥控器监听
      // $(document).on('keydown', '#content', )
      console.log('_event.keyCode')
      console.log(_event.keyCode)
      switch (_event.keyCode) {
        case 13:
          let url = ''
          let pushObj = {}

          if (!Vue.focusCurr) Vue.focusCurr = Vue.$link[0]
          // console.log('Vue.focusCurr')
          // console.log(Vue.focusCurr)
          // return
          let pathCustom = Vue.focusCurr.getAttribute('path-custom')
          // // console.log('Vue.focusCurr')
          // // console.log(Vue.focusCurr)
          // // console.log('pathCustom')
          // // console.log(pathCustom)
          if (pathCustom) {
            url = '/show/' + Vue.configApp.template.value
            pushObj = {
              path: url,
              query: {
                app: Vue.configApp.app.value,
                playType: Vue.configApp.playType.value,
                iconStr: Vue.configApp.iconStr.value
              }
            }
          } else {
            url = Vue.focusCurr.getAttribute('data-path')
            pushObj = {
              path: url
            }
          }
          Vue.$store.commit('pathFrom', this.$route.fullPath)
          Vue.$router.push(pushObj)
          // test
          break
        case 37:
          // // // // // // // // // // console.log('content left')
          _event.preventDefault()
          Vue.getFocus({
            change: -1,
            keyCode: _event.keyCode
          })
          break
        case 39:
          // // // // // // // // // // console.log('content right')
          _event.preventDefault()
          Vue.getFocus({
            change: +1,
            keyCode: _event.keyCode
          })
          break
        case 38:
          // up
          // // // // // // // // // // console.log('content up')
          _event.preventDefault()
          Vue.getFocus({
            change: -Vue.colCount,
            keyCode: _event.keyCode
          })
          break
        case 40:
          // // // // // // // // // // console.log('content down')
          // down
          _event.preventDefault()
          Vue.getFocus({
            change: +Vue.colCount,
            keyCode: _event.keyCode
          })
          break
        case 8:
        case 461:
          // back
          let route = Vue.$route
          console.log(route)
          if (route.fullPath !== '/manage/listapp/') {
            pushObj = {
              path: '/'
            }
            Vue.$router.push(pushObj)
          }
          break
      }
    }
  }
}
