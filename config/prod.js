const { resolve } = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

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
                loader: 'url-loader'
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                exclude: /\.(html|css|js|png|gif|jpeg|jpg|vue)$/,
                loader: 'file-loader',
                options:{
                    outputPath:'css/media',
                    publicPath: './media'
                }
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
            minify: {
                collapseWhitespace: true,
                removeComments: true
            }
        }),
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename:'css/[contenthash:10].css'
        }),
        new OptimizeCssAssetsWebpackPlugin()
    ],

    mode: 'production'

}