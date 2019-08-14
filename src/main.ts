import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from 'axios'

import VueAnalytics from 'vue-analytics'
import '@/assets/js/flexible.js'

import _global from '@/components/common/global.vue'
// import _test from '@/components/templates/test/test.vue'
import clientWH from '@/components/common/clientWH.vue'

import 'jquery'
// import $ from 'jquery'
import VueResource from 'vue-resource'
import dataTest from '@/assets/js/data.js'

import Video from 'video.js'
import 'video.js/dist/video-js.css'
import VideoPlayer from 'vue-video-player'
import 'videojs-contrib-hls'

import VueYoutube from 'vue-youtube'

// import config from './components/templates/login/config/config.js'
// import token from './components/templates/login/util/token.js'
// import login from './components/templates/login/util/loginUtil.js'
import querystring from 'querystring'
import filter from '@/core/filter';

require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')

Vue.use(VideoPlayer)

Vue.config.productionTip = false
Vue.use(VueResource)
// Vue.use(dataTest)
// Vue.use(api)
Vue.use(VueYoutube)

for (let i in filter) {
  Vue.filter(i, (filter as any)[i]);
}

Vue.prototype._global = _global // 挂载到Vue实例上面
// Vue.prototype._test = _test
Vue.prototype._dataTest = dataTest
Vue.prototype._clientWH = clientWH
Vue.prototype.$video = Video
// Vue.prototype.$login = login
Vue.prototype.$ajax = axios
// Vue.prototype.$config = config
// Vue.prototype.$token = token
Vue.prototype.$querystring = querystring

if (process.env.GA) {
  Vue.use(VueAnalytics, {
    id: process.env.GA, // 从配置中读取
    disableScriptLoader: true, // 必须在html中完成初始化，这里显式禁止去下载ga脚本
    router, // 确保路由切换时可以自动统计
    autoTracking: {
      pageviewOnLoad: false // 当通过网址进来时已经GA在初始化时就发起一次pageview的统计，这里不要重复统计
    }
  })
}

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
}).$mount("#app");
