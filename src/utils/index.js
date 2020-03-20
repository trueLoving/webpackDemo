/**
 * @author star sky
 * @param {Array} arr 嵌套数组
 * 
 * @description 将嵌套数据转换为扁平数据 
 * 例如 ['a',['b','c']] ---> ['a','b','c']
 */
export function* iterArr(arr) {
    if (Array.isArray(arr)) {
        for (let i = 0; i < arr.length; i++) {
            yield* iterArr(arr[i]);
        }
    } else {
        yield arr;
    }
}




/**
 * [{a:1,child:[a:3]},{a:2}] ---> [{a:1,child:[]]},{a:2},{a:3}]
 * 
 * @param {Array} trees 源数据 
 * @param {String} child 子代属性值
 * 
 * @attention 该方法不会删除child属性，
 */
export function* travelTree(trees, child) {
    if(!Array.isArray(trees)){
        throw new TypeError("trees参数类型错误，trees类型应该为Array");
    }
    for (let i = 0; i < trees.length; i++) {
        if (trees[i][child]) {
            yield* travelTree(trees[i][child], child);
        }
        yield trees[i];
    }
}