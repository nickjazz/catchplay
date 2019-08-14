
<template>
  <div class="mod-signup" @keydown="cKeydown($event)">11
    <div :class="`mod-signup${data.type}`">22
      
    </div>
  </div>
</template>
<script lang="js">
import formEl from '@/components/common/form/form-el.vue'
import funCommonMixin from '@/components/common/comps/funCompCommon.js'
import modAccount from '@/components/common/comps/account.vue'
export default {
  name: 'mod-signup',
  mixins: [funCommonMixin],
  components: {
    formEl,
    modAccount
  },
  props: {
    data: {
      type: [Object, Number, String],
      default: 'index'
    }
  },
  data: function () {
    return {
      dataNew: {},
      signup: {

      },
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
    cKeydown: async function (_event) {
      _event.stopPropagation()
    },
    formSubmit: function () {},
    formCancel: function () {}
  },
  mounted: function () {
    let Vue = this
    if (!Vue.data) return
    if (Vue.data) Vue.dataNew = Vue.data
    Vue.$nextTick(() => {})
  }
}
</script>
<style lang="scss" scoped>
@import "@/assets/css/common.scss";
.mod-signup {
    .mod-signup0,
    .mod-signupwelcome,
    .mod-signup1 {
        .step-tit,
        .step-tit-sub {
            color: #fff;
            display: block;
            text-align: center;
            line-height: 2;
        }
        .step-tit {
            font-size: 60px;
        }
        .step-tit-sub {
            font-size: 30px;
        }
    }
}
</style>
