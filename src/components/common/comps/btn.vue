<template>
  <div>
  <!-- <div class="mod-btn">
    !-- switchvalueNew: {{switchvalueNew}}, colorHover: {{arrowNew.colorHover}} --
    !-- switchvalue: {{switchvalue}}, switchvalueNew: {{switchvalueNew}} --
    <a
      :class="[btnName, {'btn-on':(dataNew.switchvalue !== undefined && dataNew.switchvalue === true)}]"
      href="javascript:;"
      @click="btnSwitchClick()"
      :style="`background: ${dataNew.bgcolor ? dataNew.bgcolor : _global.colorGlobal.colorBgDefault2};
        width: ${btnwidthNew? btnwidthNew: 90}px;
        height: ${btnheightNew? btnheightNew: 32}px;
        line-height: ${btnheightNew? btnheightNew: 32}px;`"
    >
      <span class="txt" :style="`padding-right: ${dataNew.arrow? (dataNew.arrow.size*10 + 5):0}px;
        line-height: ${btnheightNew? btnheightNew: 32}px;`">
        {{dataNew.btntxt}}
        !-- dataNew.switchvalueNew? 'up':'down' --
        !-- , {{dataNew.switchvalueNew}} --
        !-- dataNew.arrowNew.colorHover: {{dataNew.arrowNew.colorHover}} --
        <deco-arrow
          class="arrow"
          v-if="dataNew.arrow && typeNew === 'basic'"
          :direction="dataNew.switchvalue? 'up':'down'"
          :thickness="1.5"
          :arrowcolor="dataNew.arrow.color? dataNew.arrow.color: undefined"
          :hovercolor="dataNew.arrow.colorHover? dataNew.arrow.colorHover: undefined"
          :arrowonhover="(dataNew.switchvalue !== undefined && dataNew.switchvalue === true)? dataNew.switchvalue : false"
          :style="`top: ${dataNew.switchvalue? (dataNew.arrow.size*8 + 0.5):(dataNew.arrow.size*5 + 0.5)}px;`"
        ></deco-arrow>
        !-- :arrowonhover="dataNew.switchvalueNew? true: false" --
      </span>
    </a>
  </div> -->
  </div>
</template>
<script lang="ts">
// import { Component, Prop, Vue, Provide, Watch } from 'vue-property-decorator'
// import DecoArrow from '@/components/decos/arrow.vue'
// import _global from '@/assets/utils/global.ts'
// @Component({
// 	components: {
// 		DecoArrow
// 	}
// })
// export default class ModBtn extends Vue {
// 	// @Prop() private msg!: string
// 	@Prop() type?: string
//   @Provide() typeNew: string = 'basic'
  
//   @Prop() data?: any;
//   @Provide() dataNew: any = {}

// 	@Provide() btnName: string = 'btn-'
//   @Provide() objectClass: any = {}
  
//   @Prop() btnwidth?: number
//   @Provide() btnwidthNew: number = 90

//   @Prop() btnheight?: number
//   @Provide() btnheightNew: number = 32

// 	@Prop() bgcolor?: string
// 	@Provide() bgcolorNew: string = ''

// 	@Provide() _global?: any = _global

//   // @Prop() vsaaaaaa?: any
  
// 	// @Watch('dataNew.switchvalue')
// 	// switchvalueChanged() {
// 	// 	let Vue = this
// 	// 	if (Vue.dataNew.switchvalue !== undefined) Vue.dataNew.switchvalue = Vue.dataNew.switchvalue
//   // }
  
// 	btnSwitchClick() {
// 		// _event: Event
// 		// _item: navItem, _index: Number
// 		let Vue = this
// 		// Vue.indexHover = _index
// 		console.log('mod-btn fun btnSwitchClick')
// 		console.log(Vue.dataNew.switchvalue)
// 		Vue.dataNew.switchvalue = !Vue.dataNew.switchvalue
// 		// _event.stopPropagation()
// 		Vue.$emit('click', Vue.dataNew.switchvalue)
// 		// if (_item.children && _item.children.length > 0)
// 		// 	Vue.$emit('mouseenter', _index)
// 	}

// 	created() {
// 		let Vue = this
// 		Vue._global = _global
//     if (Vue.type) Vue.typeNew = Vue.type
//     if (Vue.data) Vue.$set(Vue, 'dataNew', Vue.data)
    
// 		// if (Vue.arrow) Vue.arrowNew = Vue.arrow
// 		// if (Vue.btntxt) Vue.btntxtNew = Vue.btntxt
// 		// if (Vue.switchvalue !== undefined) Vue.switchvalueNew = Vue.switchvalue
// 		// if (Vue.bgcolor) Vue.bgcolorNew = Vue.bgcolor
// 		if (Vue.typeNew) Vue.$set(Vue, 'btnName', 'btn-' + Vue.typeNew)
// 		// Vue.btnName = 'btn-' + Vue.typeNew
// 		Vue.objectClass = {
// 			'btn-on': Vue.dataNew.switchvalue
// 		}
// 	}
// }
</script>
<style lang="scss" scoped>
// // @import '@/assets/css/mixin.scss';
// @import "@/assets/css/a9/mixin.scss";
// .mod-btn {
// 	.btn-basic {
// 		@include btnswitch0;
// 		&.btn-on {
// 			@include btnswitch0on;
// 		}
//   }
//   .btn-default {
//     @include btnDefault;
//   }
//   .btn-primary {
//     @include btnPrimary;
//   }
//   // @at-root .mod-con-exponent {
//   //   .mod-btn:hover {
//   //     .btn-basic {
//   //       // @include btnhover;
//   //     }
//   //   }
//   // }
// }
</style>
