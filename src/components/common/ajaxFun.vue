<script lang="js">
import _global from '@/components/common/global.vue'
import Vue from 'vue'
let HTTP = new Vue()
/* fun */
// crossDomain:true,
// dataType:'jsonp',
// jsonp:'callback',
let getChartAjax = function getChartAjax (_ajaxParams, _callbackGetChartAjax) {
  // // // // // // // // // // // // // // // // console.log('getChart');
  let ajaxurl = _ajaxParams.urls.getChart + '?chart=' + _ajaxParams.paramsChart.chart + '&productId=' + _ajaxParams.paramsChart.productId + '&part=' + _ajaxParams.paramsChart.part
  if (_ajaxParams.params.regionCode) ajaxurl += '&regionCode=' + _ajaxParams.params.regionCode
  if (_ajaxParams.params.maxResults) ajaxurl += '&maxResults=' + _ajaxParams.params.maxResults
  if (_ajaxParams.params.pageIndex) ajaxurl += '&pageIndex=' + _ajaxParams.params.pageIndex
  if (_ajaxParams.paramsChart.itemPart) ajaxurl += '&itemPart=' + _ajaxParams.paramsChart.itemPart
  if (_ajaxParams.paramsChart.maxItem) ajaxurl += '&maxItem=' + _ajaxParams.paramsChart.maxItem
  ajaxurl += '&' + Math.random()
  return HTTP.$http.ajax({
    dataType: 'jsonp',
    url: ajaxurl,
    headers: {
      'Accept-Language': _ajaxParams.params.acceptLanguage
    },
    data: '',
    success: function success (res) {
      if (_callbackGetChartAjax) _callbackGetChartAjax(res)
    },
    error: function error (res) {
      // // // // // // // // // // // // // // // // console.log('error');
    }
  })
  // .then((res) => res);
}
function getCategorysAjax (_ajaxParams, _callbackGetCategorysAjax) {
  // // // // console.log('getCategorysAjax fun _ajaxParams.paramsCategorys.productId')
  // // // // console.log(_ajaxParams.paramsCategorys.productId)
  let ajaxurl = _ajaxParams.urls.getCategorys + '?part=' + _ajaxParams.paramsCategorys.part + '&productId=' + _ajaxParams.paramsCategorys.productId
  if (_ajaxParams.params.regionCode) ajaxurl += '&regionCode=' + _ajaxParams.params.regionCode
  if (_ajaxParams.params.maxResults) ajaxurl += '&maxResults=' + _ajaxParams.params.maxResults
  if (_ajaxParams.params.pageIndex) ajaxurl += '&pageIndex=' + _ajaxParams.params.pageIndex
  ajaxurl += '&' + Math.random()
  return HTTP.$http.get(ajaxurl,
    {
      headers: {
        'Accept-Language': _ajaxParams.params.acceptLanguage
      }
    }
  ).then((res) => res)
  // .then((res) => {
  //   // // // // // // // // // // console.log('HTTP.$http success')
  //   // // // // // // // // // // console.log(res.data)
  //   // return
  //   res.data
  // }, (res) => {
  //   // // // // // // // // // // console.log('HTTP.$http error')
  //   // // // // // // // // // // console.log(res)
  // })
  // return HTTP.$http.ajax({
  //   type: 'get',
  //   url: ajaxurl,
  //   dataType: 'jsonp',
  //   headers: {
  //     'Accept-Language': _ajaxParams.params.acceptLanguage
  //   },
  //   data: '',
  //   success: function success (res) {
  //     if (_callbackGetCategorysAjax) _callbackGetCategorysAjax(res)
  //   },
  //   error: function error (res) {
  //     let resStr = JSON.stringify(res)
  //     // // // // // // // // // // // console.log(resStr)
  //   }
  // })
  // .then((res) => res);
}
let getChannelsAjax = function getChannelsAjax (_ajaxParams, _callbackGetChannelAjax) {
  // // // // // // // // // // // // // // // // console.log('getChannels');
  // let getRes = void 0
  let ajaxurl = _ajaxParams.urls.getChannels + '?part=' + _ajaxParams.paramsChannels.part + '&productId=' + _ajaxParams.paramsChannels.productId
  if (_ajaxParams.params.regionCode) ajaxurl += '&regionCode=' + _ajaxParams.params.regionCode
  if (_ajaxParams.params.maxResults) ajaxurl += '&maxResults=' + _ajaxParams.params.maxResults
  if (_ajaxParams.params.pageIndex) ajaxurl += '&pageIndex=' + _ajaxParams.params.pageIndex
  ajaxurl += '&' + Math.random()
  return HTTP.$http.get(ajaxurl,
    {
      headers: {
        'Accept-Language': _ajaxParams.params.acceptLanguage
      }
    }
  ).then((res) => res)

  // return HTTP.$http.ajax({
  //   type: 'get',
  //   dataType: 'jsonp',
  //   url: ajaxurl,
  //   headers: {
  //     'Accept-Language': _ajaxParams.params.acceptLanguage
  //   },
  //   data: '',
  //   success: function success (res) {
  //     if (_callbackGetChannelAjax) _callbackGetChannelAjax()
  //   },
  //   error: function error (res) {
  //     // // // // // // // // // // // // // // // // console.log('error');
  //   }
  // }).then(function (res) {
  //   return res
  // })
}
let getImagesAjax = function getImagesAjax (_ajaxParams, _callbackGetImagesAjax) {
  // // // // // // // // // // // // // // // // console.log('getImages');
  let ajaxurl = _ajaxParams.urls.getImages + '?part=' + _ajaxParams.paramsImages.part + '&productId=' + _ajaxParams.paramsImages.productId
  if (_ajaxParams.paramsImages.id) ajaxurl += '&id=' + _ajaxParams.paramsImages.id
  if (_ajaxParams.paramsImages.channelId) ajaxurl += '&channelId=' + _ajaxParams.paramsImages.channelId
  if (_ajaxParams.paramsImages.categoryId) ajaxurl += '&categoryId=' + _ajaxParams.paramsImages.categoryId
  if (_ajaxParams.params.regionCode) ajaxurl += '&regionCode=' + _ajaxParams.params.regionCode
  if (_ajaxParams.params.maxResults) ajaxurl += '&maxResults=' + _ajaxParams.params.maxResults
  if (_ajaxParams.params.pageIndex) ajaxurl += '&pageIndex=' + _ajaxParams.params.pageIndex
  ajaxurl += '&' + Math.random()
  return HTTP.$http.get(ajaxurl,
    {
      headers: {
        'Accept-Language': _ajaxParams.params.acceptLanguage
      }
    }
  ).then((res) => res)
  // return HTTP.$http.ajax({
  //   dataType: 'jsonp',
  //   url: ajaxurl,
  //   headers: {
  //     'Accept-Language': _ajaxParams.params.acceptLanguage
  //   },
  //   data: '',
  //   success: function success (res) {
  //     if (_callbackGetImagesAjax) _callbackGetImagesAjax()
  //   },
  //   error: function error (res) {
  //     // // // // // // // // // // // // // // // // console.log('error');
  //   }
  // }).then(function (res) {
  //   return res
  // })
}
// let getVideosAjax =
async function getVideosAjax (_ajaxParams, _callbackGetVideosAjax) {
  // // // // // // // // console.log('getVideosAjax fun')
  let p = new Promise(async function (resolve, reject) {
    let ajaxurl = _ajaxParams.urls.getVideos + '?part=' + _ajaxParams.paramsVideos.part
    if (_ajaxParams.paramsVideos.id) ajaxurl += '&id=' + _ajaxParams.paramsVideos.id
    if (_ajaxParams.paramsVideos.channelId) ajaxurl += '&channelId=' + _ajaxParams.paramsVideos.channelId
    if (_ajaxParams.paramsVideos.categoryId) ajaxurl += '&categoryId=' + _ajaxParams.paramsVideos.categoryId
    if (_ajaxParams.params.regionCode) ajaxurl += '&regionCode=' + _ajaxParams.params.regionCode
    if (_ajaxParams.params.maxResults) ajaxurl += '&maxResults=' + _ajaxParams.params.maxResults
    if (_ajaxParams.params.pageIndex) ajaxurl += '&pageIndex=' + _ajaxParams.params.pageIndex
    ajaxurl += '&' + Math.random()
    return HTTP.$http.get(ajaxurl,
      {
        headers: {
          'Accept-Language': _ajaxParams.params.acceptLanguage
        }
      }
    ).then((res) => {
      resolve(res)
    })
  })
  return p
  // return HTTP.$http.ajax({
  //   dataType: 'jsonp',
  //   url: ajaxurl,
  //   headers: {
  //     'Accept-Language': _ajaxParams.params.acceptLanguage
  //   },
  //   data: '',
  //   success: function success (res) {
  //     // // // // // // // // // // // console.log('getVideosAjax res')
  //     // // // // // // // // // // // console.log(res)
  //     if (_callbackGetVideosAjax) _callbackGetVideosAjax(res)
  //   },
  //   error: function error (res) {
  //     // // // // // // // // // // // // // // // // console.log('error');
  //   }
  // })
  // .then((res) => res);
}

function getChart () {
  _global.ajaxParams.paramsChart.chart = 'channel' // 获取到的是channel
  // _global.ajaxParams.paramsChart.chart = 'category'; // 接口会不通
  _global.ajaxParams.paramsChart.productId = _global.productId
  getChartAjax(_global.ajaxParams, function (res) {
    // // // // // // // // // // // console.log('res getChart _callbackGetChartAjax')
    // // // // // // // // // // // console.log(res)
  })
}
// function dataReform (_templateId, _data, _key, _dataRecombine) {
//   // // // // // // // // console.log('aaa fun')
//   // // // // // // // // console.log(_dataRecombine)
// }
// async function dataRecombine11 (_templateId, _data, _key, _dataRecombine) {
//   // // // // // // // // // // console.log('after foreach _global.dataFormatted.data')
//   // // // // // // // // console.log('dataRecombine fun: ' + _templateId)
//   // // // // // // // // console.log(_dataRecombine)
//   // if (!_data) return
//   // switch (_templateId) {
//   //   case 'Template-A5':
//   //   case 'Template-A2':
//   //     HTTP.$set(dataRecombine, _key, _data)
//   //     // HTTP.$set(_global.dataFormatted.data, _global.videoParams.categoryName, _data)
//   //     // _global.dataFormatted.data[_global.videoParams.categoryName] = _data // dataTemp
//   //     break
//   //   case 'Template-A4':
//   //   case 'Template-A1':
//   //   case 'Template-A3':
//   //     let length = dataRecombine.length
//   //     HTTP.$set(dataRecombine, length, _data)
//   //     // _global.dataFormatted.data = _global.dataFormatted.data.concat(_data) // dataTemp
//   //     break
//   // }
//   // // // // // // // // // console.log('dataRecombine after formatted')
//   // // // // // // // // // console.log(dataRecombine)
// }
async function getCategorys (_templateId, _callback) {
  // // // console.log('getCategorys fun ---------------------------')
  // // // // // console.log('Vue._global.productId')
  // // // // // console.log(Vue._global.productId)
  switch (_templateId) {
    case 'Template-A5':
    case 'Template-A2':
      _global.dataFormatted.data = {}
      _global.dataFormatted.icon = ''
      _global.dataFormatted.title = ''
      break
    case 'Template-A4':
    case 'Template-A1':
    case 'Template-A3':
      _global.dataFormatted.data = []
      _global.dataFormatted.icon = ''
      _global.dataFormatted.title = ''
      break
  }
  let p = new Promise(async function (resolve, reject) {
    // // // // console.log('p fun _global.productId')
    // // // // console.log(_global.productId)
    _global.ajaxParams.paramsCategorys.productId = _global.productId
    let res = await getCategorysAjax(_global.ajaxParams)
    // // // console.log('res')
    // // // console.log(res)
    if (!res || res.status !== 200) return
    let resData = res.data
    _global.categoryArr = []
    if (resData && resData.kind === 'categroy' && resData.items) {
      // debugger
      resData.items.forEach(async (item, index) => {
        // async
        _global.categoryArr.push(item)
      })
      // console.log('a')
      let resCategoryFormatted = await categoryFormatted(_templateId) // _callback
      // console.log('aa')
      // let resFormatted = new Promise(categoryFormatted(_templateId))
      // console.log('resCategoryFormatted')
      // console.log(resCategoryFormatted)
      // return
      let resConfirm = await setResObj(_templateId, resCategoryFormatted)
      // // console.log('resConfirm')
      // // console.log(resConfirm)
      resolve(resConfirm)
    } else {
      msgAlert(resData.message)
    }
  })
  return p
  // // // // // // // // // // // console.log('ajaxfun js getCategorys fun global')
  // // // // // // // // // // // console.log(_global)

  // // // // // // // // // // // console.log('getCategorys ajaxFun')
}
function msgAlert (_msg) {
  alert(_msg)
}
function getChannels () {
  // getNavigationTab
  _global.ajaxParams.paramsChannels.productId = _global.productId
  getChannelsAjax(_global.ajaxParams, function (res) {
    // // // // // // // // // // // console.log('getChannelsAjax callback')
    // // // // // // // // // // // console.log(res)
  })
}

function getImages (_params, _templateId, _callback, _index) {
  _global.ajaxParams.paramsVideos.id = _params.id
  _global.ajaxParams.paramsVideos.channelId = _params.channelId
  _global.ajaxParams.paramsVideos.categoryId = _params.categoryId
  getImagesAjax(_global.ajaxParams, function (res) {
    // // // // // // // // // // // console.log('getImagesAjax callback')
    // // // // // // // // // // // console.log(res)
  })
}

async function getVideos (_params, _templateId, _callback, _index) {
  // // // // // // // // console.log('getVideos fun: ' + _index)
  // // // // // // // // // // // console.log(_params)
  _global.ajaxParams.paramsVideos.id = _params.id
  _global.ajaxParams.paramsVideos.channelId = _params.channelId
  _global.ajaxParams.paramsVideos.categoryId = _params.categoryId
  // let res = await getVideosAjax(_global.ajaxParams)
  let p = new Promise(async function (resolve, reject) {
    let resGetVideosAjax = await getVideosAjax(_global.ajaxParams)
    resolve(resGetVideosAjax)
  })
  return p
}

async function categoryFormatted (_templateId, _regionCode, _callback) {
  let p = new Promise(function (resolve, reject) {
    // console.log('categoryFormatted: ' + _templateId)
    // // // console.log(_global.categoryArr)
    let dataRecombine
    switch (_templateId) {
      case 'Template-A5':
      case 'Template-A2':
        dataRecombine = {}
        // HTTP.$set(_global.dataFormatted.data, _global.videoParams.categoryName, _data)
        // _global.dataFormatted.data[_global.videoParams.categoryName] = _data // dataTemp
        break
      case 'Template-A4':
      case 'Template-A1':
      case 'Template-A3':
        dataRecombine = []
        // HTTP.$set(_global.dataFormatted.data, length, _data)
        // _global.dataFormatted.data = _global.dataFormatted.data.concat(_data) // dataTemp
        break
    }
    // await
    _global.categoryArr.forEach(async (item, index) => {
      // // // console.log('resFormatted ========================: ' + index)
      // // // // // // // console.log(item.snippet.name)
      // // // // // // // // // console.log('categoryArr each: ' + index)
      // async
      if (index >= 0) {
        _global.videoParams = {
          id: undefined,
          channelId: undefined,
          channelName: undefined,
          categoryId: item.snippet.id,
          categoryName: item.snippet.name
          // await
        }

        let res = await getVideos(_global.videoParams, _templateId, _callback, index) // test
        // // console.log('res getVideos')
        // // console.log(res)
        // // // // // // // // console.log(res.body.pageInfo.totalResults)
        if (!res || res.status !== 200) return
        let resData = res.body
        if (resData && resData.kind === 'video') {
          if (!_global.videoParams.id && (_global.videoParams.categoryId || _global.videoParams.channelId)) {
            let resVideoFormatted = await videoFormatted(resData, _global.videoParams, _templateId, _callback, index)
            // // // // // // // console.log('videoFormatted resFormatted: ' + index)
            // // // // // // // console.log(resVideoFormatted)
            // dataRecombine.push({
            //   key: item.snippet.name,
            //   data: resVideoFormatted
            // })

            // return _global.dataFormatted
            // await
            // dataReform(_templateId, resVideoFormatted, item.snippet.name, dataRecombine)
            if (!resVideoFormatted) return
            switch (_templateId) {
              case 'Template-A5':
              case 'Template-A2':
                HTTP.$set(dataRecombine, item.snippet.name, resVideoFormatted)
                // HTTP.$set(_global.dataFormatted.data, _global.videoParams.categoryName, _data)
                // _global.dataFormatted.data[_global.videoParams.categoryName] = _data // dataTemp
                break
              case 'Template-A4':
              case 'Template-A1':
              case 'Template-A3':
                let length = dataRecombine.length
                HTTP.$set(dataRecombine, length, resVideoFormatted)
                // _global.dataFormatted.data = _global.dataFormatted.data.concat(_data) // dataTemp
                break
            }
            // console.log('dataRecombine ============')
            // console.log(dataRecombine)
            // if ()
            if (_global.attrCount(dataRecombine) === _global.categoryArr.length) {
              resolve(dataRecombine)
            }
            // dataRecombine(_templateId, resVideoFormatted, item.snippet.name, dataRecombine)
          }
        }
        // .then((res) => {
        //   // // // // // // // // // console.log('getVideos then')
        // })
      }
    })
    // resolve('getVideos aaaaaaaaaaaaaaaaaaaaaaaaaaa after all: ')
  })
  return p
}
function setResObj (_templateId, _dataRecombine) {
  // if (index === _global.categoryArr.length - 1) {
  /* test */
  let count = _global.categoryArr.length
  let resolveRes = {}
  switch (_templateId) {
    case 'Template-A5':
    case 'Template-A2':
      for (let key in _dataRecombine) {
        if (_dataRecombine[key].length <= 0) {
          delete _dataRecombine[key]
          count -= 1
        }
      }
      resolveRes = {
        cateArr: _dataRecombine,
        cateCount: count
      }
      break
    case 'Template-A4':
    case 'Template-A1':
    case 'Template-A3':
      let arrTemp = []
      for (let n = 0; n < _dataRecombine.length; n++) {
        arrTemp = arrTemp.concat(_dataRecombine[n])
      }
      resolveRes = {
        cateArr: arrTemp,
        cateCount: arrTemp.length
      }
      break
  }
  // console.log('resolveRes')
  // console.log(resolveRes)
  // resolve(resolveRes)
  return resolveRes
  // }
}
function imageFormatted () {
  // // // // // // // // // // // console.log('imageFormatted')
}

function videoFormatted (_data, _videoParams, _templateId, _callback, _index) { // _callbackVideoFormatted
  let p = new Promise(function (resolve, reject) {
    let dataTemp = []
    let temp = {}
    // // // // // // // // // // // console.log('videoFormatted')
    if (!_data || !_data.pageInfo || !_data.pageInfo.totalResults || _data.pageInfo.totalResults <= 0) return
    _data.items.forEach(function (item, index) {
      var typeCheck = Object.prototype.toString.call(item.snippet.duration)
      if (typeCheck !== '[object Number]') item.snippet.duration = 0
      var duration = Number(item.snippet.duration)
      var timeLengthMin = parseInt(duration / 60)
      var timeLengthSec = duration % 60
      if (Number(timeLengthSec) < 10) timeLengthSec = '0' + timeLengthSec
      // async
      temp = {}
      temp.image = item.thumbnails[0].url
      // temp.timeLength = ''
      temp.timeLength = timeLengthMin + ':' + timeLengthSec
      // temp.url = item.snippet.open.link;
      temp.url = item.snippet.tid
      temp.videoTitle = item.snippet.title
      dataTemp.push(temp)
    })
    resolve(dataTemp)
    // return dataTemp
    // if (_callbackVideoFormatted) _callbackVideoFormatted(dataTemp)
    // return dataTemp;
  })
  return p
}

function setHeader (_templateId, _icon, _title, _head, _iconWidth, _iconHeight) {
  // // // // // // // // // // // // console.log(`setHeader: ${_icon}, ${_title}`);
  let $heads = $(_head)
  // let $heads = this.$refs.head
  let headstr = ''
  switch (_templateId) {
    case 'Template-A1':
    case 'Template-A4':
    case 'Template-A3':
      headstr += '<div class="icon"><img src="' + _icon + '" class="iconimg"'
      if (_iconWidth && _iconWidth !== '' && _iconWidth !== '0' && _iconHeight && _iconHeight !== '' && _iconHeight !== '0') {
        if (_iconWidth && _iconWidth !== '' && _iconWidth !== '0') headstr += 'height="' + _iconWidth + '"'
        if (_iconHeight && _iconHeight !== '' && _iconHeight !== '0') headstr += 'height="' + _iconHeight + '"'
      }
      headstr += '></div>'
      headstr += '<div class="word">' + _title + '</div>'
      break
    case 'Template-A5':
      headstr += '<span id="app-name">' + _title + '</span></img>'
      headstr += '<img id="app-icon" src="' + _icon + '"'
      if (_iconWidth && _iconWidth !== '' && _iconWidth !== '0' && _iconHeight && _iconHeight !== '' && _iconHeight !== '0') {
        if (_iconWidth && _iconWidth !== '' && _iconWidth !== '0') headstr += 'height="' + _iconWidth + '"'
        if (_iconHeight && _iconHeight !== '' && _iconHeight !== '0') headstr += 'height="' + _iconHeight + '"'
      }
      headstr += '>'
      break
    case 'Template-A2':
      headstr += '<div class="icon">'
      headstr += '<img src="' + _icon + '"'
      if (_iconWidth && _iconWidth !== '' && _iconWidth !== '0' && _iconHeight && _iconHeight !== '' && _iconHeight !== '0') {
        if (_iconWidth && _iconWidth !== '' && _iconWidth !== '0') headstr += 'height="' + _iconWidth + '"'
        if (_iconHeight && _iconHeight !== '' && _iconHeight !== '0') headstr += 'height="' + _iconHeight + '"'
      }
      headstr += ' alt="" id="logoImg">'
      headstr += '</div>'
      break
  }
  $heads.html(headstr) // 显示处理后的数据
  // alert(1);
  // switch (_templateId) {
  //   case 'Template-A1':
  //   case 'Template-A4':
  //   case 'Template-A3':
  //     if (_iconWidth && _iconWidth !== '' && _iconWidth !== '0' && _iconHeight && _iconHeight !== '' && _iconHeight !== '0') {
  //       $('.icon', $heads).width(_iconWidth)
  //       $('.icon', $heads).height(_iconHeight)
  //     }
  //     break
  //   case 'Template-A5':
  //     if (_iconWidth && _iconWidth !== '' && _iconWidth !== '0' && _iconHeight && _iconHeight !== '' && _iconHeight !== '0') {
  //       $('#app-icon', $heads).width(_iconWidth)
  //       $('#app-icon', $heads).height(_iconHeight)
  //     }
  //     break
  //   case 'Template-A2':
  //     // // // // // // // // // // // console.log('after html')
  //     // // // // // // // // // // // console.log('_iconWidth: ' + _iconWidth)
  //     // // // // // // // // // // // console.log('_iconHeight: ' + _iconHeight)
  //     if (_iconWidth && _iconWidth !== '' && _iconWidth !== '0' && _iconHeight && _iconHeight !== '' && _iconHeight !== '0') {
  //       $('img', $heads).width(_iconWidth)
  //       $('img', $heads).height(_iconHeight)
  //     }
  //     break
  // }
}
export default {
  // ajax
  getChartAjax,
  getCategorysAjax,
  getChannelsAjax,
  getImagesAjax,
  getVideosAjax,
  // get data
  getChart,
  getCategorys,
  getChannels,
  getImages,
  getVideos,
  // formatted
  categoryFormatted,
  imageFormatted,
  videoFormatted,
  setHeader
}
</script>
