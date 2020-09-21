module.exports = {
  //   productionSourceMap: false,

  devServer: {
    host: 'localhost',
    port: 9000,

    proxy: {
      // '/api': {
      //   target: 'http://localhost:8888',
      //   changeOrigin: true,
      //   secure: false,
      //   // ws: true,
      //   pathRewrite: {
      //     '^/api': ''// 请求数据路径别名
      //   }
      // },
      '/api1': {
        // http://localhost:6666/heroes
        target: 'https://jsonplaceholder.typicode.com',
        changeOrigin: true,
        secure: true,
        // ws: true,
        pathRewrite: {
          '^/api1': ''// 请求数据路径别名
        }
      }

    }
  }
}
