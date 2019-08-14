<template>
  <div>
    <manageEdit
      :pagetype="'edit'">
    </manageEdit>
  </div>
</template>
<script lang="js">
// import appList from '@/assets/storage/app-list.json'
import manageEdit from '@/components/common/manage/manage-edit.vue'
export default {
  name: 'manage-edit',
  components: {
    manageEdit
  },
  data: function () {
    return {

    }
  },
  methods: {

  },
  mounted: async function () {
    console.log('mounted index manage')
  }
}
</script>
<style type="text/css" lang="scss">
@import '@/assets/css/manage/common.scss';
</style>
