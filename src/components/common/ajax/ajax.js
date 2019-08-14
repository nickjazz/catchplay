// import Axios from 'axios'
// import _global from '@/components/common/global.vue'
// import Vue from 'vue'
// let HTTP = new Vue()
// let Vue = this
export function storageGet (_url) {
  let data = require(`@/assets/${_url}`)
  console.log('data')
  console.log(data)
  return data
}
