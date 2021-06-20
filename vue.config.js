module.exports = {
    devServer: {
      port: 8002,
      proxy: {
        '/api': {
          target: 'http://127.0.0.1:8000/',
          ws: true,
          changeOrigin: true,
          //pathRewrite: {'^/api/': ''}
        }
      }
    },
    runtimeCompiler: true
  }