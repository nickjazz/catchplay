<template>
<div :class="`mod-tooltab mod-tooltab-${expandStatus}`" @keydown="navKeydown($event)">
  <!-- <button refs="button1" @click="navKeydown({ keyCode: 37 })">toexpand</button>
  <button @click="expandStatus = 'shrink'">toshrink</button> -->
  <div :class="`tooltab-box tooltab-box-${expandStatus}`">
    <div class="tooltab" :class="{ 'expand': expandStatus === 'expand', 'shrink': expandStatus === 'shrink' }">
      <!-- main -->
        <div v-show="expandStatus !== 'shrink'">
          <div class="tooltab-logo">
            <img :src="expandStatus === 'expand' ? require('@/assets/img/a9/catchplay.png') : require('@/assets/img/a9/cp.png')"/>
          </div>
        </div>
        <div v-show="expandStatus !== 'shrink'" style="margin-top: 30px;">
          <div class="tooltab-handle">
            <div 
              v-for="(button, bindex) in tooltabButton"
              :key="bindex"
              :datakey="bindex === 0 ? `button-${ bindex }-comp` : `button-${ bindex }`"
              :ref="bindex === 0 ? `button-${ bindex }-comp` : `button-${ bindex }`"
              :bottom="'tool'"
              :left="bindex === 0 ? null : `button-${ bindex - 1 }`" 
              :right="bindex === (tooltabButton.length - 1) ? null : `button-${ bindex + 1 }`"
              tabindex="1"
              :class="{ 'primary': button.isPrimary, 'log-in': button.title === 'LOG IN' }" 
              class="button" >{{ button.title }}
            </div>
          </div>
        </div>
        <ul v-show="expandStatus !== 'shrink'">
          <li>
            <div
              class="tooltab-tool"
              v-for="(item, index) in tooltabTool" :key="index"
              :right="'sub'"
              :left="null"
              :top="index === 0 ? 'button' : `tool-${ index - 1 }-comp`" 
              :bottom="index === (tooltabTool.length - 1) ? 'func' : `tool-${ index + 1 }-comp`"
              :entry="'no'"
              :datakey="index === 0 ? `tool-${ index }-comp` : `tool-${ index }`"
              :ref="index === 0 ? `tool-${ index }-comp` : `tool-${ index }`"
              @focus="showSubPage(item)"
              @click="focusClick(index === 0 ? `tool-${ index }-comp` : `tool-${ index }`)"
              tabindex="1">
              <div class="icon">
                <i class="iconfont" :class="`icon${ item.icon }`"></i>
                  <!-- <img :src="item.icon"/> -->
              </div>
              <div class="tooltab-tool-name">
                  {{ item.title }}
              </div>
            </div>
          </li>
          <li>
            <div
              class="tooltab-func"
              :class="{ 'active': index1 === 0, 'aa home': item1.icon === 'home' }"
              v-for="(item1, index1) in tooltabFunc"
              :key="index1"
              :right="'sub'"
              :left="null"
              :top="index1 === 0 ? 'tool' : `func-${ index1 - 1 }`"
              :bottom="index1 === (tooltabFunc.length - 1) ? 'func-generc' : `func-${ index1 + 1 }`"
              :entry="'no'"
              :datakey="index1 === 0 ? `func-${ index1 }-comp` : `func-${ index1 }`"
              :ref="index1 === 0 ? `func-${ index1 }-comp` : `func-${ index1 }`"
              @focus="showSubPage(item1)"
              @click="focusClick(index1 === 0 ? `func-${ index1 }-comp` : `func-${ index1 }`)"
              tabindex="1">
                <div class="icon">
                  <i class="iconfont" :class="`icon${ item1.icon }`"></i>
                    <!-- <img :src="item1.icon"/> -->
                </div>
                <div class="tooltab-func-name">
                    {{ item1.title }}
                </div>
            </div>
            <div
              class="tooltab-func"
              :right="'sub'"
              :top="`func-${ tooltabFunc.length - 1 }`"
              :bottom="null"
              :entry="'no'"
              :ref="'func-generc'"
              @click="focusClick('func-generc')"
              @focus="showSubPage({ subItem: {
                block: 'func',
                data: tooltabGenres[genreIndex][Object.keys(tooltabGenres[genreIndex])[0]]
              } })"
              tabindex="1">
                <div class="icon">
                  <i class="iconfont" :class="`icongenre`"></i>
                    <!-- <img :src="require('@/assets/img/a9/genre.png')"/> -->
                </div>
                <div class="tooltab-func-name">
                  {{ Object.keys(tooltabGenres[genreIndex])[0] }}
                </div>
            </div>
          </li>
          <li>
            <div class="tooltab-genre">
              <div
                class="tooltab-genre-item"
                v-for="(itemg, indexg) in genreShow"
                :key="indexg">
                {{ Object.keys(itemg)[0] }}
              </div>
            </div>
          </li>
        </ul>
      <!-- shrink -->
      <img v-show="expandStatus === 'shrink'" style="position: absolute;top: 50%;transform: translateY(-50%);" :src="backIcon"/>
    </div>
    <!-- sub -->
    <div v-if="showSubNav && expandStatus !== 'normal'" :class="{ 'w-30': expandStatus === 'shrink' }" class="sub-navtab">
      <ul v-if="subNavData.data !== 'custom'">
        <li v-for="(sub, subIndex) in subNavData.data" :key="subIndex">
          <div
            :ref="subIndex === 0 ? `sub-${ subIndex }-comp` : `sub-${ subIndex }`"
            :left="subNavData.block"
            :top="subIndex === 0 ? null : `sub-${ subIndex - 1 }`" 
            :bottom="subIndex === (subNavData.length - 1) ? null : `sub-${ subIndex + 1 }`"
            tabindex="1"
            @click="focusClick(subIndex === 0 ? `sub-${ subIndex }-comp` : `sub-${ subIndex }`)"
            class="sub-navtab-item">
            <span>{{ sub }}</span>
          </div>
        </li>
      </ul>
      <div style="display: flex; flex-direction: column; justify-content: space-between; height:100%;" v-else>
        <ul>
          <li v-for="(account0, accindex0) in accountSubnav[0]" :key="accindex0">
            <div
              :ref="accindex0 === 0 ? `sub-acc0${ accindex0 }-comp` : `sub-acc0${ accindex0 }`"
              :left="'tool'"
              :top="accindex0 === 0 ? null : `sub-acc0${ accindex0 - 1 }`" 
              :bottom="accindex0 === (accountSubnav[0].length - 1) ? 'sub-acc10' : `sub-acc0${ accindex0 + 1 }`"
              tabindex="1"
              class="sub-navtab-item">
              {{ account0 }}
            </div>
          </li>
        </ul>
        <div>
          <ul>
            <li v-for="(account1, accindex1) in accountSubnav[1]" :key="accindex1">
              <div
                :ref="`sub-acc1${ accindex1 }`"
                :left="'tool'"
                :top="accindex1 === 0 ? `sub-acc0${ accountSubnav[0].length - 1 }` : `sub-acc1${ accindex1 - 1 }`" 
                :bottom="accindex1 === (accountSubnav[1].length - 1) ? 'sub-button' : `sub-acc1${ accindex1 + 1 }`"
                tabindex="1"
                class="sub-navtab-item account-common">
                {{ account1 }}
              </div>
            </li>
          </ul>
          <div 
            :top="`sub-acc1${ accountSubnav[1].length - 1 }`"
            :bottom="null"
            :left="null"
            :right="null"
            tabindex="1"
            class="button log-out-btn" ref="sub-button">LOG OUT</div>
          <div>
            version infomation
          </div>
        </div>
      </div>
    </div>
  </div>
  
</div>
</template>
<script lang="js">
import funCommonMixin from '@/components/common/comps/funCompCommon.js'
import _ from 'lodash'
import BScroll from 'better-scroll'
export default {
  name: 'tooltabs',
  mixins: [funCommonMixin],
  components: {
    BScroll
  },
  props: {
    focusIn: {
      type: [Boolean],
      default: false
    }
	},
  data: function () {
    return {
			itemFocus: null,
			itemFocusName: '',
			nowSelectItem: null,
			expandStatus: 'normal', // 'expand'和shrink
			showSubNav: false,
      subNavData: {},
      genreIndex: 0,
			// logoComplete: require('@/assets/catchplay.png'),
			logo: this.mainExpand ? require('@/assets/img/a9/catchplay.png') : require('@/assets/img/a9/cp.png'),
      backIcon: require('@/assets/img/a9/back_arrow.png'),
      scroll: null,
      genreShow: [],
      accountSubnav: [
        ['Profile', 'Purchase History', 'Notification', 'Parental Control', 'FAQ', 'Contact Us', 'Live Chat'],
        ['About', 'Terms of Use', 'Privacy Policy', 'Information']
      ],
			tooltabButton: [
				{
						title: 'SIGN UP',
						isPrimary: true
				},
				{
						title: 'LOG IN',
						isPrimary: false
				},
			],
			tooltabTool: [
				{
						title: 'SEARCH',
						icon: 'search',
				},
				{
						title: 'MY ACCOUNT',
						icon: 'my_account',
						subItem: {
						block: 'tool',
						data: 'custom'
					}
				},
				{
						title: 'SHARE FOR FREE',
						icon: 'icon_mg_mstep_2'
				},
			],
			tooltabFunc: [
				{
						title: 'HOME',
						icon: 'home'
				},
				{ 
						title: 'MY LIST',
						icon: 'mylist',
						subItem: {
							block: 'func',
							data: [
								'Continue Watching',
								'My Movie Drawer',
								'Rented & Redeemed',
								'History'
							]
						}
				},
				{ 
						title: 'HBO GO',
						icon: 'hbo'
				},
				// { 
				// 		title: 'adventure',
				// 		icon: require('@/assets/img/a9/genre.png')
				// }, 
			],
			tooltabGenres: [
        { fir: ['firaaaaaaaaaaaaaaaaaaaaaaaaaaaaa','secbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb','thr','fir','sec','thr','fir','sec','thr','fir','sec','thr','fir','sec','thr','fir','sec','thr'] },
        { thr: ['fir','sec','thr','sec','thr','fir','sec','thr'] },
        { sec: ['fir','sec'], },
      ]
    }
	},
	computed: {
	},
  watch: {
    'itemFocus': function (_v) {
			this.templateFocus(this.itemFocus)
    },
    'focusIn': function (_v) {
      this.navKeydown({ keyCode: 37 })
    }
  },
  methods: {
    /**
     * 通用emit函数
     */
		commonEmit: function () {
			this.$emit('input')
				// TODO
    },
    /**
     * 先决keydown处理函数 处理具体什么情况下哪些key值做focus操作哪些做nav的状态改变
     * @_evt keydown事件
     */
		navKeydown: function (_evt) {
      if ('stopPropagation' in _evt) {
        _evt.stopPropagation()
        _evt.preventDefault()
      }
      if (_evt.keyCode === 37) {
        switch (this.expandStatus) {
          case 'normal':
            this.expandStatus = 'expand'
            this.itemFocus = this.$refs['func-0-comp'][0]
            this.$set(this, 'itemFocusName', 'func-0-comp')
            this.$refs[`tool-${ this.tooltabTool.length - 1 }`][0].attributes.entry.value = 'yes'
            this.templateFocus(this.itemFocus)
            this.showSubNav = false
            break
          case 'expand':
            this.itemFocusName.split('-')[0] === 'sub' ? this.focusCodeCase(_evt) : this.focusCodeCase(_evt);
            break
          case 'shrink':
            this.expandStatus = 'expand'
            setTimeout(() => {
              this.focusCodeCase(_evt)
            }, 300);
            break
        }
      } else if (_evt.keyCode === 39) {
        switch (this.expandStatus) {
          case 'normal':
            // this.expandStatus = 'expand'
            break
          case 'expand':
            if (this.itemFocusName.split('-')[0] === 'sub') { 
              this.expandStatus = 'shrink'
            } else {
              this.itemFocusName === 'func-0-comp' ? this.expandStatus = 'normal' : this.focusCodeCase(_evt);
              if (this.expandStatus === 'normal') this.commonEmit()
            }
            break
          case 'shrink':
            this.focusCodeCase(_evt)
            break
        }
      } else {
        if (this.expandStatus === 'expand' || this.expandStatus === 'shrink') this.focusCodeCase(_evt)
      }
    },
    /**
     * keydown focus处理函数 处理具体focus变化
     * @_evt keydown事件
     */
		focusCodeCase: function (_evt) {
      let { attributes = null } = this.itemFocus
      if (!attributes) return
			let targetAllDir = this.getAttrName(attributes) // 拿到格式化的dom属性上的方向信息
			switch (_evt.keyCode) {
				case 37:
				case 39:
				case 38:
				case 40:
					const handle = {
						37: 'left', 
						39: 'right', 
						38: 'top', 
            40: 'bottom' }[_evt.keyCode]
          // 处理的dom是否是genre block的
          if (this.itemFocusName === 'func-generc' && ((this.genreIndex !== 0 && handle === 'top') || handle === 'bottom')) {
            this.genreKeydown(_evt) // genre block的focus需特殊处理
          } else {
            // 正常处理逻辑
            if (!targetAllDir[handle]) break
            const toNewBlock = targetAllDir[handle][0] !== this.itemFocusName.split('-')[0]  // 即将focus的是否是新block            
            let target = this.getFullRoute(targetAllDir[handle]) // 拿到完整的focus target信息
            if (!target) break
            if (toNewBlock) { // 如果即将focus的是新block
              if ('entry' in this.itemFocus.attributes) this.itemFocus.attributes.entry.value = 'yes' // 即将离开的dom 做entry标记
              if (target[0].indexOf('sub') > -1) this.itemFocus.classList.toggle('leavefocus', true) // 即将focus的block是subnav 父类要有选中样式
              if (this.itemFocusName.indexOf('sub') > -1) target[1].classList.toggle('leavefocus', false) // 从subnav返回父类 父类要移除选中样式
            }
            this.setFocus(target) // 将focus target传给执行函数 执行focus
            if (toNewBlock) { // 如果此次focus是新block 已经进入新block 重置此block的entry
              this.getBlockAll(this.itemFocusName).forEach(ele => {
                if (ele !== undefined && 'entry' in ele.attributes) ele.attributes.entry.value = 'no'
              })
            }
          }
				break
        // 退格处理
        case 8:
          if (this.itemFocusName === 'func-generc' && this.genreIndex !== 0) {
            this.genreKeydown(_evt) // genre block的focus需特殊处理
          } else {
            if (this.itemFocusName.indexOf('sub') > -1) {
              if (this.expandStatus === 'shrink') {
                this.expandStatus = 'normal'
                document.querySelector('.leavefocus').classList.remove('leavefocus')
                this.commonEmit()
              } else {
                this.focusCodeCase({ keyCode: 37 })
              }
            } else if (this.itemFocusName.indexOf('func-0') > -1) {
              this.expandStatus = 'normal'
              this.commonEmit()
            } else {
              this.focusClick('func-0')
            }
          }
          break
        case 13:
          if (this.itemFocusName.indexOf('func-0') > -1) {
            this.expandStatus = 'normal'
            this.commonEmit()
            break
          }
          this.navKeydown({ keyCode: 39 })
          this.navKeydown({ keyCode: 39 })
          break
			}
    },
    /**
     * 一级目录genre部分focus处理函数
     * @_evt keydown事件
     */
    genreKeydown (_evt) {
      switch (_evt.keyCode) {
        case 38:
          if (this.genreIndex) this.genreIndex--
          this.genreScroll('top')
          break
        case 40:
          if (this.genreIndex !== this.tooltabGenres.length - 1) this.genreIndex++
          this.genreScroll('bottom')
          break
        case 8:
          this.genreIndex = 0;
          this.genreShowInit()
          break
      }
      this.subNavData.data = Object.values(this.tooltabGenres[this.genreIndex])[0]
    },
    /**
     * 获取具体路径函数  根据格式化后的dom属性方向信息 获取focus目标
     * @targetDir dom方向信息(通过getAttrName格式化后)
     */
		getFullRoute: function (targetDir) {
			let blockEntry = null
			switch (targetDir.length) {
				case 1:
					const temp = [
						Object.keys(this.$refs)
							.filter(ele => ele.indexOf(targetDir[0]) !== -1)
							.find(ele => {
                let el = Array.isArray(this.$refs[ele]) ? this.$refs[ele][0] : this.$refs[ele]
                if (el && el !== undefined) {
                  let { entry = null } = el.attributes
                  return entry && entry.value === 'yes'
                }
              }),
						Object.keys(this.$refs)
							.filter(ele => ele.indexOf(targetDir[0]) !== -1)
							.filter(ele => ele.indexOf('comp'))
              .find(ele => {
                let el = Array.isArray(this.$refs[ele]) ? this.$refs[ele][0] : this.$refs[ele]
                return el && el !== undefined
              })
					]
					blockEntry = temp.filter(ele => ele && ele !== undefined)[0]
					break
				case 2:
				case 3:
          targetDir.splice(2, 1)
					blockEntry = Object.keys(this.$refs).find(ele => ele.indexOf(targetDir.join('-')) !== -1)
					break
      }
      // 输出格式[ '目标ref名称', '目标dom元素' ]
      if (typeof blockEntry !== 'string') {
         return false
      } else if (Array.isArray(this.$refs[blockEntry]) && this.$refs[blockEntry].length) {
        return [ blockEntry ,this.$refs[blockEntry][0] ]
      } else if (!Array.isArray(this.$refs[blockEntry]) && this.$refs[blockEntry] !== undefined) {
        return [ blockEntry, this.$refs[blockEntry] ]
      } else {
        return false
      }
			// return typeof blockEntry !== 'string' ? false : [blockEntry, Array.isArray(this.$refs[blockEntry]) ? this.$refs[blockEntry][0] : this.$refs[blockEntry]]
		},
		// tools
    // 将dom的方向属性变为详细键值对
		getAttrName: function (attr) {
			let { left = null, right = null, bottom = null, top = null } = attr;
			let temp = { left, right, bottom, top };
			for (let key in temp) {
				if (temp[key]) temp[key] = (temp[key].value).split('-')
			}
			return temp
		},
    setFocus(target) {
      this.$set(this, 'itemFocus', target[1])
      this.$set(this, 'itemFocusName', target[0])
    },
		templateFocus: function (el) {
      if (el !== undefined) el.focus()
    },
    /**
     * 通过ref名获取所有dom
     */
		getBlockAll: function (route) {
			let temp = Object.keys(this.$refs).filter(ele => ele.indexOf(route) >= 0)
			if (!temp.length) return []
			temp = temp.map(ele => Array.isArray(this.$refs[ele]) ? this.$refs[ele][0] : this.$refs[ele])
			return temp
    },
    /**
     * 打开并初始化sub nav
     */
		showSubPage (item) {
			if (!('subItem' in item)) {
				this.showSubNav = false
				return
			}
			this.subNavData = item.subItem;
			this.showSubNav = true
    },
    /**
     * 可focus dom点击时的处理逻辑
     */
    focusClick (focusName) {
      this.itemFocus.classList.remove('leavefocus')
      let target = this.getFullRoute(focusName.split('-'))
      this.setFocus(target)
    },
    genreShowInit () {
      this.genreShow = Object.values(this.tooltabGenres)
      this.genreShow.shift()
    },
    genreScroll (order) {
      let genre = Object.values(this.tooltabGenres)
      switch (order) {
        case 'top':
          if (this.genreShow.length === this.tooltabGenres.length) break
            this.genreShow.unshift(this.genreShow.length === 0 ?
            genre[genre.length - 1]:
            genre[genre.indexOf(this.genreShow[0]) - 1])
          break
        case 'bottom':
          if (this.genreShow.length === 0) break
          this.genreShow.shift();
          break
      }
    },
    _initCompScroll: function () {
      this.scroll = new BScroll(`#genre`, {
        scrollX: true,
        scrollY: false,
        listenFlick: false,
        bounce: false,
        momentum: false
      })
      // this.scroll.on('scrollEnd', (evt) => this.$emit('scrollEnd', evt))
    },
    scrollBy: function (width) {
      if (typeof width === 'number') this.scroll.scrollBy(width, 0, 500)
    },
    scrollNext: function (width, func) {
      if (typeof width === 'number') this.scroll.scrollBy(-width, 0, 500)
    },
    scrollToElement: function (el) {
      this.scroll.scrollToElement(el, 500)
    },
  },
  mounted: function () {
		// document.querySelector('[tabindex]').addEve
    // this.$refs['button1'][0].focus()
    // this._initCompScroll()
    this.genreShowInit()
  }
}
</script>
<style lang="scss" scoped>
@import "@/assets/css/common.scss";
@import "@/assets/css/a9/mixin.scss";
.mod-tooltab {
  width: 0;
  height: 100%;
  background: rgba(0, 0, 0, .8);
  position: fixed;
  left: 0;
  top: 0;
  z-index: 701;
  &.mod-tooltab-shrink {
    width: 0;
  }
  &.mod-tooltab-expand {
    width: 100%;
  }
  .tooltab-box {
    display: inline-block;
    position: absolute;
    height: 1080px;
    left: 0;
    top: 0;
    text-align: left;
    border-right: 3px solid #3a3a3a;
    // border-color: #f00;
    &.tooltab-box-shrink {
      border-right-width: 1px;
      width: 30px;
    }
    &.tooltab-box-expand {
      border-right-width: 1px;
    }
  }
    
}
.expand.tooltab {
  
    width: 500px;
    .tooltab-handle,
    .tooltab-genre {
      opacity: 1;
      transition: opacity .2s ease-in .2s;   
      display: flex;
    }
		.tooltab-func,
		.tooltab-tool {
      // border-top: 5px solid transparent;
      // border-top: 5px solid transparent;
      @include tooltabDefault;
			&:focus {
        @include tooltabFocus;
			}
      &.home {
        color: #f26f21;
      }
		}
    // .tooltab-func {
    //   &:focus {
    //     .tooltab-func-name {
    //       line-height: 70px;
    //     }
    //   }
    // }
    // .tooltab-tool {
    //   &:focus {
    //     .tooltab-tool-name {
    //       line-height: 55px;
    //     }
    //   }
    // }
    .tooltab-func {
        .icon {
            min-width: 120px;
            width: 120px;
        }
        .tooltab-func-name {
          font-size: 30px;
            opacity: 1;
            transition: opacity .2s ease-in .2s;
        }
    }
    .tooltab-tool {
      color: #CBCBCB;
        .icon {
            min-width: 120px;
            width: 120px;
        }
        .tooltab-tool-name {
          font-size: 24px;
            opacity: 1;
            transition: opacity .2s ease-in .2s;
        }
    }
}
.shrink.tooltab {
    width: 30px;
    >img {
        opacity: 1;
        transition: none;
    }
}
.tooltab {
    width: 120px;
    height: 100%;
    display: inline-block;
    position: relative;
    z-index: 710;
    vertical-align: top;
    // left: 0;
    // top: 0;
    // bottom: 0; 
    background-color: #231f20;
    overflow: hidden;
    // position: fixed;
    transition: width .2s ease-in;
    padding-top: 39px;
		z-index: 1500;
    box-shadow: 3px 3px 10px 3px rgba(0,0,0,.2);
    font-family: 'myFont';
    li {
        width: 100%;
        &:nth-child(1) {
          padding-top: 25px;
          border-bottom: 1px solid #000;
          padding-bottom: 20px;
        }
        &:nth-child(2) {
          padding-top: 15px;
          border-top: 1px solid #3a3a3a;
        }
    }
    >img {
        opacity: 0;
        transition: opacity .2s ease-in .2s;
        width: 24.6px;
        left: 4.1px;
    }
    .active {
      color: #f26f21;
    }
    &-logo {
        height: 32px;
        padding: 0 30px;
        text-align: left;
        img {
            height: 100%;
        }
    }
    &-handle {
        height: 51px;
        padding: 0 30px;
        text-align: left;
        opacity: 0;
    }
    &-genre {
      width: 70%;
      opacity: 0;
      padding-left: 30%;
      display: flex;
      flex-direction: column;
      justify-content: left;
      transition: height ease .1s;
      &-item {
        color: #999999;
        font-size: 27px;
        text-align: left;
        height: 60px;
        line-height: 60px;
      }
    }
    &-tool {
        height: 70px;
        width: 100%;
        display: flex;
        color: #999999;
        white-space: nowrap;
        position: relative;
        .icon {
            position: relative;
            width: 100%;
            &,
            .iconfont {
              height: 60px;
              line-height: 60px;
            }
            .iconfont {
              font-size: 45px;
              position: absolute;
              left: 37px;
              top: 0;
              // left: 37px;
              // top: 50%;
              // transform: translateY(-50%);         
            }
        }
        &-name {
            line-height: 60px;
            opacity: 0;
            font-size: 25px;
            transition: none;
        }
    }
    &-func {
        height: 90px;
        width: 100%;
        display: flex;
        color: #ffffff;
        white-space: nowrap;
        position: relative;
        .icon {
            position: relative;
            width: 100%;
            &,
            .iconfont {
              height: 80px;
              line-height: 80px;
            }
            .iconfont {
              font-size: 40px;
              position: absolute;
              left: 37px;
              top: 0;
              // transform: translateY(-50%);       
            }
            // img {
            //     position: absolute;
            //     height: 45px;
            //     width: 45px;
            //     left: 37px;
            //     top: 50%;
            //     transform: translateY(-50%);
            // }
        }
        &-name {
            line-height: 80px;
            opacity: 0;
            font-size: 27px;
            transition: none;
            font-weight: bold;
            // font-family: "sans-serif";
        }
    }
    &-tool.leavefocus,
    &-func.leavefocus {
      background-color: rgba(52, 46, 47, 0.97);
    }
}
.sub-navtab {
    // top: 0;
    // bottom: 0;
    display: inline-block;
    position: relative;
    z-index: 709;
    vertical-align: top;
    width: 350px;
    height: 100%;
    // left: 480px;
    margin-left: -20px;
    background-color: rgba(52, 46, 47, 0.97);
    overflow: hidden;
    // position: fixed;
    z-index: 1499;
    box-sizing: border-box;
    padding-top: 10px;
    padding-bottom: 10px;
		transition: left .2s ease-in 0;
    li {
      display: block;
    }
		&-item {
      @include subNavtabDefault;
      span {
        display: block;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
			&:focus {
        @include subNavtabFocus;
			}
		}
    .log-out-btn {
      height: 51px;
      margin: 41px 0 39px 53px;
      // transform: translateX(-50%);
    }
    .account-common {
      color: #cbcbcb;
      font-size: 25px;
			&:focus {
				color: #f26f21;
			}
    }
}
.button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #fff;
    width: 150px;
    font-size: 21px;
    text-align: center;
    line-height: 100%;
    color: #fff;
    font-weight: bold;
    cursor: pointer;
    font-family: "Roboto";
}
.button:focus {
  transform: scale(1.2);
  transition: transform ease .1s;
  background-color: #fff;
  color: #000;
  box-shadow: 0 5px 20px $colorBlack;
}
.button.primary:focus {
  background-color: #ed6d00;
  color: #fff;
}
.button.primary {
    border: none;
    background-color: #ed6d00;
}
.button.log-in:focus {
  background-color: #999999;
  border: 1px solid #999999;
}
.button+.button {
    margin-left: 15px;
}
.sub-navtab.w-30 {
	left: 30px;
	transition: left .2s ease-in 0;
}
</style>