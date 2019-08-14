const path = require("path");
function resolve(dir) {
  return path.join(__dirname, ".", dir);
}

const webpack = require("webpack");
module.exports = {
  publicPath: "./",
  outputDir: "dist",
  filenameHashing: true,
  pages: undefined,
  lintOnSave: true,
  runtimeCompiler: false,
  transpileDependencies: [],
  productionSourceMap: false,
  crossorigin: undefined,
  integrity: false,
  devServer: {
    open: process.platform === "darwin",
    host: "apps.store.zeasn.com",
    port: 8081,
    https: false,
    hotOnly: false,
    proxy: null, // 设置代理
    before: app => {}
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require("postcss-px2rem") ({remUnit: 19.2, baseDpr: 1})
        ]
      }
    }
  },
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'windows.jQuery': 'jquery'
      })
    ]
  }
  // chainWebpack: config => {
  //   config.module.rule('css')
  //     .test(/\.css$/)
  //     .oneOf('vue')
  //     .resourceQuery(/\?vue/)
  //     .use('px2rem')
  //     .loader('px2rem-loader')
  //     .options({
  //       remUnit: 19.2, // 19.2 54 // 设计稿除以10得到的值
  //       baseDpr: 1 //默认dpr是2，设置成1，才能保证字体正常
  //     })
  // },
  // chainWebpack: config => {
  //   config.module.rules.delete("svg"); //重点:删除默认配置中处理svg,
  //   //const svgRule = config.module.rule('svg')
  //   //svgRule.uses.clear()
  //   config.module
  //     .rule('svg-sprite-loader')
  //     .test(/\.svg$/)
  //     .include
  //     .add(resolve('src/icons')) //处理svg目录
  //     .end()
  //     .use('svg-sprite-loader')
  //     .loader('svg-sprite-loader')
  //     .options({
  //       symbolId: 'icon-[name]'
  //   })
  // },

  // configureWebpack: () => ({
    // plugins: [
    //   new webpack.ProvidePlugin({
    //     plugins: [
    //       new webpack.ProvidePlugin({
    //         $: 'jquery',
    //         jQuery: 'jquery',
    //         'windows.jQuery': 'jquery'
    //       })
    //     ]
    //   })
    // ]
  // })
};
