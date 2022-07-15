const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false
})
module.exports = { 
  publicPath: process.env.NODE_ENV === 'production' 
  ? '/i-sports/' //為github的專案名稱 
  : '/' 
 }