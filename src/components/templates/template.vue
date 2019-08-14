<template>
  <div class="template">
    <router-view/>
  </div>
</template>
<script lang="js">
export default {
  name: 'mod-templates',
  components: {},
  data: function () {
    return {
      hello: 'Hello'
    }
  },
  methods: {},
  mounted: function () {
    // console.log('template mounted')
  }
}
</script>
<style type="text/css" lang="scss">
@import "@/assets/css/clientWH.scss";
.template {
  width: 100%;
  height: 100%;
  // border: 15px solid #00f;
  box-sizing: border-box;
}
</style>
