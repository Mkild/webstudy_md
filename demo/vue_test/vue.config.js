module.exports = {
	pages: {
		index: {
			// page 的入口
			entry: 'src/main.js',
		},
	},
	lintOnSave: false, // 关闭语法检查
	// 开启代理服务器（方式一）
	/* devServer: {
		proxy: 'http://localhost:5000',
	}, */
	// 开启代理服务器（方式二）
	devServer: {
		proxy: {
			'/hack': {
				// 匹配所有以 '/hack'开头的请求路径
				target: 'http://localhost:5000', // 代理目标的基础路径
				pathRewrite: { '^/hack': '' },
				// ws: true, // 用于支持websocket
				// changeOrigin: true, // 用于控制请求头中的host值
			},
			'/demo': {
				// 匹配所有以 '/hack'开头的请求路径
				target: 'http://localhost:5001', // 代理目标的基础路径
				pathRewrite: { '^/demo': '' },
				// ws: true, // 用于支持websocket
				// changeOrigin: true, // 用于控制请求头中的host值
			},
		},
	},
}
