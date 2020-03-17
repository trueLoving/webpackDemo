import Vue from "vue";

import App from './App.vue';
import router from './router';

/**
 * 开发模式下使用下面方法来按需加载el
 */
import { installEl } from './element-ui/index';
installEl(Vue);

/**
 * todo 生产模式下使用下面方法来按需加载el
 * todo 目的是为了能使得el的相关组件生成一个chunk，减少入口文件打包后的体积
 */
// import(/*webpackChunkName:'elUI' */'./element-ui/index')
// .then(({installEl})=>{
//     installEl(Vue);
// });

Vue.config.productionTip = false


new Vue({
    el: "#app",
    router,
    render: h => h(App)
})

/**
 * pwa的配置代码
 * 在生产环境下开启
 */
if (IS_PRODUCTION) {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('./service-worker.js')
                .then(() => {
                    console.log('构建成功');
                }).catch(() => {
                    console.log("构建失败");
                })
        })
    }
}
