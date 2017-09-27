const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack=require('webpack');
module.exports={
    entry:'./entry.js',
    output:{
        path:__dirname,
        filename:'./bundle.js'
    },
    module:{
        loaders:[
            {test:/\.css$/,loader:'style-loader!css-loader'},
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                loader: 'babel-loader?presets[]=es2015&presets[]=react',
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template:'./index.html',
            filename:'./index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
    ,
    devServer:{
        host:"localhost",
        port:"3000",
        hot:true
    }
}