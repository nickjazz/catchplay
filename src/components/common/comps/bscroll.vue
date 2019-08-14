<template>
  <div style="width: 1920px" id="wrapper-bscroll" ref="wrapper-bscroll">
    <!-- <div style="width: 4512px" id="wrapper-bscroll-wrapper">
      <slot></slot>
    </div> -->
  </div>
</template>
<script lang="js">
// import BScroll from 'better-scroll'
// import Slide from '@better-scroll/slide'
// const DIRECTION_H = 'horizontal'
// const DIRECTION_V = 'vertical'
// export default {
//   name: 'BScroll',
//   scroll: {},
//   porps: {
//     probeType: {
//       type: Number,
//       default: 1
//     },
//     click: {
//       type: Boolean,
//       default: true
//     },
//     listenScroll: {
//       type: Boolean,
//       default: false
//     },
//     data: {
//       type: Array,
//       default: null
//     },
//     pullup: {
//       type: Boolean,
//       default: false
//     },
//     beforeScroll: {
//       type: Boolean,
//       default: false
//     },
//     refreshDelay: {
//       type: Number,
//       default: 20
//     },
//     direction: {
//       type: String,
//       default: DIRECTION_V
//     }
//   },
//   data: function () {
//     return {
//       // scroll: {}
//     }
//   },
//   mounted: function () {
//     setTimeout(() => {
//       let Vue = this
//       Vue._initScroll()
//     }, 20)
//   },
//   methods: {
//     _initScroll: function () {
//       console.log('_initScroll fun')
//       let Vue = this
//       let wrapperEl = Vue.$refs['wrapper-bscroll']
//       if (!wrapperEl) {
//         return
//       }
//       // BScroll.use(Slide)
//       this.scroll = new BScroll('#wrapper-bscroll', {
//         scrollX: true,
//         scrollY: false,
//         listenFlick: false,
//         bounce: false,
//         momentum: false
//       })
//       this.scroll.on('scrollEnd', (evt) => this.$emit('scrollEnd', evt))
//     },
//     scrollPrev: function (width) {
//       if (typeof width === 'number') this.scroll.scrollBy(width, 0, 500)
//     },
//     scrollNext: function (width) {
//       if (typeof width === 'number') this.scroll.scrollBy(-width, 0, 500)
//     },
//     scrollToElement: function (el) {
//       this.scroll.scrollToElement(el, 500)
//     },
//     disable: function () {
//       let Vue = this
//       Vue.scroll && Vue.scroll.disble()
//     },
//     enable: function () {
//       console.log('enable fun')
//       let Vue = this
//       Vue.scroll && Vue.scroll.enable()
//     },
//     refresh: function () {
//       console.log('refresh fun')
//       let Vue = this
//       Vue.scroll && Vue.scroll.refresh()
//     },
//     scrollTo: function () {
//       let Vue = this
//       Vue.scroll && Vue.scroll.scrollTo.apply(Vue.scroll, arguments)
//     }
//     // scrollToElement: function () {
//     //   let Vue = this
//     //   Vue.scroll && Vue.scroll.scrollToElement.apply(Vue.scroll, arguments)
//     // }
//   },
//   watch: {
//     data: function () {
//       console.log('data changed')
//       let Vue = this
//       // 监听data数组是否有新数据传入
//       setTimeout(() => {
//         Vue.refresh()
//       }, Vue.refreshDelay)
//     }
//   }
// }
</script>
<style lang="scss" scoped>
// #wrapper-bscroll {
//   min-width: 400px;
//   width: 400px;
// }
</style>
