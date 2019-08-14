<template>
  <div id="keyboardArea">
    <ul id="keyboard">
      <li class="keyboardLi letter" id="keyboards_1_1" tabindex="1">Q</li>
      <li class="keyboardLi letter" id="keyboards_1_2" tabindex="1">W</li>
      <li class="keyboardLi letter" id="keyboards_1_3" tabindex="1">E</li>
      <li class="keyboardLi letter" id="keyboards_1_4" tabindex="1">R</li>
      <li class="keyboardLi letter" id="keyboards_1_5" tabindex="1">T</li>
      <li class="keyboardLi letter" id="keyboards_1_6" tabindex="1">Y</li>
      <li class="keyboardLi letter" id="keyboards_1_7" tabindex="1">U</li>
      <li class="keyboardLi letter" id="keyboards_1_8" tabindex="1">I</li>
      <li class="keyboardLi letter" id="keyboards_1_9" tabindex="1">O</li>
      <li class="keyboardLi letter" id="keyboards_1_10" tabindex="1">P</li>
      <li class="keyboardLi number" id="keyboards_1_11" tabindex="1">1</li>
      <li class="keyboardLi number" id="keyboards_1_12" tabindex="1">2</li>
      <li class="keyboardLi number" id="keyboards_1_13" tabindex="1">3</li>
      <li class="keyboardLi letter" id="keyboards_2_1" tabindex="1">A</li>
      <li class="keyboardLi letter" id="keyboards_2_2" tabindex="1">S</li>
      <li class="keyboardLi letter" id="keyboards_2_3" tabindex="1">D</li>
      <li class="keyboardLi letter" id="keyboards_2_4" tabindex="1">F</li>
      <li class="keyboardLi letter" id="keyboards_2_5" tabindex="1">G</li>
      <li class="keyboardLi letter" id="keyboards_2_6" tabindex="1">H</li>
      <li class="keyboardLi letter" id="keyboards_2_7" tabindex="1">J</li>
      <li class="keyboardLi letter" id="keyboards_2_8" tabindex="1">K</li>
      <li class="keyboardLi letter" id="keyboards_2_9" tabindex="1">L</li>
      <li class="keyboardLi number" id="keyboards_2_10" tabindex="1">0</li>
      <li class="keyboardLi number" id="keyboards_2_11" tabindex="1">4</li>
      <li class="keyboardLi number" id="keyboards_2_12" tabindex="1">5</li>
      <li class="keyboardLi number" id="keyboards_2_13" tabindex="1">6</li>
      <li class="keyboardLi letter" id="keyboards_3_1" tabindex="1">Z</li>
      <li class="keyboardLi letter" id="keyboards_3_2" tabindex="1">X</li>
      <li class="keyboardLi letter" id="keyboards_3_3" tabindex="1">C</li>
      <li class="keyboardLi letter" id="keyboards_3_4" tabindex="1">V</li>
      <li class="keyboardLi letter" id="keyboards_3_5" tabindex="1">B</li>
      <li class="keyboardLi letter" id="keyboards_3_6" tabindex="1">N</li>
      <li class="keyboardLi letter" id="keyboards_3_7" tabindex="1">M</li>
      <li class="keyboardLi" id="keyboards_3_8" tabindex="1">
        <img id="trash" :src="require('@/components/common/keyboard/img/trash.png')" alt>
      </li>
      <li class="keyboardLi" id="keyboards_3_9" tabindex="1">
        <img id="space" :src="require('@/components/common/keyboard/img/space.png')" alt>
      </li>
      <li class="keyboardLi" id="keyboards_3_10" tabindex="1">
        <img id="delete" :src="require('@/components/common/keyboard/img/delete.png')" alt>
      </li>
      <li class="keyboardLi number" id="keyboards_3_11" tabindex="1">7</li>
      <li class="keyboardLi number" id="keyboards_3_12" tabindex="1">8</li>
      <li class="keyboardLi number" id="keyboards_3_13" tabindex="1">9</li>
    </ul>
  </div>
</template>
<script lang="js">
export default {
  name: 'keyboard-basic',
  props: {
    // keyboardfocus: {
    //   type: Boolean,
    //   default: false
    // },
    // value: {
    //   type: String,
    //   default: '1_1'
    // },
    value: {
      type: Object
      // default: function () {
      //   return {
      //     focusId: '1_1'
      //   }
      // }
    }
  },
  data: function () {
    return {
      // keyboardfocusNew: false,
      keyNum_x: 1,
      keyNum_y: 1,
      keyLock: false,
      KEY_CODE: {
        8: 'BACK',
        37: 'LEFT',
        38: 'UP',
        39: 'RIGHT',
        40: 'DOWN',
        13: 'ENTER',
        17: 'MENU'
      },
      cursorFocus: true,
      valueNew: {},
      keyValue: ''
    }
  },
  watch: {
    // keyboardfocus: function (_v) {
    //   let Vue = this
    //   Vue.$emit('keyboardfocus', _v)
    // },
    // keyboardfocusNew: function (_v) {
    //   let Vue = this
    //   Vue.keyboardfocus = _v
    // }
    // value: function (_v) {
    //   this.valueNew = _v
    //   let Vue = this
    //   Vue.$emit('value', _v)
    // },
    valueNew: function (_v) {
      // let Vue = this
      // Vue.value = _v
      // this.$emit('value', _v)
    }
  },
  methods: {
    // 初始化键盘
    initKeyboard: function () {
      // // console.log('initKeyboard fun')
      let Vue = this
      // Vue.keyNum_x = 1
      // Vue.keyNum_y = 1
      $('.keyboardActive').removeClass('keyboardActive')
      // // console.log("$('.keyboardActive')")
      // // console.log($('.keyboardActive'))
      // // console.log('keyboards_1_1')
      // // console.log($('#keyboards_1_1'))
      // return
      if ($('#keyboardArea').hasClass('none')) $('#keyboardArea').removeClass('none')
      // if (!$('#keyboards_' + Vue.keyNum_x + '_' + Vue.keyNum_y).hasClass('keyboardActive')) $('#keyboards_' + Vue.keyNum_x + '_' + Vue.keyNum_y).addClass('keyboardActive')
      if (!$('#keyboards_' + Vue.keyNum_x + '_' + Vue.keyNum_y).hasClass('keyboardActive')) $('#keyboards_' + Vue.keyNum_x + '_' + Vue.keyNum_y).addClass('keyboardActive')
      // return
      if ($('#search_button')[0]) $('#search_button')[0].setAttribute('style", "opacity:0.5') // test
      $('.focus').removeClass('focus')
      $('#keyboards_' + Vue.keyNum_y + '_' + Vue.keyNum_x).addClass('focus')
      Vue.keyLock = false
      // Vue.valueNew.keyboardFocus = false
      // Vue.$emit('keyboardfocus', true)
      Vue.valueNew.keyboardFocus = true
      // Vue.$emit('keyboarddata', Vue.valueNew)
    },
    doSearch: function () {
      // // console.log('doSearch fun')
    },
    keyboardfocusFun: function (_keyCode) {
      let Vue = this
      // // console.log('keyboard basic keyboardfocusFun fun')
      // // console.log('Vue.keyLock: ' + Vue.keyLock)
      // // console.log(_keyCode)
      // return
      // // console.log(Vue.valueNew.keyboardFocus)
      // // // console.log()
      // return
      if (Vue.keyLock) return
      // // console.log('if keyLock === false continue')
      // // console.log('Vue.valueNew.keyboardFocus: ' + Vue.valueNew.keyboardFocus)
      if (Vue.valueNew.keyboardFocus) {
        // // console.log('Vue.KEY_CODE[_keyCode]: ')
        // // console.log(Vue.KEY_CODE[_keyCode])
        switch (Vue.KEY_CODE[_keyCode]) {
          case 'LEFT': // 左
            if (Vue.keyNum_y === 0) {
            // if ($('#search_button').hasClass('focus')) {
              // if ($('#search_button').hasClass('focus')) {
              //   $('.focus').removeClass('focus')
              //   $('#queryText').addClass('focus')
              //   $('#search_button')[0].setAttribute('style', 'opacity:0.5')
              //   Vue.cursorFocus = true
              // }
            } else {
              if ($('#keyboards_' + Vue.keyNum_y + '_' + Vue.keyNum_x).hasClass('keyboardActive')) { $('#keyboards_' + Vue.keyNum_y + '_' + Vue.keyNum_x).removeClass('keyboardActive') }
              if (Vue.keyNum_x <= 1) {
                Vue.keyNum_x += 13
              }
              Vue.keyNum_x--
              if (!$('#keyboards_' + Vue.keyNum_y + '_' + Vue.keyNum_x).hasClass('keyboardActive')) { $('#keyboards_' + Vue.keyNum_y + '_' + Vue.keyNum_x).addClass('keyboardActive') }
            }
            break
          case 'RIGHT':// 右
            // if ($('#queryText').hasClass('focus')) {
            //   $('.focus').removeClass('focus')
            //   $('#search_button').addClass('focus')
            //   $('#search_button')[0].setAttribute('style', 'opacity:1.0')
            //   Vue.cursorFocus = false
            // } else if (Vue.keyNum_y > 0) {
            if ($('#keyboards_' + Vue.keyNum_y + '_' + Vue.keyNum_x).hasClass('keyboardActive')) { $('#keyboards_' + Vue.keyNum_y + '_' + Vue.keyNum_x).removeClass('keyboardActive') }
            if (Vue.keyNum_x >= 13) {
              Vue.keyNum_x -= 13
            }
            Vue.keyNum_x++
            if (!$('#keyboards_' + Vue.keyNum_y + '_' + Vue.keyNum_x).hasClass('keyboardActive')) { $('#keyboards_' + Vue.keyNum_y + '_' + Vue.keyNum_x).addClass('keyboardActive') }
            // }
            break
          case 'UP':// 上
            console.log('case up')
            console.log('Vue.keyNum_y')
            if (Vue.keyNum_y > 1) {
              console.log('if Vue.keyNum_y > 1')
              if ($('#keyboards_' + Vue.keyNum_y + '_' + Vue.keyNum_x).hasClass('keyboardActive')) { $('#keyboards_' + Vue.keyNum_y + '_' + Vue.keyNum_x).removeClass('keyboardActive') }
              Vue.keyNum_y--
              if (!$('#keyboards_' + Vue.keyNum_y + '_' + Vue.keyNum_x).hasClass('keyboardActive')) { $('#keyboards_' + Vue.keyNum_y + '_' + Vue.keyNum_x).addClass('keyboardActive') }
            } else if (Vue.keyNum_y === 1) {
              console.log('if Vue.keyNum_y === 1')
              $('#keyboards_1_' + Vue.keyNum_x).removeClass('keyboardActive')
              Vue.keyNum_y--
              // Vue.keyLock = false
              Vue.keyLock = true
              // Vue.valueNew.keyboardFocus = false
              // Vue.$emit('keyboardfocus', false)
              Vue.valueNew.keyboardFocus = false
              Vue.$emit('keyboarddata', Vue.valueNew)
              $('.focus').removeClass('focus')
            // $('#queryText').addClass('focus')
            }
            break
          case 'DOWN':// 下
            if (Vue.keyNum_y < 3) {
              // if ($('#search_button').hasClass('focus')) {
              //   $('#search_button')[0].setAttribute('style', 'opacity:0.5')
              //   Vue.cursorFocus = true
              //   $('.focus').removeClass('focus')
              // } else if ($('#queryText').hasClass('focus')) {
              //   $('.focus').removeClass('focus')
              // }
              if ($('#keyboards_' + Vue.keyNum_y + '_' + Vue.keyNum_x).hasClass('keyboardActive')) { $('#keyboards_' + Vue.keyNum_y + '_' + Vue.keyNum_x).removeClass('keyboardActive') }
              Vue.keyNum_y++
              if (!$('#keyboards_' + Vue.keyNum_y + '_' + Vue.keyNum_x).hasClass('keyboardActive')) { $('#keyboards_' + Vue.keyNum_y + '_' + Vue.keyNum_x).addClass('keyboardActive') }
              break
            }
            break
          case 'ENTER':// 回车
            console.log('keydown case enter keyboard comp 123')
            Vue.$set(Vue, 'keyValue', Vue.valueNew.keyValue)
            console.log(Vue.valueNew.keyValue)
            console.log(Vue.keyValue)
            // return
            if ($('#queryText').hasClass('focus')) {
              // // console.log('if queryText')
              // Vue.initKeyboard()
              // Vue.cursorFocus = true
            } else if ($('#search_button').hasClass('focus')) { // 搜索
              // // console.log('else (queryText)')
              // if (!$('#keyboardArea').hasClass('none')) {
              //   $('#keyboardArea').addClass('none')
              // }
              // if ($('#loading').hasClass('none')) {
              //   $('#loading').removeClass('none')
              // }
              // Vue.doSearch()
              // Vue.keyLock = true
            } else if (Vue.keyNum_x === 8 && Vue.keyNum_y === 3) {
              // $('#queryText')[0].innerHTML = ''
              // Vue.$emit('keyValue', '')
              Vue.keyValue = ''
            } else if (Vue.keyNum_x === 9 && Vue.keyNum_y === 3) {
              // $('#queryText')[0].innerHTML += '&nbsp;'
              // Vue.$emit('keyValue', '&nbsp;')
              // Vue.keyValue += '&nbsp;'
              Vue.keyValue += ' '
            } else if (Vue.keyNum_x === 10 && Vue.keyNum_y === 3) {
              // var strTemp = $('#queryText')[0].innerText
              var strTemp = Vue.keyValue
              Vue.keyValue = strTemp.substring(0, strTemp.length - 1)
              $('.focus').removeClass('focus')
            } else if ($('#keyboards_' + Vue.keyNum_y + '_' + Vue.keyNum_x).hasClass('keyboardActive')) {
              // Vue.keyValue += $('#keyboards_' + Vue.keyNum_y + '_' + Vue.keyNum_x)[0].innerText
              // if (Vue.keyValue.length > 20) {
              //   $('#queryText').text($('#queryText').text().substring(0, 20))
              // }
              if (Vue.keyValue.length <= 20) {
                Vue.keyValue += $('#keyboards_' + Vue.keyNum_y + '_' + Vue.keyNum_x)[0].innerText
              }
            }
            // Vue.$emit('keyValue', Vue.keyValue)
            Vue.valueNew.keyValue = Vue.keyValue
            console.log('after input')
            console.log(Vue.valueNew.keyValue)
            console.log(Vue.keyValue)
            Vue.$emit('keyboarddata', Vue.valueNew)
            // Vue.$emit('keyvalue', Vue.keyValue)
            break
          case 'BACK':// 返回
            Vue.keyLock = true
            // Vue.valueNew.keyboardFocus = true
            // Vue.$emit('keyboardfocus', false)
            Vue.$set(Vue, 'keyValue', '')
            Vue.valueNew.keyValue = Vue.keyValue
            Vue.valueNew.keyboardFocus = false
            Vue.$emit('keyboarddata', Vue.valueNew)
            Vue.cursorFocus = false
            if ($('.keyboardActive')) {
              $('.focus').removeClass('focus')
              $('#queryText').addClass('focus')
              Vue.cursorFocus = true
            }
            if (!$('#keyboardArea').hasClass('none')) {
              $('#keyboardArea').addClass('none')
            }
        }
      } else {

      }
    }
  },
  created: function () {
    let Vue = this
    // // console.log('mounted keyboard')
    Vue.valueNew = Vue._global.cloneObj(Vue.value)
    // Vue.valueNew = Vue.value
    // Vue.keyboardfocus = Vue.valueNew.keyboardFocus
    // Vue.valueNew.keyboardFocus = Vue.keyboardfocus
    let idArr = Vue.valueNew.focusId.split('_')
    // // // console.log('idArr')
    // // // console.log(idArr)
    Vue.keyNum_x = Number(idArr[0])
    Vue.keyNum_y = Number(idArr[1])
    Vue.$nextTick(() => {
      Vue.initKeyboard()
    })
  }
}
</script>
<style scoped lang='scss'>
#keyboardArea {
  // background-image: url("img/keyboard_bg.png");
  background: #6d7083;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  // width: 1300px;
  // height: 264px;
  width: 1950px;
  height: 396px;
  position: fixed;
  bottom: 0px;
  // left: -10px;
  left: -15px;

  #keyboard {
    // margin-left: 297px;
    // margin-top: 40px;
    margin-left: 445.5px;
    margin-top: 60px;
    // margin-right: 250px;
    // margin-bottom: 52px;
    margin-right: 375px;
    margin-bottom: 78px;
    // width: 676px;
    width: 1014px;
  }

  li {
    float: left;
    // width: 48px;
    // height: 40px;
    width: 72px;
    height: 60px;
    // margin: 2px 2px 10px 2px;
    // padding-top: 12px;
    margin: 3px 3px 15px 3px;
    padding-top: 18px;
    list-style-type: none;
    outline: none;
  }
  .keyboardActive {
    // background-image: url("img/saerch_keyboard_bg.png");
    background: #a7a8b2;
    background-repeat: no-repeat;
    // box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
    box-shadow: 0 4.5px 9px rgba(0, 0, 0, 0.3);
  }
  .keyboardLi {
    // font-size: 25px;
    font-size: 37.5px;
    font-family: Roboto;
    color: rgba(255, 255, 255, 1);
    // line-height: 24px;
    line-height: 36px;
    text-align: center;
  }
}
</style>
