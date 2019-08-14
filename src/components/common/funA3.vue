<script lang="js">
import ajaxFun from '@/components/common/ajaxFun.vue'
import _global from '@/components/common/global.vue'

let startA3 = async function (templateId) {
  console.log('startA3 _global.ajaxParams')
  console.log(_global.ajaxParams)
  // ajaxFun.setHeader(templateId, _icon, _title, '#header', _iconWidth, _iconHeight)
  let resAjax = await ajaxFun.getCategorys(templateId)
  // funA3()
  return resAjax
}
export default {
  startA3
}
</script>
