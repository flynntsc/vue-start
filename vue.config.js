// less全局变量
// 借鉴自vux-loader;TODO 支持热更新？
const fs = require('fs')
const getLessVariables = file => {
  const themeContent = fs.readFileSync(file, 'utf-8')
  const variables = {}
  themeContent.split('\n').forEach(function(item) {
    if (item.indexOf('//') > -1 || item.indexOf('/*') > -1) {
      return
    }
    var _pair = item.split(':')
    if (_pair.length < 2) return
    var key = _pair[0].replace('\r', '').replace('@', '')
    if (!key) return
    var value = _pair[1]
      .replace(';', '')
      .replace('\r', '')
      .replace(/^\s+|\s+$/g, '')
    variables[key] = value
  })
  return variables
}

module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://192.168.2.100',
        changeOrigin: true, // 是否跨域
        pathRewrite: {
          '^/api': '/api',
        },
      },
    },
  },
  css: {
    loaderOptions: {
      less: {
        globalVars: getLessVariables('./src/assets/styles/variables.less'),
      },
    },
  },
}
