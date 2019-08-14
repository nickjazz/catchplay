<template>
  <div class="mod-point">
    <template>
      <div :class="`mod-point-in mod-point${data.type}`">
        <div class="star-bg" :style="`width: ${layout.barBgWidth}px`">
          <b
            v-for="(item, index) in starCountArr"
            class="star"
            :style="(index !== (starCountArr.length - 1))? `margin-right: ${layout.starMarginRight}px`:''"
            :ref="`star-bg_${index}`"
            :key="`star-bg_${index}`"
          ></b>
        </div>
        <div class="star-on" :style="`width: ${layout.barOnWidth}px`">
          <div class="star-on-in" :style="`width: ${layout.barBgWidth}px`">
            <b
              v-for="(item, index) in starCountArr"
              class="star"
              :style="(index !== (starCountArr.length - 1))? `margin-right: ${layout.starMarginRight}px`:''"
              :ref="`star-on_${index}`"
              :key="`star-on_${index}`"
            ></b>
          </div>
        </div>
      </div>
    </template>
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
      default: 'index'
    }
  },
  data: function () {
    return {
      dataNew: {},
      starCountArr: [0, 1, 2, 3, 4],
      layout: {
        starMarginRight: 12,
        starWidth: 0,
        barBgWidth: 0,
        barOnWidth: 0
      }

    }
  },
  methods: {
    getStarWidth: function () {
      // console.log('getStarWidth fun')
      let Vue = this
      let $star = Vue.$refs['star-bg_0'][0]
      // console.log('$star')
      // console.log($star.offsetWidth)
      Vue.$set(Vue.layout, 'starWidth', $star.offsetWidth)
      Vue.getBarBgWidth()
    },
    getBarBgWidth: function () {
      // console.log('getBarBgWidth fun')
      let Vue = this
      // Vue.$set(Vue.layout, 'barBgWidth', (Vue.layout.starWidth * 5) + (Vue.layout.starMarginRight * 4))
      Vue.layout.barBgWidth = (Vue.layout.starWidth * 5) + (Vue.layout.starMarginRight * 4)
      // console.log('Vue.layout.barBgWidth')
      // console.log(Vue.layout.barBgWidth)
      Vue.getBarOnWidth()
    },
    getBarOnWidth: function () {
      // console.log('getBarOnWidth fun')
      let Vue = this
      let point = Number(Vue.data.data)
      let remainder = point % 1
      let pointInt = Math.floor(point / 1)
      Vue.layout.barOnWidth = (Vue.layout.starWidth + Vue.layout.starMarginRight) * pointInt + Vue.layout.starWidth * remainder
    }
  },
  mounted: function () {
    // console.log('mounted mod-point')
    let Vue = this
    if (!Vue.data) return
    if (Vue.data) Vue.dataNew = Vue.data
    Vue.$nextTick(() => {
      Vue.getStarWidth()
    })
  }
}
</script>
<style lang="scss" scoped>
// @import "@/assets/css/mixin.scss";
.mod-point {
  display: block;
  // background: #333;
  // width: 168px;
  .mod-point-in {
    display: inline-block;
    position: relative;
    .star-bg,
    .star-on {
      display: inline-block;
      .star {
        display: inline-block;
        width: 24px;
        height: 24px;
        background: no-repeat 0 0;
        background-size: 24px 24px;
        &:last-child {
          margin-right: 0;
        }
      }
    }
    .star-bg {
      .star {
        background-image: url("~@/assets/img/a8/icon-star-1.png");
      }
    }
    .star-on {
      overflow: hidden;
      width: 100%;
      position: absolute;
      left: 0;
      top: 0;
      .star-on-in {
      }
      .star {
        background-image: url("~@/assets/img/a8/icon-star-0.png");
      }
    }
  }
}
</style>
