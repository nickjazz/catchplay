'use strict'

// 获取其他界面过来的数据
function getQueryString (name) {
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
  var r = window.location.search.substr(1).match(reg)
  if (r != null) return unescape(r[2])
  return null
}

var url = getQueryString('video')

// var pid = getQueryString('pid');
// // console.log(`pid: ${pid}`);

// https://erosnowhtml.s3.amazonaws.com/main.html?partner_code=ZEAS&detailid=6862262

/* /youtube api */

// http://player.youku.com/player.php/sid/XMzkxODc0MDYxNg==/v.swf

// blob:https://www.youtube.com/86d28548-bbb6-42bc-a367-89e44179c5b5

// if (testDiv !== undefined) {
//     testDiv += `<p>准备给.v-main填入iframe，url == ${url}，iframe的内容如下：</p>`;
//     testDiv += `<p>iframe width="100%" height="100%" src="https://www.youtube.com/embed/${url}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen /iframe</p>`
//     $('.testDiv').html(testDiv);
//     testDiv += `<p>给.v-main填入iframe完成</p>`;
//     $('.testDiv').html(testDiv);
// }
