/* 
    for...of循环可以使用的范围包括数组、Set 和 Map 结构、某些类似数组的对象
    （比如arguments对象、DOM NodeList 对象）、后文的 Generator 对象，以及字符串。
    一个数据结构只要具有Symbol.iterator属性，就可以认为是“可遍历的”（iterable）
    原生具备 Iterator 接口的数据结构如下。
        Array
        Map
        Set
        String
        TypedArray
        函数的 arguments 对象
        NodeList 对象


        一些数据结构没有(比如对象)
        凡是部署了Symbol.iterator属性的数据结构，就称为部署了遍历器接口。调用这个接口，就会返回一个遍历器对象。


        总结:
            for of 遍历数组和set的话 都是返回成员值
            如果遍历的是Map的话 返回的是一个数组 分别是键名和键值

            只要是可迭代对象 内部都有[Symbol.iterator]函数
            那么只要通过for of遍历 就会调用该对象上的[Symbol.iterator]函数 该函数就返回一个迭代器对象 也就是Iterator
*/


/* 
    数组的遍历
*/
let arr = [1,2,3];
// for in 是给对象 遍历属性名的   如果遍历数组 则是获取到的是索引
for(let key in arr){
    console.log(key);
}
// forEach 是遍历数组的  提供两个参数给回调函数  一个是数组的成员值 一个是成员索引
arr.forEach((value,key)=>{
    console.log(value,key);
})
// for of 在数组的应用  返回的是 数组的成员值 如果需要获取索引 去看ES6的数组的扩展
for(let value of arr){
    console.log(value);
}

/*
    对象的遍历
    看14、iterator.js

console.log("==========对象的遍历==========");
let obj = {
    x : 1,
    y : 1,
    [Symbol.iterator] : function () {
        return {
          next: function () {
            return {
              value: 1,
              done: true
            };
          }
        };
    }
}
// for in 遍历出对象的属性
for(let key in obj){
    console.log(key);
}
// for of在对象的应用
for(let value of obj){
    console.log(value);
}
*/

/* 
    set Map 的遍历
    发现set的索引是从1开始的
*/
console.log("==========set Map 的遍历==========");
let set = new Set([1,2,3]);
set.forEach((value,key)=>{
    console.log(value,key);
})

/* set 不能通过for in遍历
for (let key in set) {
    console.log(key);
} */
// for of 在set的应用 返回的是set的成员值
for(let value of set){
    console.log(value);
}

/* 
    通过for of 遍历 Map 结构时，返回的是一个数组，
    该数组的两个成员分别为当前 Map 成员的键名和键值。

    但是通过forEach返回的是 第一个参数是属性值 第二个参数是属性
*/
let map = new Map([["x",1],["y",2]]);
console.log(map);
map.forEach((...arr)=>{//通过包裹操作符 把可以遍历的都包裹在一个新的数组里
    console.log(arr);
})
map.forEach((value,key)=>{
    console.log(value,key);
})
for(let value of map){
    console.log(value);//返回的是一个数组
}
for(let [key,value] of map){
    console.log(key,value);//返回的是一个数组
}

