const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
console.log(__dirname)
module.exports = {
    entry: {
        app: './src/index.js',
        print: './src/print.js'
    },
    //开发工具
    devtool: 'inline-source-map',
    plugins: [
        new CleanWebpackPlugin(['lib']),
        new HtmlWebpackPlugin({
            title: 'Development'
        })
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'lib')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        //官方配置项报错
                        //https://segmentfault.com/q/1010000013490996
                        presets: ['env']
                    }
                }
            }
        ]
    }
};
