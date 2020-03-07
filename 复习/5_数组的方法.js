/* 
    forEach 遍历数组 回调函数的参数为每次遍历的数组成员
   
    map  返回一个新数组 数组中的元素为原始数组元素调用函数处理后的值 一般用来映射
    filter 返回一个新数组 数组中的元素为原始数组元素调用函数处理后的值 用途==过滤数组成员
    filter是满足条件的留下,是对原数组的过滤;map则是对原数组的加工,映射成一对一映射的新数组

    find 
        找出第一个符合条件的数组成员。
        它的参数是一个回调函数，所有数组成员依次执行该回调函数
        直到找出第一个返回值为true的成员，然后返回该成员。
        如果没有符合条件的成员，则返回undefined。

    every&&some方法
        every ： 一假及假 如有数组成员不符合条件会将直接返回false
        some : 一真即真  如有数组成员不符合条件会继续遍历 直到true为止
        类似于 与或 的结构

    reduce：
        一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值。
        对于空数组是不会执行回调函数的。
        array.reduce(function(total, currentValue, currentIndex, arr), initialValue)

        参数:
            function(total,currentValue, index,arr)
                total	必需。初始值, 或者计算结束后的返回值。
                urrentValue	必需。当前元素
                index 可选。当前元素的索引
                arr	可选。当前元素所属的数组对象
            initialValue	可选。作为第一次调用 callback函数时的第一个参数的值。 如果没有提供初始值，则将使用数组中的第一个元素
*/

/* // forEach
let array = ["red","blue","yellow"];
// 	数组每个元素都执行一次回调函数。
array.forEach(element => {
    console.log(element);
});
// 手写forEach 
Array.prototype.myForEach = function(cb){
    let arr = this;
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        cb(element);
    }
}
array.myForEach(element => {
    console.log(element);
}); */

/* // map 方法返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值 

let newArray = array.map((currentValue,index,arr)=>{//...arg
    // console.log(...arg);//替代了arguments类数组对象
    return currentValue + "!"
})
console.log(newArray);

Array.prototype.myMap = function(cb){
    let array = this;
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        newArray.push(cb(array[i]));
    }
    return newArray;
}
let newArray1 = array.myMap((currentValue)=>{
    // console.log(...arg);//替代了arguments类数组对象
    return currentValue + "!"
})
console.log(newArray1); */

// filter

/* 场景一  过滤成员
    从数组1中获取指定类型的对象 到数组B中 
    拿到年龄18岁以上的学生信息

let arr = [
    { name: "zhangsan", age: 18, sex: "man" },
    { name: "lisi", age: 16, sex: "man" },
    { name: "xiaoming", age: 19, sex: "man" }
];
// es5
let filterarr = [];
for (var i = 0; i < arr.length; i++) {
    if (arr[i].age >= 18) filterarr.push(arr[i]);
}
console.log(filterarr);

// es6 filter
let filterarr1 = arr.filter((element)=>{
    // console.log(element);
    if(element.age>=18)return element
})
console.log(filterarr1);
*/

// find  return 条件  返回第一个条件为true的成员 如果遍历完都没有 则返回undefined
/* let num = [1,2,3,4,5,6].find((element)=>{//...arg
    // console.log(arg);
    return element>1
    // return element>6
});
console.log(num);

// 手写find
Array.prototype.myFind = function(cb){
    let arr = this;
    let element = undefined;
    for(let i = 0; i<arr.length; i++){
        if(cb(arr[i])){
            element = arr[i];
            break
        }
    }
    return element
}
let num1 = [1,2,3,4,5,6].myFind((element)=>{//...arg
    // console.log(arg);
    return element>6
    // return element>6
});
console.log(num1); */

/* // every&&some方法

let arr = [1, 2, 3, 4, 5, 6];
let result = arr.every((num) => {
    return num > 1
    // return num > 0
});
console.log(result);
let result1 = arr.some((num) => {
    return num > 5
    // return num > 6
});
console.log(result1);
 */

//  reduce

// ES5中累加数组的值 需要for循环 ES6中提供了reduce累加器方法

let arr = [1,2,3,4,5,6];
// let num = 10;
let number = arr.reduce((num,value)=>{
    // console.log(num);
    
    return num += value
});
// console.log(number);


arr.reduce((num,value)=>{
    // num参数为初始值 如果调用reduce时没有提供initialValue初始值，则将使用数组中的第一个元素
    // 接下来num的值为return的值
    // console.log(num);
    return 2
})

// 也可以替代map方法 把arr的成员 遍历到新数组中
let newArray = arr.reduce((previous,primaryColor)=>{
    previous.push(primaryColor);
    return previous
},[])//initialValue	可选。作为第一次调用 callback函数时的第一个参数的值。 如果没有提供初始值，则将使用数组中的第一个元素
console.log(newArray);
