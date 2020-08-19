const path = require('path');
const webpack=require('webpack');
const proxy =require('http-proxy-middleware') ;//引入插件
const HtmlWebpackPlugin = require('html-webpack-plugin');
var MiniCssExtractPlugin = require("mini-css-extract-plugin"); // 打包css插件
var splitChunkOpt={
    minSize: 30000, // 字节，分割点。默认：30720
    maxSize: 50000, // 字节，每个文件最大字节。默认：51200
    chunkOverhead: 0, // 默认：0
    entryChunkMultiplicator: 1, // 默认：1
  }
module.exports={
    mode:'development',
    entry: {
        main: './entry.js'
      }
    ,output:{
        path:path.resolve(__dirname,"../dist"),//输出路径
        filename:'[name].js',//输出文件名
        library:'JYQLibrary',
        libraryTarget:'umd',
        // chunkFilename:'[chunckhash].js',
        publicPath:'/'
    }
    ,module:{
        rules:[
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            }
            ,{
                test: /\.scss$/,
                use:[
                    "style-loader", // creates style nodes from JS strings
                    "css-loader", // translates CSS into CommonJS
                    "sass-loader" // compiles Sass to CSS, using Node Sass by default
                ]
            }
            ,{
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                include: path.join(__dirname,'../'),
                loader: 'babel-loader'
            }
            ,{ test: /\.(png|jpg|svg|ttf|woff|eot)$/, loader: "file-loader?name=images/[name].[ext]"}
        ]
    }
    ,devtool: "cheap-module-eval-source-map" // 将 SourceMap 嵌入到每个模块中
    ,plugins: [
        new HtmlWebpackPlugin({
            template:path.resolve(__dirname,'../index.html')
            ,minify: { //压缩HTML文件
                removeComments: true, //移除HTML中的注释
                collapseWhitespace: false //删除空白符与换行符
            }
        })
        ,new webpack.HotModuleReplacementPlugin() // 热模块替换插件
        ,new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[name].[chunkhash:8].css"
        })
        // ,new webpack.optimize.AggressiveSplittingPlugin(splitChunkOpt)
    ]
    ,devServer:{
        host:"localhost",
        port:"3000",
        hot:true//启用模块热替换
    }
}