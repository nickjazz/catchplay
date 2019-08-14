<script lang="js">
import funA1 from '@/components/common/funA1.vue'
import funA2 from '@/components/common/funA2.vue'
import funA3 from '@/components/common/funA3.vue'
import funA4 from '@/components/common/funA4.vue'
import funA5 from '@/components/common/funA5.vue'

import _global from '@/components/common/global.vue'
import _dataTest from '@/assets/js/data.js'
let ifTestData = false
// {
//   _templateNumber,
//   _productId,
//   _maxResults,
//   _iconStr,
//   _titleStr
// }
let launch = async function (_templateNumber) {
  let res
  // let res = _dataTest.bb.data // 2, 5
  // let res = _dataTest.bb.data // 1, 3, 4
  if (ifTestData) {
    let resTest
    switch (_templateNumber) {
      case 'A5':
      case 'A2':
        resTest = {
          cateArr: {},
          cateCount: 0
        }
        resTest.cateArr = _dataTest.bb.data
        resTest.cateCount = 0
        for (let key in _dataTest.bb.data) {
          resTest.cateCount += _dataTest.bb.data[key].length
        }
        // res.cateCount =
        break
      case 'A4':
      case 'A1':
      case 'A3':
        resTest = {
          cateArr: {},
          cateCount: 0
        }
        resTest.cateArr = _dataTest.aa.data
        resTest.cateCount = _dataTest.aa.data.length
        break
    }
    return resTest
  }
  switch (_templateNumber) {
    case 'A1':
      res = await funA1.startA1(_global.templateId)
      break
    case 'A2':
      // // // // console.log('launch a2')
      res = await funA2.startA2(_global.templateId)
      break
    case 'A3':
      res = await funA3.startA3(_global.templateId)
      break
    case 'A4':
      // startA4(templateId, iconStr, titleStr, iconWidth, iconHeight)
      res = await funA4.startA4(_global.templateId)
      break
    case 'A5':
      // case 'A1':
      // // // // // // // console.log(_global)
      // // // // // // // console.log('funA5')
      // // // // // // // console.log(funA5)
      res = await funA5.startA5(_global.templateId, _global.iconStr, _global.titleStr, _global.iconWidth, _global
        .iconHeight)
      // // // // console.log(res)
      // // // // // // // console.log(funA5);
      // // // // // console.log('_dataTest')
      // // // // // console.log(_dataTest)

      // funA5.startA5(this._global.templateId, this._global.iconStr, this._global.titleStr, this._global.iconWidth, this._global.iconHeight)
      break
  }

  return res
}
// $(function () {

// });

// function loadJs(url, callback) {
//     var script = document.createElement('script');
//     script.type = "text/javascript";
//     if (typeof callback != "undefined") {
//         if (script.readyState) {
//             script.onreadystatechange = function () {
//                 if (script.readyState == "loaded" || script.readyState == "complete") {
//                     script.onreadystatechange = null;
//                     callback();
//                 }
//             };
//         } else {
//             script.onload = function () {
//                 callback();
//             };
//         }
//     }
//     script.src = url;
//     document.body.appendChild(script);
// }
export default {
  launch
}

</script>
