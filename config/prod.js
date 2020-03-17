'use strict'
const { resolve } = require("path");
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const AddAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin');


/**
 * webpack的打包配置
 */
module.exports = {

    entry: './src/main.js',

    output: {
        filename: 'js/built.[contenthash:10].js',
        path: resolve(__dirname, '../', 'build')
    },

    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader'
            },
            {
                test: /\.(png|gif|jpg|jpeg)$/,
                loader: 'url-loader',
                options: {
                    esModule: false,
                    limit: 8 * 1024
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
                    outputPath: 'css/media',
                    publicPath: './media'
                }
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
            favicon: resolve(__dirname, '../', 'favicon.ico'),
            minify: {
                collapseWhitespace: true,
                removeComments: true
            }
        }),
        new MiniCssExtractPlugin({
            filename: 'css/built.[contenthash:10].css'
        }),
        new OptimizeCssAssetsWebpackPlugin(),
        new VueLoaderPlugin(),
        new AddAssetHtmlWebpackPlugin([
            {
                filepath: resolve(__dirname, '../', 'dll/vue.js'),
            }
        ]),
        new webpack.DefinePlugin({
            IS_PRODUCTION: process.env.NODE_ENV === 'production'
        }),
        new webpack.DllReferencePlugin({
            manifest: resolve(__dirname, '../', 'dll/manifest.json')
        }),
        new WorkboxWebpackPlugin.GenerateSW({
            clientsClaim: true,
            skipWaiting: true
        })
    ],

    mode: 'production',

    optimization: {
        splitChunks: {
            chunks: "all"
        },
        runtimeChunk: {
            // 将当前模块记录的引入其他模块哈希值打包成一个单独文件
            name: entrypoint => `runtime-${entrypoint.name}`
        },
    }

}