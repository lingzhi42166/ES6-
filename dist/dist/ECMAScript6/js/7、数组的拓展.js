"use strict";

/* 
    将类数组转换成真数组
    所谓类似数组的对象，本质特征只有一点，即必须有length属性
*/

var obj = {
    0: 1,
    1: 2,
    length: 2
    //ES5利用数组slice方法的内部原理 将伪数组转换成真数组
};console.log(Array.prototype.slice.call(obj));
// ES6通过from方法
console.log(Array.from(obj));

/* 
    将一组值装换成真数组
*/
// ES6
console.log(Array.of(1, 2, 3));
//# sourceMappingURL=7、数组的拓展.js.map
//# sourceMappingURL=7、数组的拓展.js.map