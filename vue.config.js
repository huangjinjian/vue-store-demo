module.exports = {
  outputDir: "dist", // build输出目录
  assetsDir: "assets", // 静态资源目录（js, css, img）
  lintOnSave: true, // 是否开启eslint
  devServer: {
    open: false, // 是否自动弹出浏览器页面
    host: "localhost",
    port: "8081",
    https: false, // 是否使用https协议
    hotOnly: false, // 是否开启热更新
    proxy: {
      "/goods": {
        target: "http://localhost:3000", // API服务器的地址
        ws: true, // 代理websockets
        changeOrigin: true // 虚拟的站点需要更管origin
      },
      "/goods-add": {
        target: "http://localhost:3000", // API服务器的地址
        ws: true, // 代理websockets
        changeOrigin: true // 虚拟的站点需要更管origin
      },
      "/images": {
        target: "http://localhost:3000", // API服务器的地址
        ws: true, // 代理websockets
        changeOrigin: true // 虚拟的站点需要更管origin
        // pathRewrite: { // 重写路径 比如'/api/aaa/ccc'重写为'/aaa/ccc'
        //   '^/api': ''
        // }
      },
      "/login": {
        target: "http://localhost:3000", // API服务器的地址
        ws: true, // 代理websockets
        changeOrigin: true // 虚拟的站点需要更管origin
      },
      "/login-out": {
        target: "http://localhost:3000", // API服务器的地址
        ws: true, // 代理websockets
        changeOrigin: true // 虚拟的站点需要更管origin
      },
      "/login-checkout": {
        target: "http://localhost:3000", // API服务器的地址
        ws: true, // 代理websockets
        changeOrigin: true // 虚拟的站点需要更管origin
      },
      "/user-cartlist": {
        target: "http://localhost:3000", // API服务器的地址
        ws: true, // 代理websockets
        changeOrigin: true
      },
      "/user-editcart": {
        target: "http://localhost:3000", // API服务器的地址
        ws: true, // 代理websockets
        changeOrigin: true
      },
      "/user-addrlist": {
        target: "http://localhost:3000", // API服务器的地址
        ws: true, // 代理websockets
        changeOrigin: true
      },
      "/user-editaddr": {
        target: "http://localhost:3000", // API服务器的地址
        ws: true, // 代理websockets
        changeOrigin: true
      },
      "/user-payment": {
        target: "http://localhost:3000", // API服务器的地址
        ws: true, // 代理websockets
        changeOrigin: true
      }
    }
  }
};
