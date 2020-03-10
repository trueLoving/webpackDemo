module.exports = {
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
}