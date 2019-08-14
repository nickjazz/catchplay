import funCommonMixin from '@/components/mixin/funCommon.js'
export default {
  mixins: [funCommonMixin],
  data: function () {
    return {
      dataNew: {},
      itemFocus: '',
      itemLast: '',
      itemLastId: 0,
      focusOut: false,
      className: {},
      classFun: {},
      languageForEdit: {}
    }
  },
  directives: {
    focus: {
      update: function (el, {value}) {
        // console.log(el, {value})
        // if (value) {
        el.focus()
        // }
      }
    }
  },
  methods: {
    getItemFocusComps: function (_param, _refsElName) {
      // console.log('getItemFocusComps fun')
      // console.log(_param)
      let Vue = this
      Vue.$emit('getfocus', _param)
    },
    setItemFocusComps: function (_param) {
      // console.log('setItemFocus fun comps ===========================================')
      // console.log(_param)
      if (!_param) return
      let Vue = this
      Vue.$nextTick(() => {
        // console.log('nexttick herebb??')
        // console.log(_param)
        Vue.modCheck(_param)
      })
    }
  }
}
