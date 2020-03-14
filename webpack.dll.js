const { resolve } = require('path');
const webpakck = require('webpack');


module.exports = {

    entry: {
        vue: ['vue','vuex','vue-router']
    },

    output: {
        filename: '[name].js',
        path: resolve(__dirname, 'dll'),
        library: '[name]'
    },

    plugins: [
        new webpakck.DllPlugin({
            name: '[name]',
            path: resolve(__dirname, 'dll/manifest.json')
        })
    ],

    mode: 'production'

}