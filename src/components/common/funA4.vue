<script lang="js">
import ajaxFun from '@/components/common/ajaxFun.vue'

// function letA4 () {}
let startA4 = async function (templateId) {
  // ajaxFun.setHeader(templateId, _icon, _title, '#header', _iconWidth, _iconHeight)
  // console.log('startA4 fun')
  // getChart()
  // getChannels()
  // getCategorys(templateId, function () {
  // // showData(dataFormatted);
  // let tShow = setTimeout(function () {
  //   // // console.log('dataFormatted before get');
  //   // // console.log(dataFormatted);
  //   dataFormatted.icon = _icon
  //         dataFormatted.title = _title
  //         //展示视频
  //         // getData('data.js');
  //         // $.getJSON("data.js", function (data) { // data.js
  //         //     showData(data);
  //         // });
  //         showDataA4(dataFormatted, _iconWidth, _iconHeight)
  //         clearTimeout(tShow)
  //     }, 1000)
  // })

  let resAjax = await ajaxFun.getCategorys(templateId)
  // console.log('fun A4')
  // console.log(resAjax)
  // funA4()
  return resAjax
}
export default {
  startA4
}
</script>
