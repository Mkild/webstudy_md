module.exports = {
	presets: [
		[
			'@babel/preset-env',
			{
				// 默认false: 不对当前js处理做polyfill的填充
				// usage: 依据用户源码当中所使用到的新语法进行填充
				// entry: 依据我们当前筛选出来的浏览器决定填充什么
				useBuiltIns: 'entry',
				corejs: 3, // 填写所安装的corejs的大版本
			},
		],
		['@babel/preset-typescript']
	],
}
