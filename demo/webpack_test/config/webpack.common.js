const resolveApp = require('./paths')
const HtmlWebpackPlugin = require('html-webpack-plugin') // 自动生成html模板
const { DefinePlugin } = require('webpack') // 生成模板中使用的常量
const { VueLoaderPlugin } = require('vue-loader') // 将定义过的规则复制并应用到.vue
const { merge } = require('webpack-merge')

// 导入其他的配置
const prodConfig = require('./webpack.prod') // 生产配置
const devConfig = require('./webpack.dev') // 开发配置

// 定义对象保存base配置信息
const commonConfig = {
	entry: './src/index.js', // 入口文件
	resolve: {
		extensions: ['.js', '.json', '.ts', '.jsx', '.vue'], // 使模块路径识别这些后缀
		alias: {
			'@': resolveApp('./src'), // 别名，用于简写
		},
	},
	output: {
		filename: 'js/main.js', // 输出文件
		path: resolveApp('./dist'),
		// publicPath: '/', // path: 域名 + publicPath + filename
		// assetModuleFilename: 'img/[name]_[hash:4][ext]',
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
		new HtmlWebpackPlugin({
			title: 'Hello Webpack', // 规定生成的html标题
			template: './public/index.html', // 按照给定的模板html生成html
		}),
    new DefinePlugin({
			BASE_URL: "'./'", // 需要内嵌一个引号，不然会是./而不是'./'
		}),
    new VueLoaderPlugin(),
	],
}

module.exports = (env) => {
	const isProduction = env.production
	// 依据当前的打包模式来合并配置
	const config = isProduction ? prodConfig : devConfig

	const mergeConfig = merge(commonConfig, config)
	return mergeConfig
}
