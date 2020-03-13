const { resolve } = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

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
                exclude: /\.(html|css|js|png|gif|jpeg|jpg|vue)/,
                loader: 'file-loader'
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html'
        }),
        new VueLoaderPlugin()
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

    devtool: 'source-map',

    mode: 'development',


    resolve: {
        alias: {
            '@': resolve(__dirname, 'src')
        },
        extensions: ['.js', '.jsx', '.vue'],
        modules: [resolve(__dirname, 'node_modules'), node_modules]
    }

}
