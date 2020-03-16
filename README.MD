这是一个使用webpack来处理vue工程的小demo练习



### webpack开发配置的相关依赖

1. 用于解析css的相关loader
    ```txt
    1. style-loader 
    	https://github.com/webpack-contrib/style-loader 
    	https://www.npmjs.com/package/style-loader
    2. css-loader   
    	https://github.com/lukehaas/css-loaders
    	https://www.npmjs.com/package/css-loader
    ```
2. 用于处理js兼容性的相关loader
    ```txt
    1. babel-loader	
    	https://github.com/babel/babel-loader	
    	https://www.npmjs.com/package/babel-loader
    ```
3. 用于处理HTML的相关插件
    ```txt
    1. html-webpack-plugin	
    	https://github.com/jantimon/html-webpack-plugin
    	https://www.npmjs.com/package/html-webpack-plugin
    ```
4. 用于处理.vue文件的相关loader和依赖
    ```txt
    1. vue-loader	
    	https://github.com/vuejs/vue-loader
    	https://www.npmjs.com/package/vue-loader
    2. vue-template-compiler	
    	https://www.npmjs.com/package/vue-template-compiler
    ```
5. 用于处理图片等其他资源的相关loader
    ```txt
    1. url-loader
    	https://github.com/webpack-contrib/url-loader
    	https://www.npmjs.com/package/url-loader
    2. file-loader
    	https://github.com/webpack-contrib/file-loader
    	https://www.npmjs.com/package/file-loader
    ```


### webpack生产配置的相关依赖(插件)
1. add-asset-html-webpack-plugin
    ```txt
    将第三方库以script标签的形式添加到html文件中
    	https://github.com/SimenB/add-asset-html-webpack-plugin
    	https://www.npmjs.com/package/add-asset-html-webpack-plugin
    ```
2. babel-plugin-component
    ```txt
    按需加载相关插件
    	https://www.npmjs.com/package/babel-plugin-component
    ```
3. workbox-webpack-plugin
    ```txt
    PWA相关插件
    	https://www.npmjs.com/package/workbox-webpack-plugin
    ```
4. optimize-css-assets-webpack-plugin
    ```txt
    压缩css代码
    	https://github.com/NMFR/optimize-css-assets-webpack-plugin
    	https://www.npmjs.com/package/optimize-css-assets-webpack-plugin
    ```
5. mini-css-extract-plugin
    ```txt
    将js中的css相关代码提取成一个css文件
    	https://github.com/webpack-contrib/mini-css-extract-plugin
    	https://www.npmjs.com/package/mini-css-extract-plugin
    ```
6. clean-webpack-plugin
    ```txt
    用于清除webpack打包产生的输出文件
    	https://github.com/johnagan/clean-webpack-plugin
    	https://www.npmjs.com/package/clean-webpack-plugin
    ```
### 测试代码中所使用到的依赖库
1. vue
    ```txt
    目前最流行的三大前端js框架之一
    	https://cn.vuejs.org/
    	https://github.com/vuejs/vue
    	https://www.npmjs.com/package/vue
    ```
2. vue-router
    ```txt
    vue的路由控制库
    	https://router.vuejs.org/zh/
    	https://github.com/vuejs/vue-router
    	https://www.npmjs.com/package/vue-router
    ```
3. vuex
    ```txt
    vue的全局状态管理库
    	https://vuex.vuejs.org/zh/
    	https://github.com/vuejs/vuex
    	https://www.npmjs.com/package/vuex
    ```
4. element-ui
    ```txt
    vue的PC端UI库
    	https://element.eleme.cn/#/zh-CN
    	https://github.com/ElemeFE/element
    	https://www.npmjs.com/package/element-ui
    ```

### 其他库
1. cross-env 
    ```txt
    在npm命令中指定process.env.NODE_ENV的值
    	https://github.com/kentcdodds/cross-env
    	https://www.npmjs.com/package/cross-env
    ```


### 说明
1. 运行项目: npm run dev
2. 打包项目:
    1. 打包相关的依赖库 npm run buildDll
    2. 打包项目 npm run build