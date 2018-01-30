const path=require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack=require('webpack');
module.exports=[
    new HtmlWebpackPlugin({
        template:path.resolve(__dirname,'../../index.html'),
        filename:path.resolve(__dirname,'../../index.html')
    }),
    new webpack.HotModuleReplacementPlugin()
    ,new webpack.optimize.CommonsChunkPlugin({
        name:'vendor',
        filename:'[name].chunk.js',
        minChunks: Infinity,
        children:true
    })
]
    
