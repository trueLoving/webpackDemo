// 获取当前的运行状态
const env = process.env.NODE_ENV;


if (env === 'development') {
    module.exports = require('./config/dev')
} else {
    module.exports = require('./config/prod');
}