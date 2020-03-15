import Vue from "vue";

import App from './App.vue';
import router from './router';

/**
 * 开发模式下使用下面方法来按需加载el
 */
import { installEl } from './element-ui/index';
installEl(Vue);

/**
 * 生产模式下使用下面方法来按需加载el
 * 目的是为了能使得el的相关组件生成一个chunk，减少入口文件打包后的体积
 */
// import(/*webpackChunkName:'elUI' */'./element-ui/index')
// .then(({installEl})=>{
//     installEl(Vue);
// });


new Vue({
    el: "#app",
    router,
    render: h => h(App)
})