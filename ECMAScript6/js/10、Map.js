/* 
    javascript的对象是键值对组成的  默认键都是字符串 即使传入的不是字符串类型的属性值
    也是隐式通过toString转换成字符串形式的 
    
    为了解决这个问题，ES6 提供了 Map 数据结构。
    它类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，
    各种类型的值（包括对象）都可以当作键。
    也就是说，Object 结构提供了“字符串—值”的对应，
    Map 结构提供了“值—值”的对应，是一种更完善的 Hash 结构实现。
    如果你需要“键值对”的数据结构，Map 比 Object 更合适。
*/
let oDiv = document.getElementsByTagName("div");
let obj = {

}
console.log(oDiv);
obj[oDiv] = "1";//对象只接受字符串作为键名
console.log(obj)

// Map   可以接受数组作为参数[[],[],[]]
/* let map = new Map([["name", "s"], ["age", "19"]]);
console.log(map); */

// Map构造函数接受数组作为参数，实际上执行的是下面的算法。
const items = [
    ['name', '张三'],
    ['title', 'Author']
];
const map = new Map();
items.forEach(
    /* 
        forEach给回调函数提供了两个参数 第一个是成员值 第二个是成员的索引
        那么当前遍历的数组的成员值是一个数组 所以我们可以通过数组解构的方式获取到数组里面的值
        奇淫技巧
        [key,value] = ['name', '张三']
    */
    ([key, value]) => map.set(key, value)
);
console.log(map);


/*  
    Map实例可用的属性和方法: (跟set数据结构的差不多)
        size 属性
            返回 Map 结构的成员总数
        set(key, value) 
            设置键名key对应的键值为value，然后返回整个 Map 结构。如果key已经有值，则键值会被更新，否则就新生成该键。
        get(key)
            读取key对应的键值，如果找不到key，返回undefined。Map的键实际上是跟内存地址绑定的 所以访问必须是地址一样的
        has(key)
            返回一个布尔值，表示某个键是否在当前 Map 对象之中。
        delete(key)
            删除某个键，返回true。如果删除失败，返回false。
        clear()
            清除所有成员，没有返回值。

*/
let map1 = new Map();
map1.set(["a"],1);
console.log(map1.get(["a"]));//不是同一个引用地址了 这里相当于重新定义了一个数组 开辟了一个新的内存

let arr = ["a"];
console.log(map1.set(arr,1));//Map的键实际上是跟内存地址绑定的
console.log(map1.get(arr));//arr内存地址一样 所以返回1
console.log(map1.arr);//undefined  通过.调用=> map1["arr"];
// console.log(map1.["a"]); 语法错误
console.log(map1[arr]);//也是不行 只能通过get 方法获取了

console.log(map1.size);//2
console.log(map1.has(arr),map1.has(["a"]));
console.log(map1.delete(["a"]));
console.log(map1.clear());
console.log(map1);

/* 
    可以通过forEach遍历
*/

map1.forEach(()=>{
    console.log(1);
})
console.dir(map1.forEach);