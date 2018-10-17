const path = require('path');
// const plugins = require('./plugins');
const webpack=require('webpack');
const proxy =require('http-proxy-middleware') ;//引入插件
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
//启动服务端代码
// const app =require('../lib/server');
// app.start();
module.exports={
    // watch:true,
    // entry:{
    //     main:'./entry.js',
    //     vendor:[
    //         'react',
    //         'redux',
    //     ]
    // },
    entry: {
        main: './entry.js'
      }
    ,output:{
        path:path.resolve(__dirname,"../dist"),//输出路径
        filename:'[name].js',//输出文件名
        publicPath:'/'
    },
    module:{
        loaders:[
            // {
            //     test: /\.css$/, 
            //     loader: ExtractTextPlugin.extract("style-loader", "css-loader?sourceMap")
            // }
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader?sourceMap'
            }
            ,{
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                include: path.join(__dirname,'../'),
                loader: 'babel-loader',
                query:{
                    presets: ["es2015", "react", "stage-0"],
                    plugins: ["transform-decorators-legacy"]
                }
                
            }
            // ,{
            //     test: /\.js$/,
            //     exclude: /(node_modules|bower_components)/,
            //     use: {
            //       loader: 'babel-loader',
            //       options: {
            //         presets: ['@babel/preset-env']
            //       }
            //     }
            // }
            ,{ test: /\.(png|jpg)$/, loader: "file-loader?name=images/[name].[ext]"}
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template:path.resolve(__dirname,'../index.html')
        }),
        new ExtractTextPlugin("css/[name].css",{disable: false,allChunks: true})
        // ,new webpack.optimize.CommonsChunkPlugin({
        //     name:'vendor',
        //     filename:'[name].chunk.js',
        //     minChunks: Infinity,
        //     children:true
        // })
    ]
    ,devServer:{
        host:"localhost",
        port:"3000",
        hot:false,//启用模块热替换
        // proxy:{
        //     '/api':{
        //         target:"http://www.easy-mock.com/mock/59e48a3d8a681e09d38c286c/example",
        //         secure: false
        //     }
        // }
    }
}