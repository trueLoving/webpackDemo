const { resolve } = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')

/**
 * webpack生产打包配置文件
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
                test: /\.css/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: () => {
                                require('postcss-preset-env')()
                            }
                        }
                    }
                ]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                options: {
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
                    esModule: false,
                    outputPath: 'media',
                    name: '[hash:10].[ext]'
                }
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                exclude: /\.(html|css|js|png|gif|jpeg|jpg)$/,
                loader: 'file-loader'
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
        new MiniCssExtractPlugin({
            filename: 'css/built.css'
        }),
        new OptimizeCssAssetsWebpackPlugin()
    ],

    mode: 'production',

    // chunk分块打包
    optimization: {
        splitChunks: {
            chunks: 'all'
        },
        // 解决缓存失效的问题
        // 将每一个chunk所要引入的chunk哈希值单独打包成一个文件
        runtimeChunk: {
            name: entrypoint => `runtime-${entrypoint.name}`
        }
    }

}

/**
 * 如果我们添加代码压缩的操作，那么就必然会带来打包时间的增加
 * 在某种程度上来讲，代码体积的减小和打包时间的减短是相违背的
 */