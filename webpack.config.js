const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Dotenv = require('dotenv-webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const Webpack = require('webpack');

module.exports = {
	devtool: 'cheap-module-source-map',
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/'
	},
	module: {
	  rules: [
	  	{
	  		test: [/\.css$/, /\.scss$/],
	  		use: ['style-loader', 'css-loader']
	  	},
	    { 
	    	test: [/\.js$/, /\.jsx$/], 
	    	exclude: path.join(__dirname, 'node_modules'), 
	    	loader: "babel-loader" 
	    },
	    {
	        test: /\.html$/,
	        use: [
	          {
	            loader: "html-loader"
	          }
	        ]
	      }
	  ]
	},
	stats: 'errors-only',
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: path.join(__dirname, 'public', 'index.html')
		}),
		new Dotenv({
			safe: true,
      		systemvars: true,
		}),
		new MiniCssExtractPlugin({ filename: '[name.css', chunkFilename: '[id].css]' }),
		new CopyWebpackPlugin([{ 
			from: path.join(__dirname, 'public/images'),
			to: path.join(__dirname, 'dist/images')
		}]),
		new Webpack.HotModuleReplacementPlugin()
	],
	devServer: {
		historyApiFallback: true,
		contentBase: '/',
   		hot: true
	}
}
