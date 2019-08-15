<template>
  <div class="test-information">
    <!-- <p>browser: {{testInfo && testInfo.test1 && testInfo.test1.browser && testInfo.test1.browser.browser ? testInfo.test1.browser.browser : '未知浏览器'}}</p> -->
    <!-- <p>version: {{testInfo && testInfo.test1 && testInfo.test1.browser &&testInfo.test1.browser.version ? testInfo.test1.browser.version : '未知版本'}}</p> -->
    <p>browser: {{testInfo && testInfo.test1 && testInfo.test1.browser && testInfo.test1.browser.userAgent ? testInfo.test1.browser.userAgent : '未知浏览器'}}</p>
    <!-- userAgent: userAgent -->
    <!-- browserType: browserType -->
    <p>OS: {{testInfo && testInfo.test1 && testInfo.test1.OS ? testInfo.test1.OS : '未知系统'}}</p>
    <p>屏幕：</p>
    <template v-if="testInfo && testInfo.test1 && testInfo.test1.screen">
      <p v-for="(item, index) in testInfo.test1.screen" :key="index">{{item}}</p>
    </template>
    <template v-else>未知屏幕设置</template>
  </div>
</template>  
<script>
import { catchplay } from '@/api';
export default {
  name: 'test-information',
  data: function () {
    return {
      testInfo: {
        test1: {}
      }
    }
  },
  mounted: function () {
		console.log('mounted a9 new bbb')
		let Vue = this
		Vue.$set(Vue.testInfo, 'test1', catchplay.utils.BrowserMatch.init())
	}
}
</script>
<style lang="scss">
.test-information {
  display: block;
  background: rgba(0, 0, 0, .5);
  font-size: 20px;
  color: #fff;
  padding: 30px;
  position: fixed;
  right: 30px;
  top: 30px;
  width: 50%;
  height: 30%;
  z-index: 999;
  text-align: left;
  opacity: .9;
}
</style>