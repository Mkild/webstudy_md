const path = require('path') // node.js中的path模块
const CopyWebpackPlugin = require('copy-webpack-plugin') // 拷贝目录下的静态资源到输出文件夹
const { DefinePlugin } = require('webpack') // 生成模板中使用的常量
const { CleanWebpackPlugin } = require('clean-webpack-plugin') // 清空打包目录
const HtmlWebpackPlugin = require('html-webpack-plugin') // 自动生成html模板
const { VueLoaderPlugin } = require('vue-loader') // 将定义过的规则复制并应用到.vue

module.exports = {
	// watch: true,
	mode: 'development', // 模式，开发或生产
	devtool: 'source-map', // 生成source-map
	entry: './src/index.js', // 入口文件
	resolve: {
		extensions: ['.js', '.json', '.ts', '.jsx', '.vue'], // 使模块路径识别这些后缀
		alias: {
			'@': path.resolve(__dirname, 'src'), // 别名，用于简写
		},
	},
	output: {
		filename: 'js/main.js', // 输出文件
		path: path.resolve(__dirname, 'dist'),
		// publicPath: '/', // path: 域名 + publicPath + filename
		// assetModuleFilename: 'img/[name]_[hash:4][ext]',
	},
	target: 'web',
	devServer: {
		hot: 'only', // 出错时不刷新页面，只刷新出错的模块
		port: 4000, // 指定端口
		open: false, // 构建完成打开新窗口
		compress: true, // gzip压缩
		historyApiFallback: true, // 前端路由404时返回index.html
		static: {
			directory: path.join(__dirname, 'public'),
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
	module: {
		rules: [
			// 配置方式指定loader
			{
				test: /\.js$/,
				exclude: /node_modules/, // 不对node_modules下的js做处理
				use: ['babel-loader'],
			},
      {
        test: /\.ts$/,
        exclude: /node_modules/, // 不对node_modules下的ts做处理
        use: ['babel-loader'],
      },
			{
				test: /\.vue$/,
				use: ['vue-loader'],
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							esModule: false, // 不转为esmodule
							importLoaders: 1, // 往前找1个loader
						},
					},
					'postcss-loader',
				],
			},
			{
				test: /\.less$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							esModule: false, // 不转为esmodule
							importLoaders: 1, // 往前找1个loader
						},
					},
					'postcss-loader',
					'less-loader',
				],
			},
			/* {
				test: /\.(png|jpe?g|svg|gif)$/,
				type: 'asset/resource',
				generator: {
					filename: 'img/[name]_[hash:4][ext]',
				},
			}, */
			/* {
				test: /\.(png|jpe?g|svg|gif)$/,
				type: 'asset/inline',
			}, */
			{
				test: /\.(png|jpe?g|svg|gif)$/,
				type: 'asset',
				generator: {
					filename: 'img/[name]_[hash:4][ext]',
				},
				parser: {
					dataUrlCondition: {
						maxSize: 45 * 1024,
					},
				},
			},
			{
				test: /\.(ttf|woff2?)$/,
				type: 'asset/resource',
				generator: {
					filename: 'font/[name]_[hash:3][ext]',
				},
			},
		],
	},
	plugins: [
		new CleanWebpackPlugin(), // 具体参数参照插件的github仓库
		new HtmlWebpackPlugin({
			title: 'Hello Webpack', // 规定生成的html标题
			template: './public/index.html', // 按照给定的模板html生成html
		}),
		new DefinePlugin({
			BASE_URL: "'./'", // 需要内嵌一个引号，不然会是./而不是'./'
		}),
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
		new VueLoaderPlugin(),
	],
}

/*
 * [ext]: 扩展名
 * [name]: 文件名
 * [hash]: 文件内容
 * [contentHash]: 基本同上
 * [hash:<length>]: 规定hash长度
 * [path]: 路径
 */
