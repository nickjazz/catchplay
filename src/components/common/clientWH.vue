<script lang="js">
let clientHeight = 1280
let clientWidth = 720
function clientWHInit () {
  return {
    width: `${document.documentElement.clientWidth}`,
    height: `${document.documentElement.clientHeight}`
  } // document.body.clientWidth;
  // // console.log(self.clientHeight);
  // window.onresize = function temp () {
  //   this.clientHeight = `${document.documentElement.clientHeight}`
  // }
}
// 如果 `clientHeight` 发生改变，这个函数就会运行
function clientHeightChanged () {
  this.changeFixed(this.clientHeight)
}
function changeFixed (clientHeight) { // 动态修改样式
  this.$refs.homePage.style.height = clientHeight + 'px'
}
export default {
  clientHeight,
  clientWHInit,
  clientWidth,
  clientHeightChanged,
  changeFixed
}
</script>
