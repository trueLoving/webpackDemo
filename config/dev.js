const { resolve } = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin');

/**
 * webpack开发运行配置文件
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
                oneOf: [
                    {
                        test: /\.css$/,
                        use: [
                            'style-loader',
                            'css-loader'
                        ]
                    },
                    {
                        test: /\.js$/,
                        exclude: /(node_modules|bower_components)/,
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true,
                            "presets": [
                                ["@babel/preset-env", {
                                    useBuiltIns: 'usage',
                                    // 指定core-js版本
                                    corejs: {
                                        version: 3
                                    },
                                    // 指定兼容性到那个版本浏览器
                                    targets: {
                                        "chrome": "60",
                                        "firefox": "60",
                                        "ie": "9",
                                        "safari": "10",
                                        "edge": "17"
                                    }
                                }]
                            ]
                        }
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
                        exclude: /\.(html|css|js|png|gif|jpeg|jpg)/,
                        loader: 'file-loader'
                    }
                ]
            }
        ]

    },

    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html'
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

    devtool: 'source-map',

    mode: 'development'

}

/**
 * webpack dev 配置所要实现的目标
 *
 * 1. 打包速度更快
 *    1. oneOf 在oneOf中只使用其中的一个loader
 * 2. 更加方便开发人员调试
 *    1. HMR 热模块替换 局部刷新
 *    2. source-map技术  构建后代码可以追踪到源代码
 */