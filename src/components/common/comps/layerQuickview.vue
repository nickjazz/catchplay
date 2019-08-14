<template>
  <div class="mod-layerquickview">
    <div :class="`mod-layerquickview${data.type}`">
      <template v-if="data.type === 0">
        <slot name="layercon"></slot>
      </template>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue, Provide, Watch } from 'vue-property-decorator'
// import _global from '@/assets/utils/global.ts'
@Component({
  components: {}
})
export default class layerQuickview extends Vue {
  // @Prop() type?: string
	// @Provide() typeNew: string = '0'

	@Prop() data?: any
	@Provide() dataNew: any = {}

	// @Provide() dataType: string = ''
	// @Provide() dataForShow: any = {}

  // @Provide() _global?: any = _global
  
  mounted () {
    let Vue = this
    if (!Vue.data) return
    if (!Vue.data.type) Vue.data.type = 0
    if (Vue.data) Vue.dataNew = Vue.data
    
    Vue.$nextTick(() => {})
  }
}
</script>
<style lang="scss" scoped>
@import "@/assets/css/common.scss";
/*mod-layer-panel0*/
.mod-layerquickview {
  // background:#99f;
  // position:relative;
  // padding:100px 30px 30px;
  .layer-panel0 {
    display:block;
    width:360px;
    padding:10px;
    border:1px solid #999;
    background:#fff;
    position:fixed;
  }
  
}
</style>
