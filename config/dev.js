'use strict'
const { resolve } = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const webpack = require('webpack');


/**
 * webpack的运行配置
 */
module.exports = {

    entry: './src/main.js',

    output: {
        filename: 'js/built.[hash:10].js',
        path: resolve(__dirname, '../', 'build')
    },

    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                exclude: file => (
                    /node_modules/.test(file) &&
                    !/\.vue\.js/.test(file)
                ),
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|gif|jpg|jpeg)$/,
                loader: 'url-loader',
                options: {
                    limit: 8 * 1024,
                    esModule: false
                }
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                exclude: /\.(html|css|js|png|gif|jpeg|jpg|vue)$/,
                loader: 'file-loader',
                options: {
                    esModule: false
                }
            }
        ]
    },

    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: 'index.html',
            favicon: resolve(__dirname, '../', 'favicon.ico'),
        }),
        new VueLoaderPlugin(),
        new webpack.DefinePlugin({
            IS_PRODUCTION: process.env.NODE_ENV === 'production'
        })
    ],

    devServer: {
        contentBase: resolve(__dirname, '../', 'build'),
        compress: true,
        port: 3000,
        open: true,
        hot: true,
        clientLogLevel: false,
        quiet: true
    },

    devtool: 'eval-source-map',

    mode: 'development',

    resolve: {
        // todo 未知原因:该别名配置不起效果,待修复
        alias: {
            $src: "/hello world"
        },
        modules: [
            resolve(__dirname, "src"),
            "node_modules"
        ]
    }

}
