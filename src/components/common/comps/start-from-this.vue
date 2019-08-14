<template>
  <div class="mod-modulename">
    <div :class="`mod-modulename${data.type}`">
      <template v-if="data.type === 0"></template>
    </div>
  </div>
</template>
<script lang="js">
export default {
  name: 'mod-point',
  components: {},
  props: {
    data: {
      type: [Object, Number, String],
      default: 'index'
    }
  },
  data: function () {
    return {
      dataNew: {}
    }
  },
  methods: {
  },
  mounted: function () {
    let Vue = this
    if (!Vue.data) return
    if (Vue.data) Vue.dataNew = Vue.data
    Vue.$nextTick(() => {})
    /* param */
    // param = {
    //   keyCode: _event.keyCode,
    //   itemFocus: Vue.itemFocus,
    //   itemFocusId: undefined,
    //   itemLast: Vue.itemLast,
    //   itemLastId: Number(Vue.itemLastId),
    //   itemFocusObj: $itemFocusNew,
    //   focusOut: Vue.focusOut,
    //   refsElName: `${Vue.dataNew.nav.compLangItem}${Vue.dataNew.type}`
    // }
  }
}
</script>
<style lang="scss" scoped>
@import "@/assets/css/common.scss";
</style>
