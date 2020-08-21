module.exports = {
//   productionSourceMap: false,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8888',
        changeOrigin: true,
        secure: false,
        // ws: true,
        pathRewrite: {
          '^/api': ''// 请求数据路径别名
        }
      }
    }
  }
}
