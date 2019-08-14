<template>
  <div class="mod-title" v-if="dataNew && dataNew.title">
    <!-- data.type： {{data.type}} -->
    <div :class="`mod-title-in mod-title${data.type}`">
      <template v-if="data.type === 0 || data.type === 1">
          <span class="title" v-if="dataNew.title && dataNew.title !== ''">{{dataNew.title}}</span>
          <span class="title-sub" v-if="dataNew.titleSub && dataNew.titleSub !== ''">{{dataNew.titleSub}}</span>
      </template>
    </div>
  </div>
</template>
<script lang="js">
import funCommonMixin from '@/components/common/comps/funCompCommon.js'
export default {
  name: 'mod-point',
  mixins: [funCommonMixin],
  components: {},
  props: {
    data: {
      type: [Object, Number, String],
      default: function () {
        return {
          type: 0,
          title: '',
          titleSub: ''
        }
      }
    }
  },
  data: function () {
    return {
      dataNew: {}
    }
  },
  methods: {
  },
  updated: function () {
    let Vue = this
    if (!Vue.data) return
    if (Vue.data) Vue.dataNew = Vue.data
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
.mod-title {
  .mod-title-in {
    display: block;
    .title,
    .title-sub {
      display: inline-block;
      vertical-align: top;
      line-height: 60px;
    }
    .title {
      font-size: 36px;
      color: #f8b500;
      font-weight: 700;
      padding-left: 30px;
    }
    .title-sub {
      font-size: 20px;
      color: #fff;
      margin-left: 12px;
    }
    &.mod-title1 {
      color: #fff;
      font-size: 32px;
    }
  }
}
</style>
