<script lang="js">
import ajaxFun from '@/components/common/ajaxFun.vue'

let startA2 = async function (templateId) {
  // setHeader(templateId, _icon, _title, '#contain .containtTop .logo', _iconWidth, _iconHeight)
  let resAjax = await ajaxFun.getCategorys(templateId)
  return resAjax
}
export default {
  startA2
}
</script>
