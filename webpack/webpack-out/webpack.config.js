const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin= require('clean-webpack-plugin');
module.exports = {
    entry: {
        app: './src/index.js',
        print: './src/print.js'
    },
    plugins: [
        // 防止重命名插件
        new HtmlWebpackPlugin({
            'title': 'Output management'
        }),
        // 清理web目录,先删除再生成，避免没有用的文件
        new CleanWebpackPlugin(['dist'])
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};
