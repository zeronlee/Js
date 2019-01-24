const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.js',
        print: './src/print.js'
    },
    //开发工具
    devtool: 'inline-source-map',
    plugins: [
        new CleanWebpackPlugin(['lib']),
        // 自动生成
        new HtmlWebpackPlugin({
            title: 'Development'
        })
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'lib'),
        publicPath:'./lib'
    },
    //新建了8080的web服务
    devServer: {
        contentBase: './lib'
    }
};
