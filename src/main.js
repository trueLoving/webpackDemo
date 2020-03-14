import './style/a.css';
import './style/b.css';
import { add } from './print'


console.log("hello world");

add(2,1)

/**
 * 当我们开启HMR功能时，则module对象上会有一个hot更新
 * 而对于js的HMR，我们只能针对那些非入口js文件
 * 因为一旦入口的js文件发生变化，就意味着依赖关系图发生了变化，只能全体重新打包加载
 */
if (module.hot) {

    module.hot.accept('./print.js', function () {
        console.log("hello world")
        add(1, 2);
        // 该方法会监视print.js的变化，一旦发生变化,其他模块默认不会重新打包构建，只会重新加载该模块
    })

}