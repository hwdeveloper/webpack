const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'public/js')
    },
    devtool: 'inline-source-map',
    mode: 'development',
       plugins: [
         new CleanWebpackPlugin(['public/js'])
     //       ,
     //     new HtmlWebpackPlugin({
     //           title: '04管理输出_创建信息'
     // })
   ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    }
};