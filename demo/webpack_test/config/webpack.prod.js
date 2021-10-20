const CopyWebpackPlugin = require('copy-webpack-plugin') // 拷贝目录下的静态资源到输出文件夹
const { CleanWebpackPlugin } = require('clean-webpack-plugin') // 清空打包目录

module.exports = {
	mode: 'production', // 模式，开发或生产
	target: 'web',
	plugins: [
		new CleanWebpackPlugin(), // 具体参数参照插件的github仓库
		new CopyWebpackPlugin({
			patterns: [
				{
					from: 'public', // 从哪个目录开始拷贝
					globOptions: {
						// 写上**/表示从public找，不写默认从根目录找
						ignore: ['**/index.html'], // 写要忽略的目录
					},
				},
			],
		}),
	],
}
