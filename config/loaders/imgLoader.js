module.exports = {
    test: /\.(png|gif|jpg|jpeg)$/,
    loader: 'url-loader',
    options: {
        limit: 8 * 1024,
        esModule: false
    }
}