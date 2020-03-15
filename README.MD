这是一个使用webpack来处理vue工程的小demo练习

### webpack开发配置的相关依赖

1. 用于解析css的相关loader
    ```txt
    1. style-loader
    2. css-loader
    ```
2. 用于处理js兼容性的相关loader
    ```txt
    1. babel-loader
    ```
3. 用于处理HTML的相关插件
    ```txt
    1. HtmlWebpackPlugins
    ```
4. 用于处理.vue文件的相关loader和依赖
    ```txt
    1. vue-loader
    2. vue-template-compiler
    ```
5. 用于处理图片等其他资源的相关loader
    ```txt
    1. url-loader
    2. file-loader
    ```


### webpack生产配置的相关依赖(插件)
1. add-asset-html-webpack-plugin
    ```txt
    将第三方库以script标签的形式添加到html文件中
    ```
2. babel-plugin-component
    ```txt
    按需加载相关插件
    ```
3. workbox-webpack-plugin
    ```txt
    PWA相关插件
    ```
4. optimize-css-assets-webpack-plugin
    ```txt
    压缩css代码
    ```
5. mini-css-extract-plugin
    ```txt
    将js中的css相关代码提取成一个css文件
    ```

### 测试代码中所使用到的依赖库
1. vue
    ```txt
    目前最流行的三大前端js框架之一
    ```
2. vue-router
    ```txt
    vue的路由控制库
    ```
3. vuex
    ```txt
    vue的全局状态管理库
    ```
4. element-ui
    ```txt
    vue的PC端UI库
    ```