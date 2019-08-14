<script lang="js">
import ajaxFun from '@/components/common/ajaxFun.vue'
import _global from '@/components/common/global.vue'
// let app = _global.app5
let startA5 = async function (templateId) {
  console.log('startA3 _global.ajaxParams')
  console.log(_global.ajaxParams)
  // getChart();
  // getChannels();
  // ajaxFun.setHeader(templateId, _icon, _title, '#app-title', _iconWidth, _iconHeight)

  // ajaxFun.getCategorys(templateId, function () {
  //   let tShow = setTimeout(function () {
  //     // 加载数据
  //     // // // console.log('dataFormatted before get')
  //     // // // console.log(this._global.dataFormatted)

  //     // getData('CNN.js');
  //     this.showDataA5(this._global.dataFormatted, _iconWidth, _iconHeight)
  //     clearTimeout(tShow)
  //   }, 1000)
  //   this.funA5()
  // })
  let resAjax = await ajaxFun.getCategorys(templateId)
  // // console.log('fun A5')
  // // console.log(resAjax)
  return resAjax
  // this.showDataA5(resAjax, _iconWidth, _iconHeight)
  // this.funA5()
}
// let showDataA5 = function (data, _iconWidth, _iconHeight) {
//   let rows = 0
//   let menuHtml = ''
//   for (let key in data.data) {
//     if (data.data[key].length > 9) {
//       let rowsHtml = ' <li class="list" ><span class="list-title">' + key + '</span><div class="list_block"><ul class="list-view" rows="' + rows + '">'
//       menuHtml += ' <li tabindex="1" rows="' + rows + '" cols="0"><div class="menu-name"><p class="display">' + key + '</p><p class="marquee">' + key + '</p></div></li>'
//       let cols = 1
//       $.each(data.data[key], function (i, obj) {
//         if (cols === 1) {
//           rowsHtml += '<li class="item-view ' + i + ' focus" tabindex="0" rows="' + rows + '" cols="' + cols + '" data-url="' + obj.url + '" ><img src="' + obj.image + '" onerror="app.loadImg(this,_global.defVideoImg)" /><div class="item-info"><p class="marquee">' + obj.videoTitle + '</p></div><div class="item-mask"></div></li>'
//         } else {
//           rowsHtml += '<li class="item-view ' + i + '" tabindex="0" rows="' + rows + '" cols="' + cols + '" data-url="' + obj.url + '" ><img src="' + obj.image + '" onerror="app.loadImg(this,_global.defVideoImg)" /><div class="item-info"><p class="marquee">' + obj.videoTitle + '</p></div><div class="item-mask"></div></li>'
//         }
//         cols++
//       })
//       rowsHtml += '</ul></div></li>'
//       $('#home-gridview').append(rowsHtml)
//       $('#home-gridview .list-view[rows="' + rows + '"]').css('width', cols * 260 + 1280 + 'px')
//       rows++
//     }
//   }
//   $('#menu-list').html(menuHtml)
//   this.app.rowsNum = $('#home-gridview .list').length
//   this.app.getFocus()
// }
// let funA5 = function () {

// }
// let getData = function (_url) {
//   if (!_url || _url === '') return
//   $.ajax({
//     dataType: 'json',
//     url: _url, // 'CNN.js'
//     // data: data,
//     success: function success (data) {
//       this.showData(data)
//     },
//     error: function error (p1, p2, p3) {
//       // // // // console.log('error');
//       // // // // console.log(p1);
//       // // // // console.log(p2);
//       // // // // console.log(p3);
//     }
//   })
// }
export default {
  startA5
  // showDataA5,
  // funA5
  // ,
  // getData
  // name: 'funA5',
  // templates: {},
  // data: function () {
  //   return {}
  // },
  // methods: {},
  // mounted: function () {
  //   // // // console.log('mounted')
  // }
}

</script>
