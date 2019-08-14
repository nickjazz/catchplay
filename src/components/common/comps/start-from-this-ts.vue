<template>
  <div class="mod-modulename">
    <div :class="`mod-modulename${data.type}`">
      <template v-if="data.type === 0"></template>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue, Provide, Watch } from 'vue-property-decorator'
// import _global from '@/assets/utils/global.ts'
@Component({
  components: {}
})
export default class AAA extends Vue {
  @Prop() type?: string
	@Provide() typeNew: string = '0'

	@Prop() data?: any
	@Provide() dataNew: any = {}

	@Provide() dataType: string = ''
	@Provide() dataForShow: any = {}

  // @Provide() _global?: any = _global
  
  mounted () {
    let Vue = this
    if (!Vue.data) return
    if (Vue.data) Vue.dataNew = Vue.data
    Vue.$nextTick(() => {})
  }
}
</script>
<style lang="scss" scoped>
@import "@/assets/css/common.scss";
</style>
