<template>
  <div id="app" tabindex="1" @keydown="keydown($event)">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view />
  </div>
</template>
<script lang="js">
export default {
  name: 'App',
  methods: {
    keydown: function (_e) {
      // console.log('_e.keyCode')
      // console.log(_e.keyCode)
      // console.log(_e.currentTarget)
    },
    aaa: function (_v) {
      // console.log(_v)
    }
  },
  watch: {},
  mounted: function () {}
  // created () {
  //   let api = new API.default()
  //   window.$api = api
  // }
}
</script>
<style lang="scss">
@import "@/assets/css/common.scss";
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
  margin-top: 0;
  /* background-color: #300; */
  background-color: #111;
  color: #ccc;
  /* width: 1280px; */
  width: 100%;
  height: 100%;
  /* border: 5px solid #f0f; */
  box-sizing: border-box;
  /* overflow: auto!important; */
}
</style>
