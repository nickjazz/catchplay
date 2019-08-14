<script lang="js">
import { storageGet } from '@/components/common/ajax/ajax.js'
/* ajax */
let envDev = 'http://dev-recommend.zeasn.tv/api'
let envAcc = 'http://acc-recommend.zeasn.tv/api'
let envProd = 'https://recommend.zeasn.tv/api'
// dataGot
// let chart = {}
let categoryArr = []
let dataformatted = {}
let env = envDev // focus
let selectOptsPlayTypes = [
  {
    'value': 'youtube',
    'key': 'youtube'
  },
  {
    'value': 'youtube1',
    'key': 'youtube1'
  }
]
let selectOptsKeyboards = [
  {
    'value': 'true',
    'key': 'true'
  },
  {
    'value': 'false',
    'key': 'false'
  }
]
let selectOptsTemplates = [
  {
    'value': 'a1',
    'key': 'a1'
  },
  {
    'value': 'a2',
    'key': 'a2'
  },
  {
    'value': 'a3',
    'key': 'a3'
  },
  {
    'value': 'a4',
    'key': 'a4'
  },
  {
    'value': 'a5',
    'key': 'a5'
  },
  {
    'value': 'a6',
    'key': 'a6'
  },
  {
    'value': 'a7',
    'key': 'a7'
  },
  {
    'value': 'a8',
    'key': 'a8'
  }
]
let configAppInfo = {
  'config': {
    'noSubmit': false
  },
  'app': {
    'value': '',
    'title': 'app',
    'type': 'text',
    'valid': {
      'required': true
    },
    'validTip': ''
  },
  'template': {
    'value': '',
    'title': 'template',
    'type': 'select',
    'selectOpts': selectOptsTemplates,
    'valid': {
      'required': true
    },
    'validTip': ''
  },
  'playType': {
    'value': 'youtube',
    'title': 'playType',
    'type': 'select',
    'selectOpts': selectOptsPlayTypes,
    'valid': {
      'required': true
    },
    'validTip': ''
  },
  'iconStr': {
    'value': '',
    'title': 'iconStr',
    'type': 'text',
    'valid': {
      'required': false
    },
    'validTip': ''
  },
  'titleStr': {
    'value': '',
    'title': 'titleStr',
    'type': 'text',
    'valid': {
      'required': true
    },
    'validTip': ''
  },
  'maxResults': {
    'value': 1,
    'title': 'maxResults',
    'type': 'number',
    'valid': {
      'required': false
    },
    'validTip': ''
  },
  'customizedKeyboard': {
    'value': 'false',
    'title': 'customizedKeyboard',
    'type': 'select',
    'selectOpts': selectOptsKeyboards,
    'valid': {
      'required': true
    },
    'validTip': ''
  }
}
let ajaxParams = {
  // 所有的请求链接
  urls: {
    getChart: env + '/app/chart',
    getCategorys: env + '/app/categorys',
    getChannels: env + '/app/channels',
    getImages: env + '/app/images',
    getVideos: env + '/app/videos'
    // header: 'https://' + environment1 + '/Location/Get',
    // contentList: 'https://' + environment1 + '/ContentNavigationDisplay/GetByPermalink',
    // contentNavigation: 'https://' + environment1 + '/ContentNavigationDisplay/POST',
    // videos: "" + environment + "/api/app/videos",
    // channels: "" + environment + "/api/app/channels"
  },
  // 所有的请求参数
  params: {
    // objecttype: 'VIDEO',
    // 'acceptLanguage': 'en-US', // 例如：zh-CN, en-US,
    'acceptLanguage': '', // 例如：zh-CN, en-US,
    'format': '', // 非必填 响应格式： json/xml/jsonp
    'jsonpfname': '', // 非必填 当 format 为 jsonp 时必传,回调方法名
    // channelId: '59f180b6a35c38af7d870001',
    pageIndex: 0,
    maxResults: 15,
    regionCode: '' // 国家编码，符合 ISO 3166-1
    // part: 'snippet,thumbnails,url',
    // productId: 'al_jazeera_app'
  },
  // 获取首页信息
  // /app/chart
  paramsChart: {
    chart: 'category', // 请 求 数 据 类 型（channel/category） ,多个用逗号隔开。
    productId: '', // 产品 id
    // regionCode: '', // 国家编码，符合 ISO 3166-1
    part: 'id,snippet,thumbnails,item', // 请求类型数据部分 （id,snippet,thumbnails ,item）多个用逗号隔开
    itemPart: 'id,snippet,thumbnails,url,categorys,channels', // 非必填 part 中包含 item 时必传，请 求 子 项 数 据 部 分 （id,snippet,thumbnails,url,categorys,channels）多个用逗号        隔
    // maxResults: '', // 非必填 每个类型的请求个数（默认 10 条）
    // pageIndex: '', // 非必填 请求子项的起始条数（默认 0）
    maxItem: '5' // 非必填 请求子项的个数（默认 10 条）
  },
  // 获取分类信息
  // /app/categorys
  paramsCategorys: {
    part: 'id,snippet,thumbnails', // 请 求 分 类 数 据 部 分（id,snippet,thumbnails）多个用逗号隔开
    productId: '', // 非必填 产品 id，分类 id 必须传入一个
    id: '' // 非必填 产品 id，分类 id 必须传入一个
    // regionCode: '', // 非必填 国家编码，符合 ISO 3166-1
    // maxResults: '', // 非必填 请求个数（默认 10 条）
    // pageIndex: '', // 非必填 请求的起始条数（默认 0）
  },
  // 获取频道信息
  // /app/channels
  paramsChannels: {
    part: 'id,snippet,thumbnails', // 请 求 频 道 数 据 部 分（id,snippet,thumbnails）多个用逗号隔开
    productId: '', // 非必填 产品 id，分类 id 必须传入一个
    id: '' // 非必填 产品 id，分类 id 必须传入一个
    // regionCode: '', // 非必填 国家编码，符合 ISO 3166-1
    // maxResults: '', // 非必填 请求个数（默认 10 条）
    // pageIndex: '', // 非必填 请求的起始条数（默认 0）
  },
  // 获取图片信息
  // /app/images
  paramsImages: {
    part: 'id,snippet,thumbnails', // 请 求 频 道 数 据 部 分（id,snippet,thumbnails）多个用逗号隔开
    categoryId: '', // 非必填 分类 id，频道 id，图片 id 必须传入一个
    channelId: '', // 非必填 分类 id，频道 id，图片 id 必须传入一个
    id: '' // 非必填 分类 id，频道 id，图片 id 必须传入一个
    // regionCode: '', // 非必填 国家编码，符合 ISO 3166-1
    // maxResults: '', // 非必填 请求个数（默认 10 条）
    // pageIndex: '', // 非必填 请求的起始条数（默认 0）
  },
  // 获取视频信息
  // /app/videos
  paramsVideos: {
    part: 'id,snippet,thumbnails,url', // 请 求 频 道 数 据 部 分（id,snippet,thumbnails,url）多个用逗号隔开
    categoryId: '', // 非必填 分类 id，频道 id，视频 id 必须传入一个
    channelId: '', // 非必填 分类 id，频道 id，视频 id 必须传入一个
    id: '' // 非必填 分类 id，频道 id，视频 id 必须传入一个
    // regionCode: '', // 非必填 国家编码，符合 ISO 3166-1
    // maxResults: '', // 非必填 请求个数（默认 10 条）
    // pageIndex: '', // 非必填 请求的起始条数（默认 0）
  }
}
let videoParams = {
  id: undefined,
  channelId: undefined,
  channelName: undefined,
  categoryId: undefined,
  categoryName: undefined,
  resultCount: undefined
}
let imageParams = {
  id: undefined,
  channelId: undefined,
  channelName: undefined,
  categoryId: undefined,
  categoryName: undefined,
  resultCount: undefined
  /* data formatted */
}
let dataFormatted = {}

/* for specific template params */
let templateNumber = ''
let productId = 'cnn_news_app' // national_geographic_app

let templateId = ''

let iconStr = ''
let iconHeight = ''
let iconWidth = ''

let titleStr = ''

let playType = ''

// if (Vue.appInfo.iconStr && Vue.appInfo.iconStr !== '') {
//       Vue.iconStr = require(`@/assets/img/appicons/${Vue.appInfo.iconStr}`)
//     }
// if (Vue.appInfo.playType && Vue.appInfo.playType !== '') {
//   Vue.playType = Vue.appInfo.playType
// }
// if (Vue.appInfo.app && Vue.appInfo.app !== '') {
//   Vue.titleStr = Vue.appInfo.titleStr
// }

let defVideoImg = '~@/assets/img/a5/video.png'

let listApp = []
let appId = ''
let appInfo = {}

let app1 = {}
let app2 = {}

let app3 = {}
let app4 = {}
let app5 = {
  /**
   * 记录当前焦点位置
   */
  focus: null,
  /** 记录当前选择的页面
   *  home: 首页，列表
   *  menu: 菜单
   */
  selected: 'home',
  /**
   * 记录列表一共多少行
   */
  rowsNum: 0,
  rows: -1,
  cols: -1,
  defVideoImg: defVideoImg,
  loadImg: function loadImg (parm, defImg) {
    parm.src = defImg
    // let img = new Image();
    // img.src = parm.src;
    // img.onload = function(){
    //     img.onload = null;
    //     // // console.log('onload ');
    //     callbackOneImg.call(img);
    // };
    // img.onerror = function(){
    //     // // console.log('img error show def');
    //     parm.src = defImg;
    // };
    // function callbackOneImg(){
    //     // // console.log('onload back');
    //     parm.src =  this.src;
    // }
  },
  /**
   * 切换页面
   * @param page
   *   1，列表页
   *   2，菜单menu页面
   */
  switchPage: function switchPage (page, isBack) {
    switch (page) {
      case 1:
        $('#menu-tab').stop().animate({
          left: -400
        }, 300, function () {
          $('#menu').css('display', 'none')
          $('#home-menuIcon').css('display', 'block')
          $('#home-menuIcon-bg').css('display', 'block')
        })
        if (isBack) {
          this.focusCenter(this.rows, this.cols)
          this.focus = $('#home-gridview li[rows="' + this.rows + '"][cols="' + this.cols + '"]').focus()
        } else {
          let rows = this.focus.attr('rows')
          let focused = $('#home-gridview li[rows="' + rows + '"].focus')
          this.cols = parseInt(focused.attr('cols'))
          this.rows = parseInt(rows)
          this.focus = focused.focus()
        }
        this.selected = 'home'
        break
      case 2:
        $('#menu').css('display', 'block')
        $('#home-menuIcon').css('display', 'none')
        $('#home-menuIcon-bg').css('display', 'none')
        $('#menu-tab').stop().animate({
          left: 0
        }, 300)
        let rows = this.focus.attr('rows')
        this.focus = $('#menu-list li[rows="' + rows + '"]').focus()
        this.selected = 'menu'
        break
    }
  },
  // 获取焦点后滚动标题
  scrollText: function scrollText (focused, offset) {
    // console.log('scrollText fun')
    if (!this.scrollTextLater) {
      clearTimeout(this.scrollTextLater)
    }
    // console.log('next for scrollTextLater')
    this.scrollTextLater = setTimeout(function () {
      clearInterval(this.scrollTextInterval)
      let marquee = focused.find('.marquee')
      let pWidth = marquee.parent().width()
      let width = marquee.width()
      if (width > pWidth) {
        let left = 0
        this.scrollTextInterval = setInterval(function () {
          left = left - 2
          if (left + width + offset <= 0) {
            left = pWidth
          }
          marquee.css('left', left + 'px')
        }, 50)
      }
    }, 1000)
  },
  // 获取焦点延迟滚动
  scrollTextLater: null,
  scrollTextInterval: null,
  clearTextScroll: function clearTextScroll (blured) {
    clearTimeout(this.scrollTextLater)
    clearInterval(this.scrollTextInterval)
    blured.find('.marquee').removeAttr('style')
  },
  playVideo: function playVideo () {
    window.localStorage.rows = this.focus.attr('rows')
    window.localStorage.cols = this.focus.attr('cols')
    let url = this.focus.attr('data-url')
    // window.open("video.html?video=" + url);
    location.href = 'video.html?video=' + url
  },
  // 首次进入应用获取焦点
  getFocus: function getFocus () {
    $('#loading').css('display', 'none')
    if (this.focus) {
      return
    }
    this.cols = parseInt(window.localStorage.cols)
    this.rows = parseInt(window.localStorage.rows)
    this.focus = $('#home-gridview li[rows="' + this.rows + '"][cols="' + this.cols + '"]')
    if (this.focus.length === 0) {
      this.cols = 1
      this.rows = 0
      this.focusCenter(this.rows, this.cols)
      this.focus = $('#home-gridview .list .list-view').eq(0).children('.focus').focus()
    } else {
      this.focusCenter(this.rows, this.cols)
      this.focus.focus()
    }
  },
  /**
   * 触发menuicon 的显示隐藏
   * @param isShowing
   *  true ：在显示
   *  false：隐藏中
   *
   */
  toggleMenuIcon: function toggleMenuIcon (isShowing) {
    if (isShowing) {
      $('#home-menuIcon').stop().animate({
        left: -50
      }, 300)
      $('#home-menuIcon-bg').stop().animate({
        left: -93
      }, 300)
    } else {
      $('#home-menuIcon').stop().animate({
        left: 18
      }, 300)
      $('#home-menuIcon-bg').stop().animate({
        left: 0
      }, 300)
    }
  },
  nextFocus: function nextFocus (rows, cols) {
    let nextfocus
    if (rows !== this.rows) {
      nextfocus = $('.item-view[rows="' + rows + '"].focus')
    } else {
      nextfocus = $('[rows="' + rows + '"][cols="' + cols + '"]')
    }

    if (nextfocus.length === 0) {
      return false
    }
    this.cols = parseInt(nextfocus.attr('cols'))
    this.rows = rows
    this.focusCenter(this.rows, this.cols)
    this.focus = nextfocus.focus()
    return nextfocus
  },
  focusCenter: function focusCenter (rows, cols) {
    let brother = $('#home-gridview li[rows="' + rows + '"]')
    if (cols > 1) {
      this.toggleMenuIcon(true)
    } else {
      this.toggleMenuIcon(false)
    }
    if (this.rowsNum <= 0) {
      // // // console.log('rows error');
      return
    }
    if (rows > this.rowsNum - 2) {
      rows = this.rowsNum - 2
    }
    // $('#home-gridview .list').css('top',0 - rows * 242+'px');
    $('#home-gridview .list').stop().animate({
      'top': 0 - rows * 242
    }, 300, function () {
      $('#content').scrollTop = 0
    })
    $('#home-gridview .list').removeClass('focuseOn')
    brother.parent().parent().parent().addClass('focuseOn')
    if (cols > brother.length - 1) {
      cols = brother.length - 1
    }
    if (cols < 4) {
      cols = 3
    }

    // brother.stop().animate({left: 91 - (cols - 3) * 260}, 300,function () {
    //     brother.parent().parent()[0].scrollLeft=0;
    // });
    brother.parent().parent().stop().animate({
      scrollLeft: (cols - 3) * 260
    }, 300)
  }
}

let testDiv = ''
// 获取其他界面过来的数据
// let getQueryString = function (name) {
//   let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
//   let r = window.location.search.substr(1).match(reg)
//   if (r != null) return unescape(r[2])
//   return null
// }
let attributeCount = function (obj) {
  let count = 0
  for (let i in obj) {
    if (obj.hasOwnProperty(i)) { // 建议加上判断,如果没有扩展对象属性可以不加
      count++
    }
  }
  return count
}
let getByClass = function (oParent, sClass) {
  let aResult = []
  let aEle = oParent.getElementsByTagName('*')

  for (let i = 0; i < aEle.length; i++) {
    if (aEle[i].className === sClass) {
      aResult.push(aEle[i])
    }
  }

  return aResult
}
let getAppInfo = async function (_appid) {
  let res = await storageGet('storage/app-list.json')
  let appId = _appid
  let listApp = res.list
  let count = 0
  while (listApp[count] && listApp[count].app && listApp[count].app !== appId) {
    count++
  }
  let appInfo = listApp[count]
  // Vue.iconStr = require('@' + Vue.$route.params.iconStr)
  return appInfo
}

let getDataTemp = async function (_filename) {
  let res = await storageGet('storage/' + _filename)
  // console.log('res')
  // console.log(res)
  return res
}

let cloneObj = function (obj) {
  let temp = null
  if (obj instanceof Array) {
    temp = obj.concat()
  } else if (obj instanceof Function) {
    // 函数是共享的是无所谓的，js也没有什么办法可以在定义后再修改函数内容
    temp = obj
  } else {
    // temp = new Object()
    // The object literal notation {} is preferrable.
    temp = {}
    for (let item in obj) {
      let val = obj[item]
      temp[item] = typeof val === 'object' ? cloneObj(val) : val // 这里也没有判断是否为函数，因为对于函数，我们将它和一般值一样处理
    }
  }
  return temp
}

let attrCount = function (obj) {
  let count = 0
  for (let i in obj) {
    if (obj.hasOwnProperty(i)) { // 建议加上判断,如果没有扩展对象属性可以不加
      count++
    }
  }
  return count
}
// let app = {}

let findDimensions = function () { // 函数：获取尺寸
  let Dimensions = {
    width: 1280,
    height: 720
  }
  // 获取窗口宽度
  if (window.innerWidth) {
    Dimensions.width = window.innerWidth
  } else if ((document.body) && (document.body.clientWidth)) {
    Dimensions.width = document.body.clientWidth
  }

  // 获取窗口高度
  if (window.innerHeight) {
    Dimensions.height = window.innerHeight
  } else if ((document.body) && (document.body.clientHeight)) {
    Dimensions.height = document.body.clientHeight
  }

  // 通过深入Document内部对body进行检测，获取窗口大小
  if (document.documentElement &&
    document.documentElement.clientHeight &&
    document.documentElement.clientWidth) {
    Dimensions.height = document.documentElement.clientHeight
    Dimensions.width = document.documentElement.clientWidth
  }
  return Dimensions
  // 结果打印输出
  // if ($('.testDiv1')[0]) {
  //   testDiv += '<p> ******************** window width: ' + winWidth + ', height: ' + winHeight + '</p>'
  //   testCount += 1
  //   $('.testDiv1').html(testDiv)
  //   if (testCount % 10 === 0) {
  //     testDiv = ''
  //   }
  // }
}

// findDimensions()
let getScreenWH = function (doc, win) {
  let p = new Promise(function (resolve, reject) {
    let docEl = doc.documentElement
    let resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
    let recalc = function () {
      let clientWidth = docEl.clientWidth
      if (!clientWidth) return
      // docEl.style.fontSize = 10 * (clientWidth / 1000) + "px"; // 50 * 375
      docEl.style.fontSize = 19.2 * (clientWidth / 1920) // + 'px'
      let length = docEl.style.fontSize.length
      let sizeNumber = Number(docEl.style.fontSize.slice(0, length - 2))
      resolve(sizeNumber)
    }
    if (!doc.addEventListener) return
    win.addEventListener(resizeEvt, recalc, false)
    doc.addEventListener('DOMContentLoaded', recalc, false)
  })
  return p
}
// getScreenWH(document, window)

export default {
  envDev,
  envAcc,
  envProd,
  configAppInfo,
  categoryArr,
  dataformatted,
  ajaxParams,
  videoParams,
  imageParams,
  dataFormatted,
  templateNumber,
  productId,
  templateId,
  iconStr,
  iconHeight,
  iconWidth,
  titleStr,
  playType,
  app1,
  app2,
  app3,
  app4,
  app5,
  // 方法
  attributeCount,
  getByClass,
  listApp,
  appId,
  appInfo,
  storageGet,
  getAppInfo,
  cloneObj,
  getDataTemp,
  attrCount,
  testDiv,
  findDimensions,
  getScreenWH
}
</script>
