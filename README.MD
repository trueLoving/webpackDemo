THis is a demo for using webpack4


The followings are some ideas for learning webpack


what can webpack package
1. css
2. html
3. js
4. images
5. less
6. sass
7. vue file
8. ......


what can webpack do
1. package static resources
2. make the code more lighter and the code run online more stable
3. help developer debug code more convnient
 

```txt
 * 开发打包
 * html html-loader HtmlWebpackPlugin(模板)
 * css css-loader style-loader
 * less less -> css
 * 图片 url-loader
 * 其他资源 file-loader
 *
 *
 * 生产打包
 * css分离     MiniCssExtractPlugin
 * css兼容性   postcss-loader postcss-preset-env 同时要在package.json指定browserslist字段的值
 * css压缩     OptimizeCssAssetsWebpackPlugins
 * js语法检测   eslint eslint-loader
 * js兼容性处理 babel babel-loader @babel/preset-env corejs @babel/polyfill
 * js代码压缩   开启生产模式即可自动压缩
 * html代码压缩 通过html-webpack-plugin实现
 *
 *
 * 优化打包配置
 * 针对对开发
 * 1. 打包速度更快
 * 2. 代码调试更方便(热模块替换HMR,构建后代码到源代码追踪 source-map)
 * 针对对生产
 * 1. 打包速度更快
 * 2. 代码线上运行更稳定(异步加载，缓存，懒加载...)
 *    babel缓存
 *    文件资源缓存 当我们文件内容发生变化后，且要浏览器重新刷新缓存，则只需修改文件名即可。在这里使用contentHash来完成
```