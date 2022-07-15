const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false
})
// module.exports = {
//   publicPath: process.env.NODE_ENV === 'production'
//     ? '/i-sports/' // test20200915 為 repo 名稱
//     : '/'
// }