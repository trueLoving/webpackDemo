这是一个练习webpack的小demo 

下面阐述的是在我学习过程中，我个人对于webpack的一些理解


webpack可以处理哪些类型的文件
1. html
2. css/less/sass
3. js
4. images
5. vue file
6. ......


```txt
webpack本身只能处理的文件类型只有js和json
但是我们可以使用各种loader来让webpack能够解析各种类型的文件
例如，我们解析css类型的文件我们可以使用以下loader
1. style-loader
2. css-loader 
```


webpack可以用来做什么
1. 打包静态资源文件
2. 可以帮我们处理我们编写的代码，让代码体积更小，线上运行更加稳定
3. 方便开发人员调试代码
