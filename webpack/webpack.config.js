const webpack=require('webpack');
const path=require('path');
const project=require('./project.config');
const debug = require('debug')('app:config:webpack')
const UglifyJsParallelPlugin = require('webpack-uglify-parallel')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const __DEV__=project.globals.__DEV__
const __PROD__=project.globals.__PROD__

const webpackConfig={
    name:'client',
    target:'web',
    entry:'./entry.js',
    devtool:project.compiler_devtool,
    output:{
        path:path.resolve(__dirname,"../dist"),//输出路径
        filename:'bundle.js',//输出文件名
        publicPath:'/assest'
    },
    // resolve:{
    //     modules:[project.path.client(),'node_modules'],
    //     extensions:['.web.js','.js','.jsx','.json']
    // },
    module:{
        loaders:[
            {test:/\.css$/,loader:'style-loader!css-loader'},
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                include: path.join(__dirname,'../'),
                loader: 'babel-loader',
                query:{
                    presets: ["es2015", "react", "stage-0"],
                    plugins: ["transform-decorators-legacy"]
                }
                
            },
            { test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/, loader: 'url-loader?limit=8192&name=images/[hash:8].[name].[ext]'},
            { test: /\.png$/, loader: "file-loader?name=images/[hash:8].[name].[ext]" }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template:path.resolve(__dirname,'../index.html')
        })
        // ,new webpack.optimize.CommonsChunkPlugin({
        //     name:'vendor',
        //     filename:'[name].chunk.js',
        //     minChunks: Infinity,
        //     children:true
        // })
    ]
    ,devServer:{
        host:"localhost",
        port:"4000",
        hot:true,//启用模块热替换
    }
}
console.log(__DEV__,'=====================')
if(__DEV__){
    debug('Enabling plugins for live development (HMR, NoErrors).')
    webpackConfig.plugins.push(
        new webpack.HotModuleReplacementPlugin()
    )
}else if(__PROD__){
    debug('Enabling plugins for production (UglifyJS).')
    webpackConfig.plugins.push(
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.DedupePlugin(),
        new UglifyJsParallelPlugin({
            workers:os.cpus().length,
            mangle:true,
            compressor:{
                warnings:false,
                drop_debugger:true,
                dead_code:true
            }
        })
    )
}

module.exports=webpackConfig;