<script lang="js">
import ajaxFun from '@/components/common/ajaxFun.vue'

let startA1 = async function (templateId) {
  // console.log('startA1 fun')
  // 展示视频
  // $.getJSON("data.js", function (data) {
  //     showDataA1(data);
  // });
  // $heads.empty();//清空内容
  // setHeader(templateId, _icon, _title, '.head', _iconWidth, _iconHeight)
  let resAjax = await ajaxFun.getCategorys(templateId)
  return resAjax
}
export default {
  startA1
}
</script>
