<template>
  <div>
    <ul class="list-app0">
      <li v-for="(app, index) in listApp" :key="index">
        <itemListApp :info="{
            app: app,
            index: index
          }"></itemListApp>
      </li>
    </ul>
  </div>
</template>
<script lang="js">
import appList from '@/assets/storage/app-list.json'
import itemListApp from '@/components/common/list/item-list-app.vue'
export default {
  name: 'manage-list',
  components: {
    itemListApp
  },
  data: function () {
    return {
      listApp: []
    }
  },
  mounted: function () {
    let Vue = this
    Vue.listApp = appList.list
  }
}
</script>
<style type="text/css" lang="scss">
@import '@/assets/css/manage/common.scss';
</style>
