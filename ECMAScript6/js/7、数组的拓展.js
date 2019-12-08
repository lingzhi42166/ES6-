/* 
    将类数组转换成真数组
    所谓类似数组的对象，本质特征只有一点，即必须有length属性
*/
let obj = {
    0 : 1,
    1 : 2,
    length:2
}
//ES5利用数组slice方法的内部原理 将伪数组转换成真数组  slice从已有的数组中返回选定的元素 返回一个新数组
console.log(Array.prototype.slice.call(obj));
// ES6通过from方法
console.log(Array.from(obj));


/* 
    将一组值转换成真数组
*/
// ES6
console.log(Array.of(1,2,3));


// ...扩展运算符（spread）是三个点（...）。
// 它好比 rest 参数的逆运算，将一个数组转为用逗号分隔的参数序列。
let testArr = [1,2,3];
console.log(...testArr);	
	
