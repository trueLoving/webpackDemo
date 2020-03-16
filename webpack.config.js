const { resolve } = require('path');

/**
 * webpack的测试配置
 */
module.exports = {

    entry: './src/main.js',

    output: {
        filename: 'js/buult_[contenthash:10].js',
        output: resolve(__dirname, 'build')
    },

    module: {
        rules: [

        ]
    },

    plugins: [

    ],

    mode: 'development'

}