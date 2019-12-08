/*
* const声明一个常量。一旦声明了 值就无法改变
* 本质就是不能修改值所指向的地址
* 并且一旦声明就必须初始化 不能留到以后才赋值 只是声明不赋值就会报错
*
* 与let的作用域相同 只在声明的所在作用域内有效
* 同样不会变量提升 也存在暂时性死区 只能在声明后使用
*
* const实际上是保证变量指向的内存地址不变
* 对于简单的数据类型 值就保存在变量指向的内存地址  一旦改变变量值 那么就会改变地址
* 但是对于复合类型的数据 所指向的地址 实际是一个指针 const只是保证这个地址不变 但是地址里面的数据结构的变化 与const无关
*
*
* */
const a = 1;
// const a = 2;Identifier 'a' has already been declared
// a = 3; Assignment to constant variable.赋值给常变量。

const obj = {}; //对象是复合数据类型 通过指针指向内存地址
obj.fn = function () {
    //往对象里添加属性 是修改内部数据结构 地址不变的
    console.log(1);
};

const obj2 = {};
// obj2 = {};Assignment to constant variable. 这是重新赋值一个对象 地址就不一样了

const arr = [];
arr.push("hello");
arr.push("world");
console.log(arr); //["hello", "world"]