const resolveApp = require('./paths')

module.exports = {
	mode: 'development', // 模式，开发或生产
	devtool: 'source-map', // 生成source-map
	target: 'web',
	devServer: {
		hot: 'only', // 出错时不刷新页面，只刷新出错的模块
		port: 4000, // 指定端口
		open: false, // 构建完成打开新窗口
		compress: true, // gzip压缩
		historyApiFallback: true, // 前端路由404时返回index.html
		static: {
			directory: resolveApp('./public'),
			watch: true, // 不写默认true
		},
		/* proxy: {
      '/api': {
        target: 'https://api.github.com/', // 转发目标
        pathRewrite: { '^/api': '' }, // 重写路由路径
        changeOrigin: true, // 更改host来源
      },
    }, */
	},
}
